// Модуль UI для рендеринга с оптимизацией
import { stateManager } from './state.js';
import { domCache } from './dom-cache.js';
import { escapeHtml, highlightSearchText, createFragment, debounce, isOverdue } from './utils.js';
import { getFilteredTasks, sortTasks } from './tasks.js';

// Debounce для оптимизации рендеринга (задержка 100мс)
const debouncedRender = debounce(() => {
    renderAll();
}, 100);

// Throttle для частых обновлений (максимум раз в 50мс)
let lastRenderTime = 0;
const RENDER_THROTTLE = 50;

/**
 * Рендеринг всех компонентов с оптимизацией
 */
export function renderAll(force = false) {
    const now = Date.now();
    
    // Throttle для частых вызовов
    if (!force && (now - lastRenderTime) < RENDER_THROTTLE) {
        return;
    }
    
    lastRenderTime = now;
    
    try {
        renderCategories();
        renderQuickTasks();
        renderUrgentTasks();
        renderTasks();
        updateStats();
        updateFilterCounts();
        updateCategorySelects();
        updateAppInfo();
        updateProgressBars();
    } catch (error) {
        console.error('Render all error:', error);
    }
}

/**
 * Рендеринг задач с оптимизацией
 */
export function renderTasks() {
    const container = domCache.get('tasksContainer');
    if (!container) return;
    
    // Очищаем контейнер
    container.innerHTML = '';
    
    try {
        const currentFilter = stateManager.get('currentFilter');
        const currentCategory = stateManager.get('currentCategory');
        const searchQuery = stateManager.get('searchQuery');
        const tasks = stateManager.get('tasks') || [];
        const categories = stateManager.get('categories') || [];
        
        // Фильтрация задач
        let filteredTasks = tasks.filter(task => {
            // Поиск
            if (searchQuery) {
                const searchLower = searchQuery.toLowerCase();
                const matchesText = task.text.toLowerCase().includes(searchLower);
                const matchesNotes = task.notes && task.notes.toLowerCase().includes(searchLower);
                if (!matchesText && !matchesNotes) return false;
            }
            
            // Архив
            if (currentFilter === 'archived') {
                return task.archived;
            }
            
            if (task.archived) return false;
            if (task.completed) return false;
            
            // Исключаем задачи на сегодня (они в отдельном блоке)
            if (task.deadline) {
                try {
                    const today = new Date().toLocaleDateString('ru-RU');
                    const taskDate = new Date(task.deadline.split('.').reverse().join('-')).toLocaleDateString('ru-RU');
                    if (taskDate === today) return false;
                } catch (e) {
                    // Игнорируем ошибки парсинга
                }
            }
            
            if (currentFilter === 'high') return task.priority === 'high';
            if (currentFilter === 'overdue') return isOverdue(task);
            if (currentCategory !== 'all') return task.category === currentCategory;
            return true;
        });
        
        // Сортировка
        const sortSelect = domCache.get('sortSelect');
        const sortMethod = sortSelect ? sortSelect.value : 'priority';
        filteredTasks = sortTasks(filteredTasks, sortMethod);
        
        if (filteredTasks.length === 0) {
            const showOnboarding = !stateManager.get('onboardingDismissed');
            const emptyHTML = getEmptyStateHTML();
            const onboardingHTML = showOnboarding ? getOnboardingHTML() : '';
            container.innerHTML = `${emptyHTML}${onboardingHTML}`;

            if (showOnboarding) {
                const dismissBtn = container.querySelector('.onboarding-dismiss');
                if (dismissBtn) {
                    dismissBtn.addEventListener('click', () => {
                        stateManager.set('onboardingDismissed', true);
                        container.innerHTML = emptyHTML;
                    });
                }
            }
            return;
        }
        
        // Используем DocumentFragment для оптимизации
        const fragment = document.createDocumentFragment();
        
        filteredTasks.forEach((task, index) => {
            const taskElement = createTaskElement(task, index, categories, searchQuery);
            fragment.appendChild(taskElement);
        });
        
        container.appendChild(fragment);
    } catch (error) {
        console.error('Render tasks error:', error);
        const t = window.t || ((key) => key);
        container.innerHTML = `<div class="empty-state"><p>${t('appLoadError') || 'Ошибка загрузки задач'}</p></div>`;
    }
}

