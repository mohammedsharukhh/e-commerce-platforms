// Search functionality
document.getElementById('search-btn').addEventListener('click', () => {
    const query = document.getElementById('search-input').value;
    alert(`Searching for: ${query}`);
});

// Add to Cart functionality
let cartCount = 0;
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        document.getElementById('cart-count').textContent = cartCount;
        alert('Item added to cart!');
    });
});
