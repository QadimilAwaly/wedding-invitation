// Modern Wedding Invitation JavaScript
// Dynamic content loading and enhanced interactions

// Global Configuration
let CONFIG = {};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadConfiguration();
    initializeApp();
});

// Load configuration from config.js
function loadConfiguration() {
    if (typeof WEDDING_CONFIG !== 'undefined') {
        CONFIG = WEDDING_CONFIG;
        console.log('Configuration loaded successfully');
    } else {
        console.warn('Configuration not found, using defaults');
        CONFIG = getDefaultConfig();
    }
}

// Get default configuration
function getDefaultConfig() {
    return {
        couple: {
            bride: { name: "Sarah", photo: "", father: "", mother: "" },
            groom: { name: "Michael", photo: "", father: "", mother: "" }
        },
        countdown: { targetDate: { year: 2026, month: 7, day: 15, hour: 9, minute: 0, second: 0 } },
        theme: { primary: "#d4a574", secondary: "#2c3e50", accent: "#e74c3c" }
    };
}

// Initialize the application
function initializeApp() {
    // Set up loading screen with click to start
    setupLoadingScreen();
    
    // Load content from configuration
    loadContentFromConfig();
    
    // Initialize components
    initializeNavigation();
    initializeCountdown();
    initializeGallery();
    initializeLightbox();
    initializeScrollEffects();
    initializeMusic();
    initializeShare();
    initializePrint();
    initializeScrollToTop();
    
    // Apply theme colors
    applyThemeColors();
    applyThemeFonts();
    applyFeatures();
    
    console.log('Wedding invitation initialized');
}

// Set up loading screen with click interaction
function setupLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    if (!loadingScreen) return;
    
    // Make loading screen clickable
    loadingScreen.style.cursor = 'pointer';
    loadingScreen.addEventListener('click', () => {
        // Start music when user clicks (counts as user interaction)
        startMusicOnInteraction();
        
        // Hide loading screen
        loadingScreen.classList.add('hidden');
        setTimeout(() => loadingScreen.remove(), 500);
    });
    
    // Also allow keyboard interaction
    document.addEventListener('keydown', (e) => {
        if (loadingScreen && !loadingScreen.classList.contains('hidden')) {
            startMusicOnInteraction();
            loadingScreen.classList.add('hidden');
            setTimeout(() => loadingScreen.remove(), 500);
        }
    }, { once: true });
}

// Start music when user interacts
function startMusicOnInteraction() {
    if (!CONFIG.music || !CONFIG.music.enabled) return;
    
    const audioElement = document.getElementById('wedding-music');
    const musicToggle = document.getElementById('music-toggle');
    
    if (!audioElement || !musicToggle) return;
    
    // Set up audio if not already done
    if (!audioElement.src) {
        audioElement.src = CONFIG.music.file;
        audioElement.loop = CONFIG.music.loop || false;
        audioElement.volume = CONFIG.music.volume || 0.5;
    }
    
    // Play music with sound (user interaction allows this)
    audioElement.play().then(() => {
        musicToggle.innerHTML = '<i class="fas fa-pause"></i>';
        musicToggle.style.background = 'var(--accent-color)';
        console.log('Music started after user interaction');
    }).catch(err => {
        console.error('Error playing music:', err);
    });
}

