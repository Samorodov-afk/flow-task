// Модуль управления категориями
import { stateManager } from './state.js';
import { validators } from './validators.js';
import { StorageManager } from './storage.js';

/**
 * Добавить категорию
 * @param {string} name - Название категории
 * @param {string} color - Цвет категории
 * @returns {{success: boolean, category: Object|null, errors: string[]}}
 */
export function addCategory(name, color = '#7395ae') {
    const errors = [];
    
    // Валидация
    const nameValidation = validators.category({ name, id: 'temp', color });
    if (!nameValidation.valid) {
        return { success: false, category: null, errors: nameValidation.errors };
    }
    
    // Проверка на дубликаты
    const categories = stateManager.get('categories') || [];
    const duplicate = categories.find(cat => cat.name.toLowerCase() === name.trim().toLowerCase());
    if (duplicate) {
        errors.push('Category with this name already exists');
        return { success: false, category: null, errors };
    }
    
    const category = {
        id: 'cat_' + Date.now(),
        name: name.trim(),
        color: color
    };
    
    // Валидация категории
    const validation = validators.category(category);
    if (!validation.valid) {
        return { success: false, category: null, errors: validation.errors };
    }
    
    categories.push(category);
    stateManager.set('categories', categories);
    saveCategories();
    
    return { success: true, category, errors: [] };
}

/**
 * Удалить категорию
 * @param {string} categoryId - ID категории
 * @returns {{success: boolean, errors: string[]}}
 */
export function deleteCategory(categoryId) {
    const errors = [];
    
    if (categoryId === 'general') {
        errors.push('Cannot delete "General" category');
        return { success: false, errors };
    }
    
    try {
        const tasks = stateManager.get('tasks') || [];
        const categories = stateManager.get('categories') || [];
        
        // Перемещаем задачи в категорию "Общие"
        const updatedTasks = tasks.map(task => {
            if (task.category === categoryId) {
                return { ...task, category: 'general' };
            }
            return task;
        });
        
        // Удаляем категорию
        const filteredCategories = categories.filter(cat => cat.id !== categoryId);
        
        stateManager.set('tasks', updatedTasks);
        stateManager.set('categories', filteredCategories);
        
        // Если текущая категория была удалена, переключаемся на "Все"
        if (stateManager.get('currentCategory') === categoryId) {
            stateManager.set('currentCategory', 'all');
        }
        
        saveCategories();
        saveTasks();
        
        return { success: true, errors: [] };
    } catch (error) {
        console.error('Delete category error:', error);
        errors.push('Failed to delete category');
        return { success: false, errors };
    }
}

/**
 * Получить категорию по ID
 * @param {string} categoryId - ID категории
 * @returns {Object|null} - Категория или null
 */
export function getCategory(categoryId) {
    const categories = stateManager.get('categories') || [];
    return categories.find(cat => cat.id === categoryId) || null;
}

/**
 * Сохранить категории в localStorage
 */
function saveCategories() {
    try {
        const user = stateManager.get('user');
        if (user && user.id) {
            StorageManager.set('flowCategories', stateManager.get('categories'), user.id);
        }
    } catch (error) {
        console.error('Save categories error:', error);
    }
}

/**
 * Сохранить задачи в localStorage
 */
function saveTasks() {
    try {
        const user = stateManager.get('user');
        if (user && user.id) {
            StorageManager.set('flowTasks', stateManager.get('tasks'), user.id);
        }
    } catch (error) {
        console.error('Save tasks error:', error);
    }
}




