import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
    // Селекторы
    readonly searchInput: Locator;
    readonly searchSuggestions: Locator;

    constructor(page: Page) {
        super(page);
        this.searchInput = page.locator('.site-search__input').first();
        this.searchSuggestions = page.locator('.autocomplete-suggestions').first();
    }

    // Кастомная функция: заполнить форму поиска и нажать Enter
    async performSearch(query: string) {
        await this.searchInput.click();
        await this.searchInput.fill(query);
        await this.searchInput.press('Enter');
    }

    // Кастомная функция: проверить, что появились подсказки
    async expectSuggestionsToBeVisible() {
        await expect(this.searchSuggestions).toBeVisible();
    }
}