// Load content from configuration
function loadContentFromConfig() {
    const setHtmlText = (id, text) => {
        const el = document.getElementById(id);
        if (el && text !== undefined && text !== null) el.innerHTML = text;
    };

    // 1. PENGATURAN UMUM & SEO
    if (CONFIG.meta) {
        const pageTitle = document.getElementById('page-title');
        if (pageTitle) pageTitle.textContent = CONFIG.meta.title;
        
        const updateMeta = (id, content) => {
            const el = document.getElementById(id);
            if (el && content) el.setAttribute('content', content);
        };
        
        updateMeta('meta-description', CONFIG.meta.description);
        updateMeta('meta-keywords', CONFIG.meta.keywords);
        updateMeta('meta-author', CONFIG.meta.author);
        
        updateMeta('og-title', CONFIG.meta.title);
        updateMeta('og-description', CONFIG.meta.description);
        updateMeta('og-image', CONFIG.meta.imageUrl);
        updateMeta('og-url', CONFIG.meta.url);
        
        updateMeta('twitter-title', CONFIG.meta.title);
        updateMeta('twitter-description', CONFIG.meta.description);
        updateMeta('twitter-image', CONFIG.meta.imageUrl);
        updateMeta('twitter-url', CONFIG.meta.url);
        
        const favicon = document.getElementById('favicon');
        if (favicon && CONFIG.meta.faviconUrl) {
            favicon.setAttribute('href', CONFIG.meta.faviconUrl);
        }
    }

    // 2. TAMPILAN LOADING
    if (CONFIG.loading) {
        setHtmlText('loading-text', CONFIG.loading.text);
        setHtmlText('loading-instruction', CONFIG.loading.instruction);
    }

    // 3. MENU NAVIGASI ATAS
    if (CONFIG.nav) {
        setHtmlText('nav-couple-names', CONFIG.nav.logoText);
        setHtmlText('nav-home', CONFIG.nav.home);
        setHtmlText('nav-couple', CONFIG.nav.couple);
        setHtmlText('nav-events', CONFIG.nav.events);
        setHtmlText('nav-gallery', CONFIG.nav.gallery);
    }

    // 4. BAGIAN DEPAN (HERO SECTION)
    if (CONFIG.hero) {
        setHtmlText('hero-title', CONFIG.hero.title);
        setHtmlText('hero-subtitle', CONFIG.hero.subtitle);
        setHtmlText('hero-ampersand', CONFIG.hero.connector);
        setHtmlText('scroll-text', CONFIG.hero.scrollText);
    }

    // 5. PROFIL MEMPELAI
    if (CONFIG.couple) {
        setHtmlText('couple-section-title', CONFIG.couple.sectionTitle);
        setHtmlText('couple-subtitle', CONFIG.couple.sectionSubtitle);
        setHtmlText('bride-and', CONFIG.couple.andText);
        setHtmlText('groom-and', CONFIG.couple.andText);
        
        if (CONFIG.couple.bride) {
            setHtmlText('hero-bride-name', CONFIG.couple.bride.nickname || CONFIG.couple.bride.name?.split(' ')[0]);
            setHtmlText('bride-name', CONFIG.couple.bride.name);
            setHtmlText('bride-title', CONFIG.couple.bride.label);
            setHtmlText('bride-father', (CONFIG.couple.bride.fatherLabel ? CONFIG.couple.bride.fatherLabel + ' ' : '') + CONFIG.couple.bride.father);
            setHtmlText('bride-mother', (CONFIG.couple.bride.motherLabel ? CONFIG.couple.bride.motherLabel + ' ' : '') + CONFIG.couple.bride.mother);
            const bridePhoto = document.getElementById('bride-photo');
            if (bridePhoto && CONFIG.couple.bride.photo) bridePhoto.src = CONFIG.couple.bride.photo;
        }
        
        if (CONFIG.couple.groom) {
            setHtmlText('hero-groom-name', CONFIG.couple.groom.nickname || CONFIG.couple.groom.name?.split(' ')[0]);
            setHtmlText('groom-name', CONFIG.couple.groom.name);
            setHtmlText('groom-title', CONFIG.couple.groom.label);
            setHtmlText('groom-father', (CONFIG.couple.groom.fatherLabel ? CONFIG.couple.groom.fatherLabel + ' ' : '') + CONFIG.couple.groom.father);
            setHtmlText('groom-mother', (CONFIG.couple.groom.motherLabel ? CONFIG.couple.groom.motherLabel + ' ' : '') + CONFIG.couple.groom.mother);
            const groomPhoto = document.getElementById('groom-photo');
            if (groomPhoto && CONFIG.couple.groom.photo) groomPhoto.src = CONFIG.couple.groom.photo;
        }
    }

    // 6. KUTIPAN (QUOTE)
    if (CONFIG.quote) {
        setHtmlText('wedding-quote', CONFIG.quote.text);
        setHtmlText('quote-source', CONFIG.quote.source);
    }

    // 7. JADWAL ACARA (EVENTS)
    if (CONFIG.events) {
        setHtmlText('events-section-title', CONFIG.events.sectionTitle);
        setHtmlText('events-subtitle', CONFIG.events.sectionSubtitle);
        
        if (CONFIG.events.akad) {
            setHtmlText('akad-title', CONFIG.events.akad.title);
            setHtmlText('akad-date', CONFIG.events.akad.date);
            setHtmlText('akad-time', CONFIG.events.akad.time);
            setHtmlText('akad-location', CONFIG.events.akad.location);
        }
        if (CONFIG.events.resepsi) {
            setHtmlText('resepsi-title', CONFIG.events.resepsi.title);
            setHtmlText('resepsi-date', CONFIG.events.resepsi.date);
            setHtmlText('resepsi-time', CONFIG.events.resepsi.time);
            setHtmlText('resepsi-location', CONFIG.events.resepsi.location);
        }
    }

    // 8. HITUNG MUNDUR (COUNTDOWN)
    if (CONFIG.countdown) {
        setHtmlText('countdown-title', CONFIG.countdown.sectionTitle);
        if (CONFIG.countdown.labels) {
            setHtmlText('label-days', CONFIG.countdown.labels.days);
            setHtmlText('label-hours', CONFIG.countdown.labels.hours);
            setHtmlText('label-minutes', CONFIG.countdown.labels.minutes);
            setHtmlText('label-seconds', CONFIG.countdown.labels.seconds);
        }
    }

    // 9. GALERI FOTO
    if (CONFIG.gallery) {
        setHtmlText('gallery-section-title', CONFIG.gallery.sectionTitle);
        setHtmlText('gallery-subtitle', CONFIG.gallery.sectionSubtitle);
        
        if (CONFIG.gallery.images) {
            const galleryImages = document.querySelectorAll('.gallery-image');
            galleryImages.forEach((img, index) => {
                if (CONFIG.gallery.images[index]) {
                    img.src = CONFIG.gallery.images[index];
                    img.alt = `Gallery ${index + 1}`;
                }
            });
        }
    }

    // 10. LOKASI & PETA
    if (CONFIG.location) {
        setHtmlText('location-section-title', CONFIG.location.sectionTitle);
        setHtmlText('location-subtitle', CONFIG.location.sectionSubtitle);
        setHtmlText('map-click-text', CONFIG.location.mapClickText);
        setHtmlText('venue-name', CONFIG.location.venueName);
        setHtmlText('venue-address', CONFIG.location.venueAddress);
        
        const venueMap = document.getElementById('venue-map');
        if (venueMap) {
            if (CONFIG.location.mapBackgroundUrl) {
                venueMap.style.backgroundImage = `url('${CONFIG.location.mapBackgroundUrl}')`;
            }
            venueMap.style.cursor = 'pointer';
            venueMap.addEventListener('click', () => {
                window.open(CONFIG.location.googleMapsUrl, '_blank');
            });
        }
        
        if (CONFIG.location.buttons) {
            setHtmlText('directions-text', CONFIG.location.buttons.directionsText);
            setHtmlText('save-location-text', CONFIG.location.buttons.saveLocationText);
        }
    }

    // 11. FOOTER & MEDIA SOSIAL
    if (CONFIG.footer) {
        setHtmlText('footer-message', CONFIG.footer.message);
        setHtmlText('footer-couple-names', CONFIG.footer.coupleNames);
        setHtmlText('footer-date', CONFIG.footer.date);
        setHtmlText('footer-copyright', CONFIG.footer.copyrightHtml);
        
        setHtmlText('social-text', CONFIG.footer.socialText);
        setHtmlText('social-hashtag', CONFIG.footer.socialHashtag);
        
        if (CONFIG.footer.socialLinks) {
            const setupSocialLink = (id, url) => {
                const el = document.getElementById(id);
                if (el) {
                    if (url) {
                        el.href = url;
                    } else {
                        el.style.display = 'none';
                    }
                }
            };
            setupSocialLink('social-instagram-link', CONFIG.footer.socialLinks.instagram);
            setupSocialLink('social-facebook-link', CONFIG.footer.socialLinks.facebook);
            setupSocialLink('social-twitter-link', CONFIG.footer.socialLinks.twitter);
        }
    }
}

