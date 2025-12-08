// Главный файл приложения - использует все модули
import { translations } from './translations.js';
import { stateManager } from './state.js';
import { domCache } from './dom-cache.js';
import { StorageManager } from './storage.js';
import { createUser, loginUser, logoutUser, changePassword, getCurrentUser, setCurrentUser } from './auth.js';
import { addTask, updateTask, deleteTask, toggleTask, archiveTask, unarchiveTask, getFilteredTasks } from './tasks.js';
import { addCategory, deleteCategory } from './categories.js';
import { renderAll, renderTasks, renderCategories, renderQuickTasks, renderUrgentTasks, debouncedRender, updateAppInfo, updateProgressBars } from './ui.js';
import { analyticsManager } from './analytics.js';
import { escapeHtml, debounce, highlightSearchText, isOverdue } from './utils.js';
import { validators } from './validators.js';

// Глобальная функция перевода (для использования в HTML)
window.t = function(key) {
    const lang = stateManager.get('language') || StorageManager.get('flowLanguage') || 'ru';
    return translations[lang]?.[key] || translations['ru'][key] || key;
};

// Экспортируем функции для использования в HTML (синхронно, до DOMContentLoaded)
// Это гарантирует, что функции будут доступны когда script.js попытается их использовать
window.stateManager = stateManager;
window.addTask = addTask;
window.updateTask = updateTask;
window.deleteTask = deleteTask;
window.toggleTask = toggleTask;
window.archiveTask = archiveTask;
window.unarchiveTask = unarchiveTask;
window.addCategory = addCategory;
window.deleteCategory = deleteCategory;
window.renderAll = renderAll;
window.renderTasks = renderTasks;
window.renderCategories = renderCategories;
window.renderQuickTasks = renderQuickTasks;
window.renderUrgentTasks = renderUrgentTasks;
window.analyticsManager = analyticsManager;
window.escapeHtml = escapeHtml;
window.isOverdue = isOverdue;
window.highlightSearchText = highlightSearchText;
window.validators = validators;
window.StorageManager = StorageManager;
window.createUser = createUser;
window.loginUser = loginUser;
window.logoutUser = logoutUser;
window.changePassword = changePassword;
window.getCurrentUser = getCurrentUser;
window.setCurrentUser = setCurrentUser;

// Флаг что модули загружены
window.__FLOW_MODULES_LOADED__ = true;

// Инициализация приложения
document.addEventListener('DOMContentLoaded', () => {
    console.log('=== DOMContentLoaded: Module app.js ===');
    // Не блокируем старый script.js, пусть оба работают вместе
    window.__FLOW_INIT__ = true;

    try {
        // Инициализация DOM кэша
        domCache.init();
        
        // Инициализация state manager
        const user = getCurrentUser();
        console.log('Current user from storage:', user);
        if (user) {
            stateManager.set('user', user);
            stateManager.loadUserData();
        }
        
        // Переопределяем функции из старого script.js
        // Это нужно, чтобы новые функции работали вместо старых
        if (typeof window.handleLandingLogin === 'function') {
            // Старая функция уже определена, переопределяем
            window.handleLandingLogin = handleLandingLogin;
        }
        if (typeof window.handleLandingRegister === 'function') {
            window.handleLandingRegister = handleLandingRegister;
        }
        if (typeof window.switchLandingTab === 'function') {
            window.switchLandingTab = switchLandingTab;
        }
        
        // Инициализация приложения
        initApp();
        
        // Подписка на изменения state для автосохранения (debounce снижает нагрузку на storage)
        const debouncedSaveState = debounce(() => stateManager.save(), 200);
        stateManager.subscribe('*', () => {
            debouncedSaveState();
        });
        
        // Debounce для поиска
        const searchInput = domCache.get('searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', debounce((e) => {
                stateManager.set('searchQuery', e.target.value);
                renderTasks();
            }, 300));
        }
        
        console.log('Application initialized successfully');
    } catch (error) {
        console.error('Application initialization error:', error);
    }
});

// Основная функция инициализации
function initApp() {
    // Проверяем авторизацию
    const user = stateManager.get('user');
    const landingPage = domCache.get('landingPage');
    const appContainer = domCache.get('appContainer');
    
    if (!user) {
        // Показываем лендинг
        if (landingPage) landingPage.style.display = 'block';
        if (appContainer) appContainer.style.display = 'none';
        initLanding();
    } else {
        // Показываем приложение
        if (landingPage) landingPage.style.display = 'none';
        if (appContainer) appContainer.style.display = 'block';
        initAppAfterAuth();
    }
}

