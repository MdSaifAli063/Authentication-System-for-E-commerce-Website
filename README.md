# 🔐🛒 E‑commerce Website for Men

<div align="center">
  
Production-ready Node.js + Express authentication flow for an e‑commerce site. It uses EJS templates, sessions, and MongoDB (via Mongoose) with login, signup, logout, forgot password, and reset password flows.

[![Node.js](https://img.shields.io/badge/Node.js-18+-green?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)  
[![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)  
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/) 
[![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)](https://mongoosejs.com/) 
[![EJS](https://img.shields.io/badge/EJS-FFD700?style=for-the-badge&logo=ejs&logoColor=black)](https://ejs.co/)  
[![bcrypt](https://img.shields.io/badge/bcrypt-003366?style=for-the-badge)](https://www.npmjs.com/package/bcrypt)  
[![crypto](https://img.shields.io/badge/crypto-native-orange?style=for-the-badge)](https://nodejs.org/api/crypto.html)  

</div>

---

## 🌐 Live Demo  

🔗 **URL**: [Authentication System Demo](https://your-demo-link.com)  Coming Soon !

---

## 📸 **Preview:**  

![image](https://github.com/MdSaifAli063/Authentication-System-for-E-commerce-Website/blob/7c59f2312d346c70fc94a463a79def262b4a893f/Screenshot%202025-10-03%20094007.png)
![image](https://github.com/MdSaifAli063/Authentication-System-for-E-commerce-Website/blob/a80ad82a1a518558c2440f313baa9d127a77a418/Screenshot%202025-10-03%20094125.png)
![image](https://github.com/MdSaifAli063/Authentication-System-for-E-commerce-Website/blob/7c73c944dcffbdd503a8d1980149b10e68a736d3/Screenshot%202025-10-03%20094238.png)
![image](https://github.com/MdSaifAli063/Authentication-System-for-E-commerce-Website/blob/556fc8878f62e662a9312b393eeb800e01dc0664/Screenshot%202025-10-03%20094457.png)
![image](https://github.com/MdSaifAli063/Authentication-System-for-E-commerce-Website/blob/138a9dcbce35229bb47f4c3c0f7e1f89837214ca/Screenshot%202025-10-03%20094606.png)
![image](https://github.com/MdSaifAli063/Authentication-System-for-E-commerce-Website/blob/ab8c9eee3e31b34b6ae43b3a86912f06a18ae59d/Screenshot%202025-10-03%20094841.png)

---

## ✨ Features

- 👤 Signup with validation (username, email, password, terms)
- 🔑 Login with email + password
- 🧭 Redirects to Home after login
- 🚪 Logout (session destroy + clear cookie)
- 🔁 Forgot/Reset password with secure token + 1-hour expiry
- 🍪 Session middleware exposes res.locals.user for all views
- 🧹 Input normalizer maps odd field names (Email, username, pass, pwd) to expected email/password
- 🩺 Diagnostics endpoints: /health, /whoami, /session

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

## ⚙️ Environment Variables

Create a .env file (optional, or set environment variables in your host):

- PORT=3210
- HOST=127.0.0.1
- MONGO_URI=your-mongodb-connection-string
- SESSION_SECRET=your-long-random-secret

The code also has safe defaults if env vars are not provided.

---

## 🚀 Setup & Run

1) Install dependencies
- npm i

2) Start the app
- npm start
- or: node src/index.js

3) Open in your browser:
- http://127.0.0.1:3210/

Health checks:
- /health -> { ok: true }
- /whoami -> request info
- /session -> current session/user snapshot (useful while testing)

---

## 🧭 Routing Overview

Pages (render EJS from public/):
- GET / -> Home (home.ejs)
- GET /home -> Home (same as /)
- GET /login -> Login page (login.ejs); redirects to / if already logged in
- POST /login -> Authenticates; regenerates session; redirects to /
- GET /signup -> Signup page (signup.ejs); redirects to / if already logged in
- POST /signup -> Creates user; redirects to /login with message
- GET /forgot-password -> Forgot page (forgot-password.ejs)
- POST /forgot-password -> Issues token and logs link to console
- GET /reset-password/:token -> Reset page (reset-password.ejs) if token valid
- POST /reset-password/:token -> Sets new password; redirects to /login
- GET /logout -> Destroys session; clears cookie; redirects to /

Static assets:
- /static/... -> served from public/

Diagnostics:
- /health, /whoami, /session

---

## 🧩 Forms & Templates

All EJS templates live in public/ and are rendered by Express:
- app.set("views", path.join(__dirname, "..", "public"));

Ensure forms use correct names:
- email for the email input
- password for the password input

Example (login.ejs form):
```bash
- <form action="/login" method="post" novalidate>
-   <input type="email" name="email" required />
-   <input type="password" name="password" required minlength="8" />
-   <button type="submit">Log in</button>
- </form>
```

Note: A body normalizer is included so common variants like Email, username, user, pass, pwd also map correctly to email/password.

---

## 🍪 Sessions

- express-session with cookie name sid
- res.locals.user is set on every request, so EJS can show user info or a Logout link:
- <% if (user) { %> Hello, <%= user.name %> | <a href="/logout">Logout</a> <% } else { %> <a href="/login">Login</a> <% } %>

Production recommendations:
- Use a persistent session store (e.g., connect-mongo) instead of default memory store.
- Set cookie.secure = true and app.set("trust proxy", 1) behind HTTPS/proxy.

---

## 🧪 Quick cURL Tests

Signup:
- curl -i -X POST http://127.0.0.1:3210/signup -d "username=demo_user&email=demo@example.com&password=secret123&termsAccepted=on"

Login:
- curl -i -X POST http://127.0.0.1:3210/login -d "email=demo@example.com&password=secret123"

Forgot Password:
- curl -i -X POST http://127.0.0.1:3210/forgot-password -d "email=demo@example.com"

Check session:
- curl -i http://127.0.0.1:3210/session

---

## 🔒 Hardening (Production)

- Use a persistent session store (connect-mongo)
- Set cookie.secure: true (requires HTTPS)
- Set app.set("trust proxy", 1) when behind a reverse proxy (Heroku, Nginx)
- Serve only an assets folder as static:
  - app.use("/static", express.static(path.join(__dirname, "..", "public", "assets")));
  - Place CSS/JS/images under public/assets and update your templates
- Disable x-powered-by or use helmet:
  - app.disable("x-powered-by");
  - npm i helmet and app.use(helmet());

---

## 🛠 Troubleshooting

- “Clicking Login reloads login page; no redirect to home”:
  - You should see POST /login in the server logs. If you only see GET /login, your form isn’t submitting a POST.
  - Check that the submit button is inside the form and is type="submit".
  - Verify your input names are email and password (or rely on the body normalizer).
  - After submitting, check /session; you should see user populated.

- “Email validation error”:
  - Ensure the email input contains a valid address format.
  - Make sure you aren’t submitting empty inputs (client-side validation helps).

- “DB connect issues”:
  - Confirm MONGO_URI is correct and network/firewall allow access.
  - The app UI will start even if DB is down; check console for errors.

- “Reset link invalid or expired”:
  - Tokens are valid for 1 hour; request a new one from /forgot-password.

---

## 📘 Notes

- User and mongoose are imported from src/config.js which should export:
  - const User = mongoose.model("users", LoginSchema);
  - and a configured mongoose instance/connection.

- The app logs the password reset link to the console (for development). Hook an email service in production.

---

## 📄 License

MIT (or your preferred license)

---

## 🙌 Contributions

Issues and PRs are welcome. Feel free to propose improvements like:
- Session store integration
- Email delivery for reset links
- CSRF protection middleware
- Rate-limiting login attempts

Happy building! 🚀
