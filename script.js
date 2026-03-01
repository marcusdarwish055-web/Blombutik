// Visa / göm meny
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
});

// Enkel varukorgssimulator
function addToCart(productName, price){
  localStorage.setItem('cart', JSON.stringify({product: productName, price: price}));
  alert(`${productName} har lagts i varukorgen!`);
  window.location.href = 'varukorg.html';
}