// Apply theme colors
function applyThemeColors() {
    if (!CONFIG.theme) return;
    
    const root = document.documentElement;
    root.style.setProperty('--primary-color', CONFIG.theme.primary);
    root.style.setProperty('--secondary-color', CONFIG.theme.secondary);
    root.style.setProperty('--accent-color', CONFIG.theme.accent);
}

// Apply theme fonts
function applyThemeFonts() {
    if (!CONFIG.fonts) return;
    
    const root = document.documentElement;
    if (CONFIG.fonts.googleFontsUrl) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = CONFIG.fonts.googleFontsUrl;
        document.head.appendChild(link);
    }
    if (CONFIG.fonts.heading) root.style.setProperty('--font-heading', CONFIG.fonts.heading);
    if (CONFIG.fonts.body) root.style.setProperty('--font-body', CONFIG.fonts.body);
    if (CONFIG.fonts.script) root.style.setProperty('--font-script', CONFIG.fonts.script);
}

// Apply feature toggles
function applyFeatures() {
    if (!CONFIG.features) return;

    if (CONFIG.features.countdown === false) {
        const el = document.querySelector('.countdown-section');
        if (el) el.style.display = 'none';
    }
    if (CONFIG.features.gallery === false) {
        const el = document.querySelector('.gallery-section');
        if (el) el.style.display = 'none';
        const nav = document.getElementById('nav-gallery');
        if (nav && nav.parentElement) nav.parentElement.style.display = 'none';
    }
    if (CONFIG.features.music === false) {
        const el = document.getElementById('music-toggle');
        if (el) el.style.display = 'none';
    }
    if (CONFIG.features.maps === false) {
        const el = document.querySelector('.location-section');
        if (el) el.style.display = 'none';
    }
    if (CONFIG.features.print === false) {
        const el = document.getElementById('print-btn');
        if (el) el.style.display = 'none';
    }
    if (CONFIG.features.share === false) {
        const el = document.getElementById('share-btn');
        if (el) el.style.display = 'none';
    }
}

