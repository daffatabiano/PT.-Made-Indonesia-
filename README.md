# 🏡 Frontend Test – PT Made Indonesia

A responsive, pixel-perfect implementation of a real estate marketing page using **React** and **Tailwind CSS v4.1**. Built based on a Figma design, showcasing frontend engineering skill with animation, responsive layout, and modern development practices.

---

## 📦 Project Info

- **Project Name:** `Technical Test PT Made Indonesia`
- **Framework:** [React](https://reactjs.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4.1+](https://tailwindcss.com/)
- **Icons:** [`react-icons`](https://react-icons.github.io/react-icons/)
- [`lucide-react`](https://lucide.dev/icons)

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/daffatabiano/PT.-Made-Indonesia-.git
cd PT.-Made-Indonesia-
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

### 4. Build for production

```bash
npm run build
```

### 5. Preview the production build

```bash
npm run preview
```

---

## 🛠️ Technologies Used

- React 19
- Vite 7
- React Icons
- Tailwind CSS v4.1+

---

## 🧩 Project Structure

```
src/
├── assets/            # Static files (images, icons)
├── components/        # Reusable UI components (Hero, Card, BubbleMap)
├── views/             # Page-level sections (Home, etc.)
├── utils/             # Constants & helper functions
├── styles/            # Tailwind layers & custom styles
├── App.jsx            # App root component
└── main.jsx           # Vite entry point
```

---

## 🎨 Tailwind CSS Configuration

Using **@tailwindcss/vite** (Tailwind v4.1+) without external `tailwind.config.js`. Instead, utilities and customizations are defined using inline `@layer` directives.

**Included:**
- Custom fonts: `Inter`
- Custom colors and spacing
- Utility classes via `@layer utilities`
- Tailwind’s built-in purging (tree-shaking)

---

## ✨ Features

- ✅ Pixel-perfect match from Figma design
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Hero section with animated search, stats, and CTA
- ✅ Home card carousel (with hover effects)
- ✅ Bubble map card with chat-like pointer
- ✅ Image zoom on hover (constrained inside card)
- ✅ Semantic HTML and accessible component structure
- ✅ Smooth transitions using Tailwind `transition` & `transform`
- ✅ Reusable and modular component design

---

## 📱 Responsive Breakpoints

| Device     | Width   | Status |
|------------|---------|--------|
| Mobile     | ≥ 375px | ✅     |
| Tablet     | ≥ 768px | ✅     |
| Desktop    | ≥ 1440px| ✅     |

---

## ⚡ Performance Optimization

- Tailwind JIT mode + purge enabled
- Optimized and responsive images
- Minimized dependencies
- Lazy-loaded assets when applicable
- Hardware-accelerated animations

---

## 🧠 Design Considerations

- Bubble chat pointer built with pseudo-elements for clean shape
- Used `overflow-hidden` to limit image zoom inside card bounds
- Component-based structure for reusability and readability
- Tailwind v4.1’s native utility-first workflow (no config overhead)
- Ensured text and interaction states are accessible

---

## 🌐 Live Demo

> Replace with actual link when deployed

```
🔗 pt-made-indonesia.vercel.app
```

---

## 📄 License

This project is created as part of a technical assessment for PT Made Indonesia.  
**Not intended for commercial distribution.**
