import { test, expect } from '@playwright/test';
import {
  banner,
  header,
  sorting,
  product,
  chat,
} from '../page-objects/selectors';

test('TC-02: навигация и контакты в шапке сайта', async ({ page }) => {
  test.setTimeout(60_000);

  const menuLinks = [
    { name: 'О нас', href: '/about_us/' },
    { name: 'Доставка и оплата', href: '/about_us/#dostavka' },
  ];

  for (const { name, href } of menuLinks) {
    await test.step(`Переход по ссылке «${name}»`, async () => {
      await page.goto('/');

      const link = page.locator(header.topMenuLink(name));
      const expectedURL = new URL(href, page.url()).href;

      await expect(link).toBeVisible();
      await expect(link).toHaveAttribute('href', href);
      await link.click();
      await expect(page).toHaveURL(expectedURL);
    });
  }

  await page.goto('/');

  await test.step('Ссылка на телефон', async () => {
    const phone = page.locator(header.phone);

    await expect(phone).toBeVisible();
    await expect(phone).toHaveAttribute('href', /^tel:\+?\d[\d\s()-]*$/);
    await phone.click({ trial: true });
  });

  await test.step('Кнопка «Консультация» открывает Taplink', async () => {
    const consultation = page.locator(header.consultBtn);

    await expect(consultation).toBeVisible();
    await expect(consultation).toHaveAttribute('href', 'https://taplink.cc/planetexotic');

    const [consultationPage] = await Promise.all([
      page.waitForEvent('popup'),
      consultation.click(),
    ]);

    await expect(consultationPage).toHaveURL('https://taplink.cc/planetexotic');
    await consultationPage.close();
  });

  const socialLinks = [
    { name: 'VK', href: 'https://vk.com/planetexotic' },
    { name: 'YouTube', href: 'https://www.youtube.com/channel/UCypTvt9_LuFR-nuriFzQAlQ' },
    { name: 'Telegram', href: 'https://t.me/Planetexotic' },
  ] as const;

  for (const { name, href } of socialLinks) {
    await test.step(`Ссылка на ${name}`, async () => {
      const link = page.locator(`a${header.social(name)}`);

      await expect(link).toBeVisible();
      await expect(link).toHaveAttribute('href', href);
      await link.click({ trial: true });
    });
  }
});
