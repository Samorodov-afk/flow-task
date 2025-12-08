// Переводы
const translations = {
    ru: {
        // Общие
        'settings': 'Настройки',
        'appearance': 'Внешний вид',
        'categories': 'Категории',
        'notifications': 'Уведомления',
        'data': 'Данные',
        'save': 'Сохранить',
        'close': 'Закрыть',
        'cancel': 'Отмена',
        'delete': 'Удалить',
        'edit': 'Редактировать',
        'add': 'Добавить',
        'confirm': 'Подтвердить',
        'language': 'Язык интерфейса',
        'russian': 'Русский',
        'english': 'English',
        'theme': 'Тема интерфейса',
        'dark': 'Тёмная',
        'light': 'Светлая',
        'auto': 'Авто',
        // Задачи
        'myTasks': 'Мои задачи',
        'allCategories': 'Все категории',
        'all': 'Все',
        'high': 'Высокий',
        'overdue': 'Просрочено',
        'archived': 'Архив',
        'activeTasks': 'активных',
        'taskInput': 'Что нужно сделать?',
        'deadline': 'Срок',
        'priority': 'Приоритет',
        'low': 'Низкий',
        'medium': 'Средний',
        'taskAdded': 'Задача добавлена',
        'taskUpdated': 'Задача обновлена',
        'taskDeleted': 'Задача удалена',
        'taskCompleted': 'Задача выполнена и перемещена в архив',
        'taskResumed': 'Задача возобновлена',
        'taskArchived': 'Задача перемещена в архив',
        'taskUnarchived': 'Задача восстановлена из архива',
        'enterTaskText': 'Введите текст задачи',
        'taskTextRequired': 'Текст задачи не может быть пустым',
        // Поиск и сортировка
        'searchTasks': 'Поиск задач...',
        'sortByPriority': 'По приоритету',
        'sortByDeadline': 'По сроку',
        'sortNewest': 'Сначала новые',
        'sortOldest': 'Сначала старые',
        'sortByOrder': 'По порядку',
        // Категории
        'categoryName': 'Название категории',
        'addCategory': 'Добавить категорию',
        'categoryAdded': 'Категория добавлена',
        'categoryDeleted': 'Категория удалена',
        'categoryNameRequired': 'Введите название категории',
        'categoryExists': 'Категория с таким названием уже существует',
        'deleteCategoryConfirm': 'Удалить категорию?',
        'categoryDeleteMessage': 'Все задачи из этой категории будут перемещены в "Общие"',
        'generalCategory': 'Общие',
        'cannotDeleteGeneral': 'Нельзя удалить категорию "Общие"',
        // Быстрые задачи
        'quickStart': 'Быстрый старт',
        'editTemplates': 'Редактировать шаблоны',
        'addTemplate': 'Добавить шаблон',
        'quickTaskText': 'Текст быстрой задачи',
        'quickTaskAdded': 'Быстрая задача добавлена',
        'quickTaskDeleted': 'Шаблон задачи удален',
        'deleteTemplateConfirm': 'Удалить шаблон задачи?',
        'templateDeleteMessage': 'Этот шаблон будет удален из быстрого старта',
        'taskAddedToForm': 'Задача добавлена в форму',
        // Уведомления
        'notificationsEnabled': 'Включить уведомления о дедлайнах',
        'notifyBeforeDeadline': 'Уведомлять за день до дедлайна',
        'notifyOnDeadline': 'Уведомлять в день дедлайна',
        // Данные
        'exportData': 'Экспорт данных',
        'exportTasks': 'Экспортировать задачи',
        'dataExported': 'Данные экспортированы успешно',
        'totalTasks': 'Всего задач',
        'completed': 'Выполнено',
        'categoriesCount': 'Категорий',
        // Профиль
        'profile': 'Профиль',
        'changePassword': 'Изменить пароль',
        'logout': 'Выйти',
        'registered': 'Зарегистрирован:',
        'passwordChanged': 'Пароль успешно изменен',
        'loggedOut': 'Вы вышли из аккаунта',
        // Аналитика
        'analytics': 'Аналитика продуктивности',
        'efficiency': 'Эффективность',
        'today': 'Сегодня',
        'daysStreak': 'Дней подряд',
        'avgCompletion': 'Средняя выполняемость',
        'priorityDistribution': 'Распределение по приоритетам',
        'completionTrends': 'Тенденции выполнения',
        'productivity': 'Продуктивность',
        'timeMetrics': 'Временные метрики',
        'avgCompletionTime': 'Среднее время выполнения',
        'onTimeRate': 'Выполнено в срок',
        'recommendations': 'Рекомендации',
        'yesterday': 'Вчера',
        'week': 'За неделю',
        'month': 'За месяц',
        'total': 'Всего',
        // Лендинг
        'landingSubtitle': 'Твой личный менеджер задач, который не забудет про дедлайн (в отличие от тебя 😉)',
        'startNow': 'Начни прямо сейчас',
        'createAccount': 'Создай аккаунт и начни управлять задачами',
        'register': 'Регистрация',
        'login': 'Вход',
        'name': 'Имя',
        'email': 'Email',
        'password': 'Пароль',
        'confirmPassword': 'Подтвердите пароль',
        'enterName': 'Как к тебе обращаться?',
        'enterEmail': 'your@email.com',
        'minPassword': 'Минимум 6 символов',
        'repeatPassword': 'Повторите пароль',
        'go': 'Поехали!',
        'enter': 'Войти',
        'welcome': 'Добро пожаловать',
        'registrationSuccess': 'Регистрация успешна! Добро пожаловать',
        // Пустые состояния
        'noHighPriority': 'Нет задач с высоким приоритетом',
        'allImportantDone': 'Все важные задачи выполнены',
        'noOverdue': 'Просроченных задач нет',
        'onTime': 'Вы в срок!',
        'archiveEmpty': 'Архив пуст',
        'completedTasksHere': 'Здесь будут выполненные задачи',
        'noTasks': 'Нет задач',
        'addFirstTask': 'Добавьте первую задачу или используйте быстрый старт',
        // Другие
        'settingsSaved': 'Настройки сохранены',
        'deleteTaskConfirm': 'Удалить задачу?',
        'taskDeleteMessage': 'Задача будет безвозвратно удалена',
        'deleteConfirm': 'Подтверждение',
        'areYouSure': 'Вы уверены?',
        'notes': 'Заметки/Комментарии',
        'addNotes': 'Добавьте заметки к задаче...',
        'urgentToday': 'Задачи истекают сегодня',
        'created': 'Создано:',
        'exportFormat': 'ДатаСоздания | Приоритет | Категория | Задача | Срок | ДатаЗавершения',
        // Лендинг - дополнительные
        'landingFeature1': 'Приоритеты, которые реально работают',
        'landingFeature2': 'Аналитика твоей продуктивности',
        'landingFeature3': 'Быстрые шаблоны для ленивых',
        'landingFeature4': 'Темная тема для ночных сов',
        'landingDescription': 'Устал от хаоса в голове? Забываешь важные дела? FlowTask — это не просто список задач, это твой персональный ассистент, который поможет навести порядок в жизни (или хотя бы попытаться).',
        'landingHumor': 'P.S. Мы не гарантируем, что ты станешь продуктивнее, но хотя бы будешь знать, что должен был сделать 😄',
        'enterPassword': 'Введите пароль',
        'enterEmailError': 'Введите email',
        'enterNameError': 'Введите имя',
        'invalidEmail': 'Некорректный email',
        'passwordTooShort': 'Пароль должен быть не менее 6 символов',
        'passwordsNotMatch': 'Пароли не совпадают',
        'userExists': 'Пользователь с таким email уже существует',
        'wrongCredentials': 'Неверный email или пароль',
        'readyForNewTask': 'Готов к вводу новой задачи',
        'dataSaved': 'Данные сохранены',
        'appUpdateAvailable': 'Доступно обновление приложения',
        'toggleTheme': 'Переключить тему',
        'toggleLanguage': 'Переключить язык',
        'openMenu': 'Открыть меню',
        'taskList': 'Список задач',
        'editTask': 'Редактировать задачу',
        'toArchive': 'В архив',
        'fromArchive': 'Из архива',
        'enterQuickTaskText': 'Введите текст быстрой задачи',
        'addQuickTask': 'Добавить',
        'emptyQuickTasks': 'Добавьте быстрые задачи для удобства',
        'info': 'Информация',
        'exportDescription': 'Скачайте все задачи в формате .txt. Данные будут сохранены в формате:',
        'currentPassword': 'Текущий пароль',
        'newPassword': 'Новый пароль',
        'confirmNewPassword': 'Подтвердите новый пароль',
        'enterCurrentPassword': 'Введите текущий пароль',
        'enterNewPassword': 'Минимум 6 символов',
        'repeatNewPassword': 'Повторите новый пароль',
        'wrongPassword': 'Неверный пароль',
        'functionInDevelopment': 'Функция в разработке',
        'appLoadError': 'Ошибка загрузки приложения',
        'installApp': 'Установить приложение',
        'noChanges': 'без изменений',
        'finishEditing': 'Завершить редактирование',
        'deleteCategoryTitle': 'Удалить категорию',
        'deleteTemplateTitle': 'Удалить шаблон',
        'exportCreatedDate': 'ДатаСоздания',
        'exportPriority': 'Приоритет',
        'exportCategory': 'Категория',
        'exportTask': 'Задача',
        'exportDeadline': 'Срок',
        'exportCompletionDate': 'ДатаЗавершения',
        // Рекомендации
        'recOverdue': 'У вас {count} просроченных задач. Рекомендуем начать с них.',
        'recTooManyToday': 'Сегодня у вас {count} задач. Попробуйте распределить нагрузку равномернее.',
        'recHighPriority': 'Обратите внимание на {count} задач с высоким приоритетом.',
        'recLowCompletion': 'Ваша средняя выполняемость {percent}%. Попробуйте ставить более реалистичные сроки.',
        'recLowOnTime': 'Только {percent}% задач выполнены в срок. Увеличьте временные буферы в планах.',
        'recGreatWork': 'Отличная работа! Продолжайте в том же духе.',
        'dayBeforeYesterday': 'позавчера',
        'prevWeek': 'пред. неделя',
        'prevMonth': 'пред. месяц',
        'periodWeek': 'Неделя',
        'periodMonth': 'Месяц',
        'periodQuarter': 'Квартал',
        'hours': 'ч',
        'days': 'д',
        'months': 'м'
    },
    en: {
        // General
        'settings': 'Settings',
        'appearance': 'Appearance',
        'categories': 'Categories',
        'notifications': 'Notifications',
        'data': 'Data',
        'save': 'Save',
        'close': 'Close',
        'cancel': 'Cancel',
        'delete': 'Delete',
        'edit': 'Edit',
        'add': 'Add',
        'confirm': 'Confirm',
        'language': 'Interface Language',
        'russian': 'Русский',
        'english': 'English',
        'theme': 'Interface Theme',
        'dark': 'Dark',
        'light': 'Light',
        'auto': 'Auto',
        // Tasks
        'myTasks': 'My Tasks',
        'allCategories': 'All Categories',
        'all': 'All',
        'high': 'High',
        'overdue': 'Overdue',
        'archived': 'Archived',
        'activeTasks': 'active',
        'taskInput': 'What needs to be done?',
        'deadline': 'Deadline',
        'priority': 'Priority',
        'low': 'Low',
        'medium': 'Medium',
        'taskAdded': 'Task added',
        'taskUpdated': 'Task updated',
        'taskDeleted': 'Task deleted',
        'taskCompleted': 'Task completed and moved to archive',
        'taskResumed': 'Task resumed',
        'taskArchived': 'Task moved to archive',
        'taskUnarchived': 'Task restored from archive',
        'enterTaskText': 'Enter task text',
        'taskTextRequired': 'Task text cannot be empty',
        // Search and sort
        'searchTasks': 'Search tasks...',
        'sortByPriority': 'By priority',
        'sortByDeadline': 'By deadline',
        'sortNewest': 'Newest first',
        'sortOldest': 'Oldest first',
        'sortByOrder': 'By order',
        // Categories
        'categoryName': 'Category name',
        'addCategory': 'Add category',
        'categoryAdded': 'Category added',
        'categoryDeleted': 'Category deleted',
        'categoryNameRequired': 'Enter category name',
        'categoryExists': 'Category with this name already exists',
        'deleteCategoryConfirm': 'Delete category?',
        'categoryDeleteMessage': 'All tasks from this category will be moved to "General"',
        'generalCategory': 'General',
        'cannotDeleteGeneral': 'Cannot delete "General" category',
        // Quick tasks
        'quickStart': 'Quick Start',
        'editTemplates': 'Edit templates',
        'addTemplate': 'Add template',
        'quickTaskText': 'Quick task text',
        'quickTaskAdded': 'Quick task added',
        'quickTaskDeleted': 'Task template deleted',
        'deleteTemplateConfirm': 'Delete task template?',
        'templateDeleteMessage': 'This template will be removed from quick start',
        'taskAddedToForm': 'Task added to form',
        // Notifications
        'notificationsEnabled': 'Enable deadline notifications',
        'notifyBeforeDeadline': 'Notify one day before deadline',
        'notifyOnDeadline': 'Notify on deadline day',
        // Data
        'exportData': 'Export Data',
        'exportTasks': 'Export tasks',
        'dataExported': 'Data exported successfully',
        'totalTasks': 'Total Tasks',
        'completed': 'Completed',
        'categoriesCount': 'Categories',
        // Profile
        'profile': 'Profile',
        'changePassword': 'Change Password',
        'logout': 'Logout',
        'registered': 'Registered:',
        'passwordChanged': 'Password changed successfully',
        'loggedOut': 'You have logged out',
        // Analytics
        'analytics': 'Productivity Analytics',
        'efficiency': 'Efficiency',
        'today': 'Today',
        'daysStreak': 'Days in a row',
        'avgCompletion': 'Average completion',
        'priorityDistribution': 'Priority Distribution',
        'completionTrends': 'Completion Trends',
        'productivity': 'Productivity',
        'timeMetrics': 'Time Metrics',
        'avgCompletionTime': 'Average completion time',
        'onTimeRate': 'Completed on time',
        'recommendations': 'Recommendations',
        'yesterday': 'Yesterday',
        'week': 'For the week',
        'month': 'For the month',
        'total': 'Total',
        // Landing
        'landingSubtitle': 'Your personal task manager that won\'t forget about deadlines (unlike you 😉)',
        'startNow': 'Start Now',
        'createAccount': 'Create an account and start managing tasks',
        'register': 'Register',
        'login': 'Login',
        'name': 'Name',
        'email': 'Email',
        'password': 'Password',
        'confirmPassword': 'Confirm Password',
        'enterName': 'What should we call you?',
        'enterEmail': 'your@email.com',
        'minPassword': 'Minimum 6 characters',
        'repeatPassword': 'Repeat password',
        'go': 'Let\'s Go!',
        'enter': 'Enter',
        'welcome': 'Welcome',
        'registrationSuccess': 'Registration successful! Welcome',
        // Empty states
        'noHighPriority': 'No high priority tasks',
        'allImportantDone': 'All important tasks completed',
        'noOverdue': 'No overdue tasks',
        'onTime': 'You\'re on time!',
        'archiveEmpty': 'Archive is empty',
        'completedTasksHere': 'Completed tasks will appear here',
        'noTasks': 'No tasks',
        'addFirstTask': 'Add your first task or use quick start',
        // Others
        'settingsSaved': 'Settings saved',
        'deleteTaskConfirm': 'Delete task?',
        'taskDeleteMessage': 'Task will be permanently deleted',
        'deleteConfirm': 'Confirmation',
        'areYouSure': 'Are you sure?',
        'notes': 'Notes/Comments',
        'addNotes': 'Add notes to task...',
        'urgentToday': 'Tasks expiring today',
        'created': 'Created:',
        'exportFormat': 'CreatedDate | Priority | Category | Task | Deadline | CompletionDate',
        // Landing - additional
        'landingFeature1': 'Priorities that actually work',
        'landingFeature2': 'Your productivity analytics',
        'landingFeature3': 'Quick templates for lazy people',
        'landingFeature4': 'Dark theme for night owls',
        'landingDescription': 'Tired of chaos in your head? Forgetting important things? FlowTask is not just a task list, it\'s your personal assistant that will help you organize your life (or at least try).',
        'landingHumor': 'P.S. We don\'t guarantee you\'ll become more productive, but at least you\'ll know what you should have done 😄',
        'enterPassword': 'Enter password',
        'enterEmailError': 'Enter email',
        'enterNameError': 'Enter name',
        'invalidEmail': 'Invalid email',
        'passwordTooShort': 'Password must be at least 6 characters',
        'passwordsNotMatch': 'Passwords do not match',
        'userExists': 'User with this email already exists',
        'wrongCredentials': 'Invalid email or password',
        'readyForNewTask': 'Ready for new task input',
        'dataSaved': 'Data saved',
        'appUpdateAvailable': 'App update available',
        'toggleTheme': 'Toggle theme',
        'toggleLanguage': 'Toggle language',
        'openMenu': 'Open menu',
        'taskList': 'Task List',
        'editTask': 'Edit task',
        'toArchive': 'To archive',
        'fromArchive': 'From archive',
        'enterQuickTaskText': 'Enter quick task text',
        'addQuickTask': 'Add',
        'emptyQuickTasks': 'Add quick tasks for convenience',
        'info': 'Information',
        'exportDescription': 'Download all tasks in .txt format. Data will be saved in format:',
        'currentPassword': 'Current password',
        'newPassword': 'New password',
        'confirmNewPassword': 'Confirm new password',
        'enterCurrentPassword': 'Enter current password',
        'enterNewPassword': 'Minimum 6 characters',
        'repeatNewPassword': 'Repeat new password',
        'wrongPassword': 'Wrong password',
        'functionInDevelopment': 'Feature in development',
        'appLoadError': 'Application load error',
        'installApp': 'Install App',
        'noChanges': 'no changes',
        'finishEditing': 'Finish editing',
        'deleteCategoryTitle': 'Delete category',
        'deleteTemplateTitle': 'Delete template',
        'exportCreatedDate': 'CreatedDate',
        'exportPriority': 'Priority',
        'exportCategory': 'Category',
        'exportTask': 'Task',
        'exportDeadline': 'Deadline',
        'exportCompletionDate': 'CompletionDate',
        // Recommendations
        'recOverdue': 'You have {count} overdue tasks. We recommend starting with them.',
        'recTooManyToday': 'You have {count} tasks today. Try to distribute the workload more evenly.',
        'recHighPriority': 'Pay attention to {count} high priority tasks.',
        'recLowCompletion': 'Your average completion rate is {percent}%. Try setting more realistic deadlines.',
        'recLowOnTime': 'Only {percent}% of tasks are completed on time. Increase time buffers in plans.',
        'recGreatWork': 'Great work! Keep it up.',
        'dayBeforeYesterday': 'day before yesterday',
        'prevWeek': 'prev. week',
        'prevMonth': 'prev. month',
        'periodWeek': 'Week',
        'periodMonth': 'Month',
        'periodQuarter': 'Quarter',
        'hours': 'h',
        'days': 'd',
        'months': 'm'
    }
};

// Получаем язык из localStorage до создания state
const currentLanguage = localStorage.getItem('flowLanguage') || 'ru';

// Функция перевода
function t(key) {
    // Всегда получаем актуальный язык из state или localStorage
    const lang = (state && state.language) || localStorage.getItem('flowLanguage') || 'ru';
    return translations[lang]?.[key] || translations['ru'][key] || key;
}

// Функции для работы с данными пользователя
function getUserStorageKey(key) {
    if (!state || !state.user || !state.user.id) {
        // Если пользователь не авторизован, используем общий ключ
        return key;
    }
    return `${key}_${state.user.id}`;
}

// Функция для очистки DOM контейнеров
function clearDOMContainers() {
    const tasksContainer = document.getElementById('tasks-container');
    const urgentContainer = document.getElementById('urgent-tasks-container');
    const quickTasksContainer = document.getElementById('quick-tasks-list');
    const categoriesContainer = document.getElementById('categories-list');
    
    if (tasksContainer) tasksContainer.innerHTML = '';
    if (urgentContainer) urgentContainer.innerHTML = '';
    if (quickTasksContainer) quickTasksContainer.innerHTML = '';
    if (categoriesContainer) categoriesContainer.innerHTML = '';
}

function loadUserData() {
    // ВАЖНО: Сначала очищаем все данные предыдущего пользователя
    state.tasks = [];
    state.categories = [];
    state.quickTasks = [];
    state.taskOrder = [];
    
    if (!state || !state.user || !state.user.id) {
        // Если пользователь не авторизован, загружаем пустые данные
        state.categories = [{ id: 'general', name: t('generalCategory'), color: '#7395ae' }];
        return;
    }
    
    // Загружаем данные пользователя с правильным userId
    const userId = state.user.id;
    const tasksKey = `flowTasks_${userId}`;
    const categoriesKey = `flowCategories_${userId}`;
    const quickTasksKey = `flowQuickTasks_${userId}`;
    const taskOrderKey = `flowTaskOrder_${userId}`;
    
    state.tasks = JSON.parse(localStorage.getItem(tasksKey)) || [];
    state.categories = (() => {
        const savedCategories = JSON.parse(localStorage.getItem(categoriesKey)) || [];
        // Если категорий нет, создаем категорию "Общие"
        if (savedCategories.length === 0) {
            return [{ id: 'general', name: t('generalCategory'), color: '#7395ae' }];
        }
        // Обновляем категорию "Общие" если она есть
        const generalCategory = savedCategories.find(cat => cat.id === 'general');
        if (generalCategory) {
            generalCategory.name = t('generalCategory');
        } else {
            // Если категории "Общие" нет, добавляем её
            savedCategories.unshift({ id: 'general', name: t('generalCategory'), color: '#7395ae' });
        }
        return savedCategories;
    })();
    state.quickTasks = JSON.parse(localStorage.getItem(quickTasksKey)) || [];
    state.taskOrder = JSON.parse(localStorage.getItem(taskOrderKey)) || [];
}

// Состояние приложения
let state = {
    tasks: [],
    categories: [],
    quickTasks: [],
    currentFilter: 'all',
    currentCategory: 'all',
    currentPriority: 'medium',
    editingTaskId: null,
    theme: localStorage.getItem('flowTheme') || 'auto',
    language: localStorage.getItem('flowLanguage') || 'ru',
    primaryColor: localStorage.getItem('flowPrimaryColor') || '#7395ae',
    quickTasksEditMode: false,
    selectedColor: '#7395ae',
    searchQuery: '',
    taskOrder: [],
    analyticsPeriod: 'week',
    notificationsEnabled: localStorage.getItem('flowNotificationsEnabled') !== 'false',
    notificationsBeforeDeadline: localStorage.getItem('flowNotificationsBeforeDeadline') !== 'false',
    notificationsOnDeadline: localStorage.getItem('flowNotificationsOnDeadline') !== 'false',
    flatpickrInstances: {},
    autoSaveTimer: null,
    user: JSON.parse(localStorage.getItem('flowUser')) || null
};

// Загружаем данные пользователя после инициализации state
// Это будет вызвано после определения функций getUserStorageKey и loadUserData

