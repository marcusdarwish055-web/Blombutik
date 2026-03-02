// Toggle för mobilmeny
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active'); // togglar CSS-klassen 'active'
});

// Enkel varukorgssimulator
function addToCart(productName, price) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push({ product: productName, price: price });
  localStorage.setItem('cart', JSON.stringify(cart));
  
  alert(`${productName} har lagts i varukorgen!`);
  
  // Valfritt: navigera till varukorgssidan direkt
  // window.location.href = 'varukorg.html';
}
