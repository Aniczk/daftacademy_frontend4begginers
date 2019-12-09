// Hamburger menu

const hamburger = document.querySelector('.page-navigation__hamburger-menu');
const nav = document.querySelector('.page-navigation__items');

hamburger.addEventListener('click', () =>{
  nav.classList.toggle('page-navigation__items');
});

// "Have fun!" po kliknieciu w przycisk "Buy a ticket"

const button = document.querySelector('.button');

button.addEventListener('click', () => {
  button.classList.remove('button');
})