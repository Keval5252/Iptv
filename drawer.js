const drawer = document.querySelector('[data-drawer]');
const overlay = document.querySelector('[data-drawer-overlay]');
const openBtn = document.querySelector('[data-drawer-open]');
const closeBtn = document.querySelector('[data-drawer-close]');

function openDrawer() {
  drawer.classList.remove('-translate-x-full');
  overlay.classList.remove('hidden');
}

function closeDrawer() {
  drawer.classList.add('-translate-x-full');
  overlay.classList.add('hidden');
}

openBtn && openBtn.addEventListener('click', openDrawer);
closeBtn && closeBtn.addEventListener('click', closeDrawer);
overlay && overlay.addEventListener('click', closeDrawer);

const searchDrawer = document.querySelector('[data-search-drawer]');
const searchOpenBtn = document.querySelector('[data-search-open]');
const searchCloseBtn = document.querySelector('[data-search-close]');

function openSearchDrawer() {
  searchDrawer.classList.remove('-translate-y-full');
  overlay.classList.remove('hidden');
}

function closeSearchDrawer() {
  searchDrawer.classList.add('-translate-y-full');
  overlay.classList.add('hidden');
}

searchOpenBtn && searchOpenBtn.addEventListener('click', openSearchDrawer);
searchCloseBtn && searchCloseBtn.addEventListener('click', closeSearchDrawer);
overlay && overlay.addEventListener('click', () => {
  if (!searchDrawer.classList.contains('-translate-y-full')) {
    closeSearchDrawer();
  }
});

const cartSidebar = document.querySelector('[data-cart-sidebar]');
const cartOpenBtn = document.querySelector('[data-cart-open]');
const cartCloseBtn = document.querySelector('[data-cart-close]');

function openCartSidebar() {
  cartSidebar.classList.remove('translate-x-full');
  overlay.classList.remove('hidden');
}

function closeCartSidebar() {
  cartSidebar.classList.add('translate-x-full');
  overlay.classList.add('hidden');
}

cartOpenBtn && cartOpenBtn.addEventListener('click', openCartSidebar);
cartCloseBtn && cartCloseBtn.addEventListener('click', closeCartSidebar);
overlay && overlay.addEventListener('click', () => {
  if (!cartSidebar.classList.contains('translate-x-full')) {
    closeCartSidebar();
  }
}); 