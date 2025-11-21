# 💎 Luxe Jewels - Premium E-Commerce Experience

<div align="center">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![LocalStorage](https://img.shields.io/badge/LocalStorage-FF6C37?style=for-the-badge&logo=html5&logoColor=white)

**A luxurious, fully-featured jewellery shopping platform built with React**

[Live Demo](https://your-demo-link.com) • [Report Bug](https://github.com/Subrat-IO/JwelleryTask/issues) • [Request Feature](https://github.com/Subrat-IO/JwelleryTask/issues)

</div>

---

## ✨ What Makes This Special?

This isn't just another e-commerce template. **Luxe Jewels** combines elegant design with powerful functionality to deliver a premium shopping experience that rivals production-ready applications.

```
🎨 Luxury UI/UX  +  🚀 Smooth Animations  +  💾 Smart Storage  =  Premium Experience
```

---

## 🎯 Key Highlights

<table>
<tr>
<td width="50%">

### 💫 User Experience
- 🎭 **Stunning Animations** - Scroll reveals, hover effects, smooth transitions
- 📱 **Fully Responsive** - Perfect on mobile, tablet, and desktop
- 🎨 **Premium Design** - Luxury jewelry theme with elegant typography
- ⚡ **Lightning Fast** - Optimized performance with React hooks

</td>
<td width="50%">

### 🛠️ Technical Features
- 🛒 **Smart Shopping Cart** - LocalStorage persistence
- 💖 **Wishlist System** - Save favorites permanently
- 🔐 **Auth System** - Complete signup/login flow
- 🔍 **Global Search** - Find products instantly
- 🎠 **Interactive Carousels** - Swiper.js integration

</td>
</tr>
</table>

---

## 🖼️ Screenshots

<div align="center">

### 🏠 Home Page
<img src="https://github.com/user-attachments/assets/f653748b-233f-4c85-ab64-0220f4d98dfa" alt="Home Page" width="800"/>

*Elegant landing with featured collections and animated sections*

---

### 📦 Product Showcase
<img src="https://github.com/user-attachments/assets/aa1ba6ac-0040-4581-8af1-92b79f0e1d5b" alt="Products" width="800"/>

*Beautiful product cards with hover effects and quick actions*

---

### 🛒 Shopping Experience
<img src="https://github.com/user-attachments/assets/fb0aabf8-40a9-4e7a-b539-15f42138cea3" alt="Cart" width="800"/>

*Seamless cart management with quantity controls*

---

### 📱 Mobile Responsive
<img src="https://github.com/user-attachments/assets/cad8b915-6521-4f7b-ad9e-59d7c8b2132c" alt="Mobile View" height="500"/>

*Perfect mobile experience with touch-optimized controls*

</div>

---

## 🚀 Features Deep Dive

### 🛍️ Shopping Features
| Feature | Description |
|---------|-------------|
| **🛒 Smart Cart** | Add/remove items, update quantities, persistent storage |
| **💖 Wishlist** | Save favorite items across sessions |
| **🔍 Search** | Real-time product search with filters |
| **📄 Product Details** | Individual product pages with full info |
| **🏷️ Categories** | Shop by category with filters |

### 🎨 UI/UX Features
| Feature | Description |
|---------|-------------|
| **📌 Scroll Reveal** | Intersection Observer animations on scroll |
| **🎠 Carousels** | Multiple sliders with Swiper.js |
| **🔔 Toast Notifications** | Elegant feedback for user actions |
| **🎭 Hover Effects** | Interactive product card animations |
| **💫 Smooth Transitions** | CSS animations throughout |

### 🔐 Authentication
| Feature | Description |
|---------|-------------|
| **📝 Signup** | New user registration with validation |
| **🔑 Login** | Secure authentication system |
| **👤 User Context** | Global auth state management |
| **💾 Persistence** | Session maintained in localStorage |

---

## 🛠️ Tech Stack

<div align="center">

### Core Technologies

| Technology | Purpose |
|------------|---------|
| ⚛️ **React 18** | UI library with hooks |
| 🎨 **CSS Modules** | Scoped styling |
| 🎭 **Swiper.js** | Touch sliders |
| 🔥 **React Icons** | Beautiful icons |
| 📦 **LocalStorage** | Client-side persistence |
| 🖼️ **Intersection Observer** | Scroll animations |

</div>

---

## 📁 Project Structure

```
📦 src/
├── 🎯 api/
│   └── mockApi.js              # Mock product data & API
│
├── 🖼️ assets/                   # Images, logos, banners
│
├── 🧩 components/
│   ├── Blogs/                  # Blog posts section
│   ├── Categories/             # Category filters
│   ├── Footer/                 # Site footer
│   ├── Header/                 # Navigation bar
│   ├── ProductCard/            # Reusable product card
│   ├── SearchBar/              # Global search
│   ├── swiper/                 # Carousel components
│   └── Toast/                  # Notification system
│
├── 🌐 contexts/                 # React Context API
│   ├── CartContext.jsx         # Shopping cart state
│   ├── WishlistContext.jsx     # Wishlist state
│   └── AuthContext.jsx         # User authentication
│
└── 📄 pages/                    # Application routes
    ├── Cart/                   # Shopping cart page
    ├── Home/                   # Landing page
    ├── Login/                  # Authentication
    ├── OwnPage/                # Custom jewelry
    ├── ProductDetail/          # Product view
    ├── Products/               # Product listing
    ├── Search/                 # Search results
    └── Wishlist/               # Saved items
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Installation

```bash
# 1️⃣ Clone the repository
git clone https://github.com/Subrat-IO/JwelleryTask.git

# 2️⃣ Navigate to project directory
cd JwelleryTask

# 3️⃣ Install dependencies
npm install

# 4️⃣ Start development server
npm run dev

# 5️⃣ Open browser
# Visit http://localhost:5173
```

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build
npm run preview
```

---

## 💡 How It Works

### 🛒 Cart System
```javascript
// Add to cart with persistence
const addToCart = (product) => {
  const updatedCart = [...cart, product];
  setCart(updatedCart);
  localStorage.setItem("cart", JSON.stringify(updatedCart));
  showToast("Added to cart! 🛒");
};
```

### 💖 Wishlist Logic
```javascript
// Save to wishlist permanently
const toggleWishlist = (product) => {
  const isWishlisted = wishlist.find(item => item.id === product.id);
  const updated = isWishlisted 
    ? wishlist.filter(item => item.id !== product.id)
    : [...wishlist, product];
  
  setWishlist(updated);
  localStorage.setItem("wishlist", JSON.stringify(updated));
};
```

### 📌 Scroll Reveal Animation
```javascript
useEffect(() => {
  const elements = document.querySelectorAll(".scrollReveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach((el) => observer.observe(el));
  return () => observer.disconnect();
}, []);
```

### 🔐 Authentication Flow
```javascript
// User registration
const signup = (userData) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  users.push(userData);
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("currentUser", JSON.stringify(userData));
  setUser(userData);
};
```

---

## 🎨 Design Philosophy

### Color Palette
```css
--primary: #B8860B;      /* Luxury Gold */
--secondary: #1A1A1A;    /* Deep Black */
--accent: #FFD700;       /* Bright Gold */
--bg-light: #F5F5F5;     /* Elegant White */
--text-dark: #2C2C2C;    /* Rich Black */
```

### Typography
- **Headings**: Playfair Display (Elegant serif)
- **Body**: Inter (Clean sans-serif)
- **Accents**: Montserrat (Modern sans-serif)

---

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
VITE_APP_TITLE=Luxe Jewels
VITE_API_URL=http://localhost:3000
```

### Mock API
Products are stored in `src/api/mockApi.js`. Easy to replace with real backend:

```javascript
// Replace with actual API call
export const fetchProducts = async () => {
  // return await fetch('https://api.yourbackend.com/products')
  return mockProducts;
};
```

---

## 📈 Performance Optimizations

- ⚡ **Code Splitting** - Lazy loading for routes
- 🖼️ **Image Optimization** - WebP format with fallbacks
- 📦 **Bundle Size** - Tree shaking and minification
- 💾 **Caching** - LocalStorage for frequently accessed data
- 🎯 **Memoization** - React.memo for expensive components

---

## 🔮 Future Enhancements

### Phase 1 - Backend Integration
- [ ] Connect to real REST API
- [ ] User authentication with JWT
- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] Payment gateway (Stripe/Razorpay)

### Phase 2 - Advanced Features
- [ ] Order tracking system
- [ ] Email notifications
- [ ] Admin dashboard
- [ ] Product reviews and ratings
- [ ] Multi-currency support

### Phase 3 - Scaling
- [ ] Redis caching
- [ ] CDN integration
- [ ] SEO optimization
- [ ] PWA capabilities
- [ ] Analytics integration

---

## 🤝 Contributing

Contributions make the open-source community amazing! Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 👨‍💻 Author

**Subrat Sethi**

- Portfolio: [subratsethi.com](https://your-portfolio.com)
- GitHub: [@Subrat-IO](https://github.com/Subrat-IO)
- LinkedIn: [Subrat Sethi](https://linkedin.com/in/subratsethi)
- Email: subrat@example.com

---

## 🙏 Acknowledgments

- [React Documentation](https://react.dev)
- [Swiper.js](https://swiperjs.com)
- [React Icons](https://react-icons.github.io/react-icons)
- [Unsplash](https://unsplash.com) for placeholder images
- Inspired by luxury e-commerce websites

---

<div align="center">

### ⭐ Star this repo if you found it helpful!

Made with 💎 and ⚛️ by [Subrat Sethi](https://github.com/Subrat-IO)

</div>
