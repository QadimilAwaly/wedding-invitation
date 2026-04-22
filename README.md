# Modern Wedding Invitation - Easy to Customize

A stunning, modern wedding invitation website with elegant design and easy configuration system.

## ? New Features

### Easy Configuration System
- **Single Config File**: Edit `config.js` to customize everything
- **Dynamic Content**: All text, images, and dates loaded from configuration
- **Theme Customization**: Change colors instantly with CSS variables
- **No Code Required**: Simply update the configuration object

### Modern Elegant Design
- **Premium UI Components**: Floating navigation, cards, timelines
- **Advanced Animations**: Smooth scroll effects, parallax, micro-interactions
- **Responsive Layout**: Perfect on desktop, tablet, and mobile
- **Professional Typography**: Google Fonts with elegant hierarchy

### Enhanced Features
- **Interactive Gallery**: Lightbox with keyboard navigation
- **Advanced RSVP**: Form validation with loading states
- **Countdown Timer**: Real-time updates with animations
- **Google Maps Integration**: Embedded maps with directions
- **Social Sharing**: Native share API and clipboard fallback
- **Music Player**: Background music toggle (optional)
- **Print Support**: Optimized print styles
- **PWA Ready**: Service worker support

## ? Quick Start

### 1. Open the Modern Version
Open `index-modern.html` in your browser to see the new design.

### 2. Customize Everything
Edit `config.js` - this single file controls everything:

```javascript
const WEDDING_CONFIG = {
    couple: {
        bride: {
            name: "Your Name",
            photo: "your-photo-url.jpg",
            father: "Father's Name",
            mother: "Mother's Name"
        },
        groom: {
            name: "Partner's Name", 
            photo: "partner-photo-url.jpg",
            father: "Father's Name",
            mother: "Mother's Name"
        }
    },
    // ... all other settings
};
```

### 3. Change Theme Colors
Edit the theme section in `config.js`:

```javascript
theme: {
    primary: "#d4a574",        // Your brand color
    secondary: "#2c3e50",     // Dark accent
    accent: "#e74c3c",        // Highlight color
    background: "#faf8f5",    // Background
    text: "#333333",          // Text color
    textLight: "#666666"      // Secondary text
}
```

## ? File Structure

```
wedding-invitation/
|-- index-modern.html     # Modern HTML template
|-- style-modern.css      # Modern CSS with animations
|-- script-modern.js      # Enhanced JavaScript
|-- config.js            # Easy configuration file
|-- README-MODERN.md     # This documentation
```

## ? Configuration Options

### Basic Information
- **Couple Details**: Names, photos, parents' names
- **Wedding Date**: Automatic countdown calculation
- **Events**: Akad and reception details
- **Location**: Venue name, address, Google Maps URL

### Design Customization
- **Colors**: Primary, secondary, accent, background
- **Fonts**: Heading, body, and script fonts
- **Messages**: All text content throughout the site
- **Contact**: Phone, email, WhatsApp

### Features Toggle
```javascript
features: {
    countdown: true,    // Show countdown timer
    gallery: true,      // Photo gallery
    music: true,        // Background music
    rsvp: true,         // RSVP form
    maps: true,         // Google Maps
    print: true,        // Print functionality
    share: true         // Social sharing
}
```

## ? Advanced Customization

### Adding Custom Photos
1. Upload your photos to a hosting service
2. Update URLs in `config.js`:
```javascript
couple: {
    bride: {
        photo: "https://your-domain.com/bride-photo.jpg"
    }
}
```

### Custom Gallery Images
```javascript
gallery: {
    images: [
        "https://your-domain.com/photo1.jpg",
        "https://your-domain.com/photo2.jpg",
        // Add up to 6 photos
    ]
}
```

### Changing Wedding Date
```javascript
weddingDateTime: {
    year: 2024,
    month: 5,    // June (0-based: 0=January, 5=June)
    day: 15,
    hour: 9,
    minute: 0,
    second: 0
}
```

## ? Design Features

### Modern UI Components
- **Floating Navigation**: Sticky header with smooth scroll
- **Hero Section**: Parallax background with animated particles
- **Timeline Events**: Visual timeline for wedding events
- **Gallery Grid**: Masonry-style photo gallery
- **Interactive Cards**: Hover effects and transitions

### Premium Animations
- **Loading Screen**: Elegant entrance animation
- **Scroll Effects**: Fade-in and slide-up animations
- **Micro-interactions**: Button hovers, form focus states
- **Countdown**: Number flip animations
- **Heart Animations**: Pulsing heart effects

### Responsive Design
- **Mobile-First**: Optimized for all screen sizes
- **Touch-Friendly**: Large tap targets and gestures
- **Performance**: Optimized animations and loading
- **Accessibility**: Semantic HTML and ARIA labels

## ? Deployment

### Local Testing
```bash
# Serve the files locally
python -m http.server 8000
# Open http://localhost:8000/index-modern.html
```

### GitHub Pages
1. Upload all files to GitHub repository
2. Enable GitHub Pages
3. Set source to `main` branch
4. Your site will be live at `username.github.io/repo`

### Netlify/Vercel
1. Drag and drop the folder
2. Automatic deployment in seconds

### Custom Domain
- Point DNS to your hosting provider
- Update base URL if needed

## ? Browser Support

- **Chrome** 80+
- **Firefox** 75+
- **Safari** 13+
- **Edge** 80+
- **Mobile Safari** iOS 13+
- **Chrome Mobile** Android 8+

## ? Performance Features

- **Lazy Loading**: Images load as needed
- **Optimized Animations**: GPU-accelerated CSS
- **Minified Code**: Production-ready files
- **Service Worker**: Offline support (PWA)
- **SEO Optimized**: Meta tags and structured data

## ? Troubleshooting

### Images Not Showing
- Check photo URLs in `config.js`
- Ensure images are accessible (no CORS issues)
- Use HTTPS URLs for HTTPS sites

### Countdown Not Working
- Verify wedding date in `config.js`
- Check month value (0-based: January=0)
- Ensure browser supports JavaScript

### Maps Not Loading
- Verify Google Maps URL
- Check API key requirements
- Test in different browsers

## ? Support

For customization help or issues:
1. Check this documentation first
2. Verify `config.js` syntax
3. Test in different browsers
4. Check browser console for errors

---

## ? Quick Customization Checklist

- [ ] Edit couple names and photos in `config.js`
- [ ] Update wedding date and time
- [ ] Change venue details and Google Maps URL
- [ ] Customize theme colors
- [ ] Add your own gallery photos
- [ ] Update contact information
- [ ] Test all features and links
- [ ] Deploy to your hosting provider

**Your beautiful, modern wedding invitation is ready! ?**
