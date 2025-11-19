💍✨ Jewellery E-Commerce – React (UI-Heavy, Local Auth, Cart, Wishlist)

A premium jewellery shopping website built using React JS, designed with luxurious UI, animations, responsiveness, and local storage persistence.
This project simulates a full e-commerce experience:

✨ Fully Responsive + Scroll Reveal Animations + Local Auth + Wishlist + Cart + Product Detail + Search

🌟 Features
Feature	Description
💎 Luxury UI	High-end jewelry theme with animations & elegant typography
🛒 Add to Cart (Local Storage)	Persistent cart with quantity updates
💖 Wishlist Storage	Save favorite items forever (until deleted)
🔐 Signup / Login System	LocalStorage authentication
🔎 Search Feature	Global product search page
🧾 Product Detail Page	Individual product preview
🖼 Premium Product Cards	Images, price, hover, heart icon, add buttons
📌 Scroll Reveal Animations	Intersection Observer section reveal
🎠 Carousel + Shape Slider	Swiper + Custom animation carousel
📱 Fully Responsive	Mobile/Tablet/Desktop optimized
🛠 Tech Stack
Frontend	UI & Utils	Storage
⚛️ React JS	🎨 CSS Modules	📦 LocalStorage
🖼 JSX	🎭 Swiper.js	🔑 Browser Auth
💠 Custom Hooks	🔥 React Icons	🧾 Mock Data
📦 Project Structure



📦 src
│── 🖼 assets/               # Images, icons
│── 📂 api/                  # Mock API / fetch calls
│── 🎨 components/
│   │── Blogs/
│   │── Categories/
│   │── Footer/
│   │── Header/
│   │── ProductCard/
│   │── SearchBar/
│   │── swiper/
│   │── Toast/
│── 🔐 contexts/             # Cart, Wishlist, Auth Contexts
│── 📄 pages/
│   │── Cart/
│   │── Home/
│   │── Login/
│   │── OwnPage/
│   │── ProductDetail/
│   │── SearchResults/
│   │── Signup/
│   │── Wishlist/
│── ⚙️ utils/                # Helpers, storage handlers
│── App.jsx                  # App root + routes
│── main.jsx                 # React entry point
│── App.css / index.css

🚀 Installation & Setup
# Clone repository
git clone https://github.com/<your-username>/<repository-name>.git

# Move into project
cd JewelleryTask

# Install packages
npm install

# Start development server
npm run dev

🔐 Authentication Overview

Users register → stored in localStorage

Login persists until logout

Validations for empty/invalid fields

localStorage.setItem("user", JSON.stringify(userData));

🛒 Cart & 💖 Wishlist Logic

Stores items in localStorage

Persists even after page reload

Can remove/update items

localStorage.setItem("cart", JSON.stringify(cartItems));
localStorage.setItem("wishlist", JSON.stringify(wishlistItems));

✨ Scroll Reveal Animation (Code)
useEffect(() => {
  const elements = document.querySelectorAll(".scrollReveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("show");
    });
  }, { threshold: 0.2 });

  elements.forEach((el) => observer.observe(el));
  return () => observer.disconnect();
}, []);

🎠 Sliders Used
Component	Library
Diamonds Section	Swiper.js
Shape Slider	Custom Carousel
🎨 Screenshots (UI Heavy Project)

Suggestion: Add minimum 3–4 images here manually on GitHub.

![Home Page](./screenshots/home.jpg)
![Product Detail](./screenshots/detail.jpg)
![Cart & Wishlist](./screenshots/cart.jpg)

📌 Future Enhancements

🔄 Backend Integration (Node + MongoDB)

💳 Payment Gateway (Razorpay / Stripe)

⭐ Product Ratings + Reviews

🧾 Order History + Invoice

🛍 Advanced Filter & Sorting
