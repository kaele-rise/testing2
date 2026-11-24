import { Page, expect } from '@playwright/test';

export class BasePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Кастомная функция: открыть страницу и дождаться загрузки
    async open(path: string = '/') {
        await this.page.goto(path, { waitUntil: 'domcontentloaded' });
    }

    // Кастомная функция: проверка заголовка страницы
    async expectTitle(title: string | RegExp) {
        await expect(this.page).toHaveTitle(title);
    }
}
