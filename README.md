# Modern Wedding Invitation - Fully Configurable (Serverless-Ready)

A stunning, modern wedding invitation website with an elegant design and a completely decoupled configuration system. All text, images, fonts, metadata, and features can be customized through a single configuration file without ever touching the HTML code.

## ✨ Features

### 100% Config-Driven
- **Single Config File**: Edit `config.js` to customize everything.
- **Dynamic Content**: Every single text element, image, date, and UI label is loaded from configuration.
- **Theme Customization**: Change primary colors and Google Fonts instantly.
- **SEO & Social Share Ready**: Easily configure thumbnail images, meta descriptions, and share texts for WhatsApp/Instagram.

### Modern Elegant Design
- **Premium UI Components**: Floating navigation, cards, and event timelines.
- **Advanced Animations**: Smooth scroll effects, parallax background, and micro-interactions.
- **Responsive Layout**: Perfect on desktop, tablet, and mobile.
- **Professional Typography**: Live-loading Google Fonts with elegant hierarchy.

### Functional Enhancements
- **Serverless/Static Hosting Ready**: No backend database needed. Easily deployable to GitHub Pages, Netlify, or Vercel.
- **Interactive Gallery**: Lightbox with keyboard navigation.
- **Countdown Timer**: Real-time updates with customizable labels.
- **Google Maps Integration**: Embedded static maps with directions and save-location features.
- **Social Sharing**: Native browser share API and clipboard fallback.
- **Music Player**: Background music toggle (optional).

## 🚀 Quick Start

### 1. Open the Invitation
Open `index.html` in your browser to see the design.

### 2. Customize Everything
Edit `config.js`. The file is logically grouped into 12 easy-to-read sections:

```javascript
const WEDDING_CONFIG = {
    // 1. PENGATURAN UMUM & SEO
    meta: { ... },
    theme: { ... },
    fonts: { ... },
    features: { ... },
    music: { ... },

    // 2. TAMPILAN LOADING
    loading: { ... },

    // ... [Bagian lainnya] ...
    
    // 5. PROFIL MEMPELAI
    couple: {
        bride: {
            name: "Yulia Sari Maharani",
            nickname: "Yulia",
            photo: "https://your-domain.com/bride-photo.jpg",
            // ...
        }
    }
};
```

### 3. Features Toggle
You can easily turn sections on or off inside `config.js`. The corresponding HTML sections and navigation menu items will automatically hide.

```javascript
features: {
    countdown: true,  // Aktifkan/Matikan hitung mundur
    gallery: true,    // Aktifkan/Matikan galeri
    music: true,      // Aktifkan/Matikan musik
    maps: true,       // Aktifkan/Matikan Google Maps
    print: true,      // Aktifkan/Matikan tombol print
    share: true       // Aktifkan/Matikan tombol bagikan
}
```

## 🛠️ Advanced Customization

### Changing the Countdown Date
Months are now 1-based for simplicity (1 = January, 12 = December).

```javascript
countdown: {
    targetDate: {
        year: 2026,
        month: 7, // July
        day: 15,
        hour: 8,
        minute: 0,
        second: 0
    }
}
```

### Custom Gallery Images
Add your own image URLs to the gallery array:

```javascript
gallery: {
    images: [
        "https://your-domain.com/photo1.jpg",
        "https://your-domain.com/photo2.jpg",
        // Add up to 6 photos
    ]
}
```

### Changing Theme Colors
Edit the theme section in `config.js` to match your wedding motif:

```javascript
theme: {
    primary: "#d4a574",        // Warna utama (Emas/Hangat)
    secondary: "#2c3e50",      // Warna sekunder (Biru gelap)
    accent: "#e74c3c",         // Warna aksen (Merah)
    background: "#faf8f5",     // Warna latar belakang
    text: "#333333",           // Warna teks gelap
    textLight: "#666666"       // Warna teks terang
}
```

## 📁 File Structure

```text
wedding-invitation/
|-- index.html            # Main HTML template (purely structural)
|-- style-modern.css      # CSS styling and animations
|-- script-modern.js      # JavaScript logic and dynamic injection
|-- config.js             # The single source of truth for your data
|-- README.md             # This documentation
|-- wedding-song.mp3      # Example background music
```

## 🌐 Deployment
Since the application does not rely on a backend and all content is dynamically injected via `config.js`, you can upload this entire folder to any static hosting provider like:
- **GitHub Pages**
- **Netlify**
- **Vercel**

---
**Your beautiful, modern wedding invitation is ready! 🎉**
