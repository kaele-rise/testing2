const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();

    console.log('Открываем главную...');
    await page.goto('https://planetexotic.ru/');
    await page.waitForTimeout(2000);

    console.log('Вводим несуществующий запрос...');
    const searchInput = page.locator('.site-search__input:visible').first();
    await searchInput.click();
    await searchInput.fill('zxqwv1234!@#$');
    await searchInput.press('Enter');

    // Ждем загрузки страницы результатов
    await page.waitForTimeout(3000);

    console.log('Текущий URL:', page.url());

    console.log('--- ТЕКСТ НА СТРАНИЦЕ РЕЗУЛЬТАТОВ (первые 500 символов) ---');
    const bodyText = await page.locator('body').innerText();
    console.log(bodyText.substring(0, 500));

    await browser.close();
})();
