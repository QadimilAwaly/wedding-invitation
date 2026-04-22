// WEDDING INVITATION CONFIGURATION
// Edit this file to easily customize your wedding invitation

const WEDDING_CONFIG = {
    // Couple Information
    couple: {
        bride: {
            name: "Yulia Sari",
            photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsgCmpaVKa_WMfCY2a5fZEPpS9A8_1fhHviw&s",
            father: "Ahmad Budiman",
            mother: "Mariam Bellayanti"
        },
        groom: {
            name: "Michael Johnson", 
            photo: "https://via.placeholder.com/400x400/4169e1/ffffff?text=Michael",
            father: "Bapak Robert Johnson",
            mother: "Ibu Linda Johnson"
        }
    },

    // Wedding Events
    events: {
        akad: {
            title: "Akad Nikah",
            date: "Sabtu, 15 Juni 2024",
            time: "09:00 - 11:00 WIB",
            location: "Masjid Al-Hikmah, Jakarta"
        },
        resepsi: {
            title: "Resepsi",
            date: "Sabtu, 15 Juni 2024", 
            time: "11:00 - 14:00 WIB",
            location: "Ballroom Hotel Grand Indonesia, Jakarta"
        }
    },

    // Wedding Date & Time (for countdown)
    weddingDateTime: {
        year: 2024,
        month: 5, // JavaScript months are 0-based (0 = January, 5 = June)
        day: 15,
        hour: 9,
        minute: 0,
        second: 0
    },

    // Location
    venue: {
        name: "Ballroom Hotel Grand Indonesia",
        address: "Jl. M.H. Thamrin No. 1, Jakarta Pusat, DKI Jakarta 10310",
        googleMapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sHotel%20Grand%20Indonesia!5e0!3m2!1sen!2sid!4v1234567890",
        directionsUrl: "Hotel Grand Indonesia, Jakarta"
    },

    // Theme Colors
    theme: {
        primary: "#d4a574",        // Gold/Warm color
        secondary: "#2c3e50",       // Dark blue
        accent: "#e74c3c",          // Red accent
        background: "#faf8f5",     // Cream background
        text: "#333333",            // Dark text
        textLight: "#666666"        // Light text
    },

    // Typography
    fonts: {
        heading: "'Playfair Display', serif",
        body: "'Lato', sans-serif",
        script: "'Dancing Script', cursive"
    },

    // Religious Quote
    quote: {
        text: "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan hidup dari jenismu sendiri supaya kamu merasa tenteram kepadanya. Dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berpikir.",
        source: "(QS. Ar-Rum: 21)"
    },

    // Contact Information
    contact: {
        phone: "+62 812-3456-7890",
        email: "wedding@sarahmichael.com",
        whatsapp: "+6281234567890"
    },

    // Social Media
    social: {
        instagram: "#SarahMichael2024",
        hashtag: "#SarahMichaelWedding"
    },

    // Messages
    messages: {
        header: "Dengan memohon rahmat dan ridho Allah SWT",
        invitation: "Undangan Pernikahan",
        countdownTitle: "Hitung Mundur Menuju Hari Bahagia",
        rsvpTitle: "RSVP - Konfirmasi Kehadiran",
        rsvpSubtitle: "Mohon konfirmasi kehadiran Anda",
        footer: "Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kedua mempelai"
    },

    // Gallery Images (optional)
    gallery: {
        enabled: true,
        images: [
            "https://via.placeholder.com/600x400/d4a574/ffffff?text=Photo+1",
            "https://via.placeholder.com/600x400/2c3e50/ffffff?text=Photo+2", 
            "https://via.placeholder.com/600x400/e74c3c/ffffff?text=Photo+3",
            "https://via.placeholder.com/600x400/34495e/ffffff?text=Photo+4"
        ]
    },

    // Music (optional)
    music: {
        enabled: true,
        file: "music/wedding-song.mp3",
        autoplay: false,
        loop: true
    },

    // Features
    features: {
        countdown: true,
        gallery: true,
        music: true,
        rsvp: true,
        maps: true,
        print: true,
        share: true
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = WEDDING_CONFIG;
}
