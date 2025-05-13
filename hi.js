const productDetail = document.getElementById('product-detail');
const product = JSON.parse(localStorage.getItem('selectedProduct'));

if (product) {
  productDetail.innerHTML = `
    <div class="product-card">
      <img src="${product.image}" alt="${product.title}" />
      <h2>${product.title}</h2>
      <p>${product.description}</p>
      <div class="price">$${product.price.toFixed(2)}</div>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    </div>
  `;
} else {
  productDetail.innerHTML = '<p>No product found.</p>';
}

function addToCart(productId) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  alert('Product added to cart!');
}