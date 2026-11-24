import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SearchPage } from '../pages/SearchPage';

test.describe('TC-03: Поиск (Page Object Model)', () => {
    let homePage: HomePage;
    let searchPage: SearchPage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        searchPage = new SearchPage(page);
        await homePage.open('/');
    });

    test('1. Успешный поиск через форму', async () => {
        await homePage.performSearch('паук');
        await searchPage.expectResultsFound();
    });

    test('2. Ввод текста в поле поиска', async () => {
        await homePage.searchInput.fill('паук');
        await expect(homePage.searchInput).toHaveValue('паук');
    });

    test('3. Поиск несуществующего товара', async () => {
        await homePage.performSearch('zxqwv1234!@#$');
        await searchPage.expectNoResults();
    });
});