// Инициализация лендинга
function initLanding() {
    try {
        const landingRegisterTab = document.getElementById('landing-register-tab');
        const landingLoginTab = document.getElementById('landing-login-tab');
        const landingRegisterForm = document.getElementById('landing-register-form');
        const landingLoginForm = document.getElementById('landing-login-form');
        const landingRegisterBtn = document.getElementById('landing-register-btn');
        const landingLoginBtn = document.getElementById('landing-login-btn');
        const landingThemeToggle = document.getElementById('landing-theme-toggle');
        const landingLanguageToggle = document.getElementById('landing-language-toggle');
        
        // Переключение вкладок
        if (landingRegisterTab) {
            landingRegisterTab.addEventListener('click', () => switchLandingTab('register'));
        }
        
        if (landingLoginTab) {
            landingLoginTab.addEventListener('click', () => switchLandingTab('login'));
        }
        
        // Обработчики форм
        if (landingRegisterBtn) {
            landingRegisterBtn.addEventListener('click', handleLandingRegister);
        }
        
        if (landingLoginBtn) {
            landingLoginBtn.addEventListener('click', handleLandingLogin);
        }
        
        // Enter для отправки форм
        if (landingRegisterForm) {
            const registerInputs = landingRegisterForm.querySelectorAll('input');
            registerInputs.forEach(input => {
                input.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') {
                        handleLandingRegister();
                    }
                });
            });
        }
        
        if (landingLoginForm) {
            const loginInputs = landingLoginForm.querySelectorAll('input');
            loginInputs.forEach(input => {
                input.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') {
                        handleLandingLogin();
                    }
                });
            });
        }
        
        // Переключение темы
        if (landingThemeToggle) {
            landingThemeToggle.addEventListener('click', toggleLandingTheme);
            updateLandingThemeIcon();
        }
        
        // Переключение языка
        if (landingLanguageToggle) {
            landingLanguageToggle.addEventListener('click', toggleLandingLanguage);
            updateLandingLanguageButton();
        }
        
        // Обновляем тексты лендинга
        updateLandingTexts();
        applyAccessibilityAttributes();
    } catch (error) {
        console.error('Init landing error:', error);
    }
}

// Переключение вкладок на лендинге
function switchLandingTab(tab) {
    const landingRegisterTab = document.getElementById('landing-register-tab');
    const landingLoginTab = document.getElementById('landing-login-tab');
    const landingRegisterForm = document.getElementById('landing-register-form');
    const landingLoginForm = document.getElementById('landing-login-form');
    
    if (tab === 'register') {
        if (landingRegisterTab) landingRegisterTab.classList.add('active');
        if (landingLoginTab) landingLoginTab.classList.remove('active');
        if (landingRegisterForm) landingRegisterForm.style.display = 'flex';
        if (landingLoginForm) landingLoginForm.style.display = 'none';
    } else {
        if (landingRegisterTab) landingRegisterTab.classList.remove('active');
        if (landingLoginTab) landingLoginTab.classList.add('active');
        if (landingRegisterForm) landingRegisterForm.style.display = 'none';
        if (landingLoginForm) landingLoginForm.style.display = 'flex';
    }
}

