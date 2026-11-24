import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class SearchPage extends BasePage {
    readonly emptyMessage: Locator;
    readonly productCards: Locator;

    constructor(page: Page) {
        super(page);
        this.emptyMessage = page.getByText(/ничего не найдено|нет результатов/i).first();
        this.productCards = page.locator('.item-c');
    }

    async expectNoResults() {
        await expect(this.page).toHaveURL(/search/, { timeout: 10000 });
        await expect(this.productCards).toHaveCount(0, { timeout: 10000 });
    }

    async expectResultsFound() {
        await expect(this.page).toHaveURL(/search/, { timeout: 10000 });

        await this.page.waitForTimeout(3000);

        const count = await this.productCards.count();
        expect(count).toBeGreaterThan(0);
    }
}
