# 🔐 Next-Auth Authentication App

Live Demo:  
👉 https://next-auth-nine-vert.vercel.app

A production-ready authentication system built with **Next.js**, **NextAuth.js**, **TypeScript**, and **Tailwind CSS**.  
The project demonstrates secure authentication, protected routes, and global user state management.

---

## 🚀 Features

- Email & Password Authentication
- Protected Routes (redirect unauthenticated users)
- Global Auth State using Context API
- Built with Next.js App Router
- Fully responsive UI using Tailwind CSS
- Clean and scalable project structure
- Logout functionality with session cleanup
- Ready for deployment on Vercel

---

## 🛠️ Tech Stack

- **Next.js**
- **React**
- **NextAuth.js**
- **TypeScript**
- **Tailwind CSS**
- **Vercel (Deployment)**

---

## 📁 Project Structure

├── app/
│   ├── login/
│   ├── register/
│   ├── verify/
│   ├── dashboard/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── UI and layout
│   └── form & auth components
├── context/
│   └── UserContext.tsx
├── lib/
│   ├── auth utilities
│   └── fetch/api helpers
├── public/
│   └── assets & icons
├── types/
│   └── TypeScript global types
├── next.config.ts
├── package.json
├── tailwind.config.js
└── README.md



---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/YousefAboschwaly/Next-Auth.git
cd Next-Auth

2️⃣ Install dependencies

npm install
# or
pnpm install
# or
yarn

