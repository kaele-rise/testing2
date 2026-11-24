import { Page, expect } from '@playwright/test';

export class BasePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async open(path: string = '/') {
        await this.page.goto(path, { waitUntil: 'domcontentloaded' });
    }

    async expectTitle(title: string | RegExp) {
        await expect(this.page).toHaveTitle(title);
    }
}
