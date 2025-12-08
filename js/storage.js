// Модуль для работы с localStorage
// StorageManager - централизованная работа с данными

export class StorageManager {
    /**
     * Получить данные из localStorage
     * @param {string} key - Ключ для хранения
     * @param {number|null} userId - ID пользователя (опционально)
     * @returns {any|null} - Данные или null при ошибке
     */
    static get(key, userId = null) {
        try {
            const storageKey = userId ? `${key}_${userId}` : key;
            const data = localStorage.getItem(storageKey);
            if (data === null) return null;
            return JSON.parse(data);
        } catch (error) {
            console.error(`Storage get error for key "${key}":`, error);
            return null;
        }
    }

    /**
     * Сохранить данные в localStorage
     * @param {string} key - Ключ для хранения
     * @param {any} value - Значение для сохранения
     * @param {number|null} userId - ID пользователя (опционально)
     * @returns {boolean} - true при успехе, false при ошибке
     */
    static set(key, value, userId = null) {
        try {
            const storageKey = userId ? `${key}_${userId}` : key;
            localStorage.setItem(storageKey, JSON.stringify(value));
            return true;
        } catch (error) {
            console.error(`Storage set error for key "${key}":`, error);
            // Если ошибка из-за переполнения, пытаемся очистить старые данные
            if (error.name === 'QuotaExceededError') {
                console.warn('LocalStorage quota exceeded. Consider cleaning old data.');
            }
            return false;
        }
    }

    /**
     * Удалить данные из localStorage
     * @param {string} key - Ключ для удаления
     * @param {number|null} userId - ID пользователя (опционально)
     * @returns {boolean} - true при успехе
     */
    static remove(key, userId = null) {
        try {
            const storageKey = userId ? `${key}_${userId}` : key;
            localStorage.removeItem(storageKey);
            return true;
        } catch (error) {
            console.error(`Storage remove error for key "${key}":`, error);
            return false;
        }
    }

    /**
     * Очистить все данные пользователя
     * @param {number} userId - ID пользователя
     * @returns {boolean} - true при успехе
     */
    static clearUserData(userId) {
        try {
            const keys = Object.keys(localStorage);
            keys.forEach(key => {
                if (key.endsWith(`_${userId}`)) {
                    localStorage.removeItem(key);
                }
            });
            return true;
        } catch (error) {
            console.error(`Storage clearUserData error for userId "${userId}":`, error);
            return false;
        }
    }

    /**
     * Получить ключ для хранения с учетом userId
     * @param {string} key - Базовый ключ
     * @param {number|null} userId - ID пользователя
     * @returns {string} - Полный ключ
     */
    static getStorageKey(key, userId = null) {
        return userId ? `${key}_${userId}` : key;
    }

    /**
     * Проверить доступность localStorage
     * @returns {boolean} - true если доступен
     */
    static isAvailable() {
        try {
            const test = '__storage_test__';
            localStorage.setItem(test, test);
            localStorage.removeItem(test);
            return true;
        } catch (e) {
            return false;
        }
    }
}




