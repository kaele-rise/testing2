import { test, expect } from '@playwright/test';
import {
  banner,
  header,
  sorting,
  product,
  chat,
} from '../page-objects/selectors';



import { test, expect } from '@playwright/test';
import { product } from './selectors'; // поправьте путь

const LIST_URL = '/komplekty/';
const FROZEN_LIST_URL = '/kaltsiy-preparaty-uborka/kormovye-gryzuny/';

test.describe('TC-07 Карточка товара в списке', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(LIST_URL);
  });

  test('в карточке отображаются название, цена и изображение', async ({ page }) => {
    const card = page.locator(product.card).first();
    await expect(card).toBeVisible();

    await expect(card.locator(product.title).first()).toBeVisible();
    await expect(card.locator(product.title).first()).not.toBeEmpty();

    await expect(card.locator(product.price).first()).toBeVisible();
    await expect(card.locator(product.price).first()).toContainText(/\d/);

    const image = card.locator(product.image).first();
    await expect(image).toBeVisible();
    expect(await image.evaluate((img: HTMLImageElement) => img.naturalWidth)).toBeGreaterThan(0);
  });

  test('кнопка «Подробнее» ведёт на страницу товара', async ({ page }) => {
    const card = page.locator(product.card).first();
    const title = (await card.locator(product.title).first().innerText()).trim();

    await card.locator(product.moreBtn).first().click();

    await expect(page).not.toHaveURL(new RegExp(`${LIST_URL}$`));
    await expect(page.locator(product.pageHeading)).toBeVisible();
    await expect.soft(page.locator(product.pageHeading)).toContainText(title);
  });

  test('у замороженных продуктов отображается маркер', async ({ page }) => {
    await page.goto(FROZEN_LIST_URL);

    const frozenBadge = page
      .locator(product.card)
      .locator(product.frozenMarker)
      .filter({ hasText: /заморож/i })
      .first();

    await expect(frozenBadge).toBeVisible();
  });
});
