# 🖼️ Product Image Gallery

A responsive **Next.js + TypeScript** E-commerce product page with thumbnails, hover effects, and a modal viewer.  
Built with **TailwindCSS** and optimized using **Next/Image** for fast performance.  

---

## ✨ Features

- 📱 **Responsive Design**  
  - Mobile: simple carousel with prev/next navigation.  
  - Desktop: interactive modal lightbox with thumbnails.  

- 🖼️ **Thumbnail Gallery**  
  - Clickable thumbnails to change the main image.  
  - Subtle **white overlay on hover**.  
  - Active thumbnail highlighted with a custom border.  

- 🔍 **Image Modal (Desktop only)**  
  - Enlarged product image display.  
  - Smooth navigation with previous/next controls.  
  - Thumbnail strip inside the modal.  

- ⚡ **Optimized Images**  
  - Uses Next.js `<Image />` for lazy loading, responsive sizing, and performance.  

---

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/) (App Router + Client Components)  
- [TypeScript](https://www.typescriptlang.org/)  
- [TailwindCSS](https://tailwindcss.com/)  
- [React Hooks](https://react.dev/) (`useState`, `useEffect`)  
- [Next/Image](https://nextjs.org/docs/api-reference/next/image)  

---

## 📂 Project Structure

├── public/
│ └── images/ # Product images & thumbnails
├── components/
│ └── Images.tsx # Main gallery component
│ └── ImageModal.tsx # Desktop modal viewer
├── pages/
│ └── index.tsx # Entry page
├── styles/
│ └── globals.css # Tailwind base styles
└── README.md


---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/abuchi-ude/product-gallery.git
cd product-gallery
```

### 2. Install dependencies
```bash
pnpm install

```

### 3. Run the development server
```bash
npm run dev
# or
yarn dev
```

### 4. Open in browser

Navigate to http://localhost:3000

---
## Customization

Replace images in public/images/ with your own product assets.

Edit Tailwind utility classes in Images.tsx for hover colors, border styles, and layout tweaks.

Adjust modal behavior in Images.tsx (controlled by isDesktop).

---

## Learning Goals & Highlights

This project helped me strengthen my frontend development skills by working with:

React component composition (separating modal/gallery logic).

State management with hooks (useState, useEffect).

Responsive design with TailwindCSS utilities.

Event handling for clicks, hovers, and modal toggling.

Next.js optimizations (next/image and static assets).

It demonstrates real-world UI patterns like product galleries found in e-commerce sites.

---

## Author

Built by Ude Maduabuchi
Frontend Developer | React ⚛️ • Next.js ▲ • TypeScript 🟦 • TailwindCSS 🌊