// Обработка входа на лендинге
async function handleLandingLogin() {
    try {
        const emailInput = document.getElementById('landing-login-email');
        const passwordInput = document.getElementById('landing-login-password');
        
        if (!emailInput || !passwordInput) {
            console.error('Login form inputs not found');
            return;
        }
        
        const email = emailInput.value.trim();
        const password = passwordInput.value;
        
        // Валидация
        if (!email) {
            showNotification(window.t('enterEmailError'), 'error');
            emailInput.focus();
            return;
        }
        
        if (!password) {
            showNotification(window.t('enterPassword'), 'error');
            passwordInput.focus();
            return;
        }
        
        // Вход через модуль auth
        const result = await loginUser(email, password);
        
        if (result.success) {
            // Очищаем данные предыдущего пользователя
            stateManager.clearUserData();
            
            // Устанавливаем нового пользователя
            setCurrentUser(result.user);
            stateManager.set('user', result.user);
            
            // Синхронизируем с legacy state
            if (typeof window.state === 'object') {
                window.state.user = result.user;
            }
            
            // Загружаем данные нового пользователя
            stateManager.loadUserData();
            
            // Очищаем формы
            emailInput.value = '';
            passwordInput.value = '';
            
            // Показываем уведомление
            showNotification(`${window.t('welcome')}, ${result.user.name}!`, 'success');
            
            // Переключаем на приложение
            checkAuthAndShowContent(true);
            
            // Инициализируем приложение после небольшой задержки для рендеринга
            setTimeout(() => {
                console.log('=== Initializing app after login ===');
                console.log('User:', result.user);
                
                // ВАЖНО: Синхронизируем state.user перед вызовом initApp
                if (typeof window.state === 'object') {
                    window.state.user = result.user;
                    console.log('✓ Synced window.state.user:', window.state.user);
                } else {
                    console.error('✗ window.state not found! Creating it...');
                    window.state = { user: result.user };
                }
                
                // Рендерим все сначала
                console.log('Calling renderAll...');
                renderAll(true);
                
                // Ждем еще немного чтобы DOM точно обновился
                setTimeout(() => {
                    console.log('Checking for functions...');
                    console.log('window.initApp:', typeof window.initApp);
                    console.log('window.setupEventListeners:', typeof window.setupEventListeners);
                    console.log('window.state:', window.state);
                    
                    // Вызываем старую initApp из script.js (она вызывает setupEventListeners внутри)
                    if (typeof window.initApp === 'function') {
                        console.log('Calling window.initApp from script.js...');
                        try {
                            window.initApp();
                            console.log('✓ window.initApp called successfully');
                        } catch (e) {
                            console.error('✗ Error calling script.js initApp:', e);
                            // Fallback: вызываем setupEventListeners напрямую
                            if (typeof window.setupEventListeners === 'function') {
                                console.log('Fallback: calling setupEventListeners directly');
                                window.setupEventListeners();
                            }
                        }
                    } else {
                        console.error('✗ window.initApp not found!');
                        // Если функция не найдена, вызываем setupEventListeners напрямую
                        if (typeof window.setupEventListeners === 'function') {
                            try {
                                console.log('Calling setupEventListeners directly...');
                                window.setupEventListeners();
                                if (typeof window.initMobileMenu === 'function') window.initMobileMenu();
                                if (typeof window.initSearch === 'function') window.initSearch();
                                if (typeof window.initValidation === 'function') window.initValidation();
                                if (typeof window.initNotifications === 'function') window.initNotifications();
                                if (typeof window.initKeyboardShortcuts === 'function') window.initKeyboardShortcuts();
                                if (typeof window.initDragAndDrop === 'function') window.initDragAndDrop();
                                if (typeof window.initSettingsModal === 'function') window.initSettingsModal();
                                if (typeof window.initAnalyticsModal === 'function') window.initAnalyticsModal();
                                console.log('✓ Event listeners set up directly');
                            } catch (e) {
                                console.error('✗ Error setting up event listeners:', e);
                            }
                        } else {
                            console.error('✗ setupEventListeners not found!');
                        }
                    }
                    
                    // Также вызываем нашу модульную инициализацию
                    console.log('Calling module initApp...');
                    initApp();
                    
                    // Дополнительная проверка: вызываем setupEventListeners еще раз через секунду
                    setTimeout(() => {
                        console.log('=== Final check: calling setupEventListeners again ===');
                        if (typeof window.setupEventListeners === 'function') {
                            console.log('Calling setupEventListeners...');
                            window.setupEventListeners();
                            console.log('✓ setupEventListeners called again');
                        } else {
                            console.error('✗ setupEventListeners still not found!');
                        }
                    }, 1000);
                }, 500);
            }, 500);
        } else {
            showNotification(result.errors.join(', ') || window.t('wrongCredentials'), 'error');
        }
    } catch (error) {
        console.error('Handle landing login error:', error);
        showNotification(window.t('appLoadError') || 'Ошибка входа', 'error');
    }
}

