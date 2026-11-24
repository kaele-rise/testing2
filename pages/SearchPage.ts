import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class SearchPage extends BasePage {
    // Селекторы
    readonly emptyMessage: Locator;
    readonly productCards: Locator;

    constructor(page: Page) {
        super(page);
        // Ищем текст "ничего не найдено" по регулярному выражению
        this.emptyMessage = page.getByText(/ничего не найдено|нет результатов/i).first();
        // Карточки товаров, которые вы находили ранее
        this.productCards = page.locator('.item-c');
    }

    // Кастомная функция: проверить, что результаты не найдены
    async expectNoResults() {
        await expect(this.emptyMessage).toBeVisible({ timeout: 10000 });
    }

    // Кастомная функция: проверить, что результаты есть
    async expectResultsFound() {
        await expect(this.productCards.first()).toBeVisible();
    }
}