// Initialize navigation
function initializeNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 100;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Close mobile menu
                if (navMenu) navMenu.classList.remove('active');
            }
        });
    });
}

// Initialize countdown timer
function initializeCountdown() {
    if (!CONFIG.countdown?.targetDate) return;

    const target = CONFIG.countdown.targetDate;
    const weddingDate = new Date(
        target.year,
        target.month - 1, // Convert 1-12 to 0-11
        target.day,
        target.hour,
        target.minute,
        target.second
    );
    
    function updateCountdown() {
        const now = new Date();
        const timeLeft = weddingDate - now;
        
        if (timeLeft > 0) {
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
            
            updateCountdownDisplay('days', days);
            updateCountdownDisplay('hours', hours);
            updateCountdownDisplay('minutes', minutes);
            updateCountdownDisplay('seconds', seconds);
        } else {
            // Wedding day has arrived
            showCelebrationMessage();
        }
    }
    
    function updateCountdownDisplay(unit, value) {
        const element = document.getElementById(`countdown-${unit}`);
        if (element) {
            element.textContent = String(value).padStart(2, '0');
            
            // Add animation effect
            element.style.transform = 'scale(1.1)';
            setTimeout(() => {
                element.style.transform = 'scale(1)';
            }, 200);
        }
    }
    
    function showCelebrationMessage() {
        const countdownTitle = document.getElementById('countdown-title');
        if (countdownTitle) {
            countdownTitle.textContent = CONFIG.countdown?.finishedText || 'Hari Bahagia Telah Tiba! 🎉';
        }
        
        // Set all countdown values to 00
        ['days', 'hours', 'minutes', 'seconds'].forEach(unit => {
            const element = document.getElementById(`countdown-${unit}`);
            if (element) element.textContent = '00';
        });
    }
    
    // Update immediately and then every second
    updateCountdown();
    setInterval(updateCountdown, 1000);
}



// Initialize gallery
function initializeGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            openLightbox(index);
        });
    });
}

// Initialize lightbox
function initializeLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxClose = document.querySelector('.lightbox-close');
    const lightboxPrev = document.querySelector('.lightbox-prev');
    const lightboxNext = document.querySelector('.lightbox-next');
    
    let currentIndex = 0;
    const galleryImages = Array.from(document.querySelectorAll('.gallery-image'));
    
    function openLightbox(index) {
        currentIndex = index;
        const image = galleryImages[index];
        const lightboxImage = document.getElementById('lightbox-image');
        
        if (lightboxImage) {
            lightboxImage.src = image.src;
            lightboxImage.alt = image.alt;
        }
        
        if (lightbox) {
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }
    
    function closeLightbox() {
        if (lightbox) {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
    
    function navigateLightbox(direction) {
        if (direction === 'next') {
            currentIndex = (currentIndex + 1) % galleryImages.length;
        } else {
            currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        }
        
        const image = galleryImages[currentIndex];
        const lightboxImage = document.getElementById('lightbox-image');
        
        if (lightboxImage) {
            lightboxImage.style.opacity = '0';
            setTimeout(() => {
                lightboxImage.src = image.src;
                lightboxImage.alt = image.alt;
                lightboxImage.style.opacity = '1';
            }, 200);
        }
    }
    
    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if (lightboxPrev) lightboxPrev.addEventListener('click', () => navigateLightbox('prev'));
    if (lightboxNext) lightboxNext.addEventListener('click', () => navigateLightbox('next'));
    
    // Close on background click
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (lightbox && lightbox.classList.contains('active')) {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') navigateLightbox('prev');
            if (e.key === 'ArrowRight') navigateLightbox('next');
        }
    });
    
    // Make openLightbox globally available
    window.openLightbox = openLightbox;
}

