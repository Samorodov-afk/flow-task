// Модуль управления задачами
import { stateManager } from './state.js';
import { validators } from './validators.js';
import { domCache } from './dom-cache.js';
import { escapeHtml, isOverdue, generateId } from './utils.js';
import { StorageManager } from './storage.js';

/**
 * Добавить новую задачу
 * @param {string} text - Текст задачи
 * @param {string} category - Категория
 * @param {string} priority - Приоритет
 * @param {string} deadline - Срок выполнения
 * @returns {{success: boolean, task: Object|null, errors: string[]}}
 */
export function addTask(text, category, priority, deadline = '') {
    const errors = [];
    
    // Валидация
    if (!text || text.trim().length === 0) {
        errors.push('Task text is required');
        return { success: false, task: null, errors };
    }
    
    // Убеждаемся, что категории загружены
    let categories = stateManager.get('categories');
    if (!categories || categories.length === 0) {
        const user = stateManager.get('user');
        if (user && user.id) {
            stateManager.loadUserData();
            categories = stateManager.get('categories');
        } else {
            categories = [{ id: 'general', name: 'Общие', color: '#7395ae' }];
            stateManager.set('categories', categories);
        }
    }
    
    // Убеждаемся, что есть категория "Общие"
    const generalCategory = categories.find(cat => cat.id === 'general');
    if (!generalCategory) {
        categories.unshift({ id: 'general', name: 'Общие', color: '#7395ae' });
        stateManager.set('categories', categories);
    }
    
    const taskOrder = stateManager.get('taskOrder') || [];
    const order = taskOrder.length > 0 ? Math.min(...taskOrder) - 1 : Date.now();
    
    const task = {
        id: generateId(),
        text: text.trim(),
        priority: priority || stateManager.get('currentPriority') || 'medium',
        category: category || 'general',
        deadline: deadline || '',
        notes: '',
        completed: false,
        archived: false,
        order: order,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };
    
    // Валидация задачи
    const validation = validators.task(task);
    if (!validation.valid) {
        return { success: false, task: null, errors: validation.errors };
    }
    
    // Добавляем задачу
    const tasks = stateManager.get('tasks') || [];
    tasks.unshift(task);
    stateManager.set('tasks', tasks);
    
    // Обновляем порядок
    taskOrder.unshift(task.id);
    stateManager.set('taskOrder', taskOrder);
    
    // Сохраняем
    saveTasks();
    
    return { success: true, task, errors: [] };
}

/**
 * Обновить задачу
 * @param {number} taskId - ID задачи
 * @param {Object} updates - Обновления
 * @returns {{success: boolean, errors: string[]}}
 */
export function updateTask(taskId, updates) {
    const errors = [];
    const tasks = stateManager.get('tasks') || [];
    const taskIndex = tasks.findIndex(t => t.id === taskId);
    
    if (taskIndex === -1) {
        errors.push('Task not found');
        return { success: false, errors };
    }
    
    const updatedTask = {
        ...tasks[taskIndex],
        ...updates,
        updatedAt: new Date().toISOString()
    };
    
    // Валидация
    const validation = validators.task(updatedTask);
    if (!validation.valid) {
        return { success: false, errors: validation.errors };
    }
    
    tasks[taskIndex] = updatedTask;
    stateManager.set('tasks', tasks);
    saveTasks();
    
    return { success: true, errors: [] };
}

/**
 * Удалить задачу
 * @param {number} taskId - ID задачи
 * @returns {boolean} - true при успехе
 */
export function deleteTask(taskId) {
    try {
        const tasks = stateManager.get('tasks') || [];
        const filteredTasks = tasks.filter(t => t.id !== taskId);
        stateManager.set('tasks', filteredTasks);
        
        const taskOrder = stateManager.get('taskOrder') || [];
        const filteredOrder = taskOrder.filter(id => id !== taskId);
        stateManager.set('taskOrder', filteredOrder);
        
        saveTasks();
        return true;
    } catch (error) {
        console.error('Delete task error:', error);
        return false;
    }
}

/**
 * Переключить статус выполнения задачи
 * @param {number} taskId - ID задачи
 * @returns {boolean} - true при успехе
 */
