// Menu Data
const menuData = [
    // Fried Rice
    {
        id: 1,
        name: 'Chicken Fried Rice',
        category: 'fried-rice',
        price: 80,
        description: 'Delicious chicken fried rice with vegetables',
        emoji: '🍚'
    },
    {
        id: 2,
        name: 'Egg Fried Rice',
        category: 'fried-rice',
        price: 60,
        description: 'Fluffy egg fried rice with fresh ingredients',
        emoji: '🍚'
    },
    {
        id: 3,
        name: 'Vegetable Fried Rice',
        category: 'fried-rice',
        price: 50,
        description: 'Healthy vegetarian fried rice',
        emoji: '🍚'
    },
    {
        id: 4,
        name: 'Shrimp Fried Rice',
        category: 'fried-rice',
        price: 100,
        description: 'Premium shrimp fried rice',
        emoji: '🍚'
    },

    // Curd Rice
    {
        id: 5,
        name: 'Plain Curd Rice',
        category: 'curd-rice',
        price: 40,
        description: 'Classic plain curd rice with tempering',
        emoji: '🍛'
    },
    {
        id: 6,
        name: 'Mango Curd Rice',
        category: 'curd-rice',
        price: 50,
        description: 'Refreshing mango curd rice',
        emoji: '🍛'
    },
    {
        id: 7,
        name: 'Pineapple Curd Rice',
        category: 'curd-rice',
        price: 55,
        description: 'Tangy pineapple curd rice',
        emoji: '🍛'
    },
    {
        id: 8,
        name: 'Cucumber Curd Rice',
        category: 'curd-rice',
        price: 45,
        description: 'Cool and crispy cucumber curd rice',
        emoji: '🍛'
    },

    // Drinks
    {
        id: 9,
        name: 'Mango Shake',
        category: 'drinks',
        price: 30,
        description: 'Fresh mango shake',
        emoji: '🥤'
    },
    {
        id: 10,
        name: 'Lassi',
        category: 'drinks',
        price: 25,
        description: 'Traditional buttermilk lassi',
        emoji: '🥛'
    },
    {
        id: 11,
        name: 'Fresh Orange Juice',
        category: 'drinks',
        price: 35,
        description: 'Freshly squeezed orange juice',
        emoji: '🧃'
    },
    {
        id: 12,
        name: 'Iced Tea',
        category: 'drinks',
        price: 20,
        description: 'Refreshing iced tea',
        emoji: '🧋'
    },
    {
        id: 13,
        name: 'Lemonade',
        category: 'drinks',
        price: 20,
        description: 'Cool lemonade',
        emoji: '🍋'
    },

    // Snacks
    {
        id: 14,
        name: 'Samosa',
        category: 'snacks',
        price: 15,
        description: 'Crispy fried samosa (2 pieces)',
        emoji: '📦'
    },
    {
        id: 15,
        name: 'Pakora',
        category: 'snacks',
        price: 20,
        description: 'Golden pakora with chutney',
        emoji: '🍖'
    },
    {
        id: 16,
        name: 'Cookies',
        category: 'snacks',
        price: 10,
        description: 'Delicious assorted cookies',
        emoji: '🍪'
    },
    {
        id: 17,
        name: 'Chikhalwali',
        category: 'snacks',
        price: 25,
        description: 'Traditional Indian snack',
        emoji: '📦'
    },
    {
        id: 18,
        name: 'Bread Butter',
        category: 'snacks',
        price: 12,
        description: 'Buttered bread slices',
        emoji: '🍞'
    }
];

// Cart Array
let cart = [];
let currentUser = null;

// Initialize
window.addEventListener('DOMContentLoaded', function() {
    loadMenu();
    setupNavigation();
});

// Navigation Setup
function setupNavigation() {
    document.querySelectorAll('.nav-link:not(.logout-btn)').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            if (this.textContent.includes('Menu')) {
                showPage('menu-page');
            } else if (this.textContent.includes('Cart')) {
                showPage('cart-page');
            }
        });
    });
}

// Page Navigation
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
    
    if (pageId === 'cart-page') {
        displayCart();
    } else if (pageId === 'menu-page') {
        loadMenu();
    }
}

// Login Function
function login(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username && password) {
        currentUser = username;
        document.getElementById('login-page').classList.remove('active');
        document.getElementById('menu-page').classList.add('active');
        loadMenu();
        document.querySelector('.navbar').style.display = 'flex';
    } else {
        alert('Please enter username and password');
    }
}

// Sign Up Function
function signup(event) {
    event.preventDefault();
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const phone = document.getElementById('signup-phone').value;
    
    if (username && email && password && phone) {
        alert('Account created successfully! Please login.');
        toggleSignup();
        document.getElementById('username').value = username;
    }
}

// Toggle Signup Form
function toggleSignup() {
    document.getElementById('signup-form').classList.toggle('hidden');
    document.querySelector('.login-container').classList.toggle('hidden');
}

