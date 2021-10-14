const create = document.querySelector('.create');
const createClick = document.querySelector('.create-click');
const application = document.querySelector('.application');
const appItem = document.querySelector('.app-item');
const bell = document.querySelector('.bell');
const bellItem = document.querySelector('.bell-item');
const me = document.querySelector('.me');
const meMenu = document.querySelector('.me-menu')
const menu_btn = document.querySelector('.menu');
const home = document.querySelector('.home');
const search = document.querySelector('.search-mb-click');
const searchClick = document.querySelector('.search__input-mb');

search.addEventListener('click', () => {
    searchClick.classList.toggle('block');
})


menu_btn.addEventListener('click', () => {
    home.classList.toggle('shrink');
})

create.addEventListener('click', () => {
    create.classList.toggle('active');
})


application.addEventListener('click', () => {
    appItem.classList.toggle('active');
    application.classList.toggle('active');
})

bell.addEventListener('click', () => {
    bellItem.classList.toggle('active');
    bell.classList.toggle('active');
})

me.addEventListener('click', () => {
    meMenu.classList.toggle('active');
    me.classList.toggle('active');
})



