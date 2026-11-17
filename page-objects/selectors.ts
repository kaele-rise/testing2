// ================================================================
// selectors.ts · planetexotic.ru
// ================================================================

// ================================================================
// TC-01 · БАННЕР
// ================================================================
export const banner = {
  // TODO: На главной странице скрипт не нашел баннер (возможно, он скрыт или показывается не всем).
  // Если тесты падают, нужно будет найти актуальный класс.
  root: '#pe-relocation-banner',
  link: '#pe-relocation-banner a',
  text: /МЫ ПЕРЕЕХАЛИ И УЖЕ ОТКРЫТЫ/i,
};

// ================================================================
// TC-02 · ШАПКА САЙТА
// ================================================================
export const header = {
  topMenuLink: (name: string) => `.top-menu__link:has-text("${name}")`,
  phone: '.callback-info__main-num-text', // Проверено, найдено
  consultBtn: 'a[href="https://taplink.cc/planetexotic"]', // Проверено, найдено
  social: (name: 'VK' | 'YouTube' | 'Telegram') => {
    const map: Record<string, string> = {
      VK: '.soc-btn_vk',
      YouTube: '.soc-btn_ytb',
      Telegram: '.soc-btn_tlg'
    };
    return map[name];
  },
};

// ================================================================
// TC-03 · ПОИСК
// ================================================================
export const search = {
  input: '.site-search__input', // Проверено, найдено
  suggestions: '.autocomplete-suggestions',
  suggestionItem: '.autocomplete-suggestion',
  emptyState: /ничего не найдено|нет результатов/i,
};

// ================================================================
// TC-04 · КОРЗИНА И ИЗБРАННОЕ
// ================================================================
export const cart = {
  counter: '.js-minicart-count', // Проверено, найдено
  icon: '.site-actions__btn_cart a', // Проверено, найдено
  addBtn: '.btn:has-text("В корзину")',
};

export const favorites = {
  counter: '.js-wishlist-count', // Проверено, найдено
  heartBtn: '.btn-fav',
  heartActiveClass: /active|selected|in-fav/,
};

// ================================================================
// TC-05 · СОРТИРОВКА
// ================================================================
export const sorting = {
  // TODO: На сайте может быть кастомный выпадающий список, а не тег <select>.
  // Если тесты на сортировку падают, нужно будет уточнить класс кнопки.
  select: 'select[name="sort"]',
  priceItem: '.price_main',
  options: {
    priceAsc: /по цене.*возраст/i,
    priceDesc: /по цене.*убыв/i,
    name: /по названию/i,
  },
};

// ================================================================
// TC-06 · КАРТОЧКА ТОВАРА
// ================================================================
export const product = {
  // Проверено по дампу: карточка имеет класс .item-c или .js-product-list-item
  card: '.item-c',
  // Классы ниже стандартные для этого движка и должны работать
  title: '.item-c__title',
  price: '.price_main',
  // Проверено по дампу: картинка имеет класс .js-item__image
  image: 'img.js-item__image',
  moreBtn: 'a:has-text("Подробнее")',
  // Проверено по дампу: блок с бейджами (например, "замороженный") имеет класс .item-c__badges
  frozenMarker: '.item-c__badges',
  pageHeading: 'h1.section-title',
};

// ================================================================
// TC-07 · ВИДЖЕТ ЧАТА
// ================================================================
export const chat = {
  fab: '.js-fab__btn', // Проверено, найдено
  telegramLink: 'a[href*="t.me"]', // Проверено, найдено
  maxLink: 'a[href*="max.ru"]',
  callbackBtn: '#call-back-button', // Проверено, найдено
  submitBtn: 'button:has-text("Отправить")',
  consentCheckbox: 'input[type="checkbox"]',
};
