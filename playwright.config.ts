import { defineConfig, devices } from '@playwright/test';

/**
 * Конфигурация Playwright
 * Документация: https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
    /* Директория с тестами */
    testDir: './tests',

    /* Запускать тесты в файлах параллельно */
    fullyParallel: true,

    /* Запретить коммит, если в коде остался test.only (чтобы случайно не отключить остальные тесты) */
    forbidOnly: !!process.env.CI,

        /* Повторять упавшие тесты только в CI (2 раза), локально не повторять */
        retries: process.env.CI ? 2 : 0,

        /* В CI запускать в 1 поток (для стабильности), локально — по количеству ядер */
        workers: process.env.CI ? 1 : undefined,

        /* Репортеры: HTML-файл (для артефактов) и list (чтобы видеть прогресс в консоли) */
        reporter: [['html', { open: 'never' }], ['list']],

        /* Общие настройки для всех проектов */
        use: {
            /* Базовый URL для page.goto('/') */
            baseURL: 'https://planetexotic.ru/',

            /* Увеличенные таймауты, так как сайт может отвечать медленно */
            actionTimeout: 15_000,        // 15 сек на действия (клик, заполнение)
navigationTimeout: 60_000,    // 60 сек на загрузку страниц

/* Игнорировать ошибки SSL-сертификатов (если они есть на сайте) */
ignoreHTTPSErrors: true,

/* Собирать трейс при первой ошибке */
trace: 'on-first-retry',

/* Делать скриншот только если тест упал */
screenshot: 'only-on-failure',

/* Записывать видео только если тест упал */
video: 'retain-on-failure',
        },

        /* Настройки браузеров (пока используем только Chromium) */
        projects: [
            {
                name: 'chromium',
                use: { ...devices['Desktop Chrome'] },
            },

            /* Раскомментируйте, если понадобится тестировать в других браузерах */
            // {
            //   name: 'firefox',
            //   use: { ...devices['Desktop Firefox'] },
            // },
            // {
            //   name: 'webkit',
            //   use: { ...devices['Desktop Safari'] },
            // },
        ],

        /* Запуск локального сервера (раскомментируйте, если будете тестировать свой локальный проект) */
        // webServer: {
        //   command: 'npm run start',
        //   url: 'http://localhost:3000',
        //   reuseExistingServer: !process.env.CI,
        // },
});