let pendingConfirmAction = null;
let notificationQueue = [];
let chartInstances = {};
let draggedItem = null;
let dragPlaceholder = null;
let dragStartX = 0;
let dragStartY = 0;
let isDragging = false;
let dragThreshold = 10; // Минимальное расстояние для начала перетаскивания
let tempSettings = null; // Временные настройки для модального окна

// Инициализация приложения
function initApp() {
    // Синхронизируем язык из localStorage
    const savedLanguage = localStorage.getItem('flowLanguage') || 'ru';
    if (state.language !== savedLanguage) {
        state.language = savedLanguage;
    }
    
    // ВАЖНО: Проверяем, что пользователь действительно авторизован
    // и загружаем его данные только если он есть
    const savedUser = JSON.parse(localStorage.getItem('flowUser'));
    if (savedUser && savedUser.id) {
        // Обновляем state.user на актуального пользователя
        state.user = savedUser;
        // Загружаем данные этого пользователя
        loadUserData();
    } else {
        // Если пользователя нет, очищаем данные
        state.user = null;
        state.tasks = [];
        state.categories = [];
        state.quickTasks = [];
        state.taskOrder = [];
    }
    
    loadSettings();
    
    // Обновляем тексты интерфейса после загрузки языка
    updateAllTexts();
    
    // Проверяем авторизацию
    checkAuthAndShowContent();
    
    // Инициализируем лендинг
    initLanding();
    
    // Если пользователь авторизован, инициализируем основное приложение
    if (state.user) {
        console.log('User authenticated, initializing app. User:', state.user);
        // Убеждаемся, что категории инициализированы
        if (!state.categories || state.categories.length === 0) {
            state.categories = [{ id: 'general', name: t('generalCategory'), color: '#7395ae' }];
        }
        
        // Небольшая задержка чтобы DOM точно был готов
        setTimeout(() => {
            console.log('Calling setupEventListeners from initApp');
            setupEventListeners();
        }, 100);
        initMobileMenu();
        initSearch();
        initValidation();
        initNotifications();
        initKeyboardShortcuts();
        initDragAndDrop();
        initSettingsModal();
        initAnalyticsModal();
        updateDateTime();
        updateFooterDateTime();
        restoreTaskOrder();
        renderAll();
        checkDeadlineNotifications();
        
        // Запуск календаря после загрузки DOM
        setTimeout(() => {
            initFlatpickr();
        }, 100);
        
        // Оптимизированное обновление времени
        let lastSecond = -1;
        setInterval(() => {
            const now = new Date();
            const currentSecond = now.getSeconds();
            
            // Обновляем время только если изменилась секунда
            if (currentSecond !== lastSecond) {
                updateDateTime();
                updateFooterDateTime();
                lastSecond = currentSecond;
            }
            
            // Проверяем уведомления только в начале каждой минуты
            if (currentSecond === 0) {
                checkDeadlineNotifications();
            }
        }, 1000);
        
        // Дополнительная проверка уведомлений каждую минуту (на случай пропуска)
        setInterval(checkDeadlineNotifications, 60000);
        
        if (state.tasks.length === 0) {
            loadSampleData();
        }
    }
}

// Проверка авторизации и показ соответствующего контента
function checkAuthAndShowContent(animate = false) {
    const landingPage = document.getElementById('landing-page');
    const appContainer = document.getElementById('app-container');
    
    if (state.user) {
        // Пользователь авторизован - показываем задачник
        if (animate && landingPage) {
            landingPage.style.opacity = '0';
            landingPage.style.transition = 'opacity 0.3s ease';
            setTimeout(() => {
                if (landingPage) landingPage.style.display = 'none';
            }, 300);
        } else if (landingPage) {
            landingPage.style.display = 'none';
        }
        
        if (appContainer) {
            if (animate) {
                appContainer.style.opacity = '0';
                appContainer.style.display = 'grid';
                appContainer.style.transition = 'opacity 0.3s ease';
                // Используем requestAnimationFrame для плавного появления
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        if (appContainer) {
                            appContainer.style.opacity = '1';
                        }
                    });
                });
            } else {
                appContainer.style.display = 'grid';
            }
        }
    } else {
        // Пользователь не авторизован - показываем лендинг
        if (appContainer) {
            if (animate) {
                appContainer.style.opacity = '0';
                appContainer.style.transition = 'opacity 0.3s ease';
                setTimeout(() => {
                    if (appContainer) appContainer.style.display = 'none';
                }, 300);
            } else {
                appContainer.style.display = 'none';
            }
        }
        
        if (landingPage) {
            if (animate) {
                landingPage.style.opacity = '0';
                landingPage.style.display = 'flex';
                landingPage.style.transition = 'opacity 0.3s ease';
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        if (landingPage) {
                            landingPage.style.opacity = '1';
                        }
                    });
                });
            } else {
                landingPage.style.display = 'flex';
            }
        }
    }
}

// Плавная инициализация приложения после авторизации
function initAppAfterAuth() {
    // Загружаем данные пользователя (на случай, если они еще не загружены)
    if (state.user) {
        loadUserData();
    }
    
    // Убеждаемся, что категории инициализированы
    if (!state.categories || state.categories.length === 0) {
        state.categories = [{ id: 'general', name: t('generalCategory'), color: '#7395ae' }];
    }
    
    // Обновляем категорию "Общие" при загрузке приложения
    const generalCategory = state.categories.find(cat => cat.id === 'general');
    if (generalCategory) {
        generalCategory.name = t('generalCategory');
    } else {
        // Если категории "Общие" нет, добавляем её
        state.categories.unshift({ id: 'general', name: t('generalCategory'), color: '#7395ae' });
    }
    
    // Инициализируем все компоненты приложения
    setupEventListeners();
    initMobileMenu();
    initSearch();
    initValidation();
    initNotifications();
    initKeyboardShortcuts();
    initDragAndDrop();
    initSettingsModal();
    initAnalyticsModal();
    updateDateTime();
    updateFooterDateTime();
    restoreTaskOrder();
    
    // Обновляем тексты интерфейса
    updateAllTexts();
    
    checkDeadlineNotifications();
    updateProfileButton();
    
    // Запуск календаря после загрузки DOM
    setTimeout(() => {
        initFlatpickr();
    }, 100);
    
    // Оптимизированное обновление времени
    let lastSecond = -1;
    setInterval(() => {
        const now = new Date();
        const currentSecond = now.getSeconds();
        
        // Обновляем время только если изменилась секунда
        if (currentSecond !== lastSecond) {
            updateDateTime();
            updateFooterDateTime();
            lastSecond = currentSecond;
        }
        
        // Проверяем уведомления только в начале каждой минуты
        if (currentSecond === 0) {
            checkDeadlineNotifications();
        }
    }, 1000);
    
    // Дополнительная проверка уведомлений каждую минуту (на случай пропуска)
    setInterval(checkDeadlineNotifications, 60000);
    
    if (state.tasks.length === 0) {
        loadSampleData();
    }
}

function loadSettings() {
    // Тема уже применена через inline скрипт в head, проверяем только синхронизацию
    const currentTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
    
    // Тема с поддержкой авто-определения
    if (state.theme === 'auto') {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const targetTheme = prefersDark ? 'dark' : 'light';
        
        // Применяем только если тема не совпадает
        if (currentTheme !== targetTheme) {
            applyTheme(targetTheme);
        }
        
        // Слушаем изменения системной темы
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (state.theme === 'auto') {
                applyTheme(e.matches ? 'dark' : 'light');
            }
        });
    } else {
        // Применяем только если тема не совпадает с сохраненной
        if (currentTheme !== state.theme) {
            applyTheme(state.theme);
        } else {
            // Просто обновляем иконку и цвет, если тема уже правильная
            updateLandingThemeIcon();
            updatePrimaryColor(state.theme === 'dark' ? '#7395ae' : '#e27d80');
        }
    }
}

function updatePrimaryColor(color) {
    state.primaryColor = color;
    document.documentElement.style.setProperty('--primary-color', color);
    document.documentElement.style.setProperty('--primary-hover', adjustColor(color, 20));
}

function initFlatpickr() {
    if (typeof flatpickr === 'undefined') {
        return;
    }
    
    // Удаляем старые экземпляры
    Object.values(state.flatpickrInstances).forEach(instance => {
        if (instance && instance.destroy) instance.destroy();
    });
    state.flatpickrInstances = {};
    
    // Локализуем в зависимости от языка
    const locale = state.language === 'ru' ? 'ru' : 'en';
    
    // Настройка локализации
    if (locale === 'ru' && flatpickr.l10ns && flatpickr.l10ns.ru) {
        flatpickr.localize(flatpickr.l10ns.ru);
    } else if (locale === 'en') {
        // Для английского используем стандартную локализацию или создаем свою
        if (flatpickr.l10ns && flatpickr.l10ns.en) {
            flatpickr.localize(flatpickr.l10ns.en);
        } else {
            // Если английская локализация не загружена, используем дефолтную
            flatpickr.localize({
                firstDayOfWeek: 1,
                weekdays: {
                    shorthand: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                    longhand: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
                },
                months: {
                    shorthand: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    longhand: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
                }
            });
        }
    }
    
    // Определяем формат даты в зависимости от языка
    const dateFormat = locale === 'ru' ? "d.m.Y" : "m/d/Y";
    
    const taskDeadline = document.getElementById('task-deadline');
    const editTaskDeadline = document.getElementById('edit-task-deadline');
    
    // Общие настройки для всех календарей
    const commonOptions = {
        locale: locale,
        allowInput: true,
        appendTo: document.body,
        static: false,
        animate: true,
        clickOpens: true,
        dateFormat: dateFormat,
        theme: 'none', // Используем свои стили
        showMonths: 1,
        enableTime: false,
        time_24hr: true,
        disableMobile: false
    };
    
    if (taskDeadline) {
        state.flatpickrInstances.taskDeadline = flatpickr(taskDeadline, {
            ...commonOptions,
            minDate: "today",
            onChange: function(selectedDates, dateStr, instance) {
                // Дата выбрана
            },
            onReady: function(selectedDates, dateStr, instance) {
                // Применяем дополнительные стили после создания
                applyCalendarStyles(instance.calendarContainer);
            }
        });
    }
    
    if (editTaskDeadline) {
        state.flatpickrInstances.editTaskDeadline = flatpickr(editTaskDeadline, {
            ...commonOptions,
            minDate: null, // При редактировании можно выбрать прошедшую дату
            onReady: function(selectedDates, dateStr, instance) {
                // Применяем дополнительные стили после создания
                applyCalendarStyles(instance.calendarContainer);
            }
        });
    }
}

// Функция для применения дополнительных стилей к календарю
function applyCalendarStyles(calendarElement) {
    if (!calendarElement) return;
    
    // Добавляем класс для идентификации нашего календаря
    calendarElement.classList.add('flowtask-calendar');
    
    // Применяем стили к элементам календаря
    const days = calendarElement.querySelectorAll('.flatpickr-day');
    days.forEach(day => {
        day.style.transition = 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)';
    });
    
    // Улучшаем стили кнопок навигации
    const prevBtn = calendarElement.querySelector('.flatpickr-prev-month');
    const nextBtn = calendarElement.querySelector('.flatpickr-next-month');
    
    if (prevBtn) {
        prevBtn.style.transition = 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)';
    }
    if (nextBtn) {
        nextBtn.style.transition = 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)';
    }
}

function updateDateTime() {
    const now = new Date();
    const locale = state.language === 'ru' ? 'ru-RU' : 'en-US';
    
    // Используем стандартные методы для надежности
    const dateEl = document.getElementById('current-date');
    if (dateEl) {
        dateEl.textContent = now.toLocaleDateString(locale, { 
            weekday: 'long', 
            day: 'numeric',
            month: 'long'
        });
    }
    
    const timeEl = document.getElementById('current-time');
    if (timeEl) {
        timeEl.textContent = now.toLocaleTimeString(locale, { 
            hour: '2-digit', 
            minute: '2-digit',
            second: '2-digit', // Добавлены секунды
            hour12: false
        });
    }
}

function updateFooterDateTime() {
    const now = new Date();
    const locale = state.language === 'ru' ? 'ru-RU' : 'en-US';
    
    // Используем стандартные методы для надежности
    const dateEl = document.getElementById('footer-date');
    if (dateEl) {
        dateEl.textContent = now.toLocaleDateString(locale, { 
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    }
    
    const timeEl = document.getElementById('footer-time');
    if (timeEl) {
        timeEl.textContent = now.toLocaleTimeString(locale, { 
            hour: '2-digit', 
            minute: '2-digit',
            second: '2-digit', // Добавлены секунды
            hour12: false
        });
    }
}

// Настройка обработчиков событий
function setupEventListeners() {
    console.log('setupEventListeners called');
    
    // Добавление задачи
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    
    console.log('addTaskBtn found:', !!addTaskBtn);
    console.log('taskInput found:', !!taskInput);
    
    if (addTaskBtn) {
        // Используем делегирование событий для надежности
        // Удаляем старый обработчик если есть
        addTaskBtn.onclick = null;
        // Добавляем новый обработчик
        addTaskBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('✓ addTaskBtn clicked!');
            if (typeof addTask === 'function') {
                addTask();
            } else {
                console.error('addTask function not found!');
            }
        }, { once: false, capture: false });
        console.log('✓ addTaskBtn event listener attached, element:', addTaskBtn);
    } else {
        console.error('✗ addTaskBtn not found! Available IDs:', Array.from(document.querySelectorAll('[id]')).map(el => el.id));
    }
    
    if (taskInput) {
        taskInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !document.getElementById('add-task-btn').disabled) {
                addTask();
            }
        });
        taskInput.addEventListener('input', validateTaskInput);
    }

    // Приоритеты
    document.querySelectorAll('.priority-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const priority = this.dataset.priority;
            
            document.querySelectorAll('.priority-btn').forEach(b => {
                b.classList.remove('active');
            });
            
            this.classList.add('active');
            state.currentPriority = priority;
        });
    });

    // Быстрые задачи
    const addQuickBtn = document.getElementById('add-quick-task-btn');
    const editQuickBtn = document.getElementById('edit-quick-tasks-btn');
    
    if (addQuickBtn) {
        addQuickBtn.addEventListener('click', toggleQuickTaskForm);
    }
    
    if (editQuickBtn) {
        editQuickBtn.addEventListener('click', toggleQuickTasksEditMode);
    }
    
    const saveQuickBtn = document.getElementById('save-quick-task-btn');
    if (saveQuickBtn) {
        saveQuickBtn.addEventListener('click', saveQuickTask);
    }
    
    const cancelQuickBtn = document.getElementById('cancel-quick-task-btn');
    if (cancelQuickBtn) {
        cancelQuickBtn.addEventListener('click', toggleQuickTaskForm);
    }

    // Фильтры задач
    const filterBtns = document.querySelectorAll('.filter-btn');
    console.log('Found filter buttons:', filterBtns.length);
    filterBtns.forEach(btn => {
        // Удаляем старые обработчики
        const newBtn = btn.cloneNode(true);
        btn.parentNode.replaceChild(newBtn, btn);
        // Добавляем новый обработчик
        newBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Filter button clicked:', this.dataset.filter);
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            state.currentFilter = this.dataset.filter;
            renderTasks();
        });
    });

    // Сортировка
    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', renderTasks);
    }
    
    // Фильтр категорий в шапке
    const headerCategoryFilter = document.getElementById('header-category-filter');
    if (headerCategoryFilter) {
        headerCategoryFilter.addEventListener('change', function() {
            filterByCategory(this.value);
        });
    }
    
    // Аналитика
    const analyticsHeaderBtn = document.getElementById('analytics-header-btn');
    if (analyticsHeaderBtn) {
        analyticsHeaderBtn.addEventListener('click', showAnalyticsModal);
    }
    
    // Профиль
    const profileHeaderBtn = document.getElementById('profile-header-btn');
    if (profileHeaderBtn) {
        profileHeaderBtn.addEventListener('click', () => {
            if (state.user) {
                showProfileModal();
            } else {
                showAuthModal('login');
            }
        });
    }
    
    // Авторизация
    initAuthModal();
    
    // Профиль
    initProfileModal();
    
    const closeAnalyticsModalBtn = document.getElementById('close-analytics-modal-btn');
    if (closeAnalyticsModalBtn) {
        closeAnalyticsModalBtn.addEventListener('click', hideAnalyticsModal);
    }
    
    const closeAnalyticsBtn = document.getElementById('close-analytics-modal');
    if (closeAnalyticsBtn) {
        closeAnalyticsBtn.addEventListener('click', hideAnalyticsModal);
    }
    
    // Модальные окна
    setupModalListeners();
}

// Основные функции приложения
function addTask() {
    const input = document.getElementById('task-input');
    const text = input.value.trim();
    
    if (!text) {
        validateTaskInput();
        showNotification(t('enterTaskText'), 'error');
        return;
    }

    // Убеждаемся, что категории загружены
    if (!state.categories || state.categories.length === 0) {
        if (state.user) {
            loadUserData();
        } else {
            state.categories = [{ id: 'general', name: t('generalCategory'), color: '#7395ae' }];
        }
    }

    // Убеждаемся, что есть категория "Общие"
    const generalCategory = state.categories.find(cat => cat.id === 'general');
    if (!generalCategory) {
        state.categories.unshift({ id: 'general', name: t('generalCategory'), color: '#7395ae' });
    }

    // Убраны теги
    const order = state.taskOrder.length > 0 ? Math.min(...state.taskOrder) - 1 : Date.now();
    
    const categorySelect = document.getElementById('task-category');
    const selectedCategory = categorySelect ? categorySelect.value : 'general';

    const task = {
        id: Date.now(),
        text: text,
        priority: state.currentPriority,
        category: selectedCategory || 'general',
        deadline: document.getElementById('task-deadline') ? document.getElementById('task-deadline').value : '',
        notes: '',
        completed: false,
        archived: false,
        order: order,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };

    state.tasks.unshift(task);
    state.taskOrder.unshift(task.id);
    saveState();
    renderAll();
    
    input.value = '';
    document.getElementById('task-deadline').value = '';
    input.focus();
    validateTaskInput();
    
    showNotification(t('taskAdded'), 'success');
}

function renderAll() {
    renderCategories();
    renderQuickTasks();
    renderUrgentTasks();
    renderTasks();
    updateStats();
    updateFilterCounts();
    updateCategorySelects();
    updateAppInfo();
    updateProgressBars();
}

function renderCategories() {
    const container = document.getElementById('categories-list');
    const categorySelects = document.querySelectorAll('select[id$="category"]');
    
    if (!container) return;
    
    // Обновляем все select'ы
    categorySelects.forEach(select => {
        select.innerHTML = state.categories.map(cat => 
            `<option value="${cat.id}">${cat.name}</option>`
        ).join('');
    });
    
    // Рендерим список в сайдбаре (если он есть)
    const allCount = state.tasks.filter(t => !t.completed).length;
    
    container.innerHTML = `
        <div class="category-item ${state.currentCategory === 'all' ? 'active' : ''}" 
             onclick="filterByCategory('all')">
            <span class="category-name">${t('allCategories')}</span>
            <span class="category-count">${allCount}</span>
        </div>
        ${state.categories.map(cat => {
            const count = state.tasks.filter(t => t.category === cat.id && !t.completed).length;
            return `
                <div class="category-item ${state.currentCategory === cat.id ? 'active' : ''}" 
                     onclick="filterByCategory('${cat.id}')">
                    <span class="category-name" style="color: ${cat.color}">
                        <i class="fas fa-folder"></i> ${escapeHtml(cat.name)}
                    </span>
                    <div class="category-actions">
                        <span class="category-count">${count}</span>
                        ${cat.id !== 'general' ? `
                            <button class="delete-category-btn" 
                                    onclick="event.stopPropagation(); deleteCategory('${cat.id}')"
                                    title="${t('deleteCategoryTitle')}">
                                <i class="fas fa-times"></i>
                            </button>
                        ` : ''}
                    </div>
                </div>
            `;
        }).join('')}
    `;
}

function filterByCategory(categoryId) {
    state.currentCategory = categoryId;
    renderTasks();
    renderCategories();
    updateCategorySelects();
}

function deleteCategory(categoryId, fromSettings = false) {
    if (categoryId === 'general') {
        showNotification(t('cannotDeleteGeneral'), 'error');
        return;
    }
    
    showConfirm(
        t('deleteCategoryConfirm'),
        t('categoryDeleteMessage'),
        () => {
            state.tasks = state.tasks.map(task => {
                if (task.category === categoryId) {
                    return { ...task, category: 'general' };
                }
                return task;
            });
            
            state.categories = state.categories.filter(cat => cat.id !== categoryId);
            
            if (state.currentCategory === categoryId) {
                state.currentCategory = 'all';
            }
            
            saveState();
            renderAll();
            if (fromSettings) {
                renderCategoriesSettings();
            }
            showNotification(t('categoryDeleted'), 'warning');
        }
    );
}

function renderQuickTasks() {
    const container = document.getElementById('quick-tasks-list');
    if (!container) return;
    
    // Сортируем быстрые задачи по приоритету (Высокий -> Средний -> Низкий)
    const sortedQuickTasks = [...state.quickTasks].sort((a, b) => {
        const priorityOrder = { high: 3, medium: 2, low: 1 };
        return priorityOrder[b.priority] - priorityOrder[a.priority];
    });
    
    container.innerHTML = sortedQuickTasks.map(task => `
        <div class="quick-task-item priority-${task.priority} ${state.quickTasksEditMode ? 'editable' : ''}" 
             onclick="${state.quickTasksEditMode ? '' : `useQuickTask(${task.id})`}">
            <div class="task-text">${escapeHtml(task.text)}</div>
            ${state.quickTasksEditMode ? `
                <button class="icon-btn delete-btn" onclick="deleteQuickTask(${task.id})" title="${t('deleteTemplateTitle')}">
                    <i class="fas fa-times"></i>
                </button>
            ` : ''}
        </div>
    `).join('');
    
    if (sortedQuickTasks.length === 0 && !state.quickTasksEditMode) {
        container.innerHTML = `
            <div class="empty-state">
                <p>${t('emptyQuickTasks')}</p>
            </div>
        `;
    }
}

function useQuickTask(id) {
    const quickTask = state.quickTasks.find(t => t.id === id);
    if (!quickTask) return;
    
    document.getElementById('task-input').value = quickTask.text;
    
    document.querySelectorAll('.priority-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.priority === quickTask.priority) {
            btn.classList.add('active');
            state.currentPriority = quickTask.priority;
        }
    });
    
    document.getElementById('task-input').focus();
    showNotification(t('taskAddedToForm'), 'info');
}

function toggleQuickTasksEditMode() {
    state.quickTasksEditMode = !state.quickTasksEditMode;
    renderQuickTasks();
    
    const editBtn = document.getElementById('edit-quick-tasks-btn');
    if (editBtn) {
        if (state.quickTasksEditMode) {
            editBtn.innerHTML = '<i class="fas fa-check"></i>';
            editBtn.title = t('finishEditing');
        } else {
            editBtn.innerHTML = '<i class="fas fa-edit"></i>';
            editBtn.title = t('editTemplates');
        }
    }
}

