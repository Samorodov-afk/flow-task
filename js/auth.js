// Модуль авторизации с хешированием паролей
import { StorageManager } from './storage.js';
import { validators } from './validators.js';
import { debounce } from './utils.js';

/**
 * Простое хеширование пароля (SHA-256)
 * В продакшене лучше использовать bcrypt на сервере
 * @param {string} password - Пароль для хеширования
 * @returns {Promise<string>} - Хеш пароля
 */
export async function hashPassword(password) {
    try {
        const encoder = new TextEncoder();
        const data = encoder.encode(password);
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        return hashHex;
    } catch (error) {
        console.error('Password hashing error:', error);
        // Fallback для браузеров без crypto.subtle
        return btoa(password).replace(/[^a-zA-Z0-9]/g, '');
    }
}

/**
 * Проверка пароля
 * @param {string} password - Введенный пароль
 * @param {string} hash - Хеш для проверки
 * @returns {Promise<boolean>} - true если пароль совпадает
 */
export async function verifyPassword(password, hash) {
    try {
        const passwordHash = await hashPassword(password);
        return passwordHash === hash;
    } catch (error) {
        console.error('Password verification error:', error);
        return false;
    }
}

/**
 * Создание нового пользователя
 * @param {string} name - Имя пользователя
 * @param {string} email - Email
 * @param {string} password - Пароль
 * @returns {Promise<{success: boolean, user: Object|null, errors: string[]}>}
 */
export async function createUser(name, email, password) {
    const errors = [];
    
    // Валидация
    const nameValidation = validators.userName(name);
    if (!nameValidation.valid) {
        errors.push(...nameValidation.errors);
    }
    
    const emailValidation = validators.email(email);
    if (!emailValidation.valid) {
        errors.push(...emailValidation.errors);
    }
    
    const passwordValidation = validators.password(password);
    if (!passwordValidation.valid) {
        errors.push(...passwordValidation.errors);
    }
    
    if (errors.length > 0) {
        return { success: false, user: null, errors };
    }
    
    try {
        // Проверка на существующего пользователя
        const users = StorageManager.get('flowUsers') || [];
        if (users.find(u => u.email === email)) {
            errors.push('User with this email already exists');
            return { success: false, user: null, errors };
        }
        
        // Хеширование пароля
        const passwordHash = await hashPassword(password);
        
        // Создание пользователя
        const newUser = {
            id: Date.now(),
            name: name.trim(),
            email: email.trim().toLowerCase(),
            password: passwordHash, // Сохраняем хеш, а не пароль
            joinedAt: new Date().toISOString()
        };
        
        users.push(newUser);
        StorageManager.set('flowUsers', users);
        
        // Возвращаем пользователя без пароля
        const { password: _, ...userWithoutPassword } = newUser;
        
        return {
            success: true,
            user: {
                id: newUser.id,
                name: newUser.name,
                email: newUser.email,
                joinedAt: newUser.joinedAt
            },
            errors: []
        };
    } catch (error) {
        console.error('User creation error:', error);
        errors.push('Failed to create user');
        return { success: false, user: null, errors };
    }
}

/**
 * Авторизация пользователя
 * @param {string} email - Email
 * @param {string} password - Пароль
 * @returns {Promise<{success: boolean, user: Object|null, errors: string[]}>}
 */
export async function loginUser(email, password) {
    const errors = [];
    
    // Валидация
    const emailValidation = validators.email(email);
    if (!emailValidation.valid) {
        errors.push(...emailValidation.errors);
    }
    
    if (!password || password.length === 0) {
        errors.push('Password is required');
    }
    
    if (errors.length > 0) {
        return { success: false, user: null, errors };
    }
    
    try {
        const users = StorageManager.get('flowUsers') || [];
        const user = users.find(u => u.email === email.trim().toLowerCase());
        
        if (!user) {
            errors.push('Invalid email or password');
            return { success: false, user: null, errors };
        }
        
        // Проверка пароля
        const passwordValid = await verifyPassword(password, user.password);
        
        if (!passwordValid) {
            errors.push('Invalid email or password');
            return { success: false, user: null, errors };
        }
        
        // Возвращаем пользователя без пароля
        return {
            success: true,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                joinedAt: user.joinedAt
            },
            errors: []
        };
    } catch (error) {
        console.error('Login error:', error);
        errors.push('Failed to login');
        return { success: false, user: null, errors };
    }
}

/**
 * Изменение пароля
 * @param {number} userId - ID пользователя
 * @param {string} currentPassword - Текущий пароль
 * @param {string} newPassword - Новый пароль
 * @returns {Promise<{success: boolean, errors: string[]}>}
 */
export async function changePassword(userId, currentPassword, newPassword) {
    const errors = [];
    
    // Валидация
    if (!currentPassword || currentPassword.length === 0) {
        errors.push('Current password is required');
    }
    
    const passwordValidation = validators.password(newPassword);
    if (!passwordValidation.valid) {
        errors.push(...passwordValidation.errors);
    }
    
    if (errors.length > 0) {
        return { success: false, errors };
    }
    
    try {
        const users = StorageManager.get('flowUsers') || [];
        const user = users.find(u => u.id === userId);
        
        if (!user) {
            errors.push('User not found');
            return { success: false, errors };
        }
        
        // Проверка текущего пароля
        const passwordValid = await verifyPassword(currentPassword, user.password);
        if (!passwordValid) {
            errors.push('Current password is incorrect');
            return { success: false, errors };
        }
        
        // Хеширование нового пароля
        const newPasswordHash = await hashPassword(newPassword);
        user.password = newPasswordHash;
        
        // Сохранение
        StorageManager.set('flowUsers', users);
        
        return { success: true, errors: [] };
    } catch (error) {
        console.error('Password change error:', error);
        errors.push('Failed to change password');
        return { success: false, errors };
    }
}

/**
 * Получить текущего пользователя
 * @returns {Object|null} - Пользователь или null
 */
export function getCurrentUser() {
    try {
        return StorageManager.get('flowUser');
    } catch (error) {
        console.error('Get current user error:', error);
        return null;
    }
}

/**
 * Сохранить текущего пользователя
 * @param {Object} user - Пользователь
 * @returns {boolean} - true при успехе
 */
export function setCurrentUser(user) {
    try {
        return StorageManager.set('flowUser', user);
    } catch (error) {
        console.error('Set current user error:', error);
        return false;
    }
}

/**
 * Выход пользователя
 * @returns {boolean} - true при успехе
 */
export function logoutUser() {
    try {
        StorageManager.remove('flowUser');
        return true;
    } catch (error) {
        console.error('Logout error:', error);
        return false;
    }
}





