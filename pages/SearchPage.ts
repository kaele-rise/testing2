import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class SearchPage extends BasePage {
    readonly emptyMessage: Locator;
    readonly productCards: Locator;

    constructor(page: Page) {
        super(page);
        this.emptyMessage = page.getByText(/ничего не найдено|нет результатов/i).first();
        // Селектор карточек товаров (мы его находили ранее)
        this.productCards = page.locator('.item-c');
    }

    // Проверка, что результаты НЕ найдены
    async expectNoResults() {
        // 1. Ждем, что URL изменился на страницу поиска (там обычно есть слово search)
        await expect(this.page).toHaveURL(/search/, { timeout: 10000 });

        // 2. Главная проверка: карточек товаров на странице должно быть 0
        await expect(this.productCards).toHaveCount(0, { timeout: 10000 });
    }

    // Проверка, что результаты найдены
    async expectResultsFound() {
        // Ждем, что URL изменился
        await expect(this.page).toHaveURL(/search/, { timeout: 10000 });

        // Проверяем, что карточек больше 0
        const count = await this.productCards.count();
        expect(count).toBeGreaterThan(0);
    }
}
