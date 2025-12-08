// Модуль кэширования DOM элементов
// Оптимизация производительности за счет кэширования часто используемых элементов

class DOMCache {
    constructor() {
        this.cache = new Map();
        this.initialized = false;
    }

    /**
     * Инициализация кэша - получение всех часто используемых элементов
     */
    init() {
        if (this.initialized) return;
        
        try {
            // Основные контейнеры
            this.cache.set('tasksContainer', document.getElementById('tasks-container'));
            this.cache.set('urgentTasksContainer', document.getElementById('urgent-tasks-container'));
            this.cache.set('quickTasksList', document.getElementById('quick-tasks-list'));
            this.cache.set('categoriesList', document.getElementById('categories-list'));
            
            // Формы и инпуты
            this.cache.set('taskInput', document.getElementById('task-input'));
            this.cache.set('taskCategory', document.getElementById('task-category'));
            this.cache.set('taskDeadline', document.getElementById('task-deadline'));
            this.cache.set('addTaskBtn', document.getElementById('add-task-btn'));
            this.cache.set('searchInput', document.getElementById('search-input'));
            this.cache.set('sortSelect', document.getElementById('sort-select'));
            
            // Модальные окна
            this.cache.set('settingsModal', document.getElementById('settings-modal'));
            this.cache.set('analyticsModal', document.getElementById('analytics-modal'));
            this.cache.set('confirmModal', document.getElementById('confirm-modal'));
            this.cache.set('editModal', document.getElementById('edit-modal'));
            this.cache.set('authModal', document.getElementById('auth-modal'));
            this.cache.set('profileModal', document.getElementById('profile-modal'));
            this.cache.set('changePasswordModal', document.getElementById('change-password-modal'));
            
            // Элементы редактирования задачи
            this.cache.set('editTaskInput', document.getElementById('edit-task-input'));
            this.cache.set('editTaskCategory', document.getElementById('edit-task-category'));
            this.cache.set('editTaskDeadline', document.getElementById('edit-task-deadline'));
            this.cache.set('editTaskNotes', document.getElementById('edit-task-notes'));
            
            // Кнопки
            this.cache.set('mobileMenuBtn', document.getElementById('mobile-menu-btn'));
            this.cache.set('openSettingsBtn', document.getElementById('open-settings-btn'));
            this.cache.set('analyticsHeaderBtn', document.getElementById('analytics-header-btn'));
            this.cache.set('profileHeaderBtn', document.getElementById('profile-header-btn'));
            
            // Лендинг
            this.cache.set('landingPage', document.getElementById('landing-page'));
            this.cache.set('appContainer', document.getElementById('app-container'));
            
            // Статистика
            this.cache.set('activeTasksCount', document.getElementById('active-tasks-count'));
            this.cache.set('footerTime', document.getElementById('footer-time'));
            this.cache.set('footerDate', document.getElementById('footer-date'));
            
            this.initialized = true;
        } catch (error) {
            console.error('DOM Cache initialization error:', error);
        }
    }

    /**
     * Получить элемент из кэша
     * @param {string} key - Ключ элемента
     * @returns {HTMLElement|null} - Элемент или null
     */
    get(key) {
        if (!this.initialized) {
            this.init();
        }
        return this.cache.get(key) || null;
    }

    /**
     * Получить элемент с обновлением кэша
     * @param {string} key - Ключ элемента
     * @param {string} selector - CSS селектор (если элемент не в кэше)
     * @returns {HTMLElement|null} - Элемент или null
     */
    getOrQuery(key, selector) {
        let element = this.get(key);
        if (!element && selector) {
            try {
                element = document.querySelector(selector);
                if (element) {
                    this.cache.set(key, element);
                }
            } catch (error) {
                console.error(`DOM query error for "${selector}":`, error);
            }
        }
        return element;
    }

    /**
     * Обновить элемент в кэше
     * @param {string} key - Ключ элемента
     * @param {HTMLElement} element - Элемент для кэширования
     */
    set(key, element) {
        this.cache.set(key, element);
    }

    /**
     * Очистить кэш
     */
    clear() {
        this.cache.clear();
        this.initialized = false;
    }

    /**
     * Переинициализировать кэш
     */
    reinit() {
        this.clear();
        this.init();
    }
}

// Экспортируем singleton
export const domCache = new DOMCache();