// Load Menu
function loadMenu() {
    const menuGrid = document.getElementById('menu-grid');
    menuGrid.innerHTML = '';
    
    menuData.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'menu-item';
        itemDiv.setAttribute('data-category', item.category);
        
        itemDiv.innerHTML = `
            <div class="item-image">${item.emoji}</div>
            <div class="item-content">
                <div class="item-name">${item.name}</div>
                <div class="item-description">${item.description}</div>
                <div class="item-price">₹${item.price}</div>
                <div class="item-quantity">
                    <button class="quantity-btn" onclick="decreaseQty(${item.id})">-</button>
                    <div class="quantity-display" id="qty-${item.id}">0</div>
                    <button class="quantity-btn" onclick="increaseQty(${item.id})">+</button>
                </div>
                <button class="add-to-cart-btn" onclick="addToCart(${item.id})">Add to Cart</button>
            </div>
        `;
        
        menuGrid.appendChild(itemDiv);
    });
}

// Filter Menu
function filterMenu(category) {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    document.querySelectorAll('.menu-item').forEach(item => {
        if (category === 'all' || item.getAttribute('data-category') === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Quantity Management
let quantities = {};

function increaseQty(itemId) {
    quantities[itemId] = (quantities[itemId] || 0) + 1;
    document.getElementById(`qty-${itemId}`).textContent = quantities[itemId];
}

function decreaseQty(itemId) {
    if (quantities[itemId] > 0) {
        quantities[itemId]--;
        document.getElementById(`qty-${itemId}`).textContent = quantities[itemId];
    }
}

// Add to Cart
function addToCart(itemId) {
    const quantity = quantities[itemId] || 0;
    
    if (quantity === 0) {
        alert('Please select a quantity first');
        return;
    }
    
    const item = menuData.find(i => i.id === itemId);
    
    const existingItem = cart.find(c => c.id === itemId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            ...item,
            quantity: quantity
        });
    }
    
    quantities[itemId] = 0;
    document.getElementById(`qty-${itemId}`).textContent = 0;
    
    updateCartCount();
    alert(`${item.name} added to cart!`);
}

// Update Cart Count
function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-count').textContent = count;
}

// Display Cart
function displayCart() {
    const cartContainer = document.getElementById('cart-items');
    
    if (cart.length === 0) {
        cartContainer.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
        document.getElementById('total-price').textContent = '0';
        return;
    }
    
    let html = '';
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        html += `
            <div class="cart-item">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">₹${item.price} each</div>
                </div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn" onclick="decreaseCartQty(${item.id})">-</button>
                    <div class="quantity-display">${item.quantity}</div>
                    <button class="quantity-btn" onclick="increaseCartQty(${item.id})">+</button>
                </div>
                <div class="cart-item-total">₹${itemTotal}</div>
                <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        `;
    });
    
    cartContainer.innerHTML = html;
    document.getElementById('total-price').textContent = total;
}

// Increase Cart Qty
function increaseCartQty(itemId) {
    const item = cart.find(c => c.id === itemId);
    if (item) {
        item.quantity++;
        updateCartCount();
        displayCart();
    }
}

// Decrease Cart Qty
function decreaseCartQty(itemId) {
    const item = cart.find(c => c.id === itemId);
    if (item && item.quantity > 1) {
        item.quantity--;
        updateCartCount();
        displayCart();
    }
}

// Remove from Cart
function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    updateCartCount();
    displayCart();
}

// Checkout
function checkout() {
    const bookingDate = document.getElementById('booking-date').value;
    const bookingTime = document.getElementById('booking-time').value;
    
    if (!bookingDate || !bookingTime) {
        alert('Please select date and time');
        return;
    }
    
    if (cart.length === 0) {
        alert('Your cart is empty');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    const bookingDetails = `
    🎉 Booking Confirmed!
    
    User: ${currentUser}
    Date: ${bookingDate}
    Time: ${bookingTime}
    
    Order Details:
    ${cart.map(item => `• ${item.name} × ${item.quantity} = ₹${item.price * item.quantity}`).join('\n')}
    
    Total: ₹${total}
    
    Thank you for booking! Your food will be ready at the scheduled time.
    `;
    
    alert(bookingDetails);
    
    // Save booking to localStorage
    const booking = {
        user: currentUser,
        date: bookingDate,
        time: bookingTime,
        items: cart,
        total: total,
        bookingId: 'BK' + Math.random().toString(36).substr(2, 9).toUpperCase()
    };
    
    let bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    bookings.push(booking);
    localStorage.setItem('bookings', JSON.stringify(bookings));
    
    // Clear cart
    cart = [];
    quantities = {};
    updateCartCount();
    
    // Show success
    const cartContainer = document.getElementById('cart-items');
    cartContainer.innerHTML = `<div class="success-message">✅ Your food has been pre-booked successfully!</div>`;
}

// Back to Menu
function backToMenu() {
    showPage('menu-page');
}

// Logout
function logout() {
    if (confirm('Are you sure you want to logout?')) {
        currentUser = null;
        cart = [];
        quantities = {};
        updateCartCount();
        document.getElementById('menu-page').classList.remove('active');
        document.getElementById('cart-page').classList.remove('active');
        document.getElementById('login-page').classList.add('active');
        document.querySelector('.navbar').style.display = 'none';
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    }
}
