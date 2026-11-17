# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: all.spec.ts >> TC-6: Карточка товара >> Список товаров отображается и не пустой
- Location: tests\all.spec.ts:16:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator:  locator('.js-product-list-item').first()
Expected: visible
Received: hidden
Timeout:  10000ms

Call log:
  - Expect "toBeVisible" locator('.js-product-list-item').first() with timeout 10000ms
  - waiting for locator('.js-product-list-item').first()
    21 × locator resolved to <div class="js-product-list-item item-c item-c_1 item-c_bd item-c_equal item-c_equal_3 has-1-click-btn_false">…</div>
       - unexpected value "hidden"

```

```yaml
- main:
  - list:
    - listitem:
      - link "О нас":
        - /url: /about_us/
    - listitem:
      - link "Доставка и оплата":
        - /url: /about_us/#dostavka
    - listitem:
      - link "Контакты":
        - /url: /contacts/
  - img
  - link "+7 (499) 390-23-93":
    - /url: tel:+74993902393
  - link "Консультация эксперта":
    - /url: https://taplink.cc/planetexotic
  - link:
    - /url: https://vk.com/planetexotic
    - img
  - link:
    - /url: https://www.youtube.com/channel/UCypTvt9_LuFR-nuriFzQAlQ
    - img
  - link:
    - /url: https://t.me/Planetexotic
    - img
  - link "Exotic Planet":
    - /url: /
    - img "Exotic Planet"
  - searchbox "Найти товары"
  - button "Поиск":
    - img
    - text: Поиск
  - link "Выбрать питомца Выбрать питомца":
    - /url: https://taplink.cc/planetexotic
    - img "Выбрать питомца"
    - text: Выбрать питомца
  - link "Избранное 0":
    - /url: /search/?_balance_type=favorites
    - img
    - text: Избранное 0
  - link "Корзина 0":
    - /url: /cart/
    - img
    - text: Корзина 0
  - list:
    - listitem:
      - list:
        - listitem:
          - link "для эублефаров для эублефаров":
            - /url: /komplekty/komplekty-dlya-eublefara/
            - img "для эублефаров"
            - text: для эублефаров
        - listitem:
          - link "Для капского варана Для капского варана":
            - /url: /komplekty/dlya-kapskogo-varana/
            - img "Для капского варана"
            - text: Для капского варана
        - listitem:
          - link "Для синеязыкого сцинка Для синеязыкого сцинка":
            - /url: /komplekty/dlya-sineyazykogo-stsinka/
            - img "Для синеязыкого сцинка"
            - text: Для синеязыкого сцинка
        - listitem:
          - link "для полозов и молочных змей для полозов и молочных змей":
            - /url: /komplekty/dlya-polozov-i-molochnykh-zmey/
            - img "для полозов и молочных змей"
            - text: для полозов и молочных змей
        - listitem:
          - link "для бородатых агам для бородатых агам":
            - /url: /komplekty/komplekt-dlya-novichkov/
            - img "для бородатых агам"
            - text: для бородатых агам
        - listitem:
          - link "для королевских питонов для королевских питонов":
            - /url: /komplekty/logovo-dlya-imperatorskogo-udava/
            - img "для королевских питонов"
            - text: для королевских питонов
        - listitem:
          - link "для йеменских и пантеровых хамелеонов для йеменских и пантеровых хамелеонов":
            - /url: /komplekty/komplekty-dlya-khameleona/
            - img "для йеменских и пантеровых хамелеонов"
            - text: для йеменских и пантеровых хамелеонов
        - listitem:
          - link "для игуан для игуан":
            - /url: /komplekty/dvorets-dlya-iguany/
            - img "для игуан"
            - text: для игуан
        - listitem:
          - link "для древесных лягушек для древесных лягушек":
            - /url: /komplekty/dvorets-dlya-bananoeda/
            - img "для древесных лягушек"
            - text: для древесных лягушек
        - listitem:
          - link "для гекконов (бананоедов, гекконов токки, фельзум) для гекконов (бананоедов, гекконов токки, фельзум)":
            - /url: /komplekty/dlya-drugikh-nazemnykh-gekkonov-bananoedov-gekkonov-tokki-felzum/
            - img "для гекконов (бананоедов, гекконов токки, фельзум)"
            - text: для гекконов (бананоедов, гекконов токки, фельзум)
        - listitem:
          - link "для наземных амфибий для наземных амфибий":
            - /url: /komplekty/dlya-nazemnykh-amfibiy/
            - img "для наземных амфибий"
            - text: для наземных амфибий
        - listitem:
          - link "для наземного паука-птицееда для наземного паука-птицееда":
            - /url: /komplekty/komplekty-dlya-nazemnykh-ptitseedov-brachypelma-grammostola/
            - img "для наземного паука-птицееда"
            - text: для наземного паука-птицееда
        - listitem:
          - link "для сухопутных черепах для сухопутных черепах":
            - /url: /komplekty/komplekty-dlya-cherepakh/
            - img "для сухопутных черепах"
            - text: для сухопутных черепах
        - listitem:
          - link "Для древесного паука-птицееда Для древесного паука-птицееда":
            - /url: /komplekty/komplekty-dlya-drevesnykh-paukov-avicularia-psalmopoeus/
            - img "Для древесного паука-птицееда"
            - text: Для древесного паука-птицееда
        - listitem:
          - link "Авторские комплекты Авторские комплекты":
            - /url: /komplekty/mini-startovye-nabory/
            - img "Авторские комплекты"
            - text: Авторские комплекты
      - link "Готовые комплекты":
        - /url: /komplekty/
        - text: Готовые комплекты
        - img
    - listitem:
      - list:
        - listitem:
          - link "Змеи Змеи":
            - /url: /zhivotnye/zmei/
            - img "Змеи"
            - text: Змеи
          - list:
            - listitem:
              - link "Королевские и молочные змеи":
                - /url: /zhivotnye/zmei/korolevskie-i-molochnye-zmei/
            - listitem:
              - link "Маисовые полозы":
                - /url: /zhivotnye/zmei/maisovye-poloza/
            - listitem:
              - link "Императорские удавы":
                - /url: /zhivotnye/zmei/udavy/
            - listitem:
              - link "Королевские питоны":
                - /url: /zhivotnye/zmei/pitony/
            - listitem:
              - link "Другие змеи":
                - /url: /zhivotnye/zmei/drugie-zmei/
        - listitem:
          - link "Ящерицы Ящерицы":
            - /url: /zhivotnye/jashhericy/
            - img "Ящерицы"
            - text: Ящерицы
          - list:
            - listitem:
              - link "Эублефары":
                - /url: /zhivotnye/jashhericy/eublefary/
            - listitem:
              - link "Бородатые агамы":
                - /url: /zhivotnye/jashhericy/agamy/
            - listitem:
              - link "Бананоеды":
                - /url: /zhivotnye/jashhericy/bananoedy/
            - listitem:
              - link "Хамелеоны":
                - /url: /zhivotnye/jashhericy/hameleony/
            - listitem:
              - link "Игуаны":
                - /url: /zhivotnye/jashhericy/iguany/
            - listitem:
              - link "Вараны":
                - /url: /zhivotnye/jashhericy/varany/
            - listitem:
              - link "Другие ящерицы":
                - /url: /zhivotnye/jashhericy/drugie-yashcheritsy/
        - listitem:
          - link "Амфибии Амфибии":
            - /url: /zhivotnye/amfibii/
            - img "Амфибии"
            - text: Амфибии
          - list:
            - listitem:
              - link "Наземные лягушки и жабы":
                - /url: /zhivotnye/amfibii/nazemnye-lyagushki-i-zhaby/
            - listitem:
              - link "Квакши":
                - /url: /zhivotnye/amfibii/kvakshi/
        - listitem:
          - link "Членистоногие Членистоногие":
            - /url: /zhivotnye/spiders-ulitki-nasekomye-1/
            - img "Членистоногие"
            - text: Членистоногие
          - list:
            - listitem:
              - link "Скорпионы":
                - /url: /zhivotnye/spiders-ulitki-nasekomye-1/skorpiony/
            - listitem:
              - link "Пауки-птицееды":
                - /url: /zhivotnye/spiders-ulitki-nasekomye-1/pauki-ptitseedy/
        - listitem:
          - link "Черепахи Черепахи":
            - /url: /zhivotnye/cherepakhi/
            - img "Черепахи"
            - text: Черепахи
          - list:
            - listitem:
              - link "Сухопутные черепахи":
                - /url: /zhivotnye/cherepakhi/sukhoputnye-cherepakhi/
      - link "Животные":
        - /url: /zhivotnye/
        - text: Животные
        - img
    - listitem:
      - list:
        - listitem:
          - link "Террариумы":
            - /url: /oborudovanie/terrariumy/
        - listitem:
          - link "Влажные камеры":
            - /url: /oborudovanie/vlazhnye-kamery/
        - listitem:
          - link "Грунты и субстраты":
            - /url: /oborudovanie/substraty/
        - listitem:
          - link "Инвентарь":
            - /url: /oborudovanie/inventar/
        - listitem:
          - link "Искусственные растения на подставке":
            - /url: /oborudovanie/iskusstvennye-rasteniya-na-podstavke/
        - listitem:
          - link "Искусственные растения подвесные":
            - /url: /oborudovanie/iskusstvennye-rasteniya-podvesnye/
        - listitem:
          - link "Коряги и лианы":
            - /url: /oborudovanie/koryagi-i-liany/
        - listitem:
          - link "Обогрев":
            - /url: /oborudovanie/obogrev/
        - listitem:
          - link "Кормушки и поилки":
            - /url: /oborudovanie/kormushki-i-poilki/
        - listitem:
          - link "Полив террариума":
            - /url: /oborudovanie/poliv-terrariuma/
        - listitem:
          - link "Светильники":
            - /url: /oborudovanie/svetilniki/
        - listitem:
          - link "Термометры и таймеры":
            - /url: /oborudovanie/izmeritelnye-pribory/
        - listitem:
          - link "Укрытия и декор":
            - /url: /oborudovanie/ukrytiya-i-dekor/
        - listitem:
          - link "Ультрафиолетовые лампы":
            - /url: /oborudovanie/osveshhenie-i-obogrev/uv-lamps/
        - listitem:
          - link "Фоны для террариума":
            - /url: /oborudovanie/fony-dlya-terrariuma/
      - link "Оборудование":
        - /url: /oborudovanie/
        - text: Оборудование
        - img
    - listitem:
      - list:
        - listitem:
          - link "Кальций и витамины":
            - /url: /kaltsiy-preparaty-uborka/kaltsiy-i-vitaminy/
        - listitem:
          - link "Кормовые грызуны":
            - /url: /kaltsiy-preparaty-uborka/kormovye-gryzuny/
        - listitem:
          - link "Кормовые насекомые":
            - /url: /kaltsiy-preparaty-uborka/kormovye-naseko/
        - listitem:
          - link "Кормовые смеси":
            - /url: /kaltsiy-preparaty-uborka/kormovye-smesi/
        - listitem:
          - link "Лакомства":
            - /url: /kaltsiy-preparaty-uborka/lakomstva/
      - link "Корма":
        - /url: /kaltsiy-preparaty-uborka/
        - text: Корма
        - img
    - listitem:
      - link "Услуги":
        - /url: javascript:void(0);
        - text: Услуги
        - img
      - list:
        - listitem:
          - link "Отель":
            - /url: /hotel/
        - listitem:
          - link "Выезд":
            - /url: /vyyezd/
        - listitem:
          - link "Чек-ап питомца":
            - /url: /check-up/
        - listitem:
          - link "Подписка на корм":
            - /url: /podpiska-na-korm/
    - listitem:
      - link "О нас":
        - /url: /about_us/
    - listitem:
      - link "Контакты":
        - /url: /contacts/
    - listitem:
      - link "Блог":
        - /url: https://planetexotic.ru/blogpe/
  - heading "Готовые комплекты" [level=1]
  - link "для эублефаров для эублефаров":
    - /url: /komplekty/komplekty-dlya-eublefara/
    - img "для эублефаров"
    - text: для эублефаров
  - link "Для капского варана Для капского варана":
    - /url: /komplekty/dlya-kapskogo-varana/
    - img "Для капского варана"
    - text: Для капского варана
  - link "Для синеязыкого сцинка Для синеязыкого сцинка":
    - /url: /komplekty/dlya-sineyazykogo-stsinka/
    - img "Для синеязыкого сцинка"
    - text: Для синеязыкого сцинка
  - link "для полозов и молочных змей для полозов и молочных змей":
    - /url: /komplekty/dlya-polozov-i-molochnykh-zmey/
    - img "для полозов и молочных змей"
    - text: для полозов и молочных змей
  - link "для бородатых агам для бородатых агам":
    - /url: /komplekty/komplekt-dlya-novichkov/
    - img "для бородатых агам"
    - text: для бородатых агам
  - link "для королевских питонов для королевских питонов":
    - /url: /komplekty/logovo-dlya-imperatorskogo-udava/
    - img "для королевских питонов"
    - text: для королевских питонов
  - link "для йеменских и пантеровых хамелеонов для йеменских и пантеровых хамелеонов":
    - /url: /komplekty/komplekty-dlya-khameleona/
    - img "для йеменских и пантеровых хамелеонов"
    - text: для йеменских и пантеровых хамелеонов
  - link "для игуан для игуан":
    - /url: /komplekty/dvorets-dlya-iguany/
    - img "для игуан"
    - text: для игуан
  - link "для древесных лягушек для древесных лягушек":
    - /url: /komplekty/dvorets-dlya-bananoeda/
    - img "для древесных лягушек"
    - text: для древесных лягушек
  - link "для гекконов (бананоедов, гекконов токки, фельзум) для гекконов (бананоедов, гекконов токки, фельзум)":
    - /url: /komplekty/dlya-drugikh-nazemnykh-gekkonov-bananoedov-gekkonov-tokki-felzum/
    - img "для гекконов (бананоедов, гекконов токки, фельзум)"
    - text: для гекконов (бананоедов, гекконов токки, фельзум)
  - link "для наземных амфибий для наземных амфибий":
    - /url: /komplekty/dlya-nazemnykh-amfibiy/
    - img "для наземных амфибий"
    - text: для наземных амфибий
  - link "для наземного паука-птицееда для наземного паука-птицееда":
    - /url: /komplekty/komplekty-dlya-nazemnykh-ptitseedov-brachypelma-grammostola/
    - img "для наземного паука-птицееда"
    - text: для наземного паука-птицееда
  - link "для сухопутных черепах для сухопутных черепах":
    - /url: /komplekty/komplekty-dlya-cherepakh/
    - img "для сухопутных черепах"
    - text: для сухопутных черепах
  - link "Для древесного паука-птицееда Для древесного паука-птицееда":
    - /url: /komplekty/komplekty-dlya-drevesnykh-paukov-avicularia-psalmopoeus/
    - img "Для древесного паука-птицееда"
    - text: Для древесного паука-птицееда
  - link "Авторские комплекты Авторские комплекты":
    - /url: /komplekty/mini-startovye-nabory/
    - img "Авторские комплекты"
    - text: Авторские комплекты
  - paragraph: Мы собрали комплекты с запасом роста и без дополнительных расходов
  - paragraph:
    - text: Выбирайте комплект по виду питомца и составу оборудования. Посмотрите
    - link "набор для эублефара":
      - /url: https://planetexotic.ru/komplekty/komplekty-dlya-eublefara/startovyi-nabor-453030-sm-dlya-eublefarov-i-nazemnyx-gekkonov/
    - text: ","
    - link "набор для бородатой агамы":
      - /url: https://planetexotic.ru/komplekty/komplekt-dlya-novichkov/startovyi-nabor-604040-sm-dlya-borodatoi-agamy-kapskogo-varana-i-sineyazykogo-scinka/
    - text: и
    - link "набор для королевского питона и удава":
      - /url: https://planetexotic.ru/komplekty/startovyi-nabor-604040-sm-dlya-pitonov-i-udavov/
    - text: . В карточках можно сверить комплектацию, цену и наличие. Если питомец уже есть, уточните совместимость набора перед заказом.
  - img
  - link:
    - /url: "#"
  - link:
    - /url: "#"
  - link "сравнить товары (0)":
    - /url: "#"
    - text: сравнить товары
    - strong: (0)
  - button "закрыть":
    - img
  - text: Закрыть окно
  - img
  - text: "(Окно закроется через сек.) Количество: 1"
  - link "Перейти в корзину":
    - /url: /cart/
  - link "Exotic Planet":
    - /url: /
    - img "Exotic Planet"
  - text: ИП ЧЕЧУЛИН НИКОЛАЙ АЛЕКСАНДРОВИЧ ОГРН 318774600685301
  - heading "Компания" [level=3]
  - list:
    - listitem:
      - link "О нас":
        - /url: /about_us/
    - listitem:
      - link "Блог":
        - /url: /blog/
    - listitem:
      - link "Отзывы клиентов":
        - /url: https://yandex.ru/maps/org/planeta_ekzotiki/76415813501/reviews/
    - listitem:
      - link "Контакты":
        - /url: /contacts/
  - heading "Информация" [level=3]
  - list:
    - listitem:
      - link "Доставка и оплата":
        - /url: /about_us/#dostavka
    - listitem:
      - link "Гарантии":
        - /url: /about_us/#guarantees
    - listitem:
      - link "Обмен и возврат":
        - /url: "#"
    - listitem:
      - link "Политика конфиденциальности персональных данных":
        - /url: /site/soglashenie-na-obrabotku-personalnykh-dannykh/
  - heading "Мы в сети" [level=3]
  - list:
    - listitem:
      - link "ВКонтакте":
        - /url: https://vk.com/planetexotic
        - img
        - text: ВКонтакте
    - listitem:
      - link "Youtube":
        - /url: https://www.youtube.com/channel/UCypTvt9_LuFR-nuriFzQAlQ
        - img
        - text: Youtube
    - listitem:
      - link "Telegram":
        - /url: https://t.me/Planetexotic
        - img
        - text: Telegram
  - heading "Контакты" [level=3]
  - link "8 (499) 390-23-93":
    - /url: tel:+74993902393
    - img
    - text: 8 (499) 390-23-93
  - text: Ежедневно с 11:00 до 22:00.
  - img
  - text: Москва, Банный переулок, д. 2, стр. 2 (м. «Проспект Мира») © 2026 Планета Экзотики
  - link "Избранное 0":
    - /url: /search/?_balance_type=favorites
    - img
    - text: Избранное 0
  - link "0 Корзина 0 ₽":
    - /url: /cart/
    - img
    - text: "0"
    - strong: Корзина
    - strong: 0 ₽
  - button "Toggle popover":
    - img
    - img
  - dialog