function toggleQuickTaskForm() {
    const form = document.getElementById('add-quick-task-form');
    if (!form) return;
    
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
    if (form.style.display === 'block') {
        document.getElementById('new-quick-task-input').focus();
    }
}

function saveQuickTask() {
    const input = document.getElementById('new-quick-task-input');
    const prioritySelect = document.getElementById('new-quick-task-priority');
    
    if (!input || !prioritySelect) return;
    
    const text = input.value.trim();
    if (!text) {
        showNotification(t('enterQuickTaskText'), 'error');
        return;
    }
    
    const newQuickTask = {
        id: Date.now(),
        text: text,
        priority: prioritySelect.value
    };
    
    state.quickTasks.push(newQuickTask);
    saveState();
    renderQuickTasks();
    toggleQuickTaskForm();
    input.value = '';
    showNotification(t('quickTaskAdded'), 'success');
}

function deleteQuickTask(id) {
    showConfirm(
        t('deleteTemplateConfirm'),
        t('templateDeleteMessage'),
        () => {
            state.quickTasks = state.quickTasks.filter(t => t.id !== id);
            saveState();
            renderQuickTasks();
            showNotification(t('quickTaskDeleted'), 'warning');
        }
    );
}

function renderUrgentTasks() {
    const section = document.getElementById('urgent-tasks-section');
    const container = document.getElementById('urgent-tasks-container');
    if (!section || !container) return;
    
    // Фильтруем задачи на сегодня (не выполненные, с дедлайном на сегодня)
    const todayTasks = state.tasks.filter(task => {
        if (task.completed || task.archived || !task.deadline) return false;
        
        try {
            if (typeof dateFns !== 'undefined') {
                const deadline = dateFns.parse(task.deadline, 'd.M.yyyy', new Date());
                if (!dateFns.isValid(deadline)) return false;
                const today = dateFns.startOfDay(new Date());
                return dateFns.isSameDay(deadline, today);
            } else {
                // Fallback
                const today = new Date().toLocaleDateString('ru-RU');
                const taskDate = new Date(task.deadline.split('.').reverse().join('-')).toLocaleDateString('ru-RU');
                return taskDate === today;
            }
        } catch (e) {
            return false;
        }
    });
    
    // Сортируем по приоритету (высокий -> средний -> низкий)
    const priorityOrder = { high: 3, medium: 2, low: 1 };
    todayTasks.sort((a, b) => priorityOrder[b.priority] - priorityOrder[a.priority]);
    
    if (todayTasks.length === 0) {
        section.style.display = 'none';
        return;
    }
    
    section.style.display = 'block';
    
    container.innerHTML = todayTasks.map((task, index) => {
        const category = state.categories.find(c => c.id === task.category) || state.categories[0];
        const isOverdueTask = isOverdue(task);
        
        return `
            <div class="urgent-task-card priority-${task.priority} ${isOverdueTask ? 'overdue' : ''}" 
                 data-id="${task.id}" style="animation-delay: ${index * 0.05}s">
                <div class="urgent-task-indicator">
                    <i class="fas fa-exclamation-triangle"></i>
                </div>
                <div class="task-checkbox" onclick="toggleTask(${task.id})">
                    ${task.completed ? '✓' : ''}
                </div>
                <div class="task-content">
                    <div class="task-text-wrapper">
                        <div class="task-text">${escapeHtml(task.text)}</div>
                        ${task.notes ? `
                            <div class="task-notes-preview" onclick="toggleTaskNotes(${task.id})">
                                <i class="fas fa-sticky-note"></i>
                                <span class="notes-preview-text">${escapeHtml(task.notes)}</span>
                            </div>
                        ` : ''}
                        ${(() => {
                            const createdAt = task.createdAt ? new Date(task.createdAt) : new Date();
                            const locale = state.language === 'ru' ? 'ru-RU' : 'en-US';
                            const createdDate = createdAt.toLocaleDateString(locale, { day: '2-digit', month: '2-digit', year: 'numeric' });
                            const createdTime = createdAt.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit' });
                            return `
                                <div class="task-created-date">
                                    <i class="far fa-clock"></i>
                                    <span>${t('created')} ${createdDate} ${createdTime}</span>
                                </div>
                            `;
                        })()}
                    </div>
                    <div class="task-meta-right">
                        <span class="task-deadline urgent ${isOverdueTask ? 'overdue' : ''}">
                            <i class="far fa-calendar"></i> ${task.deadline}
                        </span>
                        ${task.category !== 'general' ? `
                            <span class="task-category" style="border-left: 3px solid ${category.color}">
                                <i class="fas fa-folder"></i> ${escapeHtml(category.name)}
                            </span>
                        ` : ''}
                    </div>
                </div>
                <div class="task-actions">
                    <button class="icon-btn" onclick="editTask(${task.id})" title="${t('edit')}">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="icon-btn" onclick="archiveTask(${task.id})" title="${t('toArchive')}">
                        <i class="fas fa-archive"></i>
                    </button>
                    <button class="icon-btn" onclick="showDeleteConfirm(${task.id})" title="${t('delete')}">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

function renderTasks() {
    const container = document.getElementById('tasks-container');
    if (!container) return;
    
    // ВАЖНО: Очищаем контейнер перед рендерингом, чтобы не показывать старые данные
    container.innerHTML = '';
    
    // Добавляем анимацию исчезновения
    container.style.opacity = '0';
    setTimeout(() => {
        let filteredTasks = state.tasks.filter(task => {
            // Поиск (по тексту и заметкам)
            if (state.searchQuery) {
                const searchLower = state.searchQuery.toLowerCase();
                const matchesText = task.text.toLowerCase().includes(searchLower);
                const matchesNotes = task.notes && task.notes.toLowerCase().includes(searchLower);
                if (!matchesText && !matchesNotes) return false;
            }
            
            // Архив
            if (state.currentFilter === 'archived') {
                return task.archived;
            }
            
            // Остальные фильтры не показывают архивные задачи
            if (task.archived) return false;
            
            // Выполненные задачи не показываем в основных фильтрах (они автоматически в архиве)
            if (task.completed) return false;
            
            // Исключаем задачи на сегодня из основного списка (они показываются в блоке "Задачи истекают сегодня")
            if (task.deadline) {
                try {
                    if (typeof dateFns !== 'undefined') {
                        const deadline = dateFns.parse(task.deadline, 'd.M.yyyy', new Date());
                        if (dateFns.isValid(deadline)) {
                            const today = dateFns.startOfDay(new Date());
                            if (dateFns.isSameDay(deadline, today)) {
                                return false; // Исключаем задачи на сегодня из основного списка
                            }
                        }
                    } else {
                        // Fallback
                        const today = new Date().toLocaleDateString('ru-RU');
                        const taskDate = new Date(task.deadline.split('.').reverse().join('-')).toLocaleDateString('ru-RU');
                        if (taskDate === today) {
                            return false; // Исключаем задачи на сегодня из основного списка
                        }
                    }
                } catch (e) {
                    // Если ошибка парсинга, показываем задачу
                }
            }
            
            if (state.currentFilter === 'high') return task.priority === 'high' && !task.completed;
            if (state.currentFilter === 'overdue') {
                return !task.completed && task.deadline && isOverdue(task);
            }
            if (state.currentCategory !== 'all') return task.category === state.currentCategory && !task.completed;
            return !task.completed;
        });

        const sortSelect = document.getElementById('sort-select');
        const sortMethod = sortSelect ? sortSelect.value : 'priority';
        
        if (sortMethod === 'order') {
            // Сортировка по порядку из state.taskOrder
            filteredTasks.sort((a, b) => {
                const indexA = state.taskOrder.indexOf(a.id);
                const indexB = state.taskOrder.indexOf(b.id);
                if (indexA === -1 && indexB === -1) return 0;
                if (indexA === -1) return 1;
                if (indexB === -1) return -1;
                return indexA - indexB;
            });
        } else if (sortMethod === 'priority') {
            const priorityOrder = { high: 3, medium: 2, low: 1 };
            filteredTasks.sort((a, b) => priorityOrder[b.priority] - priorityOrder[a.priority]);
        } else if (sortMethod === 'deadline') {
            filteredTasks.sort((a, b) => {
                if (!a.deadline && !b.deadline) return 0;
                if (!a.deadline) return 1;
                if (!b.deadline) return -1;
                try {
                    const dateA = dateFns.parse(a.deadline, 'd.M.yyyy', new Date());
                    const dateB = dateFns.parse(b.deadline, 'd.M.yyyy', new Date());
                    if (!dateFns.isValid(dateA) || !dateFns.isValid(dateB)) return 0;
                    return dateA - dateB;
                } catch (e) {
                    return 0;
                }
            });
        } else if (sortMethod === 'newest') {
            filteredTasks.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        } else if (sortMethod === 'oldest') {
            filteredTasks.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        }

        if (filteredTasks.length === 0) {
            container.innerHTML = getEmptyStateHTML();
            container.style.opacity = '1';
            return;
        }

        container.innerHTML = filteredTasks.map((task, index) => {
            const category = state.categories.find(c => c.id === task.category) || state.categories[0];
            const createdAt = task.createdAt ? new Date(task.createdAt) : new Date();
            const createdDate = createdAt.toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric' });
            const createdTime = createdAt.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
            
            return `
                <div class="task-card entering ${task.completed ? 'completed' : ''} priority-${task.priority}" 
                     data-id="${task.id}" style="animation-delay: ${index * 0.03}s">
                    <div class="task-checkbox ${task.completed ? 'checked' : ''}" 
                         onclick="toggleTask(${task.id})">
                        ${task.completed ? '✓' : ''}
                    </div>
                    <div class="task-content">
                        <div class="task-text-wrapper">
                            <div class="task-text">${state.searchQuery ? highlightSearchText(escapeHtml(task.text), state.searchQuery) : escapeHtml(task.text)}</div>
                            ${task.notes ? `
                                <div class="task-notes-preview" onclick="toggleTaskNotes(${task.id})">
                                    <i class="fas fa-sticky-note"></i>
                                    <span class="notes-preview-text">${escapeHtml(task.notes)}</span>
                                </div>
                            ` : ''}
                            <div class="task-created-date">
                                <i class="far fa-clock"></i>
                                <span>${t('created')} ${createdDate} ${createdTime}</span>
                            </div>
                        </div>
                        <div class="task-meta-right">
                            ${task.deadline ? `
                                <span class="task-deadline ${isOverdue(task) && !task.completed ? 'overdue' : ''}">
                                    <i class="far fa-calendar"></i> ${task.deadline}
                                </span>
                            ` : ''}
                            ${task.category !== 'general' ? `
                                <span class="task-category" style="border-left: 3px solid ${category.color}">
                                    <i class="fas fa-folder"></i> ${escapeHtml(category.name)}
                                </span>
                            ` : ''}
                        </div>
                    </div>
                    <div class="task-actions">
                        <button class="icon-btn" onclick="editTask(${task.id})" title="${t('edit')}">
                            <i class="fas fa-edit"></i>
                        </button>
                        ${!task.archived ? `
                            <button class="icon-btn" onclick="archiveTask(${task.id})" title="${t('toArchive')}">
                                <i class="fas fa-archive"></i>
                            </button>
                        ` : !task.completed ? `
                            <button class="icon-btn" onclick="unarchiveTask(${task.id})" title="${t('fromArchive')}">
                                <i class="fas fa-box-open"></i>
                            </button>
                        ` : ''}
                        <button class="icon-btn" onclick="showDeleteConfirm(${task.id})" title="${t('delete')}">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            `;
        }).join('');
        
        container.style.opacity = '1';
    }, 150);
}

function getEmptyStateHTML() {
    const messages = {
        'high': { icon: getEmptyStateSVG('fire'), title: t('noHighPriority'), text: t('allImportantDone') },
        'overdue': { icon: getEmptyStateSVG('check'), title: t('noOverdue'), text: t('onTime') },
        'archived': { icon: getEmptyStateSVG('archive'), title: t('archiveEmpty'), text: t('completedTasksHere') },
        'default': { icon: getEmptyStateSVG('tasks'), title: t('noTasks'), text: t('addFirstTask') }
    };
    
    const message = messages[state.currentFilter] || messages['default'];
    
    return `
        <div class="empty-state">
            <div class="empty-icon">${message.icon}</div>
            <h3>${message.title}</h3>
            <p>${message.text}</p>
        </div>
    `;
}

function getEmptyStateSVG(type) {
    const svgs = {
        'tasks': '<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" stroke-width="3"/><path d="M30 50 L45 65 L70 35" stroke="currentColor" stroke-width="4" fill="none"/></svg>',
        'calendar': '<svg viewBox="0 0 100 100"><rect x="20" y="25" width="60" height="55" rx="5" fill="none" stroke="currentColor" stroke-width="3"/><line x1="35" y1="15" x2="35" y2="25" stroke="currentColor" stroke-width="3"/><line x1="65" y1="15" x2="65" y2="25" stroke="currentColor" stroke-width="3"/><circle cx="50" cy="55" r="3" fill="currentColor"/></svg>',
        'fire': '<svg viewBox="0 0 100 100"><path d="M50 20 L40 50 L50 60 L60 50 Z" fill="currentColor"/><path d="M30 70 L50 90 L70 70" fill="currentColor"/></svg>',
        'check': '<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" stroke-width="3"/><path d="M30 50 L45 65 L70 35" stroke="currentColor" stroke-width="5" fill="none"/></svg>',
        'trophy': '<svg viewBox="0 0 100 100"><path d="M30 30 L30 50 Q30 60 40 60 L60 60 Q70 60 70 50 L70 30 Z" fill="none" stroke="currentColor" stroke-width="3"/><path d="M40 60 L40 75 L60 75 L60 60" fill="none" stroke="currentColor" stroke-width="3"/><circle cx="50" cy="45" r="8" fill="currentColor"/></svg>',
        'archive': '<svg viewBox="0 0 100 100"><rect x="20" y="30" width="60" height="50" rx="3" fill="none" stroke="currentColor" stroke-width="3"/><path d="M25 30 L50 20 L75 30" fill="none" stroke="currentColor" stroke-width="3"/><line x1="30" y1="50" x2="70" y2="50" stroke="currentColor" stroke-width="3"/></svg>'
    };
    return svgs[type] || svgs['tasks'];
}

function isOverdue(task) {
    if (!task.deadline || task.completed) return false;
    
    if (typeof dateFns !== 'undefined') {
        try {
            const deadline = dateFns.parse(task.deadline, 'd.M.yyyy', new Date());
            if (!dateFns.isValid(deadline)) return false;
            const today = dateFns.startOfDay(new Date());
            return dateFns.isBefore(deadline, today);
        } catch (e) {
            return false;
        }
    }
    
    // Fallback
    const deadline = new Date(task.deadline.split('.').reverse().join('-'));
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    deadline.setHours(0, 0, 0, 0);
    return deadline < today;
}

function archiveTask(id) {
    const task = state.tasks.find(t => t.id === id);
    if (!task) return;
    
    state.tasks = state.tasks.map(t => 
        t.id === id ? { ...t, archived: true, updatedAt: new Date().toISOString() } : t
    );
    saveState();
    renderAll();
    showNotification(t('taskArchived'), 'info');
}

function unarchiveTask(id) {
    const task = state.tasks.find(t => t.id === id);
    if (!task) return;
    
    state.tasks = state.tasks.map(t => 
        t.id === id ? { ...t, archived: false, updatedAt: new Date().toISOString() } : t
    );
    saveState();
    renderAll();
    showNotification(t('taskUnarchived'), 'success');
}

function restoreTaskOrder() {
    if (state.taskOrder.length === 0) return;
    
    // Восстанавливаем порядок задач
    state.tasks.sort((a, b) => {
        const indexA = state.taskOrder.indexOf(a.id);
        const indexB = state.taskOrder.indexOf(b.id);
        if (indexA === -1 && indexB === -1) return 0;
        if (indexA === -1) return 1;
        if (indexB === -1) return -1;
        return indexA - indexB;
    });
}

function getEmptyStateMessage() {
    switch(state.currentFilter) {
        case 'high': return 'Нет задач с высоким приоритетом';
        case 'overdue': return 'Просроченных задач нет';
        case 'completed': return 'Выполненных задач пока нет';
        case 'archived': return 'Архив пуст';
        default: return 'Добавьте первую задачу';
    }
}

function toggleTask(id) {
    const task = state.tasks.find(t => t.id === id);
    if (!task) return;
    
    const wasCompleted = task.completed;
    
    state.tasks = state.tasks.map(task => {
        if (task.id === id) {
            const newCompleted = !task.completed;
            // Если задача выполняется, автоматически архивируем её
            if (newCompleted && !wasCompleted) {
                return { ...task, completed: true, archived: true, updatedAt: new Date().toISOString() };
            } else if (!newCompleted && wasCompleted) {
                // Если задача возобновляется, убираем из архива
                return { ...task, completed: false, archived: false, updatedAt: new Date().toISOString() };
            }
            return { ...task, completed: newCompleted, updatedAt: new Date().toISOString() };
        }
        return task;
    });
    
    saveState();
    renderAll();
    showNotification(wasCompleted ? t('taskResumed') : t('taskCompleted'), 'success');
}

function editTask(id) {
    const task = state.tasks.find(t => t.id === id);
    if (!task) return;
    
    state.editingTaskId = id;
    
    document.getElementById('edit-task-input').value = task.text;
    document.getElementById('edit-task-deadline').value = task.deadline || '';
    document.getElementById('edit-task-notes').value = task.notes || '';
    
    const editCategory = document.getElementById('edit-task-category');
    if (editCategory) {
        editCategory.innerHTML = state.categories.map(cat => 
            `<option value="${cat.id}" ${cat.id === task.category ? 'selected' : ''}>${cat.name}</option>`
        ).join('');
    }
    
    const priorityButtons = document.querySelectorAll('#edit-modal .priority-btn');
    priorityButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.priority === task.priority) {
            btn.classList.add('active');
        }
        
        btn.onclick = function() {
            priorityButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        };
    });
    
    showEditModal();
    // Автосохранение отключено - используется кнопка "Сохранить"
    // initAutoSave();
}

// Автосохранение отключено - используется кнопка "Сохранить"
// function initAutoSave() {
//     const editInput = document.getElementById('edit-task-input');
//     const editCategory = document.getElementById('edit-task-category');
//     const editDeadline = document.getElementById('edit-task-deadline');
//     const editNotes = document.getElementById('edit-task-notes');
//     const priorityButtons = document.querySelectorAll('#edit-modal .priority-btn');
//     
//     // Удаляем старые обработчики
//     const newEditInput = editInput.cloneNode(true);
//     editInput.parentNode.replaceChild(newEditInput, editInput);
//     
//     const newEditNotes = editNotes.cloneNode(true);
//     editNotes.parentNode.replaceChild(newEditNotes, editNotes);
//     
//     // Добавляем обработчики для автосохранения
//     if (newEditInput) {
//         newEditInput.addEventListener('input', autoSaveTask);
//     }
//     
//     if (newEditNotes) {
//         newEditNotes.addEventListener('input', autoSaveTask);
//     }
//     
//     if (editCategory) {
//         editCategory.addEventListener('change', autoSaveTask);
//     }
//     
//     if (editDeadline) {
//         editDeadline.addEventListener('change', autoSaveTask);
//     }
//     
//     priorityButtons.forEach(btn => {
//         btn.addEventListener('click', () => {
//             setTimeout(autoSaveTask, 100);
//         });
//     });
// }

function saveEditedTask(silent = false) {
    const task = state.tasks.find(t => t.id === state.editingTaskId);
    if (!task) return;
    
    const editInput = document.getElementById('edit-task-input');
    const editCategory = document.getElementById('edit-task-category');
    const editDeadline = document.getElementById('edit-task-deadline');
    const editNotes = document.getElementById('edit-task-notes');
    const activePriorityBtn = document.querySelector('#edit-modal .priority-btn.active');
    const errorEl = document.getElementById('edit-task-input-error');
    
    if (!editInput || !editCategory || !editDeadline || !activePriorityBtn || !editNotes) return;
    
    const newText = editInput.value.trim();
    if (!newText) {
        if (!silent) {
            if (errorEl) errorEl.textContent = t('taskTextRequired');
            editInput.classList.add('error');
            showNotification(t('taskTextRequired'), 'error');
        }
        return;
    }
    
    if (errorEl) errorEl.textContent = '';
    editInput.classList.remove('error');
    
    state.tasks = state.tasks.map(t => 
        t.id === state.editingTaskId ? {
            ...t,
            text: newText,
            priority: activePriorityBtn.dataset.priority,
            category: editCategory.value,
            deadline: editDeadline.value,
            notes: editNotes.value.trim(),
            updatedAt: new Date().toISOString()
        } : t
    );
    
    saveState();
    renderAll();
    
    if (!silent) {
        hideEditModal();
        showNotification(t('taskUpdated'), 'success');
    }
}

// Автосохранение отключено - используется кнопка "Сохранить"
// function autoSaveTask() {
//     const indicator = document.getElementById('auto-save-indicator');
//     if (indicator) {
//         indicator.style.display = 'flex';
//     }
//     
//     if (state.autoSaveTimer) {
//         clearTimeout(state.autoSaveTimer);
//     }
//     
//     state.autoSaveTimer = setTimeout(() => {
//         if (state.editingTaskId) {
//             saveEditedTask(true);
//             if (indicator) {
//                 indicator.style.display = 'none';
//             }
//         }
//     }, 2000); // Автосохранение через 2 секунды после последнего изменения
// }

function showDeleteConfirm(taskId) {
    showConfirm(
        t('deleteTaskConfirm'),
        t('taskDeleteMessage'),
        () => deleteTask(taskId)
    );
}

function deleteTask(id) {
    const taskElement = document.querySelector(`.task-card[data-id="${id}"]`);
    if (taskElement) {
        taskElement.classList.add('leaving');
        taskElement.classList.remove('entering');
        
        setTimeout(() => {
            state.tasks = state.tasks.filter(task => task.id !== id);
            saveState();
            renderAll();
            showNotification(t('taskDeleted'), 'warning');
        }, 300);
    } else {
        state.tasks = state.tasks.filter(task => task.id !== id);
        saveState();
        renderAll();
        showNotification(t('taskDeleted'), 'warning');
    }
}

function updateProgressBars() {
    const activeTasks = state.tasks.filter(t => !t.completed && !t.archived);
    
    const highTasks = activeTasks.filter(t => t.priority === 'high').length;
    const mediumTasks = activeTasks.filter(t => t.priority === 'medium').length;
    const lowTasks = activeTasks.filter(t => t.priority === 'low').length;
    
    // Обновляем компактные счетчики
    const highCountEl = document.getElementById('compact-count-high');
    const mediumCountEl = document.getElementById('compact-count-medium');
    const lowCountEl = document.getElementById('compact-count-low');
    
    if (highCountEl) highCountEl.textContent = highTasks;
    if (mediumCountEl) mediumCountEl.textContent = mediumTasks;
    if (lowCountEl) lowCountEl.textContent = lowTasks;
}

function updateStats() {
    // Считаем все невыполненные и неархивные задачи
    const active = state.tasks.filter(t => {
        // Исключаем только выполненные и архивные
        return !t.completed && !t.archived;
    }).length;
    
    const statsBadge = document.getElementById('active-tasks-count');
    if (statsBadge) {
        statsBadge.textContent = `${active} ${t('activeTasks')}`;
    }
}

function updateFilterCounts() {
    const allCount = state.tasks.filter(t => !t.completed && !t.archived).length;
    setFilterCount('count-all', allCount);
    
    const highCount = state.tasks.filter(t => t.priority === 'high' && !t.completed && !t.archived).length;
    setFilterCount('count-high', highCount);
    
    const overdueCount = state.tasks.filter(t => !t.completed && !t.archived && isOverdue(t)).length;
    setFilterCount('count-overdue', overdueCount);
    
    // Подсвечиваем кнопку "Просрочено" красным, если есть просроченные задачи
    const overdueBtn = document.getElementById('overdue-filter-btn');
    if (overdueBtn) {
        if (overdueCount > 0) {
            overdueBtn.classList.add('has-overdue');
        } else {
            overdueBtn.classList.remove('has-overdue');
        }
    }
    
    const archivedCount = state.tasks.filter(t => t.archived).length;
    setFilterCount('count-archived', archivedCount);
}

function setFilterCount(id, count) {
    const element = document.getElementById(id);
    if (element) {
        element.textContent = count;
    }
}

function updateCategorySelects() {
    const categorySelects = document.querySelectorAll('select[id$="category"]');
    const headerCategoryFilter = document.getElementById('header-category-filter');
    
    categorySelects.forEach(select => {
        select.innerHTML = state.categories.map(cat => 
            `<option value="${cat.id}">${cat.name}</option>`
        ).join('');
    });
    
    // Обновляем выпадающий список в шапке
    if (headerCategoryFilter) {
        headerCategoryFilter.innerHTML = 
            `<option value="all">${t('allCategories')}</option>` +
            state.categories.map(cat => 
                `<option value="${cat.id}" ${state.currentCategory === cat.id ? 'selected' : ''}>${cat.name}</option>`
            ).join('');
    }
}

// Модальные окна
function setupModalListeners() {
    // Модальное окно подтверждения
    const confirmCancel = document.getElementById('confirm-cancel');
    const confirmOk = document.getElementById('confirm-ok');
    
    if (confirmCancel) confirmCancel.addEventListener('click', hideConfirmModal);
    if (confirmOk) confirmOk.addEventListener('click', confirmAction);
    
    // Модальное окно редактирования
    const saveEditBtn = document.getElementById('save-edit-btn');
    const cancelEditBtn = document.getElementById('cancel-edit-btn');
    const closeEditBtn = document.getElementById('close-edit-modal');
    
    if (saveEditBtn) {
        saveEditBtn.addEventListener('click', () => {
            saveEditedTask(false); // Явно указываем silent = false для закрытия окна
        });
    }
    if (cancelEditBtn) cancelEditBtn.addEventListener('click', hideEditModal);
    if (closeEditBtn) closeEditBtn.addEventListener('click', hideEditModal);
    
    // Закрытие по клику вне окна
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', function(e) {
            if (e.target === this) {
                // Если это модальное окно настроек, используем hideSettingsModal для сброса временных настроек
                if (this.id === 'settings-modal') {
                    hideSettingsModal();
                } else {
                    this.style.display = 'none';
                }
            }
        });
    });
}

function showConfirm(title, message, callback) {
    const titleEl = document.getElementById('confirm-title');
    const messageEl = document.getElementById('confirm-message');
    const modal = document.getElementById('confirm-modal');
    
    if (titleEl && messageEl && modal) {
        titleEl.textContent = title;
        messageEl.innerHTML = message;
        modal.style.display = 'flex';
        pendingConfirmAction = callback;
        
        // Обновляем кнопки на актуальном языке
        const confirmOkBtn = document.getElementById('confirm-ok');
        if (confirmOkBtn) confirmOkBtn.textContent = t('confirm');
        
        const confirmCancelBtn = document.getElementById('confirm-cancel');
        if (confirmCancelBtn) confirmCancelBtn.textContent = t('cancel');
        
        setTimeout(() => {
            const okBtn = document.getElementById('confirm-ok');
            if (okBtn) okBtn.focus();
        }, 100);
    }
}

function hideConfirmModal() {
    const modal = document.getElementById('confirm-modal');
    if (modal) {
        modal.style.display = 'none';
        pendingConfirmAction = null;
    }
}

function confirmAction() {
    if (pendingConfirmAction) {
        pendingConfirmAction();
    }
    hideConfirmModal();
}

function showEditModal() {
    const modal = document.getElementById('edit-modal');
    if (modal) {
        modal.style.display = 'flex';
        // Переинициализируем Flatpickr для модального окна
        setTimeout(() => {
            if (state.flatpickrInstances.editTaskDeadline) {
                state.flatpickrInstances.editTaskDeadline.destroy();
            }
            const editTaskDeadline = document.getElementById('edit-task-deadline');
            if (editTaskDeadline && typeof flatpickr !== 'undefined') {
                state.flatpickrInstances.editTaskDeadline = flatpickr(editTaskDeadline, {
                    dateFormat: "d.m.Y",
                    locale: "ru",
                    allowInput: true,
                    appendTo: document.body,
                    static: false
                });
            }
        }, 100);
        document.getElementById('edit-task-input').focus();
    }
}

function hideEditModal() {
    const modal = document.getElementById('edit-modal');
    if (modal) {
        modal.style.display = 'none';
        state.editingTaskId = null;
        // Очищаем поле заметок при закрытии
        const notesField = document.getElementById('edit-task-notes');
        if (notesField) notesField.value = '';
    }
}

// Настройки
function initSettingsModal() {
    const openBtn = document.getElementById('open-settings-btn');
    const closeBtn = document.getElementById('close-settings-modal');
    const closeBtn2 = document.getElementById('close-settings-modal-btn');
    const saveBtn = document.getElementById('save-settings-btn');
    
    if (openBtn) {
        openBtn.addEventListener('click', showSettingsModal);
    }
    
    if (closeBtn) closeBtn.addEventListener('click', hideSettingsModal);
    if (closeBtn2) closeBtn2.addEventListener('click', hideSettingsModal);
    if (saveBtn) saveBtn.addEventListener('click', saveSettings);
    
    // Инициализация вкладок
    const tabs = document.querySelectorAll('.settings-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            const tabId = this.dataset.tab;
            switchSettingsTab(tabId);
        });
    });
    
    // Инициализация темы (без немедленного применения)
    const darkBtn = document.getElementById('dark-theme-btn');
    const lightBtn = document.getElementById('light-theme-btn');
    const autoBtn = document.getElementById('auto-theme-btn');
    
    if (darkBtn) darkBtn.addEventListener('click', () => setThemeTemp('dark'));
    if (lightBtn) lightBtn.addEventListener('click', () => setThemeTemp('light'));
    if (autoBtn) autoBtn.addEventListener('click', () => setThemeTemp('auto'));
    
    // Инициализация языковых кнопок
    const ruLangBtn = document.getElementById('ru-lang-btn');
    const enLangBtn = document.getElementById('en-lang-btn');
    
    if (ruLangBtn) ruLangBtn.addEventListener('click', () => setLanguageTemp('ru'));
    if (enLangBtn) enLangBtn.addEventListener('click', () => setLanguageTemp('en'));
    
    // Настройки уведомлений (без немедленного сохранения)
    const notificationsEnabled = document.getElementById('notifications-enabled');
    const notificationsBeforeDeadline = document.getElementById('notifications-before-deadline');
    const notificationsOnDeadline = document.getElementById('notifications-on-deadline');
    
    if (notificationsEnabled) {
        notificationsEnabled.addEventListener('change', (e) => {
            if (tempSettings) {
                tempSettings.notificationsEnabled = e.target.checked;
            }
        });
    }
    
    if (notificationsBeforeDeadline) {
        notificationsBeforeDeadline.addEventListener('change', (e) => {
            if (tempSettings) {
                tempSettings.notificationsBeforeDeadline = e.target.checked;
            }
        });
    }
    
    if (notificationsOnDeadline) {
        notificationsOnDeadline.addEventListener('change', (e) => {
            if (tempSettings) {
                tempSettings.notificationsOnDeadline = e.target.checked;
            }
        });
    }
    
    // Инициализация управления категориями
    const addCategoryBtn = document.getElementById('settings-add-category-btn');
    if (addCategoryBtn) {
        addCategoryBtn.addEventListener('click', addCategoryFromSettings);
    }
    
    // Инициализация выбора цвета (без немедленного сохранения)
    const colorOptions = document.querySelectorAll('.color-option');
    colorOptions.forEach(option => {
        option.addEventListener('click', function() {
            colorOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
            if (tempSettings) {
                tempSettings.selectedColor = this.dataset.color;
            }
        });
    });
    
    // Инициализация экспорта данных
    const exportBtn = document.getElementById('export-data-btn');
    if (exportBtn) {
        exportBtn.addEventListener('click', exportData);
    }
}

function switchSettingsTab(tabId) {
    document.querySelectorAll('.settings-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelectorAll('.settings-tab-content').forEach(content => {
        content.classList.remove('active');
    });
    
    const activeTab = document.querySelector(`.settings-tab[data-tab="${tabId}"]`);
    const activeContent = document.getElementById(`${tabId}-tab`);
    
    if (activeTab) activeTab.classList.add('active');
    if (activeContent) {
        activeContent.classList.add('active');
        if (tabId === 'categories') {
            renderCategoriesSettings();
        } else if (tabId === 'data') {
            updateAppInfo();
        }
    }
}

// Временное изменение темы (без применения)
function setThemeTemp(theme) {
    document.querySelectorAll('.theme-option-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    const activeBtn = document.getElementById(`${theme}-theme-btn`);
    if (activeBtn) activeBtn.classList.add('active');
    
    if (tempSettings) {
        tempSettings.theme = theme;
    }
}

function setTheme(theme) {
    document.querySelectorAll('.theme-option-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    const activeBtn = document.getElementById(`${theme}-theme-btn`);
    if (activeBtn) activeBtn.classList.add('active');
    
    state.theme = theme;
    
    if (theme === 'auto') {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        applyTheme(prefersDark ? 'dark' : 'light');
    } else {
        applyTheme(theme);
    }
    
    saveState();
}

function applyTheme(theme) {
    // Используем requestAnimationFrame для предотвращения моргания
    requestAnimationFrame(() => {
        if (theme === 'dark') {
            document.body.classList.remove('light-theme');
            document.body.classList.add('dark-theme');
            updatePrimaryColor('#7395ae');
        } else {
            document.body.classList.remove('dark-theme');
            document.body.classList.add('light-theme');
            updatePrimaryColor('#e27d80');
        }
        updateLandingThemeIcon();
    });
}

// Временное изменение языка (без применения)
function setLanguageTemp(lang) {
    document.querySelectorAll('.language-option-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    const activeBtn = document.getElementById(`${lang}-lang-btn`);
    if (activeBtn) activeBtn.classList.add('active');
    
    if (tempSettings) {
        tempSettings.language = lang;
    }
}

// Установка языка
function setLanguage(lang) {
    document.querySelectorAll('.language-option-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    const activeBtn = document.getElementById(`${lang}-lang-btn`);
    if (activeBtn) activeBtn.classList.add('active');
    
    state.language = lang;
    localStorage.setItem('flowLanguage', lang);
    
    // Обновляем категорию "Общие" при смене языка
    const generalCategory = state.categories.find(cat => cat.id === 'general');
    if (generalCategory) {
        generalCategory.name = t('generalCategory');
    }
    
    // Обновляем все тексты на странице
    updateAllTexts();
    
    // Перерисовываем все элементы с новыми переводами
    renderAll();
    
    // Переинициализируем flatpickr с новым языком
    initFlatpickr();
    
    saveState();
}

// Обновление всех текстов на странице
function updateAllTexts() {
    // Обновляем тексты в настройках
    const settingsTitle = document.querySelector('#settings-modal .modal-header h3');
    if (settingsTitle) {
        settingsTitle.innerHTML = `<i class="fas fa-cog"></i> ${t('settings')}`;
    }
    
    // Обновляем вкладки настроек
    const appearanceTab = document.querySelector('.settings-tab[data-tab="appearance"]');
    if (appearanceTab) appearanceTab.innerHTML = `<i class="fas fa-palette"></i> ${t('appearance')}`;
    
    const categoriesTab = document.querySelector('.settings-tab[data-tab="categories"]');
    if (categoriesTab) categoriesTab.innerHTML = `<i class="fas fa-folder"></i> ${t('categories')}`;
    
    const notificationsTab = document.querySelector('.settings-tab[data-tab="notifications"]');
    if (notificationsTab) notificationsTab.innerHTML = `<i class="fas fa-bell"></i> ${t('notifications')}`;
    
    const dataTab = document.querySelector('.settings-tab[data-tab="data"]');
    if (dataTab) dataTab.innerHTML = `<i class="fas fa-database"></i> ${t('data')}`;
    
    // Обновляем заголовки секций
    const themeSection = document.querySelector('#appearance-tab h4');
    if (themeSection) themeSection.innerHTML = `<i class="fas fa-adjust"></i> ${t('theme')}`;
    
    const languageSection = document.querySelector('#appearance-tab .settings-section:last-child h4');
    if (languageSection) languageSection.innerHTML = `<i class="fas fa-language"></i> ${t('language')}`;
    
    // Обновляем кнопки темы
    const darkThemeBtn = document.getElementById('dark-theme-btn');
    if (darkThemeBtn) darkThemeBtn.querySelector('span').textContent = t('dark');
    
    const lightThemeBtn = document.getElementById('light-theme-btn');
    if (lightThemeBtn) lightThemeBtn.querySelector('span').textContent = t('light');
    
    const autoThemeBtn = document.getElementById('auto-theme-btn');
    if (autoThemeBtn) autoThemeBtn.querySelector('span').textContent = t('auto');
    
    // Обновляем кнопки языка
    const ruLangBtn = document.getElementById('ru-lang-btn');
    if (ruLangBtn) ruLangBtn.querySelector('span').textContent = t('russian');
    
    const enLangBtn = document.getElementById('en-lang-btn');
    if (enLangBtn) enLangBtn.querySelector('span').textContent = t('english');
    
    // Обновляем кнопки сохранения
    const saveBtn = document.getElementById('save-settings-btn');
    if (saveBtn) saveBtn.textContent = t('save');
    
    const closeBtn = document.getElementById('close-settings-modal-btn');
    if (closeBtn) closeBtn.textContent = t('close');
    
    // Обновляем лендинг
    updateLandingTexts();
    
    // Обновляем другие элементы интерфейса
    updateInterfaceTexts();
    
    // Обновляем модальные окна
    updateModalTexts();
}

// Обновление текстов лендинга
function updateLandingTexts() {
    const landingSubtitle = document.querySelector('.landing-subtitle');
    if (landingSubtitle) landingSubtitle.textContent = t('landingSubtitle');
    
    const feature1 = document.querySelector('.landing-features .feature-item:nth-child(1) span');
    if (feature1) feature1.textContent = t('landingFeature1');
    
    const feature2 = document.querySelector('.landing-features .feature-item:nth-child(2) span');
    if (feature2) feature2.textContent = t('landingFeature2');
    
    const feature3 = document.querySelector('.landing-features .feature-item:nth-child(3) span');
    if (feature3) feature3.textContent = t('landingFeature3');
    
    const feature4 = document.querySelector('.landing-features .feature-item:nth-child(4) span');
    if (feature4) feature4.textContent = t('landingFeature4');
    
    const landingDescription = document.querySelector('.landing-description p:first-child');
    if (landingDescription) landingDescription.textContent = t('landingDescription');
    
    const landingHumor = document.querySelector('.landing-humor');
    if (landingHumor) landingHumor.textContent = t('landingHumor');
    
    const startNow = document.querySelector('.auth-card h2');
    if (startNow) startNow.textContent = t('startNow');
    
    const authSubtitle = document.querySelector('.auth-subtitle');
    if (authSubtitle) authSubtitle.textContent = t('createAccount');
    
    const registerTab = document.getElementById('landing-register-tab');
    if (registerTab) registerTab.innerHTML = `<i class="fas fa-user-plus"></i> ${t('register')}`;
    
    const loginTab = document.getElementById('landing-login-tab');
    if (loginTab) loginTab.innerHTML = `<i class="fas fa-sign-in-alt"></i> ${t('login')}`;
    
    // Форма регистрации
    // Форма регистрации - используем более надежные селекторы
    const registerNameLabel = document.querySelector('#landing-register-name')?.previousElementSibling;
    if (registerNameLabel && registerNameLabel.tagName === 'LABEL') {
        registerNameLabel.textContent = t('name');
    }
    
    const registerNameInput = document.getElementById('landing-register-name');
    if (registerNameInput) registerNameInput.placeholder = t('enterName');
    
    const registerEmailLabel = document.querySelector('#landing-register-email')?.previousElementSibling;
    if (registerEmailLabel && registerEmailLabel.tagName === 'LABEL') {
        registerEmailLabel.textContent = t('email');
    }
    
    const registerEmailInput = document.getElementById('landing-register-email');
    if (registerEmailInput) registerEmailInput.placeholder = t('enterEmail');
    
    // Обновляем метки паролей в форме регистрации - используем более надежный селектор
    const registerPasswordLabel = document.querySelector('#landing-register-password')?.previousElementSibling;
    if (registerPasswordLabel && registerPasswordLabel.tagName === 'LABEL') {
        registerPasswordLabel.textContent = t('password');
    }
    
    const registerPasswordInput = document.getElementById('landing-register-password');
    if (registerPasswordInput) registerPasswordInput.placeholder = t('minPassword');
    
    const registerPasswordConfirmLabel = document.querySelector('#landing-register-password-confirm')?.previousElementSibling;
    if (registerPasswordConfirmLabel && registerPasswordConfirmLabel.tagName === 'LABEL') {
        registerPasswordConfirmLabel.textContent = t('confirmPassword');
    }
    
    const registerPasswordConfirmInput = document.getElementById('landing-register-password-confirm');
    if (registerPasswordConfirmInput) registerPasswordConfirmInput.placeholder = t('repeatPassword');
    
    const registerBtn = document.getElementById('landing-register-btn');
    if (registerBtn) registerBtn.innerHTML = `<i class="fas fa-rocket"></i> ${t('go')}`;
    
    // Форма входа
    const loginEmailLabel = document.querySelector('#landing-login-email')?.previousElementSibling;
    if (loginEmailLabel && loginEmailLabel.tagName === 'LABEL') {
        loginEmailLabel.textContent = t('email');
    }
    
    const loginEmailInput = document.getElementById('landing-login-email');
    if (loginEmailInput) loginEmailInput.placeholder = t('enterEmail');
    
    // Обновляем метку пароля в форме входа - используем более надежный селектор
    const loginPasswordLabel = document.querySelector('#landing-login-password')?.previousElementSibling;
    if (loginPasswordLabel && loginPasswordLabel.tagName === 'LABEL') {
        loginPasswordLabel.textContent = t('password');
    }
    
    const loginPasswordInput = document.getElementById('landing-login-password');
    if (loginPasswordInput) loginPasswordInput.placeholder = t('enterPassword');
    
    const loginBtn = document.getElementById('landing-login-btn');
    if (loginBtn) loginBtn.innerHTML = `<i class="fas fa-sign-in-alt"></i> ${t('enter')}`;
    
    // Атрибуты
    const themeToggle = document.getElementById('landing-theme-toggle');
    if (themeToggle) themeToggle.setAttribute('aria-label', t('toggleTheme'));
    
    const languageToggle = document.getElementById('landing-language-toggle');
    if (languageToggle) languageToggle.setAttribute('aria-label', t('toggleLanguage'));
    
    // Обновляем кнопку языка
    updateLandingLanguageButton();
    
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    if (mobileMenuBtn) mobileMenuBtn.setAttribute('aria-label', t('openMenu'));
}

// Обновление текстов модальных окон
function updateModalTexts() {
    // Модальное окно редактирования задачи
    const editModalTitle = document.querySelector('#edit-modal .modal-header h3');
    if (editModalTitle) editModalTitle.textContent = t('editTask');
    
    const editTaskInput = document.getElementById('edit-task-input');
    if (editTaskInput) editTaskInput.placeholder = t('taskInput');
    
    const editTaskDeadline = document.getElementById('edit-task-deadline');
    if (editTaskDeadline) editTaskDeadline.placeholder = t('deadline');
    
    const editNotesLabel = document.querySelector('.notes-label');
    if (editNotesLabel) editNotesLabel.innerHTML = `<i class="fas fa-sticky-note"></i> ${t('notes')}`;
    
    const editNotesTextarea = document.getElementById('edit-task-notes');
    if (editNotesTextarea) editNotesTextarea.placeholder = t('addNotes');
    
    const saveEditBtn = document.getElementById('save-edit-btn');
    if (saveEditBtn) saveEditBtn.textContent = t('save');
    
    const cancelEditBtn = document.getElementById('cancel-edit-btn');
    if (cancelEditBtn) cancelEditBtn.textContent = t('cancel');
    
    // Модальное окно подтверждения
    const confirmTitle = document.getElementById('confirm-title');
    if (confirmTitle) confirmTitle.textContent = t('deleteConfirm');
    
    const confirmOkBtn = document.getElementById('confirm-ok');
    if (confirmOkBtn) confirmOkBtn.textContent = t('confirm');
    
    const confirmCancelBtn = document.getElementById('confirm-cancel');
    if (confirmCancelBtn) confirmCancelBtn.textContent = t('cancel');
    
    // Модальное окно профиля
    const profileModalTitle = document.querySelector('#profile-modal .modal-header h3');
    if (profileModalTitle) profileModalTitle.innerHTML = `<i class="fas fa-user-circle"></i> ${t('profile')}`;
    
    const changePasswordBtn = document.getElementById('change-password-btn');
    if (changePasswordBtn) changePasswordBtn.innerHTML = `<i class="fas fa-key"></i> ${t('changePassword')}`;
    
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) logoutBtn.innerHTML = `<i class="fas fa-sign-out-alt"></i> ${t('logout')}`;
    
    // Обновляем метки в профиле
    const profileTasksLabel = document.querySelector('#profile-tasks-count')?.nextElementSibling;
    if (profileTasksLabel) profileTasksLabel.textContent = t('totalTasks');
    
    const profileCompletedLabel = document.querySelector('#profile-completed-count')?.nextElementSibling;
    if (profileCompletedLabel) profileCompletedLabel.textContent = t('completed');
    
    // Обновляем "Зарегистрирован:" в профиле при открытии
    if (state.user) {
        const profileJoined = document.getElementById('profile-joined');
        if (profileJoined && state.user.joinedAt) {
            const date = new Date(state.user.joinedAt);
            profileJoined.textContent = t('registered') + ' ' + date.toLocaleDateString(state.language === 'ru' ? 'ru-RU' : 'en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        }
    }
    
    // Модальное окно изменения пароля
    const changePasswordModalTitle = document.querySelector('#change-password-modal .modal-header h3');
    if (changePasswordModalTitle) changePasswordModalTitle.innerHTML = `<i class="fas fa-key"></i> ${t('changePassword')}`;
    
    const currentPasswordLabel = document.querySelector('#change-password-modal label:first-child');
    if (currentPasswordLabel) currentPasswordLabel.textContent = t('currentPassword');
    
    const currentPasswordInput = document.getElementById('current-password');
    if (currentPasswordInput) currentPasswordInput.placeholder = t('enterCurrentPassword');
    
    const newPasswordLabel = document.querySelector('#change-password-modal label:nth-child(2)');
    if (newPasswordLabel) newPasswordLabel.textContent = t('newPassword');
    
    const newPasswordInput = document.getElementById('new-password');
    if (newPasswordInput) newPasswordInput.placeholder = t('enterNewPassword');
    
    const confirmNewPasswordLabel = document.querySelector('#change-password-modal label:nth-child(3)');
    if (confirmNewPasswordLabel) confirmNewPasswordLabel.textContent = t('confirmNewPassword');
    
    const confirmNewPasswordInput = document.getElementById('new-password-confirm');
    if (confirmNewPasswordInput) confirmNewPasswordInput.placeholder = t('repeatNewPassword');
    
    const savePasswordBtn = document.getElementById('save-password-btn');
    if (savePasswordBtn) savePasswordBtn.textContent = t('save');
    
    const cancelPasswordBtn = document.getElementById('cancel-password-btn');
    if (cancelPasswordBtn) cancelPasswordBtn.textContent = t('cancel');
    
    // Модальное окно аналитики
    const analyticsModalTitle = document.querySelector('#analytics-modal .modal-header h3');
    if (analyticsModalTitle) analyticsModalTitle.innerHTML = `<i class="fas fa-chart-line"></i> ${t('analytics')}`;
    
    const closeAnalyticsBtn = document.getElementById('close-analytics-modal-btn');
    if (closeAnalyticsBtn) closeAnalyticsBtn.textContent = t('close');
    
    // Настройки - дополнительные элементы
    const quickStartHeader = document.querySelector('.quick-start-section h3');
    if (quickStartHeader) quickStartHeader.innerHTML = `<i class="fas fa-bolt"></i> ${t('quickStart')}`;
    
    const editQuickTasksBtn = document.getElementById('edit-quick-tasks-btn');
    if (editQuickTasksBtn) editQuickTasksBtn.setAttribute('title', t('editTemplates'));
    
    const addQuickTaskBtn = document.getElementById('add-quick-task-btn');
    if (addQuickTaskBtn) addQuickTaskBtn.setAttribute('title', t('addTemplate'));
    
    const newQuickTaskInput = document.getElementById('new-quick-task-input');
    if (newQuickTaskInput) newQuickTaskInput.placeholder = t('quickTaskText');
    
    const saveQuickTaskBtn = document.getElementById('save-quick-task-btn');
    if (saveQuickTaskBtn) saveQuickTaskBtn.textContent = t('addQuickTask');
    
    const cancelQuickTaskBtn = document.getElementById('cancel-quick-task-btn');
    if (cancelQuickTaskBtn) cancelQuickTaskBtn.textContent = t('cancel');
    
    // Настройки категорий
    const categoryNameInput = document.getElementById('settings-category-name');
    if (categoryNameInput) categoryNameInput.placeholder = t('categoryName');
    
    const addCategoryBtn = document.getElementById('settings-add-category-btn');
    if (addCategoryBtn) addCategoryBtn.innerHTML = `<i class="fas fa-plus"></i> ${t('addCategory')}`;
    
    // Настройки уведомлений
    const notificationsEnabledLabel = document.querySelector('#notifications-enabled').parentElement.querySelector('span');
    if (notificationsEnabledLabel) notificationsEnabledLabel.textContent = t('notificationsEnabled');
    
    const notifyBeforeLabel = document.querySelector('#notifications-before-deadline').parentElement.querySelector('span');
    if (notifyBeforeLabel) notifyBeforeLabel.textContent = t('notifyBeforeDeadline');
    
    const notifyOnLabel = document.querySelector('#notifications-on-deadline').parentElement.querySelector('span');
    if (notifyOnLabel) notifyOnLabel.textContent = t('notifyOnDeadline');
    
    // Настройки данных
    const exportDescription = document.querySelector('.export-description');
    if (exportDescription) {
        exportDescription.innerHTML = `${t('exportDescription')}<br><code>${t('exportFormat')}</code>`;
    }
    
    const exportBtn = document.getElementById('export-data-btn');
    if (exportBtn) exportBtn.innerHTML = `<i class="fas fa-file-export"></i><span>${t('exportTasks')}</span>`;
    
    const infoSection = document.querySelector('#data-tab .settings-section:last-child h4');
    if (infoSection) infoSection.innerHTML = `<i class="fas fa-info-circle"></i> ${t('info')}`;
    
    const totalTasksLabel = document.querySelector('#settings-total-tasks').nextElementSibling;
    if (totalTasksLabel) totalTasksLabel.textContent = t('totalTasks');
    
    const completedLabel = document.querySelector('#settings-completed-tasks').nextElementSibling;
    if (completedLabel) completedLabel.textContent = t('completed');
    
    const categoriesCountLabel = document.querySelector('#settings-categories-count').nextElementSibling;
    if (categoriesCountLabel) categoriesCountLabel.textContent = t('categoriesCount');
    
    // Заголовки секций
    const taskListHeader = document.querySelector('.tasks-header h3');
    if (taskListHeader) taskListHeader.innerHTML = `<i class="fas fa-stream"></i> ${t('taskList')}`;
    
    const urgentTasksHeader = document.querySelector('.urgent-tasks-header h4');
    if (urgentTasksHeader) urgentTasksHeader.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${t('urgentToday')}`;
    
    // Периоды аналитики
    const periodWeekBtn = document.querySelector('.period-btn[data-period="week"]');
    if (periodWeekBtn) periodWeekBtn.textContent = t('periodWeek');
    
    const periodMonthBtn = document.querySelector('.period-btn[data-period="month"]');
    if (periodMonthBtn) periodMonthBtn.textContent = t('periodMonth');
    
    const periodQuarterBtn = document.querySelector('.period-btn[data-period="quarter"]');
    if (periodQuarterBtn) periodQuarterBtn.textContent = t('periodQuarter');
    
    // Заголовки аналитики
    const efficiencyLabel = document.querySelector('#hero-efficiency').nextElementSibling.nextElementSibling;
    if (efficiencyLabel) efficiencyLabel.textContent = t('efficiency');
    
    const todayLabel = document.querySelector('#hero-today-tasks').nextElementSibling.nextElementSibling;
    if (todayLabel) todayLabel.textContent = t('today');
    
    const streakLabel = document.querySelector('#hero-streak').nextElementSibling.nextElementSibling;
    if (streakLabel) streakLabel.innerHTML = t('daysStreak');
    
    const avgCompletionLabel = document.querySelector('#hero-avg-completion').nextElementSibling.nextElementSibling;
    if (avgCompletionLabel) avgCompletionLabel.innerHTML = t('avgCompletion');
    
    // Заголовки карточек аналитики
    const priorityDistributionHeader = document.querySelector('#priority-chart').closest('.analytics-card')?.querySelector('h4');
    if (priorityDistributionHeader) priorityDistributionHeader.innerHTML = `<i class="fas fa-chart-pie"></i> ${t('priorityDistribution')}`;
    
    const completionTrendsHeader = document.querySelector('.analytics-card:nth-child(2) h4');
    if (completionTrendsHeader) completionTrendsHeader.innerHTML = `<i class="fas fa-trend-up"></i> ${t('completionTrends')}`;
    
    const productivityHeader = document.querySelector('#productivity-chart').closest('.analytics-card')?.querySelector('h4');
    if (productivityHeader) productivityHeader.innerHTML = `<i class="fas fa-chart-bar"></i> ${t('productivity')}`;
    
    const timeMetricsHeader = document.querySelector('.analytics-card:nth-child(4) h4');
    if (timeMetricsHeader) timeMetricsHeader.innerHTML = `<i class="fas fa-clock"></i> ${t('timeMetrics')}`;
    
    const recommendationsHeader = document.querySelector('.analytics-card:last-child h4');
    if (recommendationsHeader) recommendationsHeader.innerHTML = `<i class="fas fa-lightbulb"></i> ${t('recommendations')}`;
    
    // Метки трендов
    const yesterdayLabel = document.querySelector('.trend-stat:nth-child(1) .trend-label');
    if (yesterdayLabel) yesterdayLabel.textContent = t('yesterday');
    
    const weekLabel = document.querySelector('.trend-stat:nth-child(2) .trend-label');
    if (weekLabel) weekLabel.textContent = t('week');
    
    const monthLabel = document.querySelector('.trend-stat:nth-child(3) .trend-label');
    if (monthLabel) monthLabel.textContent = t('month');
    
    const totalLabel = document.querySelector('.trend-stat:nth-child(4) .trend-label');
    if (totalLabel) totalLabel.textContent = t('total');
    
    // Временные метрики
    const avgCompletionTimeLabel = document.querySelector('#avg-completion-time').nextElementSibling;
    if (avgCompletionTimeLabel) avgCompletionTimeLabel.textContent = t('avgCompletionTime');
    
    const onTimeRateLabel = document.querySelector('#on-time-rate').nextElementSibling;
    if (onTimeRateLabel) onTimeRateLabel.textContent = t('onTimeRate');
    
    // Метки приоритетов в аналитике
    const priorityHighLabel = document.querySelector('.chart-stat:nth-child(1) .stat-label');
    if (priorityHighLabel) {
        const percent = document.getElementById('priority-high-percent')?.textContent || '0%';
        priorityHighLabel.innerHTML = `${t('high')}: <span id="priority-high-percent">${percent}</span>`;
    }
    
    const priorityMediumLabel = document.querySelector('.chart-stat:nth-child(2) .stat-label');
    if (priorityMediumLabel) {
        const percent = document.getElementById('priority-medium-percent')?.textContent || '0%';
        priorityMediumLabel.innerHTML = `${t('medium')}: <span id="priority-medium-percent">${percent}</span>`;
    }
    
    const priorityLowLabel = document.querySelector('.chart-stat:nth-child(3) .stat-label');
    if (priorityLowLabel) {
        const percent = document.getElementById('priority-low-percent')?.textContent || '0%';
        priorityLowLabel.innerHTML = `${t('low')}: <span id="priority-low-percent">${percent}</span>`;
    }
    
    // Обновляем график приоритетов после обновления текстов
    if (document.getElementById('analytics-modal')?.style.display === 'block') {
        updatePriorityChart();
    }
}

// Обновление текстов интерфейса
function updateInterfaceTexts() {
    // Обновляем заголовки и тексты в основном интерфейсе
    const myTasksHeader = document.querySelector('.main-header h2');
    if (myTasksHeader) myTasksHeader.innerHTML = `<i class="fas fa-tasks"></i> ${t('myTasks')}`;
    
    const taskInput = document.getElementById('task-input');
    if (taskInput) taskInput.placeholder = t('taskInput');
    
    const taskDeadline = document.getElementById('task-deadline');
    if (taskDeadline) taskDeadline.placeholder = t('deadline');
    
    const addTaskBtn = document.getElementById('add-task-btn');
    if (addTaskBtn) addTaskBtn.innerHTML = `<i class="fas fa-plus"></i> ${t('add')}`;
    
    // Обновляем приоритеты
    const priorityBtns = document.querySelectorAll('.priority-btn');
    priorityBtns.forEach(btn => {
        const priority = btn.dataset.priority;
        if (priority === 'low') btn.innerHTML = `<i class="fas fa-leaf"></i> ${t('low')}`;
        if (priority === 'medium') btn.innerHTML = `<i class="fas fa-chart-line"></i> ${t('medium')}`;
        if (priority === 'high') btn.innerHTML = `<i class="fas fa-fire"></i> ${t('high')}`;
    });
    
    // Обновляем фильтры
    const allFilter = document.querySelector('.filter-btn[data-filter="all"] .filter-name');
    if (allFilter) allFilter.textContent = t('all');
    
    const highFilter = document.querySelector('.filter-btn[data-filter="high"] .filter-name');
    if (highFilter) highFilter.textContent = t('high');
    
    const overdueFilter = document.querySelector('.filter-btn[data-filter="overdue"] .filter-name');
    if (overdueFilter) overdueFilter.textContent = t('overdue');
    
    const archivedFilter = document.querySelector('.filter-btn[data-filter="archived"] .filter-name');
    if (archivedFilter) archivedFilter.textContent = t('archived');
    
    // Обновляем поиск
    const searchInput = document.getElementById('search-input');
    if (searchInput) searchInput.placeholder = t('searchTasks');
    
    // Обновляем сортировку
    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
        sortSelect.innerHTML = `
            <option value="priority">${t('sortByPriority')}</option>
            <option value="deadline">${t('sortByDeadline')}</option>
            <option value="newest">${t('sortNewest')}</option>
            <option value="oldest">${t('sortOldest')}</option>
            <option value="order">${t('sortByOrder')}</option>
        `;
    }
    
    // Обновляем категории в селектах
    updateCategorySelects();
    
    // Обновляем приоритеты в шаблоне быстрых задач
    const quickTaskPrioritySelect = document.getElementById('new-quick-task-priority');
    if (quickTaskPrioritySelect) {
        quickTaskPrioritySelect.innerHTML = `
            <option value="high">${t('high')}</option>
            <option value="medium">${t('medium')}</option>
            <option value="low">${t('low')}</option>
        `;
    }
    
    // Обновляем кнопку "Настройки" в левом меню
    const settingsBtn = document.getElementById('open-settings-btn');
    if (settingsBtn) {
        const span = settingsBtn.querySelector('span');
        if (span) span.textContent = t('settings');
    }
    
    // Обновляем заголовок "Быстрый старт"
    const quickStartHeader = document.querySelector('.quick-start-section h3');
    if (quickStartHeader) quickStartHeader.innerHTML = `<i class="fas fa-bolt"></i> ${t('quickStart')}`;
    
    // Обновляем заголовок "Список задач"
    const taskListHeader = document.querySelector('.tasks-header h3');
    if (taskListHeader) taskListHeader.innerHTML = `<i class="fas fa-stream"></i> ${t('taskList')}`;
    
    // Обновляем заголовок "Задачи истекают сегодня"
    const urgentTasksHeader = document.querySelector('.urgent-tasks-header h4');
    if (urgentTasksHeader) urgentTasksHeader.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${t('urgentToday')}`;
    
    // Обновляем заголовок "Настройки уведомлений"
    const notificationsHeader = document.querySelector('#notifications-tab h4');
    if (notificationsHeader) notificationsHeader.innerHTML = `<i class="fas fa-bell"></i> ${t('notifications')}`;
    
    // Обновляем заголовок "Управление категориями"
    const categoriesManagementHeader = document.querySelector('#categories-tab h4');
    if (categoriesManagementHeader) categoriesManagementHeader.innerHTML = `<i class="fas fa-tags"></i> ${t('categories')}`;
    
    // Обновляем заголовок "Экспорт данных"
    const exportDataHeader = document.querySelector('#data-tab .settings-section:first-child h4');
    if (exportDataHeader) exportDataHeader.innerHTML = `<i class="fas fa-file-export"></i> ${t('exportData')}`;
    
    // Обновляем заголовок "Информация"
    const infoHeader = document.querySelector('#data-tab .settings-section:last-child h4');
    if (infoHeader) infoHeader.innerHTML = `<i class="fas fa-info-circle"></i> ${t('info')}`;
}

// Мобильное меню
function initMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('left-menu');
    const overlay = document.getElementById('mobile-menu-overlay');
    
    if (menuBtn && menu && overlay) {
        menuBtn.addEventListener('click', () => {
            menu.classList.add('open');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        
        overlay.addEventListener('click', () => {
            menu.classList.remove('open');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        });
        
        // Закрытие по Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && menu.classList.contains('open')) {
                menu.classList.remove('open');
                overlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
}

// Поиск
function initSearch() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            state.searchQuery = e.target.value.toLowerCase().trim();
            renderTasks();
        });
        
        // Очистка поиска
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                searchInput.value = '';
                state.searchQuery = '';
                renderTasks();
            }
        });
    }
}

// Валидация форм
function initValidation() {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    
    if (taskInput && addTaskBtn) {
        taskInput.addEventListener('input', () => {
            validateTaskInput();
        });
        
        taskInput.addEventListener('blur', () => {
            validateTaskInput();
        });
    }
}

function validateTaskInput() {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const errorEl = document.getElementById('task-input-error');
    
    if (!taskInput || !addTaskBtn) return;
    
    const text = taskInput.value.trim();
    const isValid = text.length > 0;
    
    if (isValid) {
        taskInput.classList.remove('error');
        if (errorEl) errorEl.textContent = '';
        addTaskBtn.disabled = false;
    } else {
        taskInput.classList.add('error');
        if (errorEl) errorEl.textContent = t('enterTaskText');
        addTaskBtn.disabled = true;
    }
}

// Уведомления браузера
function initNotifications() {
    if ('Notification' in window && Notification.permission === 'default') {
        Notification.requestPermission();
    }
}

function checkDeadlineNotifications() {
    if (!state.notificationsEnabled || Notification.permission !== 'granted') return;
    
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    
    state.tasks.forEach(task => {
        if (task.completed || !task.deadline) return;
        
        try {
            let deadline, daysDiff;
            
            if (typeof dateFns !== 'undefined') {
                deadline = dateFns.parse(task.deadline, 'd.M.yyyy', new Date());
                if (!dateFns.isValid(deadline)) return;
                const deadlineStart = dateFns.startOfDay(deadline);
                daysDiff = dateFns.differenceInDays(deadlineStart, today);
            } else {
                // Fallback
                const parts = task.deadline.split('.');
                if (parts.length !== 3) return;
                deadline = new Date(parseInt(parts[2]), parseInt(parts[1]) - 1, parseInt(parts[0]));
                deadline.setHours(0, 0, 0, 0);
                daysDiff = Math.floor((deadline - today) / (1000 * 60 * 60 * 24));
            }
            
            // Уведомление за день до дедлайна
            if (state.notificationsBeforeDeadline && daysDiff === 1) {
                const notificationId = `deadline-${task.id}-before`;
                if (!localStorage.getItem(notificationId)) {
                    showBrowserNotification(
                        `Напоминание: "${task.text}"`,
                        `Дедлайн завтра!`
                    );
                    localStorage.setItem(notificationId, 'true');
                }
            }
            
            // Уведомление в день дедлайна
            if (state.notificationsOnDeadline && daysDiff === 0) {
                const notificationId = `deadline-${task.id}-today`;
                if (!localStorage.getItem(notificationId)) {
                    showBrowserNotification(
                        `Срочно: "${task.text}"`,
                        `Дедлайн сегодня!`
                    );
                    localStorage.setItem(notificationId, 'true');
                }
            }
        } catch (e) {
            console.error('Ошибка при проверке дедлайна:', e);
        }
    });
}

function showBrowserNotification(title, body) {
    if ('Notification' in window && Notification.permission === 'granted') {
        new Notification(title, {
            body: body,
            icon: '/favicon.ico',
            badge: '/favicon.ico'
        });
    }
}

function addCategoryFromSettings() {
    const nameInput = document.getElementById('settings-category-name');
    const errorEl = document.getElementById('category-name-error');
    
    if (!nameInput) return;
    
    // Убеждаемся, что категории загружены
    if (!state.categories || state.categories.length === 0) {
        if (state.user) {
            loadUserData();
        } else {
            state.categories = [{ id: 'general', name: t('generalCategory'), color: '#7395ae' }];
        }
    }
    
    const name = nameInput.value.trim();
    if (!name) {
        if (errorEl) errorEl.textContent = t('categoryNameRequired');
        nameInput.classList.add('error');
        showNotification(t('categoryNameRequired'), 'error');
        return;
    }
    
    // Проверка на дубликаты
    const duplicate = state.categories.find(cat => cat.name.toLowerCase() === name.toLowerCase());
    if (duplicate) {
        if (errorEl) errorEl.textContent = t('categoryExists');
        nameInput.classList.add('error');
        showNotification(t('categoryExists'), 'error');
        return;
    }
    
    if (errorEl) errorEl.textContent = '';
    nameInput.classList.remove('error');
    
    const newCategory = {
        id: 'cat_' + Date.now(),
        name: name,
        color: state.selectedColor || '#7395ae'
    };
    
    state.categories.push(newCategory);
    saveState();
    renderCategories();
    renderCategoriesSettings();
    updateCategorySelects();
    nameInput.value = '';
    showNotification(t('categoryAdded'), 'success');
}

function renderCategoriesSettings() {
    const container = document.getElementById('categories-list-settings');
    if (!container) return;
    
    // Фильтруем категории, скрывая "Общие"
    const visibleCategories = state.categories.filter(cat => cat.id !== 'general');
    
    container.innerHTML = visibleCategories.map(cat => {
        const count = state.tasks.filter(t => t.category === cat.id && !t.completed).length;
        
        return `
            <div class="category-item-settings">
                <div class="category-info">
                    <div class="category-color-indicator" style="background-color: ${cat.color}"></div>
                    <span class="category-name-settings">${escapeHtml(cat.name)}</span>
                </div>
                <div class="category-actions">
                    <span class="category-task-count">${count}</span>
                    <button class="delete-category-btn" onclick="deleteCategoryFromSettings('${cat.id}')" title="${t('deleteCategoryTitle')}">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

function deleteCategoryFromSettings(categoryId) {
    deleteCategory(categoryId, true);
}

function exportData() {
    let exportContent = '';
    
    // Собираем все задачи
    const tasksToExport = state.tasks.map(task => {
        const createdAt = new Date(task.createdAt).toISOString().split('T')[0];
        const updatedAt = task.completed ? new Date(task.updatedAt).toISOString().split('T')[0] : '';
        const category = task.category || 'general';
        const categoryName = state.categories.find(c => c.id === category)?.name || category;
        
        return {
            createdAt,
            priority: getPriorityText(task.priority),
            category: categoryName,
            text: task.text,
            deadline: task.deadline || '',
            completedDate: updatedAt
        };
    });
    
    // Находим максимальные длины для каждого столбца
    const createdDateLabel = t('exportCreatedDate');
    const priorityLabel = t('exportPriority');
    const categoryLabel = t('exportCategory');
    const taskLabel = t('exportTask');
    const deadlineLabel = t('exportDeadline');
    const completionDateLabel = t('exportCompletionDate');
    
    const maxLengths = {
        createdAt: Math.max(...tasksToExport.map(t => t.createdAt.length), createdDateLabel.length),
        priority: Math.max(...tasksToExport.map(t => t.priority.length), priorityLabel.length),
        category: Math.max(...tasksToExport.map(t => t.category.length), categoryLabel.length),
        text: Math.max(...tasksToExport.map(t => t.text.length), taskLabel.length),
        deadline: Math.max(...tasksToExport.map(t => t.deadline.length), deadlineLabel.length),
        completedDate: Math.max(...tasksToExport.map(t => t.completedDate.length), completionDateLabel.length)
    };
    
    // Добавляем заголовок
    exportContent += `${createdDateLabel.padEnd(maxLengths.createdAt)} | ${priorityLabel.padEnd(maxLengths.priority)} | ${categoryLabel.padEnd(maxLengths.category)} | ${taskLabel.padEnd(maxLengths.text)} | ${deadlineLabel.padEnd(maxLengths.deadline)} | ${completionDateLabel.padEnd(maxLengths.completedDate)}\n`;
    exportContent += '-'.repeat(Object.values(maxLengths).reduce((a, b) => a + b, 0) + 5 * 3) + '\n';
    
    // Добавляем задачи с выравниванием
    tasksToExport.forEach(task => {
        exportContent += `${task.createdAt.padEnd(maxLengths.createdAt)} | ${task.priority.padEnd(maxLengths.priority)} | ${task.category.padEnd(maxLengths.category)} | ${task.text.padEnd(maxLengths.text)} | ${task.deadline.padEnd(maxLengths.deadline)} | ${task.completedDate.padEnd(maxLengths.completedDate)}\n`;
    });
    
    const blob = new Blob([exportContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `flowtask_export_${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showNotification(t('dataExported'), 'success');
}

function getPriorityText(priority) {
    switch(priority) {
        case 'high': return t('high');
        case 'medium': return t('medium');
        case 'low': return t('low');
        default: return t('medium');
    }
}

function updateAppInfo() {
    document.getElementById('settings-total-tasks').textContent = state.tasks.length;
    document.getElementById('settings-completed-tasks').textContent = state.tasks.filter(t => t.completed).length;
    document.getElementById('settings-categories-count').textContent = state.categories.length;
}

function showSettingsModal() {
    const modal = document.getElementById('settings-modal');
    if (modal) {
        // Создаем временное состояние настроек
        tempSettings = {
            theme: state.theme,
            language: state.language || 'ru',
            notificationsEnabled: state.notificationsEnabled,
            notificationsBeforeDeadline: state.notificationsBeforeDeadline,
            notificationsOnDeadline: state.notificationsOnDeadline,
            selectedColor: state.selectedColor || '#7395ae'
        };
        
        // Устанавливаем значения в форму из временного состояния
        const notificationsEnabled = document.getElementById('notifications-enabled');
        const notificationsBeforeDeadline = document.getElementById('notifications-before-deadline');
        const notificationsOnDeadline = document.getElementById('notifications-on-deadline');
        
        if (notificationsEnabled) notificationsEnabled.checked = tempSettings.notificationsEnabled;
        if (notificationsBeforeDeadline) notificationsBeforeDeadline.checked = tempSettings.notificationsBeforeDeadline;
        if (notificationsOnDeadline) notificationsOnDeadline.checked = tempSettings.notificationsOnDeadline;
        
        // Устанавливаем активную кнопку темы
        const themeBtn = document.getElementById(`${tempSettings.theme}-theme-btn`);
        if (themeBtn) {
            document.querySelectorAll('.theme-option-btn').forEach(btn => btn.classList.remove('active'));
            themeBtn.classList.add('active');
        }
        
        // Устанавливаем активную кнопку языка
        const langBtn = document.getElementById(`${tempSettings.language}-lang-btn`);
        if (langBtn) {
            document.querySelectorAll('.language-option-btn').forEach(btn => btn.classList.remove('active'));
            langBtn.classList.add('active');
        }
        
        // Устанавливаем выбранный цвет
        const colorOptions = document.querySelectorAll('.color-option');
        colorOptions.forEach(option => {
            option.classList.remove('active');
            if (option.dataset.color === tempSettings.selectedColor) {
                option.classList.add('active');
            }
        });
        
        modal.style.display = 'flex';
        switchSettingsTab('appearance');
        updateAppInfo();
    }
}

function hideSettingsModal() {
    const modal = document.getElementById('settings-modal');
    if (modal) {
        // Сбрасываем временные настройки при закрытии без сохранения
        tempSettings = null;
        modal.style.display = 'none';
    }
}

function saveSettings() {
    if (!tempSettings) return;
    
    // Применяем все изменения из временного состояния
    if (tempSettings.theme !== undefined) {
        setTheme(tempSettings.theme);
    }
    
    if (tempSettings.language !== undefined) {
        setLanguage(tempSettings.language);
    }
    
    if (tempSettings.notificationsEnabled !== undefined) {
        state.notificationsEnabled = tempSettings.notificationsEnabled;
    }
    
    if (tempSettings.notificationsBeforeDeadline !== undefined) {
        state.notificationsBeforeDeadline = tempSettings.notificationsBeforeDeadline;
    }
    
    if (tempSettings.notificationsOnDeadline !== undefined) {
        state.notificationsOnDeadline = tempSettings.notificationsOnDeadline;
    }
    
    if (tempSettings.selectedColor !== undefined) {
        state.selectedColor = tempSettings.selectedColor;
    }
    
    // Сохраняем состояние
    saveState();
    
    // Обновляем временные настройки, чтобы они соответствовали сохраненным
    tempSettings = {
        theme: state.theme,
        language: state.language || 'ru',
        notificationsEnabled: state.notificationsEnabled,
        notificationsBeforeDeadline: state.notificationsBeforeDeadline,
        notificationsOnDeadline: state.notificationsOnDeadline,
        selectedColor: state.selectedColor || '#7395ae'
    };
    
    // Обновляем значения в форме
    const notificationsEnabled = document.getElementById('notifications-enabled');
    const notificationsBeforeDeadline = document.getElementById('notifications-before-deadline');
    const notificationsOnDeadline = document.getElementById('notifications-on-deadline');
    
    if (notificationsEnabled) notificationsEnabled.checked = tempSettings.notificationsEnabled;
    if (notificationsBeforeDeadline) notificationsBeforeDeadline.checked = tempSettings.notificationsBeforeDeadline;
    if (notificationsOnDeadline) notificationsOnDeadline.checked = tempSettings.notificationsOnDeadline;
    
    showNotification(t('settingsSaved'), 'success');
}

// Аналитика
function initAnalyticsModal() {
    const closeBtn = document.getElementById('close-analytics-modal');
    const closeBtn2 = document.getElementById('close-analytics-modal-btn');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', hideAnalyticsModal);
    }
    
    if (closeBtn2) {
        closeBtn2.addEventListener('click', hideAnalyticsModal);
    }
    
    // Выбор периода
    document.querySelectorAll('.period-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.period-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            state.analyticsPeriod = this.dataset.period;
            updateAnalyticsModal();
        });
    });
}

function showAnalyticsModal() {
    const modal = document.getElementById('analytics-modal');
    if (modal) {
        // Обновляем все тексты аналитики перед открытием
        
        // Периоды
        const periodWeekBtn = document.querySelector('.period-btn[data-period="week"]');
        if (periodWeekBtn) periodWeekBtn.textContent = t('periodWeek');
        
        const periodMonthBtn = document.querySelector('.period-btn[data-period="month"]');
        if (periodMonthBtn) periodMonthBtn.textContent = t('periodMonth');
        
        const periodQuarterBtn = document.querySelector('.period-btn[data-period="quarter"]');
        if (periodQuarterBtn) periodQuarterBtn.textContent = t('periodQuarter');
        
        // Основные метрики (hero metrics)
        const efficiencyLabel = document.querySelector('#hero-efficiency').nextElementSibling.nextElementSibling;
        if (efficiencyLabel) efficiencyLabel.textContent = t('efficiency');
        
        const todayLabel = document.querySelector('#hero-today-tasks').nextElementSibling.nextElementSibling;
        if (todayLabel) todayLabel.textContent = t('today');
        
        const streakLabel = document.querySelector('#hero-streak').nextElementSibling.nextElementSibling;
        if (streakLabel) streakLabel.innerHTML = t('daysStreak');
        
        const avgCompletionLabel = document.querySelector('#hero-avg-completion').nextElementSibling.nextElementSibling;
        if (avgCompletionLabel) avgCompletionLabel.innerHTML = t('avgCompletion');
        
        // Заголовки карточек
        const priorityDistributionHeader = document.querySelector('#priority-chart').closest('.analytics-card')?.querySelector('h4');
        if (priorityDistributionHeader) priorityDistributionHeader.innerHTML = `<i class="fas fa-chart-pie"></i> ${t('priorityDistribution')}`;
        
        const completionTrendsHeader = document.querySelector('.analytics-card:nth-child(2) h4');
        if (completionTrendsHeader) completionTrendsHeader.innerHTML = `<i class="fas fa-trend-up"></i> ${t('completionTrends')}`;
        
        const productivityHeader = document.querySelector('#productivity-chart').closest('.analytics-card')?.querySelector('h4');
        if (productivityHeader) productivityHeader.innerHTML = `<i class="fas fa-chart-bar"></i> ${t('productivity')}`;
        
        const timeMetricsHeader = document.querySelector('.analytics-card:nth-child(4) h4');
        if (timeMetricsHeader) timeMetricsHeader.innerHTML = `<i class="fas fa-clock"></i> ${t('timeMetrics')}`;
        
        const recommendationsHeader = document.querySelector('.analytics-card:last-child h4');
        if (recommendationsHeader) recommendationsHeader.innerHTML = `<i class="fas fa-lightbulb"></i> ${t('recommendations')}`;
        
        // Метки трендов
        const yesterdayLabel = document.querySelector('.trend-stat:nth-child(1) .trend-label');
        if (yesterdayLabel) yesterdayLabel.textContent = t('yesterday');
        
        const weekLabel = document.querySelector('.trend-stat:nth-child(2) .trend-label');
        if (weekLabel) weekLabel.textContent = t('week');
        
        const monthLabel = document.querySelector('.trend-stat:nth-child(3) .trend-label');
        if (monthLabel) monthLabel.textContent = t('month');
        
        const totalLabel = document.querySelector('.trend-stat:nth-child(4) .trend-label');
        if (totalLabel) totalLabel.textContent = t('total');
        
        // Временные метрики
        const avgCompletionTimeLabel = document.querySelector('#avg-completion-time')?.nextElementSibling;
        if (avgCompletionTimeLabel) avgCompletionTimeLabel.textContent = t('avgCompletionTime');
        
        const onTimeRateLabel = document.querySelector('#on-time-rate')?.nextElementSibling;
        if (onTimeRateLabel) onTimeRateLabel.textContent = t('onTimeRate');
        
        // Метки приоритетов в Priority Distribution
        const priorityHighLabel = document.querySelector('.chart-stat:nth-child(1) .stat-label');
        if (priorityHighLabel) {
            const percent = document.getElementById('priority-high-percent')?.textContent || '0%';
            priorityHighLabel.innerHTML = `${t('high')}: <span id="priority-high-percent">${percent}</span>`;
        }
        
        const priorityMediumLabel = document.querySelector('.chart-stat:nth-child(2) .stat-label');
        if (priorityMediumLabel) {
            const percent = document.getElementById('priority-medium-percent')?.textContent || '0%';
            priorityMediumLabel.innerHTML = `${t('medium')}: <span id="priority-medium-percent">${percent}</span>`;
        }
        
        const priorityLowLabel = document.querySelector('.chart-stat:nth-child(3) .stat-label');
        if (priorityLowLabel) {
            const percent = document.getElementById('priority-low-percent')?.textContent || '0%';
            priorityLowLabel.innerHTML = `${t('low')}: <span id="priority-low-percent">${percent}</span>`;
        }
        
        modal.style.display = 'flex';
        updateAnalyticsModal();
    }
}

function hideAnalyticsModal() {
    const modal = document.getElementById('analytics-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Сохраняем предыдущие значения для сравнения
let previousAnalytics = {
    efficiency: 0,
    todayTasks: 0,
    streak: 0,
    avgCompletion: 0,
    yesterdayCompleted: 0,
    weekCompleted: 0,
    monthCompleted: 0,
    totalCompleted: 0
};

function updateAnalyticsModal() {
    const totalTasks = state.tasks.length;
    const completedTasks = state.tasks.filter(t => t.completed).length;
    const activeTasks = totalTasks - completedTasks;
    
    // Вычисляем текущие значения
    const currentEfficiency = calculateEfficiency();
    const currentTodayTasks = getTodayTasks();
    const currentStreak = calculateStreak();
    const currentAvgCompletion = calculateAvgCompletion();
    const currentYesterdayCompleted = getYesterdayCompleted();
    const currentWeekCompleted = getWeekCompleted();
    const currentMonthCompleted = getMonthCompleted();
    
    // Обновляем основные метрики продуктивности с трендами
    updateMetricWithTrend('hero-efficiency', currentEfficiency + '%', currentEfficiency, previousAnalytics.efficiency);
    updateMetricWithTrend('hero-today-tasks', currentTodayTasks, currentTodayTasks, previousAnalytics.todayTasks);
    updateMetricWithTrend('hero-streak', currentStreak, currentStreak, previousAnalytics.streak);
    updateMetricWithTrend('hero-avg-completion', calculateAvgCompletion() + '%', currentAvgCompletion, previousAnalytics.avgCompletion);
    
    // Обновляем статистику завершения с сравнением
    updateTrendWithComparison('yesterday-completed', 'yesterday-comparison', currentYesterdayCompleted, previousAnalytics.yesterdayCompleted, t('dayBeforeYesterday'));
    updateTrendWithComparison('week-completed', 'week-comparison', currentWeekCompleted, previousAnalytics.weekCompleted, t('prevWeek'));
    updateTrendWithComparison('month-completed', 'month-comparison', currentMonthCompleted, previousAnalytics.monthCompleted, t('prevMonth'));
    
    const totalEl = document.getElementById('total-completed');
    if (totalEl) {
        totalEl.textContent = completedTasks;
        const comparisonEl = document.getElementById('total-comparison');
        if (comparisonEl) {
            const diff = completedTasks - previousAnalytics.totalCompleted;
            if (diff > 0) {
                comparisonEl.innerHTML = `<i class="fas fa-arrow-up"></i> +${diff}`;
                comparisonEl.className = 'trend-comparison positive';
            } else if (diff < 0) {
                comparisonEl.innerHTML = `<i class="fas fa-arrow-down"></i> ${diff}`;
                comparisonEl.className = 'trend-comparison negative';
            } else {
                comparisonEl.innerHTML = `<i class="fas fa-minus"></i> ${t('noChanges')}`;
                comparisonEl.className = 'trend-comparison';
            }
        }
    }
    
    // Сохраняем текущие значения для следующего сравнения
    previousAnalytics = {
        efficiency: currentEfficiency,
        todayTasks: currentTodayTasks,
        streak: currentStreak,
        avgCompletion: currentAvgCompletion,
        yesterdayCompleted: currentYesterdayCompleted,
        weekCompleted: currentWeekCompleted,
        monthCompleted: currentMonthCompleted,
        totalCompleted: completedTasks
    };
    
    // Обновляем временные метрики
    document.getElementById('avg-completion-time').textContent = calculateAvgCompletionTime();
    document.getElementById('on-time-rate').textContent = calculateOnTimeRate() + '%';
    
    // Обновляем графики
    updatePriorityChart();
    updateProductivityChart();
    updateRecommendations();
}

function updateMetricWithTrend(elementId, displayValue, currentValue, previousValue) {
    const element = document.getElementById(elementId);
    const trendElement = document.getElementById(elementId + '-trend');
    
    if (element) {
        element.textContent = displayValue;
    }
    
    if (trendElement && previousValue > 0) {
        const diff = currentValue - previousValue;
        const percentChange = Math.round((diff / previousValue) * 100);
        
        if (diff > 0) {
            trendElement.innerHTML = `<i class="fas fa-arrow-up"></i> +${Math.abs(percentChange)}%`;
            trendElement.className = 'metric-trend positive';
        } else if (diff < 0) {
            trendElement.innerHTML = `<i class="fas fa-arrow-down"></i> ${Math.abs(percentChange)}%`;
            trendElement.className = 'metric-trend negative';
        } else {
            trendElement.innerHTML = `<i class="fas fa-minus"></i> 0%`;
            trendElement.className = 'metric-trend neutral';
        }
    } else if (trendElement) {
        trendElement.innerHTML = '';
        trendElement.className = 'metric-trend';
    }
}

function updateTrendWithComparison(valueId, comparisonId, currentValue, previousValue, periodLabel) {
    const valueEl = document.getElementById(valueId);
    const comparisonEl = document.getElementById(comparisonId);
    
    if (valueEl) {
        valueEl.textContent = currentValue;
    }
    
    if (comparisonEl && previousValue > 0) {
        const diff = currentValue - previousValue;
        if (diff > 0) {
            comparisonEl.innerHTML = `<i class="fas fa-arrow-up"></i> +${diff} vs ${periodLabel}`;
            comparisonEl.className = 'trend-comparison positive';
        } else if (diff < 0) {
            comparisonEl.innerHTML = `<i class="fas fa-arrow-down"></i> ${diff} vs ${periodLabel}`;
            comparisonEl.className = 'trend-comparison negative';
        } else {
            comparisonEl.innerHTML = `<i class="fas fa-minus"></i> ${t('noChanges')}`;
            comparisonEl.className = 'trend-comparison';
        }
    } else if (comparisonEl) {
        comparisonEl.innerHTML = '';
        comparisonEl.className = 'trend-comparison';
    }
}

function calculateEfficiency() {
    const totalTasks = state.tasks.length;
    const highPriorityTasks = state.tasks.filter(t => t.priority === 'high' && t.completed).length;
    const mediumPriorityTasks = state.tasks.filter(t => t.priority === 'medium' && t.completed).length;
    const lowPriorityTasks = state.tasks.filter(t => t.priority === 'low' && t.completed).length;
    
    // Взвешенная эффективность: высокий приоритет = 3 балла, средний = 2, низкий = 1
    const weightedScore = (highPriorityTasks * 3) + (mediumPriorityTasks * 2) + lowPriorityTasks;
    const maxScore = totalTasks * 3; // Если бы все задачи были высокого приоритета
    
    return maxScore > 0 ? Math.round((weightedScore / maxScore) * 100) : 0;
}

function getTodayTasks() {
    const locale = state.language === 'ru' ? 'ru-RU' : 'en-US';
    const today = new Date().toLocaleDateString(locale);
    return state.tasks.filter(t => {
        const taskDate = new Date(t.updatedAt).toLocaleDateString(locale);
        return taskDate === today && t.completed;
    }).length;
}

function calculateAvgCompletion() {
    const now = new Date();
    const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    
    const recentTasks = state.tasks.filter(t => new Date(t.createdAt) >= oneWeekAgo);
    const completedRecentTasks = recentTasks.filter(t => t.completed);
    
    return recentTasks.length > 0 ? Math.round((completedRecentTasks.length / recentTasks.length) * 100) : 0;
}

function getYesterdayCompleted() {
    const locale = state.language === 'ru' ? 'ru-RU' : 'en-US';
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toLocaleDateString(locale);
    
    return state.tasks.filter(t => {
        if (!t.completed) return false;
        const taskDate = new Date(t.updatedAt).toLocaleDateString(locale);
        return taskDate === yesterdayStr;
    }).length;
}

function getWeekCompleted() {
    const now = new Date();
    const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    
    return state.tasks.filter(t => {
        if (!t.completed) return false;
        const taskDate = new Date(t.updatedAt);
        return taskDate >= oneWeekAgo;
    }).length;
}

function getMonthCompleted() {
    const now = new Date();
    const oneMonthAgo = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());
    
    return state.tasks.filter(t => {
        if (!t.completed) return false;
        const taskDate = new Date(t.updatedAt);
        return taskDate >= oneMonthAgo;
    }).length;
}

function calculateAvgCompletionTime() {
    const completedTasks = state.tasks.filter(t => t.completed);
    
    if (completedTasks.length === 0) return `0 ${t('days')}`;
    
    let totalHours = 0;
    completedTasks.forEach(task => {
        const createdAt = new Date(task.createdAt);
        const completedAt = new Date(task.updatedAt);
        const hours = (completedAt - createdAt) / (1000 * 60 * 60);
        totalHours += hours;
    });
    
    const avgHours = totalHours / completedTasks.length;
    
    if (avgHours < 24) {
        return Math.round(avgHours) + ' ' + t('hours');
    } else if (avgHours < 24 * 30) {
        return Math.round(avgHours / 24) + ' ' + t('days');
    } else {
        return Math.round(avgHours / (24 * 30)) + ' ' + t('months');
    }
}

function calculateOnTimeRate() {
    const tasksWithDeadline = state.tasks.filter(t => t.deadline && t.completed);
    
    if (tasksWithDeadline.length === 0) return 0;
    
    const onTimeTasks = tasksWithDeadline.filter(task => {
        const deadline = new Date(task.deadline.split('.').reverse().join('-'));
        const completedAt = new Date(task.updatedAt);
        return completedAt <= deadline;
    }).length;
    
    return Math.round((onTimeTasks / tasksWithDeadline.length) * 100);
}

function updatePriorityChart() {
    const canvas = document.getElementById('priority-chart');
    if (!canvas) return;
    
    const highTasks = state.tasks.filter(t => t.priority === 'high');
    const mediumTasks = state.tasks.filter(t => t.priority === 'medium');
    const lowTasks = state.tasks.filter(t => t.priority === 'low');
    
    const totalTasks = state.tasks.length;
    
    const highPercent = totalTasks > 0 ? Math.round((highTasks.length / totalTasks) * 100) : 0;
    const mediumPercent = totalTasks > 0 ? Math.round((mediumTasks.length / totalTasks) * 100) : 0;
    const lowPercent = totalTasks > 0 ? Math.round((lowTasks.length / totalTasks) * 100) : 0;
    
    // Удаляем старый график
    if (chartInstances.priorityChart) {
        chartInstances.priorityChart.destroy();
    }
    
    if (typeof Chart !== 'undefined') {
        const ctx = canvas.getContext('2d');
        chartInstances.priorityChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: [t('high'), t('medium'), t('low')],
                datasets: [{
                    data: [highTasks.length, mediumTasks.length, lowTasks.length],
                    backgroundColor: ['#ef4444', '#f59e0b', '#10b981'],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }
    
    // Обновляем метки приоритетов (stat-label содержит span с процентом)
    const priorityHighLabel = document.querySelector('.chart-stat:nth-child(1) .stat-label');
    if (priorityHighLabel) {
        priorityHighLabel.innerHTML = `${t('high')}: <span id="priority-high-percent">${highPercent}%</span>`;
    } else {
        // Fallback: обновляем только процент, если не нашли label
        const highPercentEl = document.getElementById('priority-high-percent');
        if (highPercentEl) highPercentEl.textContent = highPercent + '%';
    }
    
    const priorityMediumLabel = document.querySelector('.chart-stat:nth-child(2) .stat-label');
    if (priorityMediumLabel) {
        priorityMediumLabel.innerHTML = `${t('medium')}: <span id="priority-medium-percent">${mediumPercent}%</span>`;
    } else {
        const mediumPercentEl = document.getElementById('priority-medium-percent');
        if (mediumPercentEl) mediumPercentEl.textContent = mediumPercent + '%';
    }
    
    const priorityLowLabel = document.querySelector('.chart-stat:nth-child(3) .stat-label');
    if (priorityLowLabel) {
        priorityLowLabel.innerHTML = `${t('low')}: <span id="priority-low-percent">${lowPercent}%</span>`;
    } else {
        const lowPercentEl = document.getElementById('priority-low-percent');
        if (lowPercentEl) lowPercentEl.textContent = lowPercent + '%';
    }
}

function updateProductivityChart() {
    const canvas = document.getElementById('productivity-chart');
    if (!canvas) return;
    
    let days = [];
    let data = [];
    let startDate, endDate;
    const now = new Date();
    
    if (typeof dateFns !== 'undefined') {
        if (state.analyticsPeriod === 'week') {
            startDate = dateFns.subDays(now, 6);
            endDate = now;
            for (let i = 0; i < 7; i++) {
                const date = dateFns.addDays(startDate, i);
                days.push(dateFns.format(date, 'EEE', { locale: dateFns.locale.ru }));
                data.push(0);
            }
        } else if (state.analyticsPeriod === 'month') {
            startDate = dateFns.subDays(now, 29);
            endDate = now;
            for (let i = 0; i < 30; i += 5) {
                const date = dateFns.addDays(startDate, i);
                days.push(dateFns.format(date, 'd MMM', { locale: dateFns.locale.ru }));
                data.push(0);
            }
        } else if (state.analyticsPeriod === 'quarter') {
            startDate = dateFns.subDays(now, 89);
            endDate = now;
            for (let i = 0; i < 90; i += 10) {
                const date = dateFns.addDays(startDate, i);
                days.push(dateFns.format(date, 'd MMM', { locale: dateFns.locale.ru }));
                data.push(0);
            }
        }
    } else {
        // Fallback
        const dayNames = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
        if (state.analyticsPeriod === 'week') {
            startDate = new Date(now.getTime() - 6 * 24 * 60 * 60 * 1000);
            for (let i = 0; i < 7; i++) {
                const date = new Date(startDate.getTime() + i * 24 * 60 * 60 * 1000);
                days.push(dayNames[date.getDay() === 0 ? 6 : date.getDay() - 1]);
                data.push(0);
            }
        } else if (state.analyticsPeriod === 'month') {
            startDate = new Date(now.getTime() - 29 * 24 * 60 * 60 * 1000);
            for (let i = 0; i < 30; i += 5) {
                const date = new Date(startDate.getTime() + i * 24 * 60 * 60 * 1000);
                days.push(date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' }));
                data.push(0);
            }
        } else if (state.analyticsPeriod === 'quarter') {
            startDate = new Date(now.getTime() - 89 * 24 * 60 * 60 * 1000);
            for (let i = 0; i < 90; i += 10) {
                const date = new Date(startDate.getTime() + i * 24 * 60 * 60 * 1000);
                days.push(date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' }));
                data.push(0);
            }
        }
    }
    
    // Собираем статистику
    state.tasks.forEach(task => {
        if (task.completed && task.updatedAt) {
            try {
                const taskDate = new Date(task.updatedAt);
                let dayDiff;
                
                if (typeof dateFns !== 'undefined') {
                    if (dateFns.isAfter(taskDate, startDate) && dateFns.isBefore(taskDate, endDate)) {
                        dayDiff = dateFns.differenceInDays(taskDate, startDate);
                    } else {
                        return;
                    }
                } else {
                    // Fallback
                    if (taskDate >= startDate && taskDate <= endDate) {
                        dayDiff = Math.floor((taskDate - startDate) / (1000 * 60 * 60 * 24));
                    } else {
                        return;
                    }
                }
                
                if (state.analyticsPeriod === 'week') {
                    if (dayDiff >= 0 && dayDiff < 7) {
                        data[dayDiff]++;
                    }
                } else if (state.analyticsPeriod === 'month') {
                    const index = Math.floor(dayDiff / 5);
                    if (index >= 0 && index < data.length) {
                        data[index]++;
                    }
                } else if (state.analyticsPeriod === 'quarter') {
                    const index = Math.floor(dayDiff / 10);
                    if (index >= 0 && index < data.length) {
                        data[index]++;
                    }
                }
            } catch (e) {
                console.error('Ошибка при обработке даты задачи:', e);
            }
        }
    });
    
    // Удаляем старый график
    if (chartInstances.productivityChart) {
        chartInstances.productivityChart.destroy();
    }
    
    if (typeof Chart !== 'undefined') {
        const ctx = canvas.getContext('2d');
        chartInstances.productivityChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: days,
                datasets: [{
                    label: 'Выполнено задач',
                    data: data,
                    backgroundColor: 'rgba(115, 149, 174, 0.8)',
                    borderColor: 'rgba(115, 149, 174, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 1
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }
}

function updateRecommendations() {
    const container = document.getElementById('recommendations');
    if (!container) return;
    
    const recommendations = [];
    
    // Анализируем данные для рекомендаций
    const todayTasks = state.tasks.filter(t => {
        if (!t.deadline || t.completed) return false;
        const today = new Date().toLocaleDateString('ru-RU');
        const taskDate = new Date(t.deadline.split('.').reverse().join('-')).toLocaleDateString('ru-RU');
        return taskDate === today;
    });
    
    const overdueTasks = state.tasks.filter(t => !t.completed && isOverdue(t));
    const highPriorityTasks = state.tasks.filter(t => t.priority === 'high' && !t.completed);
    
    // Генерируем рекомендации
    if (overdueTasks.length > 0) {
        recommendations.push(t('recOverdue').replace('{count}', overdueTasks.length));
    }
    
    if (todayTasks.length > 5) {
        recommendations.push(t('recTooManyToday').replace('{count}', todayTasks.length));
    }
    
    if (highPriorityTasks.length > 0) {
        recommendations.push(t('recHighPriority').replace('{count}', highPriorityTasks.length));
    }
    
    const avgCompletion = calculateAvgCompletion();
    if (avgCompletion < 50) {
        recommendations.push(t('recLowCompletion').replace('{percent}', avgCompletion));
    }
    
    const onTimeRate = calculateOnTimeRate();
    if (onTimeRate < 70) {
        recommendations.push(t('recLowOnTime').replace('{percent}', onTimeRate));
    }
    
    // Если нет рекомендаций, добавим общую
    if (recommendations.length === 0) {
        recommendations.push(t('recGreatWork'));
    }
    
    container.innerHTML = recommendations.map(rec => `
        <div class="recommendation-item">
            <div class="recommendation-text">${rec}</div>
        </div>
    `).join('');
}

function calculateStreak() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    let streak = 0;
    for (let i = 0; i < 30; i++) {
        const date = new Date(today);
        date.setDate(date.getDate() - i);
        const dateStr = date.toISOString().split('T')[0];
        
        const hasCompletedTask = state.tasks.some(task => {
            if (!task.completed || !task.updatedAt) return false;
            const taskDate = new Date(task.updatedAt).toISOString().split('T')[0];
            return taskDate === dateStr;
        });
        
        if (hasCompletedTask) {
            streak++;
        } else if (i === 0) {
            break;
        } else {
            break;
        }
    }
    
    return streak;
}

// Вспомогательные функции
function adjustColor(color, amount) {
    const hex = color.replace('#', '');
    const r = Math.min(255, Math.max(0, parseInt(hex.substr(0, 2), 16) + amount));
    const g = Math.min(255, Math.max(0, parseInt(hex.substr(2, 2), 16) + amount));
    const b = Math.min(255, Math.max(0, parseInt(hex.substr(4, 2), 16) + amount));
    
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function highlightSearchText(text, query) {
    if (!query || !text) return text;
    const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escapedQuery})`, 'gi');
    return text.replace(regex, '<mark class="search-highlight">$1</mark>');
}

function highlightSearchText(text, query) {
    if (!query || !text) return text;
    const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escapedQuery})`, 'gi');
    return text.replace(regex, '<mark class="search-highlight">$1</mark>');
}

// Функции для работы с данными пользователя
function saveState() {
    // Убеждаемся, что категория "Общие" имеет правильное имя перед сохранением
    const generalCategory = state.categories.find(cat => cat.id === 'general');
    if (generalCategory) {
        generalCategory.name = t('generalCategory');
    }
    
    // Сохраняем данные с привязкой к пользователю
    localStorage.setItem(getUserStorageKey('flowTasks'), JSON.stringify(state.tasks));
    localStorage.setItem(getUserStorageKey('flowCategories'), JSON.stringify(state.categories));
    localStorage.setItem(getUserStorageKey('flowQuickTasks'), JSON.stringify(state.quickTasks));
    localStorage.setItem(getUserStorageKey('flowTaskOrder'), JSON.stringify(state.taskOrder));
    
    // Общие настройки (тема, язык) можно оставить общими или тоже привязать к пользователю
    // Для удобства оставляем общими, но можно изменить
    localStorage.setItem('flowTheme', state.theme);
    localStorage.setItem('flowLanguage', state.language || 'ru');
    localStorage.setItem('flowPrimaryColor', state.primaryColor);
    localStorage.setItem('flowNotificationsEnabled', state.notificationsEnabled);
    localStorage.setItem('flowNotificationsBeforeDeadline', state.notificationsBeforeDeadline);
    localStorage.setItem('flowNotificationsOnDeadline', state.notificationsOnDeadline);
}

function loadSampleData() {
    state.tasks = [
        {
            id: 1,
            text: 'Завершить проект по систематизации задач',
            priority: 'high',
            category: 'general',
            deadline: new Date(Date.now() + 86400000 * 2).toLocaleDateString('ru-RU').replace(/\//g, '.'),
            notes: '',
            completed: false,
            createdAt: new Date(Date.now() - 86400000).toISOString(),
            updatedAt: new Date(Date.now() - 86400000).toISOString()
        },
        {
            id: 2,
            text: 'Подготовить отчёт о проделанной работе за квартал с детальными показателями эффективности и планами на следующий период',
            priority: 'medium',
            category: 'general',
            deadline: new Date().toLocaleDateString('ru-RU').replace(/\//g, '.'),
            notes: '',
            completed: false,
            createdAt: new Date(Date.now() - 43200000).toISOString(),
            updatedAt: new Date(Date.now() - 43200000).toISOString()
        },
        {
            id: 3,
            text: 'Купить продукты на неделю: молоко, хлеб, яйца, овощи, фрукты, мясо, рыба, сыр и кофе',
            priority: 'low',
            category: 'general',
            deadline: new Date(Date.now() + 86400000 * 3).toLocaleDateString('ru-RU').replace(/\//g, '.'),
            notes: '',
            completed: true,
            createdAt: new Date(Date.now() - 172800000).toISOString(),
            updatedAt: new Date(Date.now() - 86400000).toISOString()
        }
    ];
    
    saveState();
    renderAll();
}

// Показать уведомление с ограничением количества
function showNotification(message, type) {
    // Ограничиваем количество уведомлений (максимум 3)
    const existingNotifications = document.querySelectorAll('.notification');
    if (existingNotifications.length >= 3) {
        existingNotifications[0].remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    
    const topOffset = existingNotifications.length * 70 + 20;
    
    notification.style.cssText = `
        position: fixed;
        top: ${topOffset}px;
        right: 20px;
        padding: 14px 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        border-radius: 12px;
        box-shadow: 0 8px 25px rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        gap: 10px;
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        font-size: 14px;
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
        backdrop-filter: blur(10px);
        max-width: 350px;
    `;
    
    document.body.appendChild(notification);
    notificationQueue.push(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            notification.remove();
            notificationQueue = notificationQueue.filter(n => n !== notification);
            // Обновляем позиции оставшихся уведомлений
            updateNotificationPositions();
        }, 300);
    }, 3000);
}

function updateNotificationPositions() {
    const notifications = document.querySelectorAll('.notification');
    notifications.forEach((notif, index) => {
        notif.style.top = (index * 70 + 20) + 'px';
    });
}

// Добавляем стили для анимации уведомлений
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(notificationStyles);

// Горячие клавиши
function initKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // Enter в модальных окнах
        if (e.key === 'Enter') {
            if (document.getElementById('confirm-modal').style.display === 'flex') {
                confirmAction();
                e.preventDefault();
            }
            
            if (document.getElementById('edit-modal').style.display === 'flex') {
                saveEditedTask();
                e.preventDefault();
            }
        }
        
        // Ctrl/Cmd + N - новая задача
        if ((e.ctrlKey || e.metaKey) && e.key === 'n') {
            e.preventDefault();
            const taskInput = document.getElementById('task-input');
            if (taskInput) {
                taskInput.focus();
                showNotification(t('readyForNewTask'), 'info');
            }
        }
        
        // Ctrl/Cmd + S - сохранить
        if ((e.ctrlKey || e.metaKey) && e.key === 's') {
            e.preventDefault();
            saveState();
            showNotification(t('dataSaved'), 'success');
        }
        
        // Escape - закрыть все модальные окна
        if (e.key === 'Escape') {
            closeAllModals();
            e.preventDefault();
        }
    });
}

function closeAllModals() {
    const modals = document.querySelectorAll('.modal-overlay');
    modals.forEach(modal => {
        // Если это модальное окно настроек, используем hideSettingsModal для сброса временных настроек
        if (modal.id === 'settings-modal') {
            hideSettingsModal();
        } else {
            modal.style.display = 'none';
        }
    });
}

// Drag & Drop с улучшенной визуальной обратной связью
function initDragAndDrop() {
    let onMouseMove = null;
    let onMouseUp = null;
    
    const cleanup = () => {
        if (onMouseMove) {
            document.removeEventListener('mousemove', onMouseMove);
            onMouseMove = null;
        }
        if (onMouseUp) {
            document.removeEventListener('mouseup', onMouseUp);
            document.removeEventListener('mouseleave', onMouseUp);
            onMouseUp = null;
        }
        
        if (draggedItem) {
            if (dragPlaceholder) {
                const tasksContainer = document.getElementById('tasks-container');
                if (tasksContainer) {
                    tasksContainer.insertBefore(draggedItem, dragPlaceholder);
                    dragPlaceholder.remove();
                }
            }
            
            draggedItem.classList.remove('dragging');
            draggedItem.style.position = '';
            draggedItem.style.width = '';
            draggedItem.style.top = '';
            draggedItem.style.left = '';
            draggedItem.style.zIndex = '';
            draggedItem.style.pointerEvents = '';
            draggedItem.style.opacity = '';
            draggedItem.style.cursor = '';
            
            dragPlaceholder = null;
            draggedItem = null;
            isDragging = false;
        }
    };
    
    document.addEventListener('mousedown', (e) => {
        // Игнорируем клики на интерактивные элементы
        if (e.target.closest('.task-checkbox') || 
            e.target.closest('.task-actions') || 
            e.target.closest('input') || 
            e.target.closest('textarea') || 
            e.target.closest('button') ||
            e.target.closest('a') ||
            e.target.closest('select')) {
            return;
        }
        
        const taskCard = e.target.closest('.task-card');
        if (!taskCard) {
            return;
        }
        
        // Очищаем предыдущее состояние, если оно осталось
        cleanup();
        
        const tasksContainer = document.getElementById('tasks-container');
        if (!tasksContainer) return;
        
        dragStartX = e.clientX;
        dragStartY = e.clientY;
        draggedItem = taskCard;
        isDragging = false;
        
        const rect = draggedItem.getBoundingClientRect();
        const initialX = e.clientX;
        const initialY = e.clientY;
        
        onMouseMove = (e) => {
            if (!draggedItem) return;
            
            const deltaX = Math.abs(e.clientX - dragStartX);
            const deltaY = Math.abs(e.clientY - dragStartY);
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            
            // Начинаем перетаскивание только после превышения порога
            if (!isDragging && distance > dragThreshold) {
                isDragging = true;
                
                // Создаем плейсхолдер только когда начинается реальное перетаскивание
                dragPlaceholder = document.createElement('div');
                dragPlaceholder.className = 'drag-placeholder';
                dragPlaceholder.style.height = draggedItem.offsetHeight + 'px';
                tasksContainer.insertBefore(dragPlaceholder, draggedItem);
                
                draggedItem.classList.add('dragging');
                draggedItem.style.width = rect.width + 'px';
                draggedItem.style.position = 'fixed';
                draggedItem.style.zIndex = '1000';
                draggedItem.style.pointerEvents = 'none';
                draggedItem.style.cursor = 'grabbing';
            }
            
            if (!isDragging) return;
            
            // Обновляем позицию перетаскиваемого элемента
            draggedItem.style.left = (e.clientX - rect.width / 2) + 'px';
            draggedItem.style.top = (e.clientY - 20) + 'px';
            
            const taskCards = Array.from(tasksContainer.querySelectorAll('.task-card:not(.dragging)'));
            
            // Находим ближайшую карточку
            let closest = null;
            let closestDistance = Infinity;
            
            taskCards.forEach(card => {
                const cardRect = card.getBoundingClientRect();
                const cardCenter = cardRect.top + cardRect.height / 2;
                const distance = Math.abs(e.clientY - cardCenter);
                
                if (distance < closestDistance && e.clientY >= cardRect.top && e.clientY <= cardRect.bottom) {
                    closestDistance = distance;
                    closest = card;
                }
            });
            
            if (closest && dragPlaceholder) {
                const closestRect = closest.getBoundingClientRect();
                const isAbove = e.clientY < closestRect.top + closestRect.height / 2;
                
                if (isAbove) {
                    if (dragPlaceholder.nextSibling !== closest) {
                        tasksContainer.insertBefore(dragPlaceholder, closest);
                    }
                } else {
                    if (dragPlaceholder.previousSibling !== closest) {
                        tasksContainer.insertBefore(dragPlaceholder, closest.nextSibling);
                    }
                }
            } else if (dragPlaceholder && taskCards.length === 0) {
                // Если нет других карточек, просто добавляем плейсхолдер в конец
                if (dragPlaceholder.parentNode !== tasksContainer) {
                    tasksContainer.appendChild(dragPlaceholder);
                }
            }
        };
        
        onMouseUp = (e) => {
            if (isDragging && draggedItem && dragPlaceholder) {
                // Сохраняем порядок только если было реальное перетаскивание
                saveTaskOrder();
            } else {
                // Если перетаскивание не началось, просто очищаем состояние
                draggedItem = null;
                isDragging = false;
            }
            
            cleanup();
        };
        
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
        document.addEventListener('mouseleave', onMouseUp); // Обработка выхода курсора за пределы окна
    });
}

function saveTaskOrder() {
    const container = document.getElementById('tasks-container');
    if (!container) return;
    
    const taskElements = container.querySelectorAll('.task-card');
    const newOrder = Array.from(taskElements).map(el => parseInt(el.dataset.id));
    
    state.taskOrder = newOrder;
    saveState();
}


function toggleTaskNotes(id) {
    const taskCard = document.querySelector(`.task-card[data-id="${id}"], .urgent-task-card[data-id="${id}"]`);
    if (!taskCard) return;
    
    const notesPreview = taskCard.querySelector('.task-notes-preview');
    if (!notesPreview) return;
    
    // Переключаем развернутый вид заметок
    notesPreview.classList.toggle('expanded');
}

// Глобальные функции
window.filterByCategory = filterByCategory;
window.toggleTask = toggleTask;
window.editTask = editTask;
window.useQuickTask = useQuickTask;
window.deleteQuickTask = deleteQuickTask;
window.showDeleteConfirm = showDeleteConfirm;
window.deleteCategory = deleteCategory;
window.deleteCategoryFromSettings = deleteCategoryFromSettings;
window.toggleQuickTasksEditMode = toggleQuickTasksEditMode;
window.archiveTask = archiveTask;
window.unarchiveTask = unarchiveTask;
window.toggleTaskNotes = toggleTaskNotes;

// Регистрация Service Worker для PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then((registration) => {
                // Проверка обновлений
                registration.addEventListener('updatefound', () => {
                    const newWorker = registration.installing;
                    newWorker.addEventListener('statechange', () => {
                        if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                            // Новый Service Worker доступен
                            showNotification(t('appUpdateAvailable'), 'info');
                        }
                    });
                });
            })
            .catch((error) => {
                // Service Worker не критичен для работы приложения
            });
        
        // Проверка обновлений при фокусе
        let refreshing = false;
        navigator.serviceWorker.addEventListener('controllerchange', () => {
            if (!refreshing) {
                refreshing = true;
                window.location.reload();
            }
        });
    });
}

// Обработка установки PWA
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    
    // Показываем кнопку установки (можно добавить в UI)
    const installButton = document.createElement('button');
    installButton.textContent = t('installApp');
    installButton.className = 'btn-primary';
    installButton.style.cssText = 'position: fixed; bottom: 20px; right: 20px; z-index: 10000;';
    installButton.addEventListener('click', async () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            deferredPrompt = null;
            installButton.remove();
        }
    });
    
    // Автоматически скрываем через 5 секунд
    setTimeout(() => {
        if (installButton.parentNode) {
            installButton.remove();
        }
    }, 5000);
});

// ==================== АВТОРИЗАЦИЯ И ПРОФИЛЬ ====================

// Инициализация модального окна авторизации
// Инициализация лендинга
function initLanding() {
    // Обновляем тексты лендинга при инициализации
    updateLandingTexts();
    const landingRegisterTab = document.getElementById('landing-register-tab');
    const landingLoginTab = document.getElementById('landing-login-tab');
    const landingRegisterForm = document.getElementById('landing-register-form');
    const landingLoginForm = document.getElementById('landing-login-form');
    const landingRegisterBtn = document.getElementById('landing-register-btn');
    const landingLoginBtn = document.getElementById('landing-login-btn');
    const landingThemeToggle = document.getElementById('landing-theme-toggle');
    const landingLanguageToggle = document.getElementById('landing-language-toggle');
    
    // Переключение языка на лендинге
    if (landingLanguageToggle) {
        updateLandingLanguageButton();
        landingLanguageToggle.addEventListener('click', toggleLandingLanguage);
    }
    
    // Переключение темы на лендинге
    if (landingThemeToggle) {
        updateLandingThemeIcon();
        landingThemeToggle.addEventListener('click', toggleLandingTheme);
    }
    
    // Переключение табов
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
    const landingRegisterInputs = landingRegisterForm?.querySelectorAll('input');
    if (landingRegisterInputs) {
        landingRegisterInputs.forEach(input => {
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    handleLandingRegister();
                }
            });
        });
    }
    
    const landingLoginInputs = landingLoginForm?.querySelectorAll('input');
    if (landingLoginInputs) {
        landingLoginInputs.forEach(input => {
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    handleLandingLogin();
                }
            });
        });
    }
}

function toggleLandingLanguage() {
    const currentLang = state.language || currentLanguage;
    const newLang = currentLang === 'ru' ? 'en' : 'ru';
    
    // Устанавливаем новый язык
    state.language = newLang;
    localStorage.setItem('flowLanguage', newLang);
    
    // Обновляем все тексты на лендинге
    updateLandingTexts();
    
    // Обновляем кнопку языка
    updateLandingLanguageButton();
    
    // Обновляем категорию "Общие" если она есть
    const generalCategory = state.categories.find(cat => cat.id === 'general');
    if (generalCategory) {
        generalCategory.name = t('generalCategory');
    }
}

function updateLandingLanguageButton() {
    const landingLanguageToggle = document.getElementById('landing-language-toggle');
    const landingLanguageText = document.getElementById('landing-language-text');
    const currentLang = state.language || currentLanguage;
    
    if (landingLanguageToggle) {
        landingLanguageToggle.setAttribute('aria-label', t('toggleLanguage'));
    }
    
    if (landingLanguageText) {
        landingLanguageText.textContent = currentLang === 'ru' ? 'RU' : 'EN';
    }
}

function toggleLandingTheme() {
    const isDark = document.body.classList.contains('dark-theme');
    
    // Используем requestAnimationFrame для плавного переключения без моргания
    requestAnimationFrame(() => {
        if (isDark) {
            document.body.classList.remove('dark-theme');
            document.body.classList.add('light-theme');
            state.theme = 'light';
            updatePrimaryColor('#e27d80');
        } else {
            document.body.classList.remove('light-theme');
            document.body.classList.add('dark-theme');
            state.theme = 'dark';
            updatePrimaryColor('#7395ae');
        }
        
        localStorage.setItem('flowTheme', state.theme);
        updateLandingThemeIcon();
    });
}

function updateLandingThemeIcon() {
    const themeIcon = document.getElementById('landing-theme-icon');
    if (!themeIcon) return;
    
    const isDark = document.body.classList.contains('dark-theme');
    
    if (isDark) {
        themeIcon.className = 'fas fa-moon';
    } else {
        themeIcon.className = 'fas fa-sun';
    }
}

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

function handleLandingRegister() {
    const name = document.getElementById('landing-register-name')?.value.trim();
    const email = document.getElementById('landing-register-email')?.value.trim();
    const password = document.getElementById('landing-register-password')?.value;
    const passwordConfirm = document.getElementById('landing-register-password-confirm')?.value;
    
    const nameError = document.getElementById('landing-register-name-error');
    const emailError = document.getElementById('landing-register-email-error');
    const passwordError = document.getElementById('landing-register-password-error');
    const passwordConfirmError = document.getElementById('landing-register-password-confirm-error');
    
    // Очистка предыдущих ошибок
    [nameError, emailError, passwordError, passwordConfirmError].forEach(el => {
        if (el) el.textContent = '';
    });
    document.querySelectorAll('#landing-register-form .minimal-input').forEach(el => el.classList.remove('error'));
    
    // Валидация
    if (!name) {
        if (nameError) nameError.textContent = t('enterNameError');
        document.getElementById('landing-register-name')?.classList.add('error');
        return;
    }
    
    if (!email) {
        if (emailError) emailError.textContent = t('enterEmailError');
        document.getElementById('landing-register-email')?.classList.add('error');
        return;
    }
    
    if (!email.includes('@')) {
        if (emailError) emailError.textContent = t('invalidEmail');
        document.getElementById('landing-register-email')?.classList.add('error');
        return;
    }
    
    if (!password || password.length < 6) {
        if (passwordError) passwordError.textContent = t('passwordTooShort');
        document.getElementById('landing-register-password')?.classList.add('error');
        return;
    }
    
    if (password !== passwordConfirm) {
        if (passwordConfirmError) passwordConfirmError.textContent = t('passwordsNotMatch');
        document.getElementById('landing-register-password-confirm')?.classList.add('error');
        return;
    }
    
    // Проверка на существующего пользователя
    const users = JSON.parse(localStorage.getItem('flowUsers')) || [];
    if (users.find(u => u.email === email)) {
        if (emailError) emailError.textContent = t('userExists');
        document.getElementById('landing-register-email')?.classList.add('error');
        return;
    }
    
    // Создание нового пользователя
    const newUser = {
        id: Date.now(),
        name: name,
        email: email,
        password: password, // В реальном приложении пароль должен быть захеширован
        joinedAt: new Date().toISOString()
    };
    
    users.push(newUser);
    localStorage.setItem('flowUsers', JSON.stringify(users));
    
    // ВАЖНО: Сначала очищаем данные предыдущего пользователя
    state.tasks = [];
    state.categories = [];
    state.quickTasks = [];
    state.taskOrder = [];
    
    state.user = {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        joinedAt: newUser.joinedAt
    };
    localStorage.setItem('flowUser', JSON.stringify(state.user));
    
    // Загружаем данные пользователя (для нового пользователя будут пустые данные)
    loadUserData();
    
    // ВАЖНО: Очищаем DOM перед рендерингом новых данных
    clearDOMContainers();
    
    showNotification(t('registrationSuccess') + ', ' + name + '!', 'success');
    
    // Плавно переключаем на приложение
    checkAuthAndShowContent(true);
    
    // Инициализируем приложение без перезагрузки
    if (state.user) {
        setTimeout(() => {
            initAppAfterAuth();
        }, 100);
    }
}

function handleLandingLogin() {
    const email = document.getElementById('landing-login-email')?.value.trim();
    const password = document.getElementById('landing-login-password')?.value;
    const emailError = document.getElementById('landing-login-email-error');
    const passwordError = document.getElementById('landing-login-password-error');
    
    // Очистка предыдущих ошибок
    if (emailError) emailError.textContent = '';
    if (passwordError) passwordError.textContent = '';
    document.getElementById('landing-login-email')?.classList.remove('error');
    document.getElementById('landing-login-password')?.classList.remove('error');
    
    // Валидация
    if (!email) {
        if (emailError) emailError.textContent = t('enterEmailError');
        document.getElementById('landing-login-email')?.classList.add('error');
        return;
    }
    
    if (!password) {
        if (passwordError) passwordError.textContent = t('enterPassword');
        document.getElementById('landing-login-password')?.classList.add('error');
        return;
    }
    
    // Проверка пользователя
    const users = JSON.parse(localStorage.getItem('flowUsers')) || [];
    const user = users.find(u => u.email === email && u.password === password);
    
    if (!user) {
        if (passwordError) passwordError.textContent = t('wrongCredentials');
        document.getElementById('landing-login-password')?.classList.add('error');
        return;
    }
    
    // ВАЖНО: Сначала очищаем данные предыдущего пользователя
    state.tasks = [];
    state.categories = [];
    state.quickTasks = [];
    state.taskOrder = [];
    
    // Успешный вход - устанавливаем нового пользователя
    state.user = {
        id: user.id,
        name: user.name,
        email: user.email,
        joinedAt: user.joinedAt
    };
    localStorage.setItem('flowUser', JSON.stringify(state.user));
    
    // Загружаем данные нового пользователя
    loadUserData();
    
    // ВАЖНО: Очищаем DOM перед рендерингом новых данных
    clearDOMContainers();
    
    showNotification(t('welcome') + ', ' + user.name + '!', 'success');
    
    // Плавно переключаем на приложение
    checkAuthAndShowContent(true);
    
    // Инициализируем приложение без перезагрузки
    if (state.user) {
        setTimeout(() => {
            initAppAfterAuth();
        }, 100);
    }
}

function initAuthModal() {
    const authModal = document.getElementById('auth-modal');
    const closeAuthBtn = document.getElementById('close-auth-modal');
    const loginTab = document.getElementById('login-tab');
    const registerTab = document.getElementById('register-tab');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const loginBtn = document.getElementById('login-btn');
    const registerBtn = document.getElementById('register-btn');
    const authModalTitle = document.getElementById('auth-modal-title');
    
    if (closeAuthBtn) {
        closeAuthBtn.addEventListener('click', hideAuthModal);
    }
    
    if (loginTab) {
        loginTab.addEventListener('click', () => switchAuthTab('login'));
    }
    
    if (registerTab) {
        registerTab.addEventListener('click', () => switchAuthTab('register'));
    }
    
    if (loginBtn) {
        loginBtn.addEventListener('click', handleLogin);
    }
    
    if (registerBtn) {
        registerBtn.addEventListener('click', handleRegister);
    }
    
    // Закрытие по клику вне окна
    if (authModal) {
        authModal.addEventListener('click', (e) => {
            if (e.target === authModal) {
                hideAuthModal();
            }
        });
    }
}

function showAuthModal(tab = 'login') {
    const authModal = document.getElementById('auth-modal');
    if (authModal) {
        authModal.style.display = 'flex';
        switchAuthTab(tab);
    }
}

function hideAuthModal() {
    const authModal = document.getElementById('auth-modal');
    if (authModal) {
        authModal.style.display = 'none';
        // Очистка форм
        clearAuthForms();
    }
}

function switchAuthTab(tab) {
    const loginTab = document.getElementById('login-tab');
    const registerTab = document.getElementById('register-tab');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const authModalTitle = document.getElementById('auth-modal-title');
    
    if (tab === 'login') {
        if (loginTab) loginTab.classList.add('active');
        if (registerTab) registerTab.classList.remove('active');
        if (loginForm) loginForm.style.display = 'block';
        if (registerForm) registerForm.style.display = 'none';
        if (authModalTitle) authModalTitle.innerHTML = `<i class="fas fa-sign-in-alt"></i> ${t('login')}`;
    } else {
        if (loginTab) loginTab.classList.remove('active');
        if (registerTab) registerTab.classList.add('active');
        if (loginForm) loginForm.style.display = 'none';
        if (registerForm) registerForm.style.display = 'block';
        if (authModalTitle) authModalTitle.innerHTML = `<i class="fas fa-user-plus"></i> ${t('register')}`;
    }
}

function clearAuthForms() {
    const loginEmail = document.getElementById('login-email');
    const loginPassword = document.getElementById('login-password');
    const registerName = document.getElementById('register-name');
    const registerEmail = document.getElementById('register-email');
    const registerPassword = document.getElementById('register-password');
    const registerPasswordConfirm = document.getElementById('register-password-confirm');
    
    if (loginEmail) loginEmail.value = '';
    if (loginPassword) loginPassword.value = '';
    if (registerName) registerName.value = '';
    if (registerEmail) registerEmail.value = '';
    if (registerPassword) registerPassword.value = '';
    if (registerPasswordConfirm) registerPasswordConfirm.value = '';
    
    // Очистка ошибок
    document.querySelectorAll('#auth-modal .error-message').forEach(el => el.textContent = '');
    document.querySelectorAll('#auth-modal .minimal-input').forEach(el => el.classList.remove('error'));
}

function handleLogin() {
    const email = document.getElementById('login-email')?.value.trim();
    const password = document.getElementById('login-password')?.value;
    const emailError = document.getElementById('login-email-error');
    const passwordError = document.getElementById('login-password-error');
    
    // Очистка предыдущих ошибок
    if (emailError) emailError.textContent = '';
    if (passwordError) passwordError.textContent = '';
    document.getElementById('login-email')?.classList.remove('error');
    document.getElementById('login-password')?.classList.remove('error');
    
    // Валидация
    if (!email) {
        if (emailError) emailError.textContent = t('enterEmailError');
        document.getElementById('login-email')?.classList.add('error');
        return;
    }
    
    if (!password) {
        if (passwordError) passwordError.textContent = t('enterPassword');
        document.getElementById('login-password')?.classList.add('error');
        return;
    }
    
    // Проверка пользователя (в реальном приложении здесь был бы запрос к серверу)
    const users = JSON.parse(localStorage.getItem('flowUsers')) || [];
    const user = users.find(u => u.email === email && u.password === password);
    
    if (!user) {
        if (passwordError) passwordError.textContent = t('wrongCredentials');
        document.getElementById('login-password')?.classList.add('error');
        return;
    }
    
    // ВАЖНО: Сначала очищаем данные предыдущего пользователя
    state.tasks = [];
    state.categories = [];
    state.quickTasks = [];
    state.taskOrder = [];
    
    // Успешный вход - устанавливаем нового пользователя
    state.user = {
        id: user.id,
        name: user.name,
        email: user.email,
        joinedAt: user.joinedAt
    };
    localStorage.setItem('flowUser', JSON.stringify(state.user));
    
    // Загружаем данные нового пользователя
    loadUserData();
    
    // ВАЖНО: Очищаем DOM перед рендерингом новых данных
    clearDOMContainers();
    
    hideAuthModal();
    showNotification(t('welcome') + ', ' + user.name + '!', 'success');
    
    // Плавно переключаем на приложение
    checkAuthAndShowContent(true);
    
    // Инициализируем приложение без перезагрузки
    if (state.user) {
        setTimeout(() => {
            initAppAfterAuth();
        }, 100);
    }
}

function handleRegister() {
    const name = document.getElementById('register-name')?.value.trim();
    const email = document.getElementById('register-email')?.value.trim();
    const password = document.getElementById('register-password')?.value;
    const passwordConfirm = document.getElementById('register-password-confirm')?.value;
    
    const nameError = document.getElementById('register-name-error');
    const emailError = document.getElementById('register-email-error');
    const passwordError = document.getElementById('register-password-error');
    const passwordConfirmError = document.getElementById('register-password-confirm-error');
    
    // Очистка предыдущих ошибок
    [nameError, emailError, passwordError, passwordConfirmError].forEach(el => {
        if (el) el.textContent = '';
    });
    document.querySelectorAll('#register-form .minimal-input').forEach(el => el.classList.remove('error'));
    
    // Валидация
    if (!name) {
        if (nameError) nameError.textContent = t('enterNameError');
        document.getElementById('register-name')?.classList.add('error');
        return;
    }
    
    if (!email) {
        if (emailError) emailError.textContent = t('enterEmailError');
        document.getElementById('register-email')?.classList.add('error');
        return;
    }
    
    if (!email.includes('@')) {
        if (emailError) emailError.textContent = t('invalidEmail');
        document.getElementById('register-email')?.classList.add('error');
        return;
    }
    
    if (!password || password.length < 6) {
        if (passwordError) passwordError.textContent = t('passwordTooShort');
        document.getElementById('register-password')?.classList.add('error');
        return;
    }
    
    if (password !== passwordConfirm) {
        if (passwordConfirmError) passwordConfirmError.textContent = t('passwordsNotMatch');
        document.getElementById('register-password-confirm')?.classList.add('error');
        return;
    }
    
    // Проверка на существующего пользователя
    const users = JSON.parse(localStorage.getItem('flowUsers')) || [];
    if (users.find(u => u.email === email)) {
        if (emailError) emailError.textContent = t('userExists');
        document.getElementById('register-email')?.classList.add('error');
        return;
    }
    
    // Создание нового пользователя
    const newUser = {
        id: Date.now(),
        name: name,
        email: email,
        password: password, // В реальном приложении пароль должен быть захеширован
        joinedAt: new Date().toISOString()
    };
    
    users.push(newUser);
    localStorage.setItem('flowUsers', JSON.stringify(users));
    
    // ВАЖНО: Сначала очищаем данные предыдущего пользователя
    state.tasks = [];
    state.categories = [];
    state.quickTasks = [];
    state.taskOrder = [];
    
    state.user = {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        joinedAt: newUser.joinedAt
    };
    localStorage.setItem('flowUser', JSON.stringify(state.user));
    
    // Загружаем данные пользователя (для нового пользователя будут пустые данные)
    loadUserData();
    
    // ВАЖНО: Очищаем DOM перед рендерингом новых данных
    clearDOMContainers();
    
    hideAuthModal();
    showNotification(t('registrationSuccess') + ', ' + name + '!', 'success');
    
    // Плавно переключаем на приложение
    checkAuthAndShowContent(true);
    
    // Инициализируем приложение без перезагрузки
    if (state.user) {
        setTimeout(() => {
            initAppAfterAuth();
        }, 100);
    }
}

function updateProfileButton() {
    const profileBtn = document.getElementById('profile-header-btn');
    if (profileBtn) {
        if (state.user) {
            profileBtn.title = state.user.name;
        } else {
            profileBtn.title = t('profile');
        }
    }
}

// Инициализация модального окна профиля
function initProfileModal() {
    const profileModal = document.getElementById('profile-modal');
    const closeProfileBtn = document.getElementById('close-profile-modal');
    const logoutBtn = document.getElementById('logout-btn');
    const changePasswordBtn = document.getElementById('change-password-btn');
    
    if (closeProfileBtn) {
        closeProfileBtn.addEventListener('click', hideProfileModal);
    }
    
    if (logoutBtn) {
        logoutBtn.addEventListener('click', handleLogout);
    }
    
    if (changePasswordBtn) {
        changePasswordBtn.addEventListener('click', showChangePasswordModal);
    }
    
    // Закрытие по клику вне окна
    if (profileModal) {
        profileModal.addEventListener('click', (e) => {
            if (e.target === profileModal) {
                hideProfileModal();
            }
        });
    }
    
    // Инициализация модального окна изменения пароля
    initChangePasswordModal();
}

function showProfileModal() {
    if (!state.user) {
        showAuthModal('login');
        return;
    }
    
    const profileModal = document.getElementById('profile-modal');
    const profileName = document.getElementById('profile-name');
    const profileEmail = document.getElementById('profile-email');
    const profileJoined = document.getElementById('profile-joined');
    const profileTasksCount = document.getElementById('profile-tasks-count');
    const profileCompletedCount = document.getElementById('profile-completed-count');
    
    if (profileModal) {
        if (profileName) profileName.textContent = state.user.name;
        if (profileEmail) profileEmail.textContent = state.user.email;
        if (profileJoined) {
            const date = new Date(state.user.joinedAt);
            profileJoined.textContent = t('registered') + ' ' + date.toLocaleDateString(state.language === 'ru' ? 'ru-RU' : 'en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        }
        
        // Статистика
        const totalTasks = state.tasks.length;
        const completedTasks = state.tasks.filter(t => t.completed).length;
        if (profileTasksCount) profileTasksCount.textContent = totalTasks;
        if (profileCompletedCount) profileCompletedCount.textContent = completedTasks;
        
        // Обновляем метки в профиле при открытии
        const profileTasksLabel = document.querySelector('#profile-tasks-count')?.nextElementSibling;
        if (profileTasksLabel) profileTasksLabel.textContent = t('totalTasks');
        
        const profileCompletedLabel = document.querySelector('#profile-completed-count')?.nextElementSibling;
        if (profileCompletedLabel) profileCompletedLabel.textContent = t('completed');
        
        profileModal.style.display = 'flex';
    }
}

function hideProfileModal() {
    const profileModal = document.getElementById('profile-modal');
    if (profileModal) {
        profileModal.style.display = 'none';
    }
}

function handleLogout() {
    // Очищаем данные перед выходом
    state.tasks = [];
    state.categories = [];
    state.quickTasks = [];
    state.taskOrder = [];
    
    state.user = null;
    localStorage.removeItem('flowUser');
    hideProfileModal();
    showNotification(t('loggedOut'), 'info');
    
    // Плавно переключаем на лендинг
    checkAuthAndShowContent(true);
}

function initChangePasswordModal() {
    const changePasswordModal = document.getElementById('change-password-modal');
    const closeChangePasswordBtn = document.getElementById('close-change-password-modal');
    const cancelPasswordBtn = document.getElementById('cancel-password-btn');
    const savePasswordBtn = document.getElementById('save-password-btn');
    
    if (closeChangePasswordBtn) {
        closeChangePasswordBtn.addEventListener('click', hideChangePasswordModal);
    }
    
    if (cancelPasswordBtn) {
        cancelPasswordBtn.addEventListener('click', hideChangePasswordModal);
    }
    
    if (savePasswordBtn) {
        savePasswordBtn.addEventListener('click', handleChangePassword);
    }
    
    if (changePasswordModal) {
        changePasswordModal.addEventListener('click', (e) => {
            if (e.target === changePasswordModal) {
                hideChangePasswordModal();
            }
        });
    }
}

function showChangePasswordModal() {
    if (!state.user) return;
    
    const changePasswordModal = document.getElementById('change-password-modal');
    if (changePasswordModal) {
        changePasswordModal.style.display = 'flex';
        // Очистка полей
        document.getElementById('current-password').value = '';
        document.getElementById('new-password').value = '';
        document.getElementById('new-password-confirm').value = '';
        document.querySelectorAll('#change-password-modal .error-message').forEach(el => el.textContent = '');
        document.querySelectorAll('#change-password-modal .minimal-input').forEach(el => el.classList.remove('error'));
    }
}

function hideChangePasswordModal() {
    const changePasswordModal = document.getElementById('change-password-modal');
    if (changePasswordModal) {
        changePasswordModal.style.display = 'none';
    }
}

function handleChangePassword() {
    if (!state.user) return;
    
    const currentPassword = document.getElementById('current-password')?.value;
    const newPassword = document.getElementById('new-password')?.value;
    const newPasswordConfirm = document.getElementById('new-password-confirm')?.value;
    
    const currentPasswordError = document.getElementById('current-password-error');
    const newPasswordError = document.getElementById('new-password-error');
    const newPasswordConfirmError = document.getElementById('new-password-confirm-error');
    
    // Очистка ошибок
    [currentPasswordError, newPasswordError, newPasswordConfirmError].forEach(el => {
        if (el) el.textContent = '';
    });
    document.querySelectorAll('#change-password-modal .minimal-input').forEach(el => el.classList.remove('error'));
    
    // Валидация
    if (!currentPassword) {
        if (currentPasswordError) currentPasswordError.textContent = t('enterCurrentPassword');
        document.getElementById('current-password')?.classList.add('error');
        return;
    }
    
    // Проверка текущего пароля
    const users = JSON.parse(localStorage.getItem('flowUsers')) || [];
    const user = users.find(u => u.id === state.user.id);
    
    if (!user || user.password !== currentPassword) {
        if (currentPasswordError) currentPasswordError.textContent = t('wrongPassword');
        document.getElementById('current-password')?.classList.add('error');
        return;
    }
    
    if (!newPassword || newPassword.length < 6) {
        if (newPasswordError) newPasswordError.textContent = t('passwordTooShort');
        document.getElementById('new-password')?.classList.add('error');
        return;
    }
    
    if (newPassword !== newPasswordConfirm) {
        if (newPasswordConfirmError) newPasswordConfirmError.textContent = t('passwordsNotMatch');
        document.getElementById('new-password-confirm')?.classList.add('error');
        return;
    }
    
    // Обновление пароля
    user.password = newPassword;
    users[users.findIndex(u => u.id === user.id)] = user;
    localStorage.setItem('flowUsers', JSON.stringify(users));
    
    hideChangePasswordModal();
    showNotification(t('passwordChanged'), 'success');
}

// Запуск приложения
document.addEventListener('DOMContentLoaded', function() {
    console.log('=== DOMContentLoaded: script.js ===');
    // Всегда инициализируем, но синхронизируем состояние с новыми модулями
    try {
        // Если новый модульный код уже запустился, синхронизируем состояние
        if (window.__FLOW_INIT__ && window.stateManager) {
            console.log('Syncing state from stateManager...');
            // Синхронизируем состояние из нового stateManager в старый state
            const user = window.stateManager.get('user');
            console.log('User from stateManager:', user);
            if (user && !state.user) {
                state.user = user;
                loadUserData();
                console.log('State synced, user loaded');
            }
        }
        
        // Экспортируем функции в window ДО вызова initApp
        window.initApp = initApp;
        window.setupEventListeners = setupEventListeners;
        window.initAppAfterAuth = initAppAfterAuth;
        console.log('Functions exported to window');
        
        // Всегда вызываем initApp для инициализации обработчиков событий
        console.log('Calling initApp...');
        initApp();
        updateProfileButton();
        console.log('initApp completed');
    } catch (error) {
        console.error('Ошибка при запуске приложения:', error);
        showNotification(t('appLoadError'), 'error');
    }
});