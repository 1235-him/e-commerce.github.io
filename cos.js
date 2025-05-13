const cartItemsContainer = document.getElementById('cart-items');
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function displayCart() {
  cartItemsContainer.innerHTML = '';

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    return;
  }

  cart.forEach(item => {
    const div = document.createElement('div');
    div.innerHTML = `
      <h3>${item.title}</h3>
      <p>Price: $${item.price.toFixed(2)}</p>
      <p>Quantity: ${item.qty}</p>
      <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
    `;
    cartItemsContainer.appendChild(div);
  });
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  localStorage.setItem('cart', JSON.stringify(cart));
  displayCart();
}

displayCart();