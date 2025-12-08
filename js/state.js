// Модуль управления состоянием приложения
// Использует паттерн Observer для отслеживания изменений
import { StorageManager } from './storage.js';

class StateManager {
    constructor() {
        this.state = {
            tasks: [],
            categories: [],
            quickTasks: [],
            currentFilter: 'all',
            currentCategory: 'all',
            currentPriority: 'medium',
            editingTaskId: null,
            theme: 'auto',
            language: 'ru',
            primaryColor: '#7395ae',
            quickTasksEditMode: false,
            selectedColor: '#7395ae',
            searchQuery: '',
            taskOrder: [],
            analyticsPeriod: 'week',
            notificationsEnabled: true,
            notificationsBeforeDeadline: true,
            notificationsOnDeadline: true,
            flatpickrInstances: {},
            autoSaveTimer: null,
            user: null
        };
        
        this.listeners = new Map();
        this.loadInitialState();
    }

    /**
     * Загрузка начального состояния из localStorage
     */
    loadInitialState() {
        try {
            // Загружаем общие настройки
            this.state.theme = StorageManager.get('flowTheme') || 'auto';
            this.state.language = StorageManager.get('flowLanguage') || 'ru';
            this.state.primaryColor = StorageManager.get('flowPrimaryColor') || '#7395ae';
            this.state.notificationsEnabled = StorageManager.get('flowNotificationsEnabled') !== false;
            this.state.notificationsBeforeDeadline = StorageManager.get('flowNotificationsBeforeDeadline') !== false;
            this.state.notificationsOnDeadline = StorageManager.get('flowNotificationsOnDeadline') !== false;
            
            // Загружаем пользователя
            this.state.user = StorageManager.get('flowUser') || null;
            
            // Загружаем данные пользователя, если он авторизован
            if (this.state.user && this.state.user.id) {
                this.loadUserData();
            }
        } catch (error) {
            console.error('State initialization error:', error);
        }
    }

    /**
     * Загрузка данных пользователя
     */
    loadUserData() {
        if (!this.state.user || !this.state.user.id) {
            this.state.tasks = [];
            this.state.categories = [{ id: 'general', name: 'Общие', color: '#7395ae' }];
            this.state.quickTasks = [];
            this.state.taskOrder = [];
            return;
        }
        
        // Загружаем данные пользователя

        const userId = this.state.user.id;
        this.state.tasks = StorageManager.get('flowTasks', userId) || [];
        const savedCategories = StorageManager.get('flowCategories', userId) || [];
        this.state.categories = savedCategories.length > 0 ? savedCategories : [{ id: 'general', name: 'Общие', color: '#7395ae' }];
        this.state.quickTasks = StorageManager.get('flowQuickTasks', userId) || [];
        this.state.taskOrder = StorageManager.get('flowTaskOrder', userId) || [];
    }

    /**
     * Получить значение из state
     * @param {string} key - Ключ
     * @returns {any} - Значение
     */
    get(key) {
        return this.state[key];
    }

    /**
     * Установить значение в state
     * @param {string} key - Ключ
     * @param {any} value - Значение
     * @param {boolean} notify - Уведомлять слушателей (по умолчанию true)
     */
    set(key, value, notify = true) {
        const oldValue = this.state[key];
        this.state[key] = value;
        
        if (notify) {
            this.notify(key, value, oldValue);
        }
    }

    /**
     * Обновить несколько значений одновременно
     * @param {Object} updates - Объект с обновлениями
     * @param {boolean} notify - Уведомлять слушателей
     */
    update(updates, notify = true) {
        const oldValues = {};
        Object.keys(updates).forEach(key => {
            oldValues[key] = this.state[key];
            this.state[key] = updates[key];
        });
        
        if (notify) {
            Object.keys(updates).forEach(key => {
                this.notify(key, updates[key], oldValues[key]);
            });
        }
    }

    /**
     * Подписаться на изменения state
     * @param {string} key - Ключ для отслеживания (или '*' для всех)
     * @param {Function} callback - Функция обратного вызова
     * @returns {Function} - Функция для отписки
     */
    subscribe(key, callback) {
        if (!this.listeners.has(key)) {
            this.listeners.set(key, new Set());
        }
        this.listeners.get(key).add(callback);
        
        // Возвращаем функцию для отписки
        return () => {
            const callbacks = this.listeners.get(key);
            if (callbacks) {
                callbacks.delete(callback);
            }
        };
    }

    /**
     * Уведомить слушателей об изменении
     * @param {string} key - Ключ
     * @param {any} newValue - Новое значение
     * @param {any} oldValue - Старое значение
     */
    notify(key, newValue, oldValue) {
        // Уведомляем слушателей конкретного ключа
        const keyListeners = this.listeners.get(key);
        if (keyListeners) {
            keyListeners.forEach(callback => {
                try {
                    callback(newValue, oldValue, key);
                } catch (error) {
                    console.error(`State listener error for key "${key}":`, error);
                }
            });
        }
        
        // Уведомляем слушателей всех изменений
        const allListeners = this.listeners.get('*');
        if (allListeners) {
            allListeners.forEach(callback => {
                try {
                    callback(this.state, key, newValue, oldValue);
                } catch (error) {
                    console.error('State listener error for "*":', error);
                }
            });
        }
    }

    /**
     * Сохранение state в localStorage
     */
    save() {
        try {
            const userId = this.state.user?.id;
            
            // Сохраняем данные пользователя
            if (userId) {
                StorageManager.set('flowTasks', this.state.tasks, userId);
                StorageManager.set('flowCategories', this.state.categories, userId);
                StorageManager.set('flowQuickTasks', this.state.quickTasks, userId);
                StorageManager.set('flowTaskOrder', this.state.taskOrder, userId);
            }
            
            // Сохраняем общие настройки
            StorageManager.set('flowTheme', this.state.theme);
            StorageManager.set('flowLanguage', this.state.language);
            StorageManager.set('flowPrimaryColor', this.state.primaryColor);
            StorageManager.set('flowNotificationsEnabled', this.state.notificationsEnabled);
            StorageManager.set('flowNotificationsBeforeDeadline', this.state.notificationsBeforeDeadline);
            StorageManager.set('flowNotificationsOnDeadline', this.state.notificationsOnDeadline);
            
            // Сохраняем пользователя
            if (this.state.user) {
                StorageManager.set('flowUser', this.state.user);
            }
        } catch (error) {
            console.error('State save error:', error);
        }
    }

    /**
     * Очистить данные пользователя
     */
    clearUserData() {
        this.state.tasks = [];
        this.state.categories = [];
        this.state.quickTasks = [];
        this.state.taskOrder = [];
        this.notify('tasks', [], this.state.tasks);
        this.notify('categories', [], this.state.categories);
        this.notify('quickTasks', [], this.state.quickTasks);
    }

    /**
     * Получить весь state (для отладки)
     * @returns {Object} - Копия state
     */
    getState() {
        return JSON.parse(JSON.stringify(this.state));
    }
}

// Экспортируем singleton
export const stateManager = new StateManager();