/**
 * Создать элемент задачи
 * @param {Object} task - Задача
 * @param {number} index - Индекс для анимации
 * @param {Array} categories - Категории
 * @param {string} searchQuery - Поисковый запрос
 * @returns {HTMLElement} - DOM элемент
 */
function createTaskElement(task, index, categories, searchQuery) {
    const div = document.createElement('div');
    div.className = `task-card priority-${task.priority}`;
    div.setAttribute('data-id', task.id);
    
    const category = categories.find(c => c.id === task.category) || categories[0];
    const createdAt = task.createdAt ? new Date(task.createdAt) : new Date();
    const createdDate = createdAt.toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric' });
    const createdTime = createdAt.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
    
    const taskText = searchQuery ? highlightSearchText(task.text, searchQuery) : escapeHtml(task.text);
    const priorityIcon = {
        high: '<i class="fas fa-fire"></i>',
        medium: '<i class="fas fa-chart-line"></i>',
        low: '<i class="fas fa-leaf"></i>',
    }[task.priority] || '';
    
    div.innerHTML = `
        <div class="task-checkbox ${task.completed ? 'checked' : ''}" onclick="window.toggleTask(${task.id})">
            ${task.completed ? '✓' : ''}
        </div>
        <div class="task-content">
            <div class="task-text-wrapper">
                <div class="task-text">${taskText}</div>
                ${task.notes ? `
                    <div class="task-notes-preview" onclick="window.toggleTaskNotes(${task.id})">
                        <i class="fas fa-sticky-note"></i>
                        <span class="notes-preview-text">${escapeHtml(task.notes)}</span>
                    </div>
                ` : ''}
                <div class="task-created-date">
                    <i class="far fa-clock"></i>
                    <span>${window.t ? window.t('created') : 'Создано:'} ${createdDate} ${createdTime}</span>
                </div>
            </div>
            <div class="task-meta-right">
                ${task.deadline ? `
                    <span class="task-deadline ${isOverdue(task) && !task.completed ? 'overdue' : ''}">
                        <i class="far fa-calendar"></i> ${task.deadline}
                    </span>
                ` : ''}
                <span class="priority-pill priority-${task.priority}">
                    ${priorityIcon}
                </span>
                ${task.category !== 'general' ? `
                    <span class="task-category" style="border-left: 3px solid ${category.color}">
                        <i class="fas fa-folder"></i> ${escapeHtml(category.name)}
                    </span>
                ` : ''}
            </div>
        </div>
        <div class="task-actions">
            <button class="icon-btn" onclick="window.editTask(${task.id})" title="${window.t ? window.t('edit') : 'Редактировать'}">
                <i class="fas fa-edit"></i>
            </button>
            ${!task.archived ? `
                <button class="icon-btn" onclick="window.archiveTask(${task.id})" title="${window.t ? window.t('toArchive') : 'В архив'}">
                    <i class="fas fa-archive"></i>
                </button>
            ` : ''}
            <button class="icon-btn" onclick="window.showDeleteConfirm(${task.id})" title="${window.t ? window.t('delete') : 'Удалить'}">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `;
    
    return div;
}

/**
 * Рендеринг категорий
 */
export function renderCategories() {
    const container = domCache.get('categoriesList');
    if (!container) return;
    
    container.innerHTML = '';
    
    try {
        const categories = stateManager.get('categories') || [];
        const tasks = stateManager.get('tasks') || [];
        const currentCategory = stateManager.get('currentCategory');
        
        // Используем DocumentFragment
        const fragment = document.createDocumentFragment();
        
        // Категория "Все"
        const allDiv = document.createElement('div');
        const allCount = tasks.filter(t => !t.completed).length;
        allDiv.className = `category-item ${currentCategory === 'all' ? 'active' : ''}`;
        allDiv.onclick = () => window.filterByCategory('all');
        allDiv.innerHTML = `<span class="category-name">${window.t ? window.t('allCategories') : 'Все категории'}</span>`;
        fragment.appendChild(allDiv);
        
        // Остальные категории
        categories.forEach(cat => {
            const count = tasks.filter(t => t.category === cat.id && !t.completed).length;
            const catDiv = document.createElement('div');
            catDiv.className = `category-item ${currentCategory === cat.id ? 'active' : ''}`;
            catDiv.onclick = () => window.filterByCategory(cat.id);
            catDiv.innerHTML = `
                <span class="category-name" style="color: ${cat.color}">
                    <i class="fas fa-folder"></i> ${escapeHtml(cat.name)}
                </span>
                ${cat.id !== 'general' ? `
                    <button class="icon-btn delete-btn" onclick="event.stopPropagation(); window.deleteCategory('${cat.id}')" title="${window.t ? window.t('delete') : 'Удалить категорию'}">
                        <i class="fas fa-times"></i>
                    </button>
                ` : ''}
            `;
            fragment.appendChild(catDiv);
        });
        
        container.appendChild(fragment);
        
        // Обновляем select'ы
        updateCategorySelects();
    } catch (error) {
        console.error('Render categories error:', error);
    }
}

