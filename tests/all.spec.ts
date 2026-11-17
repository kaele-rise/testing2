import { test, expect } from '@playwright/test';
import {
  banner,
  header,
  sorting,
  product,
  chat,
  search
} from '../page-objects/selectors';


// ================================================================
// TC-03 · ПОИСК И АВТОДОПОЛНЕНИЕ
// ================================================================
test.describe('TC-03 Поиск', () => {

  test('1. Видимость поля ввода поиска', async ({ page }) => {
    await page.goto('/');

    // Используем .first(), так как на странице может быть 2 поля (для десктопа и мобильной версии)
    const searchInput = page.locator(search.input).first();

    await expect(searchInput, 'поле поиска должно быть видимым').toBeVisible();
  });

  test('2. Появление выпадающего списка с подсказками при вводе', async ({ page }) => {
    await page.goto('/');

    const searchInput = page.locator(search.input).first();
    await searchInput.click();

    // Вводим запрос. Судя по дампу сайта, там есть пауки, поэтому "паук" точно должен дать результаты.
    // Вы можете заменить на любой другой популярный запрос (например, "корм" или "сверчок").
    await searchInput.fill('паук');

    // Ждем появления блока с автодополнением
    const suggestionsBlock = page.locator(search.suggestions).first();
    await expect(suggestionsBlock, 'выпадающий список с подсказками должен появиться').toBeVisible();

    // Проверяем, что в списке есть хотя бы один кликабельный элемент-подсказка
    const suggestionItem = page.locator(search.suggestionItem).first();
    await expect(suggestionItem, 'должна появиться хотя бы одна подсказка').toBeVisible();
  });

  test('3. Отображение текста «ничего не найдено» при вводе несуществующего запроса', async ({ page }) => {
    await page.goto('/');

    const searchInput = page.locator(search.input).first();
    await searchInput.click();

    // Вводим случайный набор символов
    await searchInput.fill('zxqwv1234!@#');

    // Нажимаем Enter, чтобы инициировать поиск
    await searchInput.press('Enter');

    // Ждем, пока страница прогрузится после поиска (можно добавить ожидание, если сайт медленный)
    // await page.waitForLoadState('networkidle');

    // Ищем текст из регулярного выражения search.emptyState по всей странице.
    // page.getByText() отлично работает с регулярными выражениями.
    const emptyMessage = page.getByText(search.emptyState).first();
    await expect(emptyMessage, 'должно появиться сообщение об отсутствии результатов').toBeVisible({ timeout: 10000 });
  });

});
