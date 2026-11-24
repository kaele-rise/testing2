import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SearchPage } from '../pages/SearchPage';

test.describe('TC-03: Поиск (Page Object Model)', () => {
    let homePage: HomePage;
    let searchPage: SearchPage;

    // Перед каждым тестом инициализируем наши страницы
    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        searchPage = new SearchPage(page);
        await homePage.open('/');
    });

    test('1. Успешный поиск через форму', async () => {
        // Вводим запрос и нажимаем Enter
        await homePage.performSearch('паук');

        // Проверяем, что страница результатов загрузилась и нашла товары
        await searchPage.expectResultsFound();
    });

    test('2. Появление подсказок при вводе', async () => {
        await homePage.searchInput.fill('паук');
        await homePage.expectSuggestionsToBeVisible();
    });

    test('3. Поиск несуществующего товара', async () => {
        // Поиск бреда
        await homePage.performSearch('zxqwv1234!@#$');

        // Проверяем, что увидели сообщение "ничего не найдено"
        await searchPage.expectNoResults();
    });
});