/**
 * Рендеринг быстрых задач
 */
export function renderQuickTasks() {
    const container = domCache.get('quickTasksList');
    if (!container) return;
    
    container.innerHTML = '';
    
    try {
        const quickTasks = stateManager.get('quickTasks') || [];
        const editMode = stateManager.get('quickTasksEditMode');
        
        // Сортировка по приоритету
        const sorted = [...quickTasks].sort((a, b) => {
            const priorityOrder = { high: 3, medium: 2, low: 1 };
            return priorityOrder[b.priority] - priorityOrder[a.priority];
        });
        
        if (sorted.length === 0 && !editMode) {
            container.innerHTML = `<div class="empty-state"><p>${window.t ? window.t('emptyQuickTasks') : 'Добавьте быстрые задачи для удобства'}</p></div>`;
            return;
        }
        
        const fragment = document.createDocumentFragment();
        
        sorted.forEach(task => {
            const div = document.createElement('div');
            div.className = `quick-task-item priority-${task.priority} ${editMode ? 'editable' : ''}`;
            if (!editMode) {
                div.onclick = () => window.useQuickTask(task.id);
            }
            div.innerHTML = `
                <div class="task-text">${escapeHtml(task.text)}</div>
                ${editMode ? `
                    <button class="icon-btn delete-btn" onclick="window.deleteQuickTask(${task.id})" title="${window.t ? window.t('deleteTemplateTitle') : 'Удалить шаблон'}">
                        <i class="fas fa-times"></i>
                    </button>
                ` : ''}
            `;
            fragment.appendChild(div);
        });
        
        container.appendChild(fragment);
    } catch (error) {
        console.error('Render quick tasks error:', error);
    }
}

/**
 * Рендеринг срочных задач
 */
export function renderUrgentTasks() {
    const section = domCache.getOrQuery('urgentTasksSection', '#urgent-tasks-section');
    const container = domCache.get('urgentTasksContainer');
    if (!section || !container) return;
    
    container.innerHTML = '';
    
    try {
        const tasks = stateManager.get('tasks') || [];
        const today = new Date().toLocaleDateString('ru-RU');
        
        const todayTasks = tasks.filter(task => {
            if (task.completed || task.archived || !task.deadline) return false;
            try {
                const taskDate = new Date(task.deadline.split('.').reverse().join('-')).toLocaleDateString('ru-RU');
                return taskDate === today;
            } catch (e) {
                return false;
            }
        });
        
        if (todayTasks.length === 0) {
            section.style.display = 'none';
            return;
        }
        
        section.style.display = 'block';
        const fragment = document.createDocumentFragment();
        
        todayTasks.forEach(task => {
            const div = document.createElement('div');
            div.className = `urgent-task-card priority-${task.priority} ${isOverdue(task) ? 'overdue' : ''}`;
            div.setAttribute('data-id', task.id);
            div.innerHTML = `
                <div class="urgent-task-indicator"></div>
                <div class="task-content">
                    <div class="task-text">${escapeHtml(task.text)}</div>
                    <span class="task-deadline urgent ${isOverdue(task) ? 'overdue' : ''}">
                        <i class="far fa-calendar"></i> ${task.deadline}
                    </span>
                </div>
                <div class="task-actions">
                    <button class="icon-btn" onclick="window.toggleTask(${task.id})" title="${window.t ? window.t('taskCompleted') : 'Выполнить'}">
                        <i class="fas fa-check"></i>
                    </button>
                    <button class="icon-btn" onclick="window.editTask(${task.id})" title="${window.t ? window.t('edit') : 'Редактировать'}">
                        <i class="fas fa-edit"></i>
                    </button>
                </div>
            `;
            fragment.appendChild(div);
        });
        
        container.appendChild(fragment);
    } catch (error) {
        console.error('Render urgent tasks error:', error);
    }
}

