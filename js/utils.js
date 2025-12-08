// Утилиты и вспомогательные функции

/**
 * Экранирование HTML для безопасности
 * @param {string} text - Текст для экранирования
 * @returns {string} - Экранированный текст
 */
export function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

/**
 * Экранирование спецсимволов для RegExp
 * @param {string} value - Строка для экранирования
 * @returns {string} - Экранированная строка
 */
export function escapeRegex(value) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Подсветка текста поиска
 * @param {string} text - Текст для подсветки
 * @param {string} query - Поисковый запрос
 * @returns {string} - HTML с подсветкой
 */
export function highlightSearchText(text, query) {
    if (!query || !text) return escapeHtml(text);
    const safeQuery = escapeRegex(query);
    const regex = new RegExp(`(${safeQuery})`, 'gi');
    const escapedText = escapeHtml(text);
    return escapedText.replace(regex, '<mark class="search-highlight">$1</mark>');
}

/**
 * Debounce функция для оптимизации производительности
 * @param {Function} func - Функция для выполнения
 * @param {number} wait - Время задержки в мс
 * @returns {Function} - Обернутая функция
 */
export function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Throttle функция для ограничения частоты вызовов
 * @param {Function} func - Функция для выполнения
 * @param {number} limit - Лимит времени в мс
 * @returns {Function} - Обернутая функция
 */
export function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * Форматирование даты
 * @param {Date|string} date - Дата для форматирования
 * @param {string} locale - Локаль (ru-RU, en-US)
 * @returns {string} - Отформатированная дата
 */
export function formatDate(date, locale = 'ru-RU') {
    try {
        const dateObj = date instanceof Date ? date : new Date(date);
        if (isNaN(dateObj.getTime())) return '';
        return dateObj.toLocaleDateString(locale);
    } catch (error) {
        console.error('Date formatting error:', error);
        return '';
    }
}

/**
 * Форматирование времени
 * @param {Date|string} date - Дата для форматирования
 * @param {string} locale - Локаль
 * @returns {string} - Отформатированное время
 */
export function formatTime(date, locale = 'ru-RU') {
    try {
        const dateObj = date instanceof Date ? date : new Date(date);
        if (isNaN(dateObj.getTime())) return '';
        return dateObj.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit' });
    } catch (error) {
        console.error('Time formatting error:', error);
        return '';
    }
}

/**
 * Создание DocumentFragment для оптимизации рендеринга
 * @param {string} html - HTML строка
 * @returns {DocumentFragment} - DocumentFragment
 */
export function createFragment(html) {
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

/**
 * Безопасное получение элемента DOM
 * @param {string} selector - CSS селектор
 * @param {HTMLElement} context - Контекст поиска (по умолчанию document)
 * @returns {HTMLElement|null} - Элемент или null
 */
export function safeQuerySelector(selector, context = document) {
    try {
        return context.querySelector(selector);
    } catch (error) {
        console.error(`Query selector error for "${selector}":`, error);
        return null;
    }
}

/**
 * Безопасное получение элементов DOM
 * @param {string} selector - CSS селектор
 * @param {HTMLElement} context - Контекст поиска
 * @returns {NodeList|Array} - Список элементов
 */
export function safeQuerySelectorAll(selector, context = document) {
    try {
        return context.querySelectorAll(selector);
    } catch (error) {
        console.error(`Query selector all error for "${selector}":`, error);
        return [];
    }
}

/**
 * Изменение яркости цвета
 * @param {string} color - HEX цвет
 * @param {number} amount - Количество изменения (-255 до 255)
 * @returns {string} - Новый HEX цвет
 */
export function adjustColor(color, amount) {
    try {
        const hex = color.replace('#', '');
        const r = Math.min(255, Math.max(0, parseInt(hex.substr(0, 2), 16) + amount));
        const g = Math.min(255, Math.max(0, parseInt(hex.substr(2, 2), 16) + amount));
        const b = Math.min(255, Math.max(0, parseInt(hex.substr(4, 2), 16) + amount));
        return `#${[r, g, b].map(x => {
            const hex = x.toString(16);
            return hex.length === 1 ? '0' + hex : hex;
        }).join('')}`;
    } catch (error) {
        console.error('Color adjustment error:', error);
        return color;
    }
}

/**
 * Проверка, является ли задача просроченной
 * @param {Object} task - Объект задачи
 * @returns {boolean} - true если просрочена
 */
export function isOverdue(task) {
    if (!task.deadline || task.completed) return false;
    try {
        const deadlineParts = task.deadline.split('.');
        if (deadlineParts.length !== 3) return false;
        const deadline = new Date(deadlineParts[2], deadlineParts[1] - 1, deadlineParts[0]);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        deadline.setHours(0, 0, 0, 0);
        return deadline < today;
    } catch (error) {
        console.error('Date parsing error:', error);
        return false;
    }
}

/**
 * Безопасный парсинг JSON
 * @param {string} jsonString - JSON строка
 * @param {any} defaultValue - Значение по умолчанию
 * @returns {any} - Распарсенный объект или значение по умолчанию
 */
export function safeJsonParse(jsonString, defaultValue = null) {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        console.error('JSON parse error:', error);
        return defaultValue;
    }
}

/**
 * Генерация уникального ID
 * @returns {number} - Уникальный ID на основе времени
 */
export function generateId() {
    return Date.now() + Math.random();
}