// Обработка регистрации на лендинге
async function handleLandingRegister() {
    try {
        const nameInput = document.getElementById('landing-register-name');
        const emailInput = document.getElementById('landing-register-email');
        const passwordInput = document.getElementById('landing-register-password');
        const passwordConfirmInput = document.getElementById('landing-register-password-confirm');
        
        if (!nameInput || !emailInput || !passwordInput || !passwordConfirmInput) {
            console.error('Register form inputs not found');
            return;
        }
        
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value;
        const passwordConfirm = passwordConfirmInput.value;
        
        // Валидация
        if (!name) {
            showNotification(window.t('enterNameError'), 'error');
            nameInput.focus();
            return;
        }
        
        if (!email) {
            showNotification(window.t('enterEmailError'), 'error');
            emailInput.focus();
            return;
        }
        
        if (!password) {
            showNotification(window.t('enterPassword'), 'error');
            passwordInput.focus();
            return;
        }
        
        if (password !== passwordConfirm) {
            showNotification(window.t('passwordsNotMatch'), 'error');
            passwordConfirmInput.focus();
            return;
        }
        
        // Регистрация через модуль auth
        const result = await createUser(name, email, password);
        
        if (result.success) {
            // Очищаем данные
            stateManager.clearUserData();
            
            // Устанавливаем нового пользователя
            setCurrentUser(result.user);
            stateManager.set('user', result.user);
            
            // Инициализируем категорию "Общие"
            stateManager.set('categories', [{ id: 'general', name: window.t('generalCategory'), color: '#7395ae' }]);
            
            // Очищаем формы
            nameInput.value = '';
            emailInput.value = '';
            passwordInput.value = '';
            passwordConfirmInput.value = '';
            
            // Показываем уведомление
            showNotification(`${window.t('registrationSuccess')}, ${result.user.name}!`, 'success');
            
            // Переключаем на приложение
            checkAuthAndShowContent(true);
            setTimeout(() => {
                // Вызываем старую initApp из script.js для полной инициализации
                if (typeof window.initApp === 'function') {
                    const oldInitApp = window.initApp;
                    if (oldInitApp.toString().includes('setupEventListeners') || 
                        oldInitApp.toString().includes('checkAuthAndShowContent')) {
                        try {
                            oldInitApp();
                        } catch (e) {
                            console.warn('Old initApp error:', e);
                        }
                    }
                }
                // Также вызываем нашу модульную инициализацию
                initApp();
            }, 200);
        } else {
            showNotification(result.errors.join(', '), 'error');
        }
    } catch (error) {
        console.error('Handle landing register error:', error);
        showNotification(window.t('appLoadError') || 'Ошибка регистрации', 'error');
    }
}

// Переключение темы на лендинге
function toggleLandingTheme() {
    const isDark = document.body.classList.contains('dark-theme');
    
    requestAnimationFrame(() => {
        if (isDark) {
            document.body.classList.remove('dark-theme');
            document.body.classList.add('light-theme');
            stateManager.set('theme', 'light');
        } else {
            document.body.classList.remove('light-theme');
            document.body.classList.add('dark-theme');
            stateManager.set('theme', 'dark');
        }
        
        StorageManager.set('flowTheme', stateManager.get('theme'));
        updateLandingThemeIcon();
    });
}

// Обновление иконки темы на лендинге
function updateLandingThemeIcon() {
    const themeIcon = document.getElementById('landing-theme-icon');
    if (!themeIcon) return;
    
    const isDark = document.body.classList.contains('dark-theme');
    themeIcon.className = isDark ? 'fas fa-moon' : 'fas fa-sun';
}

// Переключение языка на лендинге
function toggleLandingLanguage() {
    const currentLang = stateManager.get('language') || 'ru';
    const newLang = currentLang === 'ru' ? 'en' : 'ru';
    
    stateManager.set('language', newLang);
    StorageManager.set('flowLanguage', newLang);
    
    updateLandingTexts();
    updateLandingLanguageButton();
}

// Обновление кнопки языка на лендинге
function updateLandingLanguageButton() {
    const landingLanguageText = document.getElementById('landing-language-text');
    const currentLang = stateManager.get('language') || 'ru';
    
    if (landingLanguageText) {
        landingLanguageText.textContent = currentLang === 'ru' ? 'RU' : 'EN';
    }
}

// Обновление текстов лендинга
function updateLandingTexts() {
    const t = window.t;
    if (!t) return;
    
    // Обновляем тексты вкладок
    const registerTab = document.getElementById('landing-register-tab');
    if (registerTab) {
        registerTab.innerHTML = `<i class="fas fa-user-plus"></i> ${t('register')}`;
    }
    
    const loginTab = document.getElementById('landing-login-tab');
    if (loginTab) {
        loginTab.innerHTML = `<i class="fas fa-sign-in-alt"></i> ${t('login')}`;
    }
    
    // Обновляем другие тексты по необходимости
    // (можно добавить больше элементов)
}

