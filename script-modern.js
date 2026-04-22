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
        weddingDateTime: { year: 2024, month: 5, day: 15, hour: 9, minute: 0, second: 0 },
        theme: { primary: "#d4a574", secondary: "#2c3e50", accent: "#e74c3c" }
    };
}

// Initialize the application
function initializeApp() {
    // Hide loading screen
    setTimeout(() => {
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            loadingScreen.classList.add('hidden');
            setTimeout(() => loadingScreen.remove(), 500);
        }
    }, 1500);

    // Load content from configuration
    loadContentFromConfig();
    
    // Initialize components
    initializeNavigation();
    initializeCountdown();
    initializeRSVP();
    initializeGallery();
    initializeLightbox();
    initializeScrollEffects();
    initializeMusic();
    initializeShare();
    initializePrint();
    initializeScrollToTop();
    
    // Apply theme colors
    applyThemeColors();
    
    console.log('Wedding invitation initialized');
}

// Load content from configuration
function loadContentFromConfig() {
    // Page title
    const pageTitle = document.getElementById('page-title');
    if (pageTitle && CONFIG.messages) {
        pageTitle.textContent = `${CONFIG.couple.bride.name} & ${CONFIG.couple.groom.name} Wedding`;
    }

    // Hero section
    updateHeroContent();
    
    // Couple section
    updateCoupleContent();
    
    // Events section
    updateEventsContent();
    
    // Quote section
    updateQuoteContent();
    
    // Location section
    updateLocationContent();
    
    // RSVP section
    updateRSVPContent();
    
    // Footer
    updateFooterContent();
}

// Update hero content
function updateHeroContent() {
    const heroTitle = document.getElementById('hero-title');
    const heroSubtitle = document.getElementById('hero-subtitle');
    const heroBrideName = document.getElementById('hero-bride-name');
    const heroGroomName = document.getElementById('hero-groom-name');
    
    if (heroTitle && CONFIG.messages) heroTitle.textContent = CONFIG.messages.invitation || 'Undangan Pernikahan';
    if (heroSubtitle && CONFIG.messages) heroSubtitle.textContent = CONFIG.messages.header || 'Dengan memohon rahmat dan ridho Allah SWT';
    if (heroBrideName && CONFIG.couple.bride) heroBrideName.textContent = CONFIG.couple.bride.name.split(' ')[0];
    if (heroGroomName && CONFIG.couple.groom) heroGroomName.textContent = CONFIG.couple.groom.name.split(' ')[0];
}

// Update couple content
function updateCoupleContent() {
    // Bride
    const brideName = document.getElementById('bride-name');
    const bridePhoto = document.getElementById('bride-photo');
    const brideFather = document.getElementById('bride-father');
    const brideMother = document.getElementById('bride-mother');
    
    if (brideName && CONFIG.couple.bride) brideName.textContent = CONFIG.couple.bride.name;
    if (bridePhoto && CONFIG.couple.bride) bridePhoto.src = CONFIG.couple.bride.photo;
    if (brideFather && CONFIG.couple.bride) brideFather.textContent = CONFIG.couple.bride.father;
    if (brideMother && CONFIG.couple.bride) brideMother.textContent = CONFIG.couple.bride.mother;
    
    // Groom
    const groomName = document.getElementById('groom-name');
    const groomPhoto = document.getElementById('groom-photo');
    const groomFather = document.getElementById('groom-father');
    const groomMother = document.getElementById('groom-mother');
    
    if (groomName && CONFIG.couple.groom) groomName.textContent = CONFIG.couple.groom.name;
    if (groomPhoto && CONFIG.couple.groom) groomPhoto.src = CONFIG.couple.groom.photo;
    if (groomFather && CONFIG.couple.groom) groomFather.textContent = CONFIG.couple.groom.father;
    if (groomMother && CONFIG.couple.groom) groomMother.textContent = CONFIG.couple.groom.mother;
}

