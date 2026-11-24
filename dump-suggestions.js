const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://planetexotic.ru/');

    // Ждем загрузки и кликаем в поиск
    await page.waitForTimeout(2000);
    const searchInput = page.locator('.site-search__input:visible').first();
    await searchInput.click();
    await searchInput.fill('паук');

    // Ждем 2 секунды, чтобы подсказки успели появиться
    await page.waitForTimeout(2000);

    // Ищем любые элементы, которые появились после ввода
    const bodyHTML = await page.locator('body').innerHTML();
    const startIndex = bodyHTML.indexOf('паук');
    console.log('HTML вокруг введенного текста (возможно, подсказки):');
    console.log(bodyHTML.substring(startIndex - 500, startIndex + 1000));

    await browser.close();
})();