// Инициализация приложения после авторизации
function initAppAfterAuth() {
    try {
        // Загружаем данные пользователя
        stateManager.loadUserData();
        
        // Убеждаемся, что есть категория "Общие"
        let categories = stateManager.get('categories') || [];
        if (categories.length === 0) {
            categories = [{ id: 'general', name: window.t('generalCategory'), color: '#7395ae' }];
            stateManager.set('categories', categories);
        }
        
        // Синхронизируем с legacy state для совместимости со старым script.js
        if (typeof window.state === 'object') {
            window.state.user = stateManager.get('user');
            window.state.tasks = stateManager.get('tasks') || [];
            window.state.categories = stateManager.get('categories') || [];
            window.state.quickTasks = stateManager.get('quickTasks') || [];
        }
        
        // Рендерим все
        renderAll();
        
        // Инициализируем обработчики событий из модульного кода
        initEventListeners();
        applyAccessibilityAttributes();
        
        // Вызываем старую функцию initAppAfterAuth из script.js для полной инициализации
        if (typeof window.initAppAfterAuth === 'function' && window.initAppAfterAuth !== initAppAfterAuth) {
            // Сохраняем ссылку на старую функцию
            const oldInitAppAfterAuth = window.initAppAfterAuth;
            // Вызываем её для инициализации всех обработчиков
            setTimeout(() => {
                try {
                    oldInitAppAfterAuth();
                } catch (e) {
                    console.warn('Old initAppAfterAuth error:', e);
                }
            }, 100);
        }
        
        // Применяем тему
        applyTheme(stateManager.get('theme'));
        
        // Применяем язык
        applyLanguage(stateManager.get('language'));
    } catch (error) {
        console.error('Init app after auth error:', error);
    }
}

// Инициализация обработчиков событий
function initEventListeners() {
    // Добавление задачи
    const taskInput = domCache.get('taskInput');
    const addTaskBtn = domCache.get('addTaskBtn');
    
    if (taskInput) {
        taskInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleAddTask();
            }
        });
    }
    
    if (addTaskBtn) {
        addTaskBtn.addEventListener('click', handleAddTask);
    }
    
    // Остальные обработчики будут добавлены по мере необходимости
}

// Обработчик добавления задачи
function handleAddTask() {
    const taskInput = domCache.get('taskInput');
    const taskCategory = domCache.get('taskCategory');
    const taskDeadline = domCache.get('taskDeadline');
    
    if (!taskInput) return;
    
    const text = taskInput.value.trim();
    if (!text) {
        showNotification(window.t('enterTaskText'), 'error');
        return;
    }
    
    const category = taskCategory ? taskCategory.value : 'general';
    const priority = stateManager.get('currentPriority') || 'medium';
    const deadline = taskDeadline ? taskDeadline.value : '';
    
    const result = addTask(text, category, priority, deadline);
    
    if (result.success) {
        // Очищаем форму
        taskInput.value = '';
        if (taskDeadline) taskDeadline.value = '';
        taskInput.focus();

        // Скрываем подсказки после первой задачи
        stateManager.set('onboardingDismissed', true);
        
        // Рендерим
        renderAll();
        
        showNotification(window.t('taskAdded'), 'success');
    } else {
        showNotification(result.errors.join(', '), 'error');
    }
}

// Применение темы
function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    stateManager.set('theme', theme);
}

// Применение языка
function applyLanguage(lang) {
    stateManager.set('language', lang);
    StorageManager.set('flowLanguage', lang);
    // Перерисовываем интерфейс
    renderAll();
}

// Базовые ARIA-атрибуты для модалок/кнопок
function applyAccessibilityAttributes() {
    try {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.setAttribute('role', 'dialog');
            modal.setAttribute('aria-modal', 'true');
        });

        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.setAttribute('role', 'tab');
            btn.setAttribute('aria-pressed', btn.classList.contains('active') ? 'true' : 'false');
        });

        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        if (mobileMenuBtn) {
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
        }
    } catch (e) {
        console.warn('Accessibility attributes update failed', e);
    }
}

