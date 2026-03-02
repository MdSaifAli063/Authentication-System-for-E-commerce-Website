# 👔 E‑commerce Website for Men — Elegant Fashion

[![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)  
[![Express](https://img.shields.io/badge/Express-4.x-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)  
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)  
[![EJS](https://img.shields.io/badge/EJS-templates-ffd54a?style=for-the-badge&logo=ejs&logoColor=black)](https://ejs.co/)  
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](./LICENSE)

A clean, responsive e‑commerce starter site focused on premium men's fashion — signup/login, sessions, password reset, product listings, cart, wishlist, and simple pages (about, contact, services). Built with Node.js, Express and EJS templates.

---

## ✨ Highlights

- Modern responsive UI tailored for men's fashion
- Secure auth flows: signup, login, logout, forgot/reset password (token + expiry)
- Session-based auth (express-session) with res.locals.user for templates
- Body normalizer to accept common field name variants (Email, username, pass, pwd)
- Simple category pages and protected routes (profile, orders, cart, wishlist)

---

## 📁 What’s inside

- public/ — EJS templates and client HTML/CSS
- src/index.js — Express app, auth routes, mailer + session handling
- src/config.js — Mongoose + User model (expected)
- README.md — this file

---

🚀 Quick start (dev)

1. Clone
   git clone <your-repo-url>
2. Install
   npm install
3. Create .env (example)
   PORT=3210
   HOST=127.0.0.1
   MONGO_URI=mongodb+srv://<user>:<pass>@cluster.example.mongodb.net/dbname
   SESSION_SECRET=super-secret-string
   SMTP_HOST=smtp.example.com
   SMTP_PORT=587
   SMTP_USER=you@example.com
   SMTP_PASS=yourpassword
   SMTP_FROM='no-reply@example.com'
4. Run
   npm start
5. Open
   http://127.0.0.1:3210/

---

🧩 Routes (primary)

- GET /, /home — Home
- GET /products, /services, /booking, /about, /contact — Pages (some protected)
- POST /booking — Submit a service booking request (protected)
- GET /login, POST /login — Sign in
- GET /signup, POST /signup — Register
- GET /forgot-password, POST /forgot-password — Request reset
- GET /reset-password/:token, POST /reset-password/:token — Reset
- GET /logout — Sign out
- Diagnostics: /health, /whoami, /session

---

📌 Notes for deployment

- Use a persistent session store (connect-mongo or Redis) in production
- Set cookie.secure = true behind HTTPS; set app.set('trust proxy', 1) when behind a proxy
- Limit public static exposure: serve only /public/assets as /static in production
- Configure SMTP creds for real emails; default dev transport logs JSON emails

---

🔧 Development tips

- Tests / mocks: password reset link logs to console in dev
- Use the included body normalizer to support alternate form field names
- EJS partials can be added under public/ for reusable UI (header/footer/back-to-home)

---

## 🧱 Tech Stack

- Node.js, Express
- EJS (templates in public/)
- express-session
- bcrypt
- crypto
- MongoDB + Mongoose (via src/config.js that exports { User, mongoose })

---

## 📂 Project Structure

Example layout:

- /public
  - home.ejs
  - login.ejs
  - signup.ejs
  - forgot-password.ejs
  - reset-password.ejs
  - js/ and css/ assets you reference via /static/...
- /src
  - index.js (Express app)
  - config.js (exports { User, mongoose })
- package.json
- README.md

Note:

- The app renders EJS templates from public, and serves static assets at /static from the same directory. For security, consider serving only an assets subfolder as static in production (see Hardening section).

---

## ✅ Prerequisites

- Node.js 18+ (recommended)
- MongoDB connection string (Atlas or local)
- npm

---

## 📣 Contributing

Improvements welcome: PRs for session store integration, CSRF protection, rate limiting, or design tweaks.

---

##📜 License

MIT — feel free to reuse and adapt.

---

Made with ❤️ for stylish menswear websites.
