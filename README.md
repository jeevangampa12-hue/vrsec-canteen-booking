# 🍽️ VRSEC Canteen Food Pre-Booking Website

A modern web application for pre-booking food at VRSEC (Vignan's Institute of Information Technology) canteen. Students can browse the menu, add items to cart, and pre-book food for a specific date and time.

## 📋 Features

- **User Authentication**: Simple login and sign-up system
- **Complete Menu Display**: Browse all food items with categories:
  - 🍚 Fried Rice (Chicken, Egg, Vegetable, Shrimp)
  - 🍛 Curd Rice (Plain, Mango, Pineapple, Cucumber)
  - 🥤 Drinks (Mango Shake, Lassi, Orange Juice, Iced Tea, Lemonade)
  - 📦 Snacks (Samosa, Pakora, Cookies, Bread Butter, and more)

- **Smart Cart System**: 
  - Add/remove items from cart
  - Adjust quantities before adding
  - Real-time cart count updates
  - Total price calculation

- **Pre-Booking System**:
  - Select preferred date for food pickup
  - Choose pickup time
  - Confirmation with booking ID
  - Booking history saved locally

- **Category Filtering**: Filter menu items by category for easy browsing
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Local Storage**: Bookings are saved in browser storage

## 🚀 How to Use

### 1. **Access the Website**
Open `index.html` in your web browser

### 2. **Login/Sign Up**
- Create a new account with username, email, phone, and password
- Or login with existing credentials
- Default test account:
  - Username: `student1`
  - Password: `password123`

### 3. **Browse Menu**
- View all food items with prices and descriptions
- Use category filters to find specific items
- Each item shows emoji representation

### 4. **Add Items to Cart**
- Use +/- buttons to select quantity
- Click "Add to Cart" button
- Check the cart count in navbar

### 5. **Pre-Book Food**
- Click on "Cart" in navbar
- Review your items and total price
- Select preferred **Date** and **Time**
- Click "Pre-Book Now"
- Receive confirmation with booking ID

### 6. **View Bookings**
- Bookings are automatically saved to browser
- Check browser console (F12 → Application → Local Storage) to view booking details

## 📋 Menu Items & Prices

### Fried Rice (🍚)
| Item | Price |
|------|-------|
| Vegetable Fried Rice | ₹50 |
| Egg Fried Rice | ₹60 |
| Chicken Fried Rice | ₹80 |
| Shrimp Fried Rice | ₹100 |

### Curd Rice (🍛)
| Item | Price |
|------|-------|
| Plain Curd Rice | ₹40 |
| Cucumber Curd Rice | ₹45 |
| Mango Curd Rice | ₹50 |
| Pineapple Curd Rice | ₹55 |

### Drinks (🥤)
| Item | Price |
|------|-------|
| Lemonade | ₹20 |
| Iced Tea | ₹20 |
| Lassi | ₹25 |
| Mango Shake | ₹30 |
| Fresh Orange Juice | ₹35 |

### Snacks (📦)
| Item | Price |
|------|-------|
| Cookies | ₹10 |
| Bread Butter | ₹12 |
| Samosa | ₹15 |
| Pakora | ₹20 |
| Chikhalwali | ₹25 |

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Storage**: Browser LocalStorage for bookings
- **No Dependencies**: Pure vanilla implementation, no external libraries required

## 📁 File Structure

```
vrsec-canteen-booking/
├── index.html          # Main HTML file with login and menu pages
├── style.css           # Complete styling and responsive design
├── script.js           # JavaScript logic for functionality
└── README.md           # This file
```

## 🎯 Features in Detail

### Login System
- Simple username/password authentication
- Sign-up with email and phone number
- Session management

### Menu System
- 18 different food items
- Category-based organization
- Real-time filtering
- Item descriptions with emojis

### Cart Management
- Add multiple items
- Adjust quantities
- Remove items
- Real-time total calculation
- Cart persistence during session

### Booking System
- Date and time selection
- Automatic booking ID generation
- Confirmation alerts
- LocalStorage-based booking history

## 💾 Data Storage

Bookings are stored in browser's LocalStorage with the following structure:
```json
{
  "user": "student1",
  "date": "2026-09-10",
  "time": "13:00",
  "items": [...],
  "total": 150,
  "bookingId": "BKXYZ123ABC"
}
```

## 🔐 Security Note

This is a front-end only application. For production use, you should:
- Set up a backend server (Node.js, Python, etc.)
- Use a database (MongoDB, MySQL, etc.)
- Implement proper authentication with JWT tokens
- Add payment gateway integration
- Implement admin dashboard for canteen staff

## 🚀 Deployment Options

1. **GitHub Pages** (Free)
   - Push to GitHub
   - Enable GitHub Pages in repository settings
   - Access via: `https://jeevangampa12-hue.github.io/vrsec-canteen-booking`

2. **Netlify** (Free)
   - Connect GitHub repo
   - Auto-deploys on push

3. **Vercel** (Free)
   - Connect GitHub repo
   - Automatic deployment

4. **Local Server**
   - Use Python: `python -m http.server 8000`
   - Use Node.js: `npx http-server`
   - Open: `http://localhost:8000`

## 📱 Browser Compatibility

- Chrome ✅
- Firefox ✅
- Safari ✅
- Edge ✅
- Mobile browsers ✅

## 🎨 Customization

### Change Colors
Edit `style.css`:
- Primary color: `#667eea`
- Secondary color: `#764ba2`
- Success color: `#2ecc71`

### Add More Items
Edit `script.js` - Add to `menuData` array:
```javascript
{
    id: 19,
    name: 'Item Name',
    category: 'category-name',
    price: 50,
    description: 'Item description',
    emoji: '🍕'
}
```

### Modify Prices
Update prices in `menuData` array in `script.js`

## 📞 Support

For issues or feature requests, create an issue in the GitHub repository.

## 📄 License

This project is open source and available for VRSEC students.

---

**Made with ❤️ for VRSEC Canteen**

🔗 **Live Website**: https://github.com/jeevangampa12-hue/vrsec-canteen-booking