// Initialize scroll effects
function initializeScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroBackground = document.querySelector('.hero-background');
        if (heroBackground) {
            heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
}

// Initialize music player
function initializeMusic() {
    if (!CONFIG.music || !CONFIG.music.enabled) return;
    
    const musicToggle = document.getElementById('music-toggle');
    const audioElement = document.getElementById('wedding-music');
    
    if (!musicToggle || !audioElement) return;
    
    // Set up audio element (but don't autoplay yet)
    audioElement.src = CONFIG.music.file;
    audioElement.loop = CONFIG.music.loop || false;
    audioElement.volume = CONFIG.music.volume || 0.5;
    
    // Toggle music on button click
    musicToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        if (audioElement.paused) {
            audioElement.play().catch(err => {
                console.error('Error playing audio:', err);
            });
            musicToggle.innerHTML = '<i class="fas fa-pause"></i>';
            musicToggle.style.background = 'var(--accent-color)';
            console.log('Music playing');
        } else {
            audioElement.pause();
            musicToggle.innerHTML = '<i class="fas fa-music"></i>';
            musicToggle.style.background = 'var(--primary-color)';
            console.log('Music paused');
        }
    });
    
    // Update button state when audio ends
    audioElement.addEventListener('ended', () => {
        musicToggle.innerHTML = '<i class="fas fa-music"></i>';
        musicToggle.style.background = 'var(--primary-color)';
    });
}

// Initialize share functionality
function initializeShare() {
    const shareBtn = document.getElementById('share-btn');
    
    if (shareBtn) {
        shareBtn.addEventListener('click', async () => {
            try {
                if (navigator.share) {
                    await navigator.share({
                        title: CONFIG.notifications?.shareTitle || 'Undangan Pernikahan',
                        text: CONFIG.notifications?.shareText || 'Kami mengundang Anda untuk merayakan hari bahagia kami',
                        url: window.location.href
                    });
                } else {
                    // Fallback: copy link to clipboard
                    copyToClipboard(window.location.href);
                    showNotification(CONFIG.notifications?.linkCopiedText || 'Link undangan telah disalin!', 'success');
                }
            } catch (error) {
                console.log('Share cancelled or failed');
            }
        });
    }
}

// Initialize print functionality
function initializePrint() {
    const printBtn = document.getElementById('print-btn');
    
    if (printBtn) {
        printBtn.addEventListener('click', () => {
            window.print();
        });
    }
}

// Initialize scroll to top
function initializeScrollToTop() {
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    
    window.addEventListener('scroll', () => {
        if (scrollToTopBtn) {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.style.opacity = '1';
                scrollToTopBtn.style.visibility = 'visible';
            } else {
                scrollToTopBtn.style.opacity = '0';
                scrollToTopBtn.style.visibility = 'hidden';
            }
        }
    });
    
    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Directions button
document.addEventListener('DOMContentLoaded', () => {
    const directionsBtn = document.getElementById('directions-btn');
    if (directionsBtn && CONFIG.location) {
        directionsBtn.addEventListener('click', () => {
            window.open(CONFIG.location.directionsUrl, '_blank');
        });
    }
    
    // Save location button
    const saveLocationBtn = document.getElementById('save-location-btn');
    if (saveLocationBtn && CONFIG.location) {
        saveLocationBtn.addEventListener('click', () => {
            copyToClipboard(CONFIG.location.venueAddress);
            showNotification(CONFIG.notifications?.addressCopiedText || 'Alamat lokasi telah disalin!', 'success');
        });
    }
});

// Copy to clipboard function
function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
        return navigator.clipboard.writeText(text);
    } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        try {
            document.execCommand('copy');
            return Promise.resolve();
        } catch (error) {
            return Promise.reject(error);
        } finally {
            textArea.remove();
        }
    }
}

// Show notification
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 25px;
        border-radius: 8px;
        color: white;
        font-weight: 600;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        word-wrap: break-word;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    `;
    
    // Set background color based on type
    switch(type) {
        case 'success':
            notification.style.background = 'linear-gradient(135deg, #27ae60, #229954)';
            break;
        case 'error':
            notification.style.background = 'linear-gradient(135deg, #e74c3c, #c0392b)';
            break;
        default:
            notification.style.background = 'linear-gradient(135deg, #3498db, #2980b9)';
    }
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Handle window resize
window.addEventListener('resize', debounce(() => {
    // Recalculate any responsive elements if needed
    console.log('Window resized');
}, 250));

// Error handling
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
});

// Service Worker registration for PWA (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}