// Update events content
function updateEventsContent() {
    if (!CONFIG.events) return;
    
    // Akad
    const akadTitle = document.getElementById('akad-title');
    const akadDate = document.getElementById('akad-date');
    const akadTime = document.getElementById('akad-time');
    const akadLocation = document.getElementById('akad-location');
    
    if (akadTitle) akadTitle.textContent = CONFIG.events.akad.title;
    if (akadDate) akadDate.textContent = CONFIG.events.akad.date;
    if (akadTime) akadTime.textContent = CONFIG.events.akad.time;
    if (akadLocation) akadLocation.textContent = CONFIG.events.akad.location;
    
    // Resepsi
    const resepsiTitle = document.getElementById('resepsi-title');
    const resepsiDate = document.getElementById('resepsi-date');
    const resepsiTime = document.getElementById('resepsi-time');
    const resepsiLocation = document.getElementById('resepsi-location');
    
    if (resepsiTitle) resepsiTitle.textContent = CONFIG.events.resepsi.title;
    if (resepsiDate) resepsiDate.textContent = CONFIG.events.resepsi.date;
    if (resepsiTime) resepsiTime.textContent = CONFIG.events.resepsi.time;
    if (resepsiLocation) resepsiLocation.textContent = CONFIG.events.resepsi.location;
}

// Update quote content
function updateQuoteContent() {
    const weddingQuote = document.getElementById('wedding-quote');
    const quoteSource = document.getElementById('quote-source');
    
    if (weddingQuote && CONFIG.quote) weddingQuote.textContent = CONFIG.quote.text;
    if (quoteSource && CONFIG.quote) quoteSource.textContent = CONFIG.quote.source;
}

// Update location content
function updateLocationContent() {
    if (!CONFIG.venue) return;
    
    const venueMap = document.getElementById('venue-map');
    const venueName = document.getElementById('venue-name');
    const venueAddress = document.getElementById('venue-address');
    
    if (venueMap) venueMap.src = CONFIG.venue.googleMapsUrl;
    if (venueName) venueName.textContent = CONFIG.venue.name;
    if (venueAddress) venueAddress.textContent = CONFIG.venue.address;
}

// Update RSVP content
function updateRSVPContent() {
    const rsvpTitle = document.getElementById('rsvp-title');
    const rsvpSubtitle = document.getElementById('rsvp-subtitle');
    const contactPhone = document.getElementById('contact-phone');
    const contactEmail = document.getElementById('contact-email');
    const contactWhatsapp = document.getElementById('contact-whatsapp');
    
    if (rsvpTitle && CONFIG.messages) rsvpTitle.textContent = CONFIG.messages.rsvpTitle || 'RSVP';
    if (rsvpSubtitle && CONFIG.messages) rsvpSubtitle.textContent = CONFIG.messages.rsvpSubtitle || 'Mohon konfirmasi kehadiran';
    if (contactPhone && CONFIG.contact) contactPhone.textContent = CONFIG.contact.phone;
    if (contactEmail && CONFIG.contact) contactEmail.textContent = CONFIG.contact.email;
    if (contactWhatsapp && CONFIG.contact) contactWhatsapp.textContent = CONFIG.contact.whatsapp;
}

// Update footer content
function updateFooterContent() {
    const footerMessage = document.getElementById('footer-message');
    const footerCoupleNames = document.getElementById('footer-couple-names');
    const socialHashtag = document.getElementById('social-hashtag');
    
    if (footerMessage && CONFIG.messages) footerMessage.textContent = CONFIG.messages.footer;
    if (footerCoupleNames && CONFIG.couple) {
        footerCoupleNames.textContent = `${CONFIG.couple.bride.name.split(' ')[0]} & ${CONFIG.couple.groom.name.split(' ')[0]}`;
    }
    if (socialHashtag && CONFIG.social) socialHashtag.textContent = CONFIG.social.hashtag;
}

