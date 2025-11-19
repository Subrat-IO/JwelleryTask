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
├── api/
│   └── mockApi.js               # Products / fake fetch
│
├── assets/                      # Images, logos, banners
│
├── components/
│   ├── Blogs/                   # Recent posts UI
│   ├── Categories/              # Shop-by-category UI
│   ├── Footer/
│   ├── Header/
│   ├── ProductCard/
│   ├── SearchBar/
│   ├── swiper/                  # Diamonds & carousels
│   └── Toast/                   # Notification system
│
├── contexts/                    # Global app states
│   ├── CartContext.jsx
│   ├── WishlistContext.jsx
│   └── AuthContext.jsx
│
├── pages/                       # Application pages
│   ├── Cart/                    # Cart page
│   ├── Home/                    # Landing page
│   ├── Login/                   # Login page
│   ├── OwnPage/                 # Jewelry customization page
│   ├── Pro

🚀 Installation & Setup
# Clone repository
git clone git](https://github.com/Subrat-IO/JwelleryTask.git)

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

![Home Page](./scre<img width="1916" height="1014" alt="Screenshot from 2025-11-19 16-54-29" src="https://github.com/user-attachments/assets/aa1ba6ac-0040-4581-8af1-92b79f0e1d5b" />
enshots/home.jpg)
![Product Detail](./screensh<img width="1916" height="1014" alt="Screenshot from 2025-11-19 16-54-52" src="https://github.com/user-attachments/assets/f653748b-233f-4c85-ab64-0220f4d98dfa" />
ots/detail.jpg)
![Cart & Wishlist](./screens<img width="1916" height="1014" alt="Screenshot from 2025-11-19 16-54-35" src="https://github.com/user-attachments/assets/fb0aabf8-40a9-4e7a-b539-15f42138cea3" />
hots/cart.jpg)
<img width="535" height="998" alt="Screenshot from 2025-11-19 16-55-09" src="https://github.com/user-attachments/assets/cad8b915-6521-4f7b-ad9e-59d7c8b2132c" />
<img width="1916" height="1014" alt="Screenshot from 2025-11-19 16-54-12" src="https://github.com/user-attachments/assets/2114127c-26eb-4c12-a6a7-350037c4ebfe" />


📌 Future Enhancements
