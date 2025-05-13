const productContainer = document.getElementById('product-container');
const searchInput = document.getElementById('search');
let products = [];

fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(data => {
    products = data;
    displayProducts(products);
  });

function displayProducts(productList) {
  productContainer.innerHTML = '';
  productList.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.addEventListener('click', () => {
      localStorage.setItem('selectedProduct', JSON.stringify(product));
      window.location.href = 'hi.html';
    });

    card.innerHTML = `
      <img src="${product.image}" alt="${product.title}" />
      <h2>${product.title}</h2>
      <div class="price">$${product.price.toFixed(2)}</div>
    `;
    productContainer.appendChild(card);
  });
}

searchInput.addEventListener('input', () => {
  const keyword = searchInput.value.toLowerCase();
  const filtered = products.filter(product =>
    product.title.toLowerCase().includes(keyword)
  );
  displayProducts(filtered);
});