// Показать нужный экран в зависимости от авторизации
function checkAuthAndShowContent(animate = false) {
    const landingPage = domCache.get('landingPage') || document.getElementById('landing-page');
    const appContainer = domCache.get('appContainer') || document.getElementById('app-container');
    const user = stateManager.get('user') || getCurrentUser();

    // Синхронизируем legacy state из старого script.js, чтобы не было расхождений
    if (typeof window.state === 'object') {
        window.state.user = user || null;
    }

    if (user) {
        // Убедимся, что stateManager знает о пользователе
        if (!stateManager.get('user')) {
            stateManager.set('user', user, false);
            stateManager.loadUserData();
        }

        if (landingPage) {
            if (animate) {
                landingPage.style.opacity = '0';
                landingPage.style.transition = 'opacity 0.3s ease';
                setTimeout(() => {
                    landingPage.style.display = 'none';
                }, 300);
            } else {
                landingPage.style.display = 'none';
            }
        }

        if (appContainer) {
            if (animate) {
                appContainer.style.opacity = '0';
                appContainer.style.display = 'block';
                appContainer.style.transition = 'opacity 0.3s ease';
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        appContainer.style.opacity = '1';
                    });
                });
            } else {
                appContainer.style.display = 'block';
            }
        }

        // Перерисовываем задачи сразу после входа
        renderAll(true);
    } else {
        if (appContainer) {
            if (animate) {
                appContainer.style.opacity = '0';
                appContainer.style.transition = 'opacity 0.3s ease';
                setTimeout(() => {
                    appContainer.style.display = 'none';
                }, 300);
            } else {
                appContainer.style.display = 'none';
            }
        }

        if (landingPage) {
            if (animate) {
                landingPage.style.opacity = '0';
                landingPage.style.display = 'block';
                landingPage.style.transition = 'opacity 0.3s ease';
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        landingPage.style.opacity = '1';
                    });
                });
            } else {
                landingPage.style.display = 'block';
            }
        }
    }
}

// Показ уведомления
function showNotification(message, type = 'info') {
    try {
        // Ищем контейнер для уведомлений
        let notificationContainer = document.getElementById('notification-container');
        
        if (!notificationContainer) {
            // Создаем контейнер, если его нет
            notificationContainer = document.createElement('div');
            notificationContainer.id = 'notification-container';
            notificationContainer.className = 'notification-container';
            document.body.appendChild(notificationContainer);
        }
        
        // Создаем уведомление
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Добавляем в контейнер
        notificationContainer.appendChild(notification);
        
        // Показываем с анимацией
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);
        
        // Удаляем через 3 секунды
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    } catch (error) {
        console.error('Show notification error:', error);
        // Fallback на alert
        alert(message);
    }
}

// Функция фильтрации по категории
window.filterByCategory = function(categoryId) {
    stateManager.set('currentCategory', categoryId);
    renderTasks();
    renderCategories();
};

// Функция использования быстрой задачи
window.useQuickTask = function(id) {
    const quickTasks = stateManager.get('quickTasks') || [];
    const quickTask = quickTasks.find(t => t.id === id);
    if (!quickTask) return;
    
    const taskInput = domCache.get('taskInput');
    if (taskInput) {
        taskInput.value = quickTask.text;
        taskInput.focus();
    }
    
    // Устанавливаем приоритет
    stateManager.set('currentPriority', quickTask.priority);
    
    // Обновляем кнопки приоритета
    document.querySelectorAll('.priority-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.priority === quickTask.priority) {
            btn.classList.add('active');
        }
    });
    
    showNotification(window.t('taskAddedToForm'), 'info');
};

// Функция удаления быстрой задачи
window.deleteQuickTask = function(id) {
    const quickTasks = stateManager.get('quickTasks') || [];
    const filtered = quickTasks.filter(t => t.id !== id);
    stateManager.set('quickTasks', filtered);
    renderQuickTasks();
    stateManager.save();
};

// Функция переключения режима редактирования быстрых задач
window.toggleQuickTasksEditMode = function() {
    const editMode = !stateManager.get('quickTasksEditMode');
    stateManager.set('quickTasksEditMode', editMode);
    renderQuickTasks();
    
    const editBtn = document.getElementById('edit-quick-tasks-btn');
    if (editBtn) {
        editBtn.textContent = editMode ? (window.t('finishEditing') || 'Завершить редактирование') : (window.t('editTemplates') || 'Редактировать шаблоны');
    }
};

