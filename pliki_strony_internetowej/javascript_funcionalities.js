// Pobieramy element przycisku logowania
const loginButton = document.getElementById('login-button');

// Pobieramy element formularza logowania
const loginForm = document.getElementById('login-form');

// Pobieramy element pola wyszukiwania
const searchInput = document.getElementById('search');

// Dodajemy nasłuchiwacz zdarzenia kliknięcia na przycisk logowania
loginButton.addEventListener('click', () => {
  loginForm.style.display = 'block';
});



// Obsługa formularza logowania
loginForm.addEventListener('submit', event => {
  event.preventDefault();

  // Pobieramy dane z formularza
  const email = event.target.email.value;
  const password = event.target.password.value;

  // Logujemy użytkownika
  login(email, password);
});

// Funkcja logowania użytkownika
function login(email, password) {
  // Ukrywamy formularz logowania
  loginForm.style.display = 'none';

  // Wysyłamy komunikat o pomyślnym zalogowaniu
  alert('Zostałeś pomyślnie zalogowany!');
}

// Pobieramy elementy potrzebne do obsługi koszyka zakupów
const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
const cartItemsList = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');

// Obsługa kliknięcia na przycisk "Dodaj do koszyka"
const addButtons = document.querySelectorAll('.add-to-cart-button');

addButtons.forEach(button => {
  button.addEventListener('click', event => {
    const item = event.target.parentNode;
    const name = item.getAttribute('data-name');
    const price = item.getAttribute('data-price');

    addToCart(name, price);
  });
});

// Dodawanie produktu do koszyka
function addToCart(name,price) {
    const cartItem = document.createElement('li');
    cartItem.setAttribute('data-name', name);
    cartItem.setAttribute('data-price', price);
    cartItem.innerHTML = `
      <h3>${name}</h3>
      <p>Cena: ${price} zł</p>
      <button class="remove-from-cart-button">Usuń z koszyka</button>
    `;
  
    document.querySelector('#cart-items').appendChild(cartItem);
  
    // Obsługa kliknięcia na przycisk "Usuń z koszyka"
    cartItem.querySelector('.remove-from-cart-button').addEventListener('click', event => {
      const item = event.target.parentNode;
      item.parentNode.removeChild(item);
      updateCartTotal();
    });
  
    updateCartTotal();
  }
  
  // Aktualizacja całkowitego kosztu zakupów
  function updateCartTotal() {
    const cartItems = document.querySelectorAll('#cart-items li');
    let total = 0;
  
    cartItems.forEach(item => {
      const price = item.getAttribute('data-price');
      total += parseFloat(price);
    });
  
    document.querySelector('#cart-total-price').textContent = total.toFixed(2);

  // Jeżeli mamy w koszyku jakies przedmioty wyswietlamy kup teraz
  if (cartItems.length > 0) {
    document.querySelector('#buy-now-button').style.display = 'block';
  } else {
    document.querySelector('#buy-now-button').style.display = 'none';
  }
}

// Pobieramy przycisk do zmiany trybu
const toggleButton = document.querySelector('#toggle-dark-mode-button');

// Dodajemy obsługę zdarzenia kliknięcia w przycisk
let currentTheme;

toggleButton.addEventListener('click', () => {
if (document.activeElement !== searchInput) {
  toggleButton.textContent = toggleButton.textContent === 'Przełącz na tryb ciemny'
    ? 'Przełącz na tryb jasny'
    : 'Przełącz na tryb ciemny';

 // Sprawdzamy, czy ciało strony ma klasę "dark-theme"
 const isDark = document.body.classList.contains('dark-theme');

 // Jeśli ma, usuwamy ją
 if (isDark) {
   document.body.classList.remove('dark-theme');
   currentTheme = 'light';
 }
 // W przeciwnym razie, dodajemy ją
 else {
   document.body.classList.add('dark-theme');
   currentTheme = 'dark';
 }
}
});


// Pobieramy element przycisku "Kup teraz"
const buyNowButton = document.getElementById('buy-now-button');

// Pobieramy element formularza "Kup teraz"
const buyNowForm = document.getElementById('buy-now-form');

// Dodajemy nasłuchiwacz zdarzenia kliknięcia na przycisk "Kup teraz"
buyNowButton.addEventListener('click', () => {
  buyNowForm.style.display = 'block';
  buyNowButton.style.display = 'none';
});


// Pobieramy element przycisku zamykającego formularz
const closeButton = document.getElementById('close-button');
const purchaseForm = document.getElementById('purchase-form');


// Funkcja zmiany stylu przycisku zamykającego formularz
function updateCloseButtonStyle(theme) {
  closeButton.classList.remove('light-theme', 'dark-theme');
  closeButton.classList.add(theme);
}


// Dodajemy nasłuchiwacz zdarzenia kliknięcia na przycisk zamykający formularz
closeButton.addEventListener('click', () => {
  buyNowForm.style.display = 'none';
  buyNowButton.style.display = 'block';
  });


// Obsługa formularza "Kup teraz"
buyNowForm.addEventListener('submit', event => {
event.preventDefault();

// Pobieramy dane z formularza
const name = event.target.name.value;
const email = event.target.email.value;
const address = event.target.address.value;
const city = event.target.city.value;
const zipCode = event.target.zipCode.value;
const deliverymethod = event.target.deliverymethod.value;



  // Sprawdzamy, czy wszystkie pola formularza są wypełnione
  if (!name || !email || !address || !city || !zipCode || !deliverymethod) {
    alert('Uzupełnij wszystkie pola formularza');
  } else {
    // Złożenie zamówienia
    placeOrder(name, email, address, city, zipCode, deliverymethod);
  }
});



// Funkcja złożenia zamówienia
function placeOrder(name, email, address, city, zipCode, deliverymethod) {
// Tutaj zakładamy, że zostały sprawdzone poprawność danych i zamówienie zostało złożone

// Ukrywamy formularz "Kup teraz"
buyNowForm.style.display = 'none';

// Usunięcie elementów z koszyka
const cartItems = document.querySelectorAll('#cart-items li');
cartItems.forEach(item => item.parentNode.removeChild(item));

// Ustawienie całkowitego kosztu zakupów na 0
document.querySelector('#cart-total-price').textContent = '0.00';

// Wysyłamy komunikat o pomyślnym złożeniu zamówienia
alert('Zamówienie zostało pomyślnie złożone!');
}

