// #######################################
//  NAWIGACJA
// #######################################

// Hamburger menu

// Pokazywanie/ukrywanie navigacji oraz zmiana hamburgera w X
const menuButton = document.querySelector('.hamburger');

menuButton.addEventListener('click', (e) => {
    const pageNavigation = document.querySelector('.page-navigation');
    pageNavigation.classList.toggle('page-navigation--visible');
    menuButton.classList.toggle('change');
});


// ######################################
// SEKCJA "CONCERTS"
// ######################################

// Po kliknieciu w przycisk "Buy a ticket", zamiast przycisku pokazuje sie tekst "Have fun!"

const concerts = document.querySelector('#concerts');

concerts.addEventListener('click', (e) => {
    if (e.target.classList.contains('button--buy-ticket')) {
        const buyTicketButton = e.target;
        const haveFunText = document.createElement('p');
        haveFunText.textContent = 'Have fun!';

        const buttonContainer = buyTicketButton.parentElement;
        buttonContainer.insertBefore(haveFunText, buyTicketButton);
        buyTicketButton.remove();
        // OR
        // buyTicketButton.replaceWith(haveFunText);
    }
});


// ######################################
// SEKCJA "CONTACT"
// ######################################

// Funkcja która na evencie "submit" formularza kontaktowego wyloguje wpisane wartości do konsoli.

const contactForm = document.querySelector('.contact__form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData);
    console.log(formObject);
});