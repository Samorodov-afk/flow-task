// Модуль валидации данных

/**
 * Валидаторы для различных типов данных
 */
export const validators = {
    /**
     * Валидация задачи
     * @param {Object} task - Объект задачи
     * @returns {{valid: boolean, errors: string[]}} - Результат валидации
     */
    task(task) {
        const errors = [];
        
        if (!task) {
            errors.push('Task object is required');
            return { valid: false, errors };
        }
        
        if (!task.text || typeof task.text !== 'string' || task.text.trim().length === 0) {
            errors.push('Task text is required and cannot be empty');
        }
        
        if (task.text && task.text.length > 1000) {
            errors.push('Task text is too long (max 1000 characters)');
        }
        
        if (!task.priority || !['low', 'medium', 'high'].includes(task.priority)) {
            errors.push('Task priority must be low, medium, or high');
        }
        
        if (task.category && typeof task.category !== 'string') {
            errors.push('Task category must be a string');
        }
        
        if (task.deadline && typeof task.deadline !== 'string') {
            errors.push('Task deadline must be a string');
        }
        
        if (task.completed !== undefined && typeof task.completed !== 'boolean') {
            errors.push('Task completed must be a boolean');
        }
        
        if (task.archived !== undefined && typeof task.archived !== 'boolean') {
            errors.push('Task archived must be a boolean');
        }
        
        return {
            valid: errors.length === 0,
            errors
        };
    },

    /**
     * Валидация категории
     * @param {Object} category - Объект категории
     * @returns {{valid: boolean, errors: string[]}} - Результат валидации
     */
    category(category) {
        const errors = [];
        
        if (!category) {
            errors.push('Category object is required');
            return { valid: false, errors };
        }
        
        if (!category.name || typeof category.name !== 'string' || category.name.trim().length === 0) {
            errors.push('Category name is required and cannot be empty');
        }
        
        if (category.name && category.name.length > 50) {
            errors.push('Category name is too long (max 50 characters)');
        }
        
        if (!category.id || typeof category.id !== 'string') {
            errors.push('Category ID is required and must be a string');
        }
        
        if (category.color && !/^#[0-9A-F]{6}$/i.test(category.color)) {
            errors.push('Category color must be a valid HEX color');
        }
        
        return {
            valid: errors.length === 0,
            errors
        };
    },

    /**
     * Валидация быстрой задачи
     * @param {Object} quickTask - Объект быстрой задачи
     * @returns {{valid: boolean, errors: string[]}} - Результат валидации
     */
    quickTask(quickTask) {
        const errors = [];
        
        if (!quickTask) {
            errors.push('Quick task object is required');
            return { valid: false, errors };
        }
        
        if (!quickTask.text || typeof quickTask.text !== 'string' || quickTask.text.trim().length === 0) {
            errors.push('Quick task text is required and cannot be empty');
        }
        
        if (quickTask.text && quickTask.text.length > 500) {
            errors.push('Quick task text is too long (max 500 characters)');
        }
        
        if (!quickTask.priority || !['low', 'medium', 'high'].includes(quickTask.priority)) {
            errors.push('Quick task priority must be low, medium, or high');
        }
        
        return {
            valid: errors.length === 0,
            errors
        };
    },

    /**
     * Валидация email
     * @param {string} email - Email адрес
     * @returns {{valid: boolean, errors: string[]}} - Результат валидации
     */
    email(email) {
        const errors = [];
        
        if (!email || typeof email !== 'string') {
            errors.push('Email is required');
            return { valid: false, errors };
        }
        
        const emailTrimmed = email.trim();
        
        if (emailTrimmed.length === 0) {
            errors.push('Email cannot be empty');
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailTrimmed)) {
            errors.push('Email format is invalid');
        }
        
        if (emailTrimmed.length > 255) {
            errors.push('Email is too long (max 255 characters)');
        }
        
        return {
            valid: errors.length === 0,
            errors
        };
    },

    /**
     * Валидация пароля
     * @param {string} password - Пароль
     * @param {number} minLength - Минимальная длина (по умолчанию 6)
     * @returns {{valid: boolean, errors: string[]}} - Результат валидации
     */
    password(password, minLength = 6) {
        const errors = [];
        
        if (!password || typeof password !== 'string') {
            errors.push('Password is required');
            return { valid: false, errors };
        }
        
        if (password.length < minLength) {
            errors.push(`Password must be at least ${minLength} characters`);
        }
        
        if (password.length > 128) {
            errors.push('Password is too long (max 128 characters)');
        }
        
        return {
            valid: errors.length === 0,
            errors
        };
    },

    /**
     * Валидация имени пользователя
     * @param {string} name - Имя пользователя
     * @returns {{valid: boolean, errors: string[]}} - Результат валидации
     */
    userName(name) {
        const errors = [];
        
        if (!name || typeof name !== 'string') {
            errors.push('Name is required');
            return { valid: false, errors };
        }
        
        const nameTrimmed = name.trim();
        
        if (nameTrimmed.length === 0) {
            errors.push('Name cannot be empty');
        }
        
        if (nameTrimmed.length < 2) {
            errors.push('Name must be at least 2 characters');
        }
        
        if (nameTrimmed.length > 50) {
            errors.push('Name is too long (max 50 characters)');
        }
        
        return {
            valid: errors.length === 0,
            errors
        };
    },

    /**
     * Валидация совпадения паролей
     * @param {string} password - Пароль
     * @param {string} confirmPassword - Подтверждение пароля
     * @returns {{valid: boolean, errors: string[]}} - Результат валидации
     */
    passwordMatch(password, confirmPassword) {
        const errors = [];
        
        if (password !== confirmPassword) {
            errors.push('Passwords do not match');
        }
        
        return {
            valid: errors.length === 0,
            errors
        };
    }
};