// Apply theme colors
function applyThemeColors() {
    if (!CONFIG.theme) return;
    
    const root = document.documentElement;
    root.style.setProperty('--primary-color', CONFIG.theme.primary);
    root.style.setProperty('--secondary-color', CONFIG.theme.secondary);
    root.style.setProperty('--accent-color', CONFIG.theme.accent);
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
    if (!CONFIG.weddingDateTime) return;
    
    const weddingDate = new Date(
        CONFIG.weddingDateTime.year,
        CONFIG.weddingDateTime.month,
        CONFIG.weddingDateTime.day,
        CONFIG.weddingDateTime.hour,
        CONFIG.weddingDateTime.minute,
        CONFIG.weddingDateTime.second
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
            countdownTitle.textContent = 'Hari Bahagia Telah Tiba! ?';
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

// Initialize RSVP form
function initializeRSVP() {
    const form = document.getElementById('rsvp-form');
    if (!form) return;
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(form);
        const data = {
            name: formData.get('name'),
            phone: formData.get('phone'),
            attendance: formData.get('attendance'),
            guests: formData.get('guests'),
            message: formData.get('message')
        };
        
        // Validate form
        if (!validateRSVPForm(data)) return;
        
        // Show loading state
        const submitBtn = form.querySelector('.btn-submit');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mengirim...';
        submitBtn.disabled = true;
        
        try {
            // Simulate API call (replace with actual API endpoint)
            await simulateRSVPSubmission(data);
            
            // Show success message
            showNotification('RSVP Anda telah diterima. Terima kasih!', 'success');
            
            // Reset form
            form.reset();
            
        } catch (error) {
            showNotification('Terjadi kesalahan. Silakan coba lagi.', 'error');
        } finally {
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });
}

// Validate RSVP form
function validateRSVPForm(data) {
    if (!data.name || !data.phone || !data.attendance || !data.guests) {
        showNotification('Mohon lengkapi semua field yang wajib diisi', 'error');
        return false;
    }
    
    if (data.phone.length < 10) {
        showNotification('Nomor telepon tidak valid', 'error');
        return false;
    }
    
    return true;
}

// Simulate RSVP submission
function simulateRSVPSubmission(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('RSVP Data:', data);
            resolve();
        }, 1500);
    });
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
    const musicToggle = document.getElementById('music-toggle');
    let isPlaying = false;
    
    if (musicToggle) {
        musicToggle.addEventListener('click', () => {
            isPlaying = !isPlaying;
            
            if (isPlaying) {
                musicToggle.innerHTML = '<i class="fas fa-pause"></i>';
                musicToggle.style.background = 'var(--accent-color)';
                // Start playing music (implement actual music playback)
                console.log('Music playing');
            } else {
                musicToggle.innerHTML = '<i class="fas fa-music"></i>';
                musicToggle.style.background = 'var(--primary-color)';
                // Pause music
                console.log('Music paused');
            }
        });
    }
}

// Initialize share functionality
function initializeShare() {
    const shareBtn = document.getElementById('share-btn');
    
    if (shareBtn) {
        shareBtn.addEventListener('click', async () => {
            try {
                if (navigator.share) {
                    await navigator.share({
                        title: 'Undangan Pernikahan',
                        text: 'Kami mengundang Anda untuk merayakan hari bahagia kami',
                        url: window.location.href
                    });
                } else {
                    // Fallback: copy link to clipboard
                    copyToClipboard(window.location.href);
                    showNotification('Link undangan telah disalin!', 'success');
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
    if (directionsBtn && CONFIG.venue) {
        directionsBtn.addEventListener('click', () => {
            const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(CONFIG.venue.directionsUrl)}`;
            window.open(url, '_blank');
        });
    }
    
    // Save location button
    const saveLocationBtn = document.getElementById('save-location-btn');
    if (saveLocationBtn && CONFIG.venue) {
        saveLocationBtn.addEventListener('click', () => {
            copyToClipboard(CONFIG.venue.address);
            showNotification('Alamat lokasi telah disalin!', 'success');
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