export function toggleTask(taskId) {
    try {
        const tasks = stateManager.get('tasks') || [];
        const task = tasks.find(t => t.id === taskId);
        
        if (!task) return false;
        
        task.completed = !task.completed;
        task.updatedAt = new Date().toISOString();
        
        stateManager.set('tasks', tasks);
        saveTasks();
        
        return true;
    } catch (error) {
        console.error('Toggle task error:', error);
        return false;
    }
}

/**
 * Архивировать задачу
 * @param {number} taskId - ID задачи
 * @returns {boolean} - true при успехе
 */
export function archiveTask(taskId) {
    try {
        const tasks = stateManager.get('tasks') || [];
        const task = tasks.find(t => t.id === taskId);
        
        if (!task) return false;
        
        task.archived = true;
        task.updatedAt = new Date().toISOString();
        
        stateManager.set('tasks', tasks);
        saveTasks();
        
        return true;
    } catch (error) {
        console.error('Archive task error:', error);
        return false;
    }
}

/**
 * Разархивировать задачу
 * @param {number} taskId - ID задачи
 * @returns {boolean} - true при успехе
 */
export function unarchiveTask(taskId) {
    try {
        const tasks = stateManager.get('tasks') || [];
        const task = tasks.find(t => t.id === taskId);
        
        if (!task) return false;
        
        task.archived = false;
        task.updatedAt = new Date().toISOString();
        
        stateManager.set('tasks', tasks);
        saveTasks();
        
        return true;
    } catch (error) {
        console.error('Unarchive task error:', error);
        return false;
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
            StorageManager.set('flowTaskOrder', stateManager.get('taskOrder'), user.id);
        }
    } catch (error) {
        console.error('Save tasks error:', error);
    }
}

/**
 * Получить задачи с фильтрацией
 * @param {Object} filters - Фильтры
 * @returns {Array} - Отфильтрованные задачи
 */
export function getFilteredTasks(filters = {}) {
    let tasks = stateManager.get('tasks') || [];
    
    // Фильтр по статусу
    if (filters.completed !== undefined) {
        tasks = tasks.filter(t => t.completed === filters.completed);
    }
    
    if (filters.archived !== undefined) {
        tasks = tasks.filter(t => t.archived === filters.archived);
    }
    
    // Фильтр по категории
    if (filters.category && filters.category !== 'all') {
        tasks = tasks.filter(t => t.category === filters.category);
    }
    
    // Фильтр по приоритету
    if (filters.priority) {
        tasks = tasks.filter(t => t.priority === filters.priority);
    }
    
    // Фильтр по поисковому запросу
    if (filters.searchQuery) {
        const query = filters.searchQuery.toLowerCase();
        tasks = tasks.filter(t => 
            t.text.toLowerCase().includes(query) ||
            (t.notes && t.notes.toLowerCase().includes(query))
        );
    }
    
    // Фильтр просроченных
    if (filters.overdue) {
        tasks = tasks.filter(t => isOverdue(t));
    }
    
    // Сортировка
    if (filters.sortBy) {
        tasks = sortTasks(tasks, filters.sortBy);
    }
    
    return tasks;
}

/**
 * Сортировка задач
 * @param {Array} tasks - Массив задач
 * @param {string} sortBy - Тип сортировки
 * @returns {Array} - Отсортированные задачи
 */
export function sortTasks(tasks, sortBy) {
    const sorted = [...tasks];
    
    switch (sortBy) {
        case 'priority':
            const priorityOrder = { high: 3, medium: 2, low: 1 };
            sorted.sort((a, b) => priorityOrder[b.priority] - priorityOrder[a.priority]);
            break;
        case 'deadline':
            sorted.sort((a, b) => {
                if (!a.deadline && !b.deadline) return 0;
                if (!a.deadline) return 1;
                if (!b.deadline) return -1;
                // Простая сортировка по дате (можно улучшить)
                return a.deadline.localeCompare(b.deadline);
            });
            break;
        case 'newest':
            sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            break;
        case 'oldest':
            sorted.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
            break;
        case 'order':
            const taskOrder = stateManager.get('taskOrder') || [];
            sorted.sort((a, b) => {
                const indexA = taskOrder.indexOf(a.id);
                const indexB = taskOrder.indexOf(b.id);
                if (indexA === -1 && indexB === -1) return 0;
                if (indexA === -1) return 1;
                if (indexB === -1) return -1;
                return indexA - indexB;
            });
            break;
    }
    
    return sorted;
}




