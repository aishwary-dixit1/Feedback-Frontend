# 💬 Feedback Collector Frontend

A modern, single-page feedback collection web application built using **React (Vite)**, styled with **Tailwind CSS**, and deployed on **Netlify**. This frontend connects seamlessly to a backend API to allow users to submit and view feedback in real-time.

## 🔥 Live Site

👉 [Visit the Live App](https://feedback-aishwary-dixit.netlify.app/)

### 🛠️ Backend Repository

👉 [feedback-backend](https://github.com/aishwary-dixit1/Feedback-Backend)

---

## ✨ Features

- 🖼️ **Clean, responsive UI** with TailwindCSS
- 🌗 **Theme toggle**: Switch between light and dark modes
- ⚡ **Real-time data updates** using Axios
- 🌀 **Loader** while fetching feedbacks
- ✅ **Form validation** (Email and required fields)
- 📋 **Admin view** to toggle and view submitted feedbacks
- 📱 **Mobile friendly** layout
- 🚀 **Deployed on Netlify**

---

## 🛠️ Tech Stack

- **Vite + React**
- **Tailwind CSS**
- **Axios** for API requests
- **Lucide React** for icons
- **React Hot Toast** for notifications
- **DaisyUI** for enhanced components

---

## 📁 Folder Structure

```
src/
├── assets
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Body.jsx
│   └── ThemeToggle.jsx
├── pages/
│   ├── FeedbackForm.jsx
│   └── FeedbackList.jsx
├── utils/
│   └── axios.js
├── App.jsx
├── main.jsx
└── .env

```

---

## 🚀 Getting Started

### Clone the repo
```bash
git clone https://github.com/aishwary-dixit1/Feedback-Frontend.git
cd feedback-frontend
```

### Install dependencies
```bash
npm install
```

### Add environment variable
#### Create a .env file
```.env
VITE_API_BASE_URL=https://your-backend-url.onrender.com
```
You can also use `https://feedback-backend-816t.onrender.com` as your backend base url.

### Run locally
```bash
npm run dev
```

---

## 🧾 Submission Requirements Covered

- ✅ React (Vite) + TailwindCSS
- ✅ Full name, email, feedback form with validation
- ✅ Submit button with loading state
- ✅ Admin View toggle
- ✅ Mobile responsiveness
- ✅ Dark/Light toggle
- ✅ Deployed on Netlify
- ✅ Footer with watermark

---

## 🧑‍💻 Developer Info

**Developed by:** Aishwary Dixit  
**Submission for:** Feedback Collector Assignment  
**Backend Repo:** [feedback-backend](https://github.com/aishwary-dixit1/Feedback-Backend)
