# ⚙️ Tailwind CSS + Vite + React Setup Instructions

These steps walk you through installing and configuring Tailwind CSS in a **React + Vite** project using the official **@tailwindcss/vite** plugin.

---

## 1. 🏗️ Create Your Vite + React Project

Open your terminal and run:

```bash
npm create vite@latest all-da-smoke-app -- template react
```

- Choose React when prompted
- Choose JavaScript SWC
- Then run:
```bash
cd all-da-smoke-app
```
---

## 2. 📦 Install Tailwind CSS and the Vite Plugin

Install Tailwind CSS and the official Vite plugin:
```bash
npm install tailwindcss @tailwindcss/vite
```
---

## 3. ⚙️ Configure Vite

Edit your vite.config.js file:
```bash
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

---

## 4. 🧵 Import Tailwind in CSS

In your src/index.css (or create it if it doesn’t exist), add:
```bash
@import "tailwindcss";
```
You can also clean up any default styles here.

---

## 5. 🚀 Start the Dev Server

Run the development server:
```bash
npm run dev
```

---

## 6. 🧪 Test Tailwind in JSX

Open src/App.jsx and replace the contents with:
```bash
function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600 underline">
        Hello world!
      </h1>
    </div>
  )
}

export default App
```
You should see a styled “Hello world!” page.

---

✅ Done!

Tailwind CSS is now fully integrated with our React + Vite project using the official plugin. We’re ready to start building!