```

# Test source

```ts
  1  | //ТС-6
  2  | import { test, expect, Page, Locator } from '@playwright/test';
  3  | import { product } from '../page-objects/selectors';
  4  | 
  5  | const CATALOG_URL = 'https://planetexotic.ru/komplekty/';
  6  | 
  7  | function getProductCard(page: Page, index = 0): Locator {
  8  |   return page.locator(product.card).nth(index);
  9  | }
  10 | 
  11 | test.describe('TC-6: Карточка товара', () => {
  12 |   test.beforeEach(async ({ page }) => {
  13 |     await page.goto(CATALOG_URL, { waitUntil: 'domcontentloaded' });
  14 |   });
  15 | 
  16 |   test('Список товаров отображается и не пустой', async ({ page }) => {
  17 |     const cards = page.locator(product.card);
> 18 |     await expect(cards.first()).toBeVisible({ timeout: 10000 });
     |                                 ^ Error: expect(locator).toBeVisible() failed
  19 |     expect(await cards.count()).toBeGreaterThan(0);
  20 |   });
  21 | 
  22 |   test('Карточка содержит название, цену и картинку', async ({ page }) => {
  23 |     const card = getProductCard(page, 0);
  24 |     
  25 |     await expect(card).toBeVisible();
  26 | 
  27 |     const title = card.locator(product.title);
  28 |     await expect(title).toBeVisible();
  29 |     await expect(title).not.toBeEmpty();
  30 | 
  31 |     const price = card.locator(product.price);
  32 |     await expect(price).toBeVisible();
  33 |     await expect(price).toHaveText(/\d/);
  34 | 
  35 |     const image = card.locator(product.image);
  36 |     await expect(image).toBeVisible();
  37 |     await expect(image).toHaveAttribute('src', /.+/);
  38 |   });
  39 | 
  40 |   test('Кнопка "Подробнее" ведет на страницу товара', async ({ page }) => {
  41 |     const card = getProductCard(page, 0);
  42 |     const moreBtn = card.locator(product.moreBtn);
  43 |     
  44 |     await expect(moreBtn).toBeVisible();
  45 | 
  46 |     await Promise.all([
  47 |       page.waitForURL(/.+/),
  48 |       moreBtn.click(),
  49 |     ]);
  50 | 
  51 |     await expect(page.locator(product.pageHeading)).toBeVisible({ timeout: 10000 });
  52 |   });
  53 | 
  54 |   test('У замороженных товаров есть маркер', async ({ page }) => {
  55 |     const cards = page.locator(product.card);
  56 |     const total = await cards.count();
  57 | 
  58 |     for (let i = 0; i < total; i++) {
  59 |       const marker = cards.nth(i).locator(product.frozenMarker);
  60 |       if (await marker.isVisible()) {
  61 |         await expect(marker).not.toBeEmpty();
  62 |         return; 
  63 |       }
  64 |     }
  65 |   });
  66 | });
```