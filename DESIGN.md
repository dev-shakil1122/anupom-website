# Design System & Styling Guide

This document outlines the core design tokens, aesthetics, and structural styling used in the **Anupom Trading Contracting & Services W.L.L** website. It serves as a reference for any AI or developer working on the project to ensure visual consistency and maintain the established brand identity.

## 1. Color Palette

The project uses a professional, corporate blue theme to communicate trust, reliability, and engineering precision.

### Primary Colors
- **Blue (Brand Primary):** `#2B5BA8` — Used for primary buttons, highlighted text, and active states.
- **Dark Blue (Secondary):** `#1E3F7A` — Used for headings, deeper contrast elements, and the hero gradient.
- **Accent Blue:** `#4A90D9` — Used for hover effects, lighter gradients, and secondary visual elements.
- **Light Blue:** `#E8F0FC` — Used for subtle background highlights, badge backgrounds, and icon containers.

### Neutral Colors
- **White:** `#ffffff` — Primary background for cards, content blocks, and the main page.
- **Gray (Background):** `#f7f8fc` — Used for alternate section backgrounds (like About and Projects) to separate content.
- **Text (Main):** `#1a1a2e` — Dark slate/navy tone used for all standard body text for high readability without being pure black.
- **Muted Text:** `#6b7280` — Used for secondary text, subtitles, and descriptions.
- **Border:** `#e2e8f0` — Used for card borders, dividers, and subtle line separations.

## 2. Typography

The design relies on clean, modern, and highly readable system fonts.

- **Font Family:** `'Segoe UI', system-ui, sans-serif`
- **Headings (`h1`, `h2`, `h3`):** Heavy font weights (`700`, `800`) using the `--dark` or `--white` colors.
- **Body Text:** Font weight `400` or `500` with the `--text` or `--muted` colors.
- **Hero Title:** Scales dynamically using `clamp(32px, 4.5vw, 56px)` for optimal responsiveness.

## 3. UI Elements & Shapes

### Borders & Rounding
- **Standard Border Radius:** `6px` or `8px` for buttons and small interactive elements.
- **Card Border Radius:** `12px`, `14px`, or `16px` for larger structural elements (Services cards, About grids, Project thumbnails).
- **Circular Elements:** `50%` radius for logo wrappers and background pulse rings.

### Buttons & Call-to-Actions (CTAs)
- **Primary Button:** Solid white background with `--blue` text (on dark hero) or `--blue` background with white text (on light backgrounds). Includes a subtle shadow `box-shadow: 0 4px 20px rgba(0, 0, 0, .15)`.
- **Outline Button:** Transparent background with a `1.5px solid rgba(255, 255, 255, .5)` border, which turns solid white on hover.
- **Hover States:** Elements typically translate upward by `2px` or `5px` (`transform: translateY(-5px)`) to provide tactile feedback.

### Glassmorphism & Depth
- **Navigation Bar:** Uses glassmorphism with `background: rgba(255, 255, 255, 0.97)` and `backdrop-filter: blur(12px)`.
- **Hero Badges/Floating Elements:** Uses semi-transparent white backgrounds with `backdrop-filter: blur(6px)` to stand out against the deep blue gradient.

## 4. Layout & Spacing

- **Container Width:** Constrained to a maximum of `1200px` (`max-width: 1200px`) and centered using `margin: 0 auto`.
- **Section Padding:** Standard vertical padding is `90px` and horizontal padding is `5%` (`padding: 90px 5%`).
- **Grids:** Utilizes CSS Grid (`grid-template-columns: 1fr 1fr` or `repeat(3, 1fr)`) with gaps of `16px` to `70px` depending on the component's density.

## 5. Animations & Visual Effects

The site leverages pure CSS animations to create a dynamic, premium feel:
- **3D Building (Hero):** A custom CSS 3D illustration constructed with `transform-style: preserve-3d` and `perspective: 800px`, rotating continuously (`buildingSpin`).
- **Floating Shapes:** Subtle background elements that float upward (`floatUp`) to add life to the hero section.
- **Pulse Rings:** Expanding circular rings (`pulseRing`) behind the 3D building to draw focus.
- **Hover Transitions:** Most interactive elements use `transition: .3s` or `.4s` for smooth state changes (color, shadow, transform).
