import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
    readonly searchInput: Locator;
    readonly searchSuggestions: Locator;
    readonly searchSuggestionItem: Locator;

    private readonly searchButton: Locator;

    readonly phoneLink: Locator;
    readonly consultBtn: Locator;
    readonly cartIcon: Locator;
    readonly cartCounter: Locator;

    constructor(page: Page) {
        super(page);

        // ИСПОЛЬЗУЕМ :visible ДЛЯ ПОИСКА
        this.searchInput = page.locator('.site-search__input:visible').first();
        this.searchSuggestions = page.locator('.autocomplete-suggestions:visible').first();
        this.searchSuggestionItem = page.locator('.autocomplete-suggestion:visible').first();
        this.searchButton = page
            .locator('form.search__form-shop:has(.site-search__input:visible)')
            .first()
            .getByRole('button', { name: 'Поиск', exact: true });

        this.phoneLink = page.locator('.callback-info__main-num-text');
        this.consultBtn = page.locator('a[href="https://taplink.cc/planetexotic"]');

        this.cartIcon = page.locator('.site-actions__btn_cart a:visible').first();
        this.cartCounter = page.locator('.js-minicart-count:visible').first();
    }

    async fillSearchQuery(query: string) {
        await this.searchInput.click();
        await this.searchInput.fill(query);
    }

    async performSearch(query: string) {
        await this.fillSearchQuery(query);
        await this.searchInput.press('Enter');
    }

    async searchByButton(query: string) {
        await this.fillSearchQuery(query);
        await this.searchButton.click();
    }

    async expectSuggestionsToBeVisible() {
        await this.searchSuggestions.waitFor({ state: 'visible' });
    }
}
