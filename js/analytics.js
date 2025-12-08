// Модуль аналитики с управлением памятью для Chart.js
// Lazy loading и правильное уничтожение графиков

class AnalyticsManager {
    constructor() {
        this.chartInstances = {};
        this.initialized = false;
        this.chartLoader = null;
    }

    /**
     * Инициализация аналитики (lazy loading)
     */
    init() {
        if (this.initialized) return;
        this.initialized = true;
    }

    /**
     * Уничтожить все графики
     */
    destroyAll() {
        Object.keys(this.chartInstances).forEach(key => {
            try {
                if (this.chartInstances[key] && typeof this.chartInstances[key].destroy === 'function') {
                    this.chartInstances[key].destroy();
                }
            } catch (error) {
                console.error(`Error destroying chart ${key}:`, error);
            }
        });
        this.chartInstances = {};
    }

    /**
     * Уничтожить конкретный график
     * @param {string} chartName - Имя графика
     */
    destroyChart(chartName) {
        try {
            if (this.chartInstances[chartName] && typeof this.chartInstances[chartName].destroy === 'function') {
                this.chartInstances[chartName].destroy();
                delete this.chartInstances[chartName];
            }
        } catch (error) {
            console.error(`Error destroying chart ${chartName}:`, error);
        }
    }

    async ensureChart() {
        if (typeof Chart !== 'undefined') return;
        if (!this.chartLoader) {
            this.chartLoader = import('https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js')
                .then(mod => {
                    if (mod && mod.Chart) {
                        window.Chart = mod.Chart;
                    }
                })
                .catch(err => {
                    console.error('Chart.js load error:', err);
                });
        }
        await this.chartLoader;
    }

    /**
     * Создать график распределения по приоритетам
     * @param {HTMLElement} canvas - Canvas элемент
     * @param {Object} data - Данные для графика
     * @param {Function} t - Функция перевода
     */
    async createPriorityChart(canvas, data, t) {
        if (!canvas) return;
        await this.ensureChart();
        if (typeof Chart === 'undefined') return;
        
        // Уничтожаем предыдущий график
        this.destroyChart('priorityChart');
        
        try {
            const ctx = canvas.getContext('2d');
            this.chartInstances.priorityChart = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: [t('high'), t('medium'), t('low')],
                    datasets: [{
                        data: [data.high, data.medium, data.low],
                        backgroundColor: [
                            '#ef4444', // high
                            '#f59e0b', // medium
                            '#10b981'  // low
                        ],
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
        } catch (error) {
            console.error('Error creating priority chart:', error);
        }
    }

    /**
     * Создать график продуктивности
     * @param {HTMLElement} canvas - Canvas элемент
     * @param {Object} data - Данные для графика
     */
    async createProductivityChart(canvas, data) {
        if (!canvas) return;
        await this.ensureChart();
        if (typeof Chart === 'undefined') return;
        
        // Уничтожаем предыдущий график
        this.destroyChart('productivityChart');
        
        try {
            const ctx = canvas.getContext('2d');
            this.chartInstances.productivityChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: data.labels,
                    datasets: [{
                        label: 'Выполнено',
                        data: data.values,
                        backgroundColor: '#7395ae',
                        borderRadius: 4
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
        } catch (error) {
            console.error('Error creating productivity chart:', error);
        }
    }

    /**
     * Обновить все графики
     * @param {Object} analyticsData - Данные аналитики
     * @param {Function} t - Функция перевода
     */
    async updateCharts(analyticsData, t) {
        try {
            const priorityCanvas = document.getElementById('priority-chart');
            const productivityCanvas = document.getElementById('productivity-chart');

            await this.ensureChart();

            if (priorityCanvas) {
                await this.createPriorityChart(priorityCanvas, {
                    high: analyticsData.highTasks || 0,
                    medium: analyticsData.mediumTasks || 0,
                    low: analyticsData.lowTasks || 0
                }, t);
            }
            
            if (productivityCanvas) {
                await this.createProductivityChart(productivityCanvas, {
                    labels: analyticsData.productivityLabels || [],
                    values: analyticsData.productivityValues || []
                });
            }
        } catch (error) {
            console.error('Error updating charts:', error);
        }
    }
}

// Экспортируем singleton
export const analyticsManager = new AnalyticsManager();



