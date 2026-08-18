# Luxury Islamic Wedding Invitation Template 💍

A modern, high-end, and modular wedding reception invitation template designed with an emerald & gold palette, monumental typography, interactive constellation timeline, and data-driven configuration.

![Palette](https://img.shields.io/badge/Palette-Emerald%20%26%20Gold-0c261f?style=for-the-badge)
![Tech](https://img.shields.io/badge/Tech-HTML5%20%7C%20Modular%20CSS%20%7C%20ES%20Modules-c9a24b?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-f6f0e4?style=for-the-badge)

---

## ✨ Features

- **🏰 Monumental Typography Pairing:**
  - **Marcellus:** Chiseled inscriptional serif for couple names and titles.
  - **Amiri:** Traditional Arabic calligraphy for the Bismillah and Quranic verse.
  - **Reem Kufi:** Geometric Arabic-inspired sans for architectural labels and timestamps.
  - **Cormorant Garamond (Italic):** Reserved for delicate transitional verse whispers.
  - **Lora:** Elegant, readable serif for body narratives.

- **✨ Atmospheric Visuals & Ambient Effects:**
  - Continuous drifting golden light motes.
  - Dynamic engraved relief lighting sweeps on headings.
  - Background temperature color shifts matching each section.
  - Subtle gold-leaf crackle texture overlays.

- **🗓️ Replaying Constellation Timeline:**
  - Interactive SVG connecting lines dynamically drawn between itinerary nodes.
  - Depth-of-field rack-focus animations that replay cleanly on every scroll pass.

- **📍 Embedded Google Maps & Calendar:**
  - Responsive Google Maps embed with custom emerald-tint styling.
  - Interactive magnetic pull buttons for **"Open in Google Maps"** and **"Add to Calendar"**.

- **⚙️ Central Data-Driven Customization:**
  - Change couple names, dates, parents' names, venue address, itinerary, and links in [`config/wedding-config.js`](config/wedding-config.js) without touching HTML or CSS.

- **♿ Accessibility & Performance:**
  - Full `prefers-reduced-motion` compliance.
  - Visible `:focus-visible` states.
  - Zero heavy framework dependencies — lightweight, lightning-fast static assets.

---

## 📁 Project Structure

```
website-template-01/
├── index.html                           # Clean HTML entrypoint
├── package.json                         # npm scripts & local dev server configuration
├── config/
│   └── wedding-config.js                # Central content & configuration file
├── css/
│   ├── main.css                         # Master stylesheet importing all modules
│   ├── variables.css                    # Design tokens (colors, shadows, lines)
│   ├── typography.css                   # Typography roles & engraved text styles
│   ├── animations.css                   # Keyframes, motes, and reduced-motion rules
│   └── components/
│       ├── hero.css                     # Hero arch SVG, titles, date badge
│       ├── verse.css                    # Quranic verse & whisper dividers
│       ├── invitation-card.css          # Double-bordered formal invitation card
│       ├── timeline.css                 # Timeline itinerary nodes & pulse rings
│       ├── venue-map.css                # Google Maps embed & magnetic action buttons
│       ├── closing.css                  # Rotating monogram rings & supplication
│       └── footer.css                   # Footer & designer credit line
└── js/
    ├── main.js                          # Main application entry orchestrator
    └── modules/
        ├── ambient-motes.js             # Particle generation & drift physics
        ├── scroll-reveal.js             # Depth-of-field rack-focus observer
        ├── temperature-shift.js         # Section background color transition observer
        ├── timeline-constellation.js     # SVG constellation line physics & scroll reveal
        └── magnetic-buttons.js          # Interactive magnetic button hover effects
```

---

## 🚀 Quick Start

### 1. Clone the repository
```bash
git clone https://github.com/framesbyrazeen/website-template-01.git
cd website-template-01
```

### 2. Install dependencies & run
```bash
npm install
npm start
```
Open **[http://localhost:8080](http://localhost:8080)** in your browser.

> **Alternative (No Node.js required):**  
> Simply open `index.html` directly in any modern browser, or use Python:
> ```bash
> python -m http.server 8080
> ```

---

## 🛠️ How to Customize

All event details are decoupled from the code inside **`config/wedding-config.js`**:

```javascript
window.WEDDING_CONFIG = {
  couple: {
    groom: "Imran",
    groomParents: "Mr. Yusuf & Mrs. Farida Rahman",
    bride: "Zainab Fathima",
    brideParents: "Mr. Kareem & Mrs. Naseema Kareem",
    monogram: "I & Z"
  },
  event: {
    day: "10",
    month: "October",
    year: "2026",
    dayOfWeek: "Saturday",
    timeRange: "04:00 PM – 09:00 PM IST"
  },
  venue: {
    name: "Emerald Gardens",
    address: "Green Valley, Kozhikode, Kerala",
    mapsEmbedUrl: "https://www.google.com/maps?q=11.2588,75.7804&z=15&output=embed"
  }
  // ...
};
```

---

## 👨‍🎨 Author & Credits

- Designed & Crafted by **[framesbyrazeen](https://github.com/framesbyrazeen)**
- Fonts provided via Google Fonts: *Marcellus*, *Amiri*, *Reem Kufi*, *Cormorant Garamond*, *Lora*.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