/**
 * Обновить статистику
 */
export function updateStats() {
    const activeTasksCount = domCache.get('activeTasksCount');
    if (activeTasksCount) {
        const tasks = stateManager.get('tasks') || [];
        const activeCount = tasks.filter(t => !t.completed && !t.archived).length;
        activeTasksCount.textContent = `${activeCount} активных`;
    }
}

/**
 * Обновить счетчики фильтров
 */
export function updateFilterCounts() {
    const tasks = stateManager.get('tasks') || [];
    const activeTasks = tasks.filter(t => !t.completed && !t.archived);
    
    const counts = {
        all: activeTasks.length,
        high: activeTasks.filter(t => t.priority === 'high').length,
        overdue: activeTasks.filter(t => isOverdue(t)).length,
        archived: tasks.filter(t => t.archived).length
    };
    
    Object.keys(counts).forEach(key => {
        const element = document.getElementById(`count-${key}`);
        if (element) {
            element.textContent = counts[key];
        }
    });
}

/**
 * Обновить select'ы категорий
 */
export function updateCategorySelects() {
    try {
        const categories = stateManager.get('categories') || [];
        const categorySelects = document.querySelectorAll('select[id$="category"]');
        
        categorySelects.forEach(select => {
            select.innerHTML = categories.map(cat => 
                `<option value="${cat.id}">${escapeHtml(cat.name)}</option>`
            ).join('');
        });
        
        // Обновляем выпадающий список в шапке
        const headerCategoryFilter = domCache.getOrQuery('headerCategoryFilter', '#header-category-filter');
        if (headerCategoryFilter) {
            const t = window.t || ((key) => key);
            headerCategoryFilter.innerHTML = 
                `<option value="all">${t('allCategories')}</option>` +
                categories.map(cat => 
                    `<option value="${cat.id}">${escapeHtml(cat.name)}</option>`
                ).join('');
        }
    } catch (error) {
        console.error('Update category selects error:', error);
    }
}

/**
 * Обновить информацию о приложении
 */
export function updateAppInfo() {
    // Реализация будет в основном файле
}

/**
 * Обновить прогресс-бары
 */
export function updateProgressBars() {
    // Реализация будет в основном файле
}

/**
 * Получить HTML пустого состояния
 */
function getEmptyStateHTML() {
    const currentFilter = stateManager.get('currentFilter');
        const t = window.t || ((key) => key);
        const messages = {
        'high': { icon: '🔥', title: t('noHighPriority'), text: t('allImportantDone') },
        'overdue': { icon: '✅', title: t('noOverdue'), text: t('onTime') },
        'archived': { icon: '📦', title: t('archiveEmpty'), text: t('completedTasksHere') },
        'default': { icon: '📝', title: t('noTasks'), text: t('addFirstTask') }
    };
    
    const message = messages[currentFilter] || messages['default'];
    
    return `
        <div class="empty-state">
            <div class="empty-icon">${message.icon}</div>
            <h3>${message.title}</h3>
            <p>${message.text}</p>
        </div>
    `;
}

function getOnboardingHTML() {
    const t = window.t || ((key) => key);
    return `
        <div class="onboarding">
            <div class="onboarding-header">
                <div class="onboarding-title">${t('quickStartTips') || 'Быстрые шаги'}</div>
                <button class="onboarding-dismiss">${t('hideTips') || 'Скрыть'}</button>
            </div>
            <div class="onboarding-chips">
                <div class="onboarding-chip">${t('tipCreateTask') || 'Создай первую задачу'}</div>
                <div class="onboarding-chip">${t('tipChoosePriority') || 'Выбери приоритет'}</div>
                <div class="onboarding-chip">${t('tipSetDeadline') || 'Поставь дедлайн'}</div>
                <div class="onboarding-chip">${t('tipUseShortcuts') || 'Используй горячие клавиши'}</div>
            </div>
        </div>
    `;
}

// Экспортируем debounced версию для использования
export { debouncedRender };

