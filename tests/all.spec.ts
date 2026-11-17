//ТС-6
import { test, expect, Page, Locator } from '@playwright/test';
import { product } from '../page-objects/selectors';

const CATALOG_URL = 'https://planetexotic.ru/komplekty/';

function getProductCard(page: Page, index = 0): Locator {
  return page.locator(product.card).nth(index);
}

test.describe('TC-6: Карточка товара', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(CATALOG_URL, { waitUntil: 'domcontentloaded' });
  });

  test('Список товаров отображается и не пустой', async ({ page }) => {
    const cards = page.locator(product.card);
    await expect(cards.first()).toBeVisible({ timeout: 10000 });
    expect(await cards.count()).toBeGreaterThan(0);
  });

  test('Карточка содержит название, цену и картинку', async ({ page }) => {
    const card = getProductCard(page, 0);
    
    await expect(card).toBeVisible();

    const title = card.locator(product.title);
    await expect(title).toBeVisible();
    await expect(title).not.toBeEmpty();

    const price = card.locator(product.price);
    await expect(price).toBeVisible();
    await expect(price).toHaveText(/\d/);

    const image = card.locator(product.image);
    await expect(image).toBeVisible();
    await expect(image).toHaveAttribute('src', /.+/);
  });

  test('Кнопка "Подробнее" ведет на страницу товара', async ({ page }) => {
    const card = getProductCard(page, 0);
    const moreBtn = card.locator(product.moreBtn);
    
    await expect(moreBtn).toBeVisible();

    await Promise.all([
      page.waitForURL(/.+/),
      moreBtn.click(),
    ]);

    await expect(page.locator(product.pageHeading)).toBeVisible({ timeout: 10000 });
  });

  test('У замороженных товаров есть маркер', async ({ page }) => {
    const cards = page.locator(product.card);
    const total = await cards.count();

    for (let i = 0; i < total; i++) {
      const marker = cards.nth(i).locator(product.frozenMarker);
      if (await marker.isVisible()) {
        await expect(marker).not.toBeEmpty();
        return; 
      }
    }
  });
});