// Экспортируем функции для использования в HTML
window.initApp = initApp;
window.initAppAfterAuth = initAppAfterAuth;
window.initLanding = initLanding;
window.handleAddTask = handleAddTask;
window.handleLandingLogin = handleLandingLogin;
window.handleLandingRegister = handleLandingRegister;
window.switchLandingTab = switchLandingTab;
window.toggleLandingTheme = toggleLandingTheme;
window.toggleLandingLanguage = toggleLandingLanguage;
window.checkAuthAndShowContent = checkAuthAndShowContent;
window.applyTheme = applyTheme;
window.applyLanguage = applyLanguage;
window.applyAccessibilityAttributes = applyAccessibilityAttributes;
window.showNotification = showNotification;
window.filterByCategory = window.filterByCategory;
window.useQuickTask = window.useQuickTask;
window.deleteQuickTask = window.deleteQuickTask;
window.toggleQuickTasksEditMode = window.toggleQuickTasksEditMode;

// Экспортируем функции из ui.js
window.updateAppInfo = updateAppInfo;
window.updateProgressBars = updateProgressBars;

// Функции editTask, showDeleteConfirm, toggleTaskNotes должны быть определены в script.js
// Проверяем их наличие и добавляем fallback если нужно
if (typeof window.editTask !== 'function') {
    window.editTask = function(id) {
        console.warn('editTask not implemented yet, task id:', id);
    };
}
if (typeof window.showDeleteConfirm !== 'function') {
    window.showDeleteConfirm = function(id) {
        if (confirm('Удалить задачу?')) {
            deleteTask(id);
        }
    };
}
if (typeof window.toggleTaskNotes !== 'function') {
    window.toggleTaskNotes = function(id) {
        const taskCard = document.querySelector(`.task-card[data-id="${id}"], .urgent-task-card[data-id="${id}"]`);
        if (taskCard) {
            const notesPreview = taskCard.querySelector('.task-notes-preview');
            if (notesPreview) {
                notesPreview.classList.toggle('expanded');
            }
        }
    };
}

// Гарантируем, что наша версия проверки авторизации доминирует над старым script.js
// и удаляем все старые обработчики с кнопок, полностью клонируя узлы
function rebindLandingHandlers() {
    [
        { id: 'landing-login-btn', handler: handleLandingLogin },
        { id: 'landing-register-btn', handler: handleLandingRegister },
    ].forEach(({ id, handler }) => {
        const btn = document.getElementById(id);
        if (btn && btn.parentNode) {
            const clone = btn.cloneNode(true); // удаляет все существующие слушатели
            btn.parentNode.replaceChild(clone, btn);
            clone.addEventListener('click', handler);
        }
    });
}

window.addEventListener('load', () => {
    window.checkAuthAndShowContent = checkAuthAndShowContent;
    rebindLandingHandlers();

    // Регистрация service worker (если поддерживается)
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js').catch(err => {
            console.warn('SW registration failed', err);
        });
    }
});

// Функция для очистки кэша и Service Worker (для отладки)
window.clearCacheAndSW = async function() {
    try {
        // Отменяем регистрацию всех Service Workers
        if ('serviceWorker' in navigator) {
            const registrations = await navigator.serviceWorker.getRegistrations();
            for (let registration of registrations) {
                await registration.unregister();
                console.log('Service Worker unregistered:', registration.scope);
            }
        }
        
        // Очищаем кэш
        if ('caches' in window) {
            const cacheNames = await caches.keys();
            for (let cacheName of cacheNames) {
                await caches.delete(cacheName);
                console.log('Cache deleted:', cacheName);
            }
        }
        
        // Очищаем localStorage (опционально, закомментируйте если не нужно)
        // localStorage.clear();
        
        console.log('✓ Cache and Service Worker cleared!');
        alert('Кэш и Service Worker очищены! Страница будет перезагружена.');
        window.location.reload(true);
    } catch (error) {
        console.error('Error clearing cache:', error);
        alert('Ошибка при очистке кэша: ' + error.message);
    }
};

// Добавляем в консоль подсказку
console.log('%c💡 Для очистки кэша и Service Worker выполните: clearCacheAndSW()', 'color: #7395ae; font-weight: bold;');

