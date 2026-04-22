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
            name: "Arif Sulaiman", 
            photo: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXf2VdxL_FIN9XLcnotVQK-7HNxazbvGkVPL5XD-NFYot1gJqiWgPUNjMRvithDQCkP_AS6QPe7eKpd73WqzhyO37BEhJpnqR350n7xjE922skbPBZhWpRUn2V8Z-fjfnrxiuS8sbA?key=fdGJFh6tNqkuqPwML1E38g",
            father: "Bapak Muhammad Ali",
            mother: "Ibu Syifa Fauziah"
        }
    },

    // Wedding Events
    events: {
        akad: {
            title: "Akad Nikah",
            date: "Sabtu, 15 Juni 2026",
            time: "09:00 - 11:00 WIB",
            location: "Rumah Mempelai Wanita, Martapura, Kalimantan Selatan"
        },
        resepsi: {
            title: "Resepsi",
            date: "Sabtu, 15 Juni 2026", 
            time: "11:00 - 14:00 WIB",
            location: "Rumah Mempelai Wanita, Martapura, Kalimantan Selatan"
        }
    },

    // Wedding Date & Time (for countdown)
    weddingDateTime: {
        year: 2026,
        month: 5, // JavaScript months are 0-based (0 = January, 5 = June)
        day: 15,
        hour: 9,
        minute: 0,
        second: 0
    },

    // Location
    venue: {
        name: "Rumah Mempelai Wanita",
        address: "JL. Batuahar No. 123, Martapura, Kalimantan Selatan",
        googleMapsUrl: "https://maps.app.goo.gl/BHarxJ2Gwq1hJ7rcA",
        directionsUrl: "https://maps.app.goo.gl/BHarxJ2Gwq1hJ7rcA"
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
        instagram: "#QadimilAwalyWedding",
        hashtag: "#YuliaArifWedding"
    },

    // Messages
    messages: {
        header: "Dengan memohon rahmat dan ridho Allah SWT",
        invitation: "Undangan Pernikahan",
        countdownTitle: "Hitung Mundur Menuju Hari Bahagia",
        rsvpTitle: "RSVP - Konfirmasi Kehadiran",
        rsvpSubtitle: "Mohon konfirmasi kehadiran Anda",
        footer: "Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kedua mempelai",
        
        // Section Subtitles
        coupleSubtitle: "Yang bersatu dalam cinta dan takwa",
        eventsSubtitle: "Turut berbahagia menyaksikan momen suci ini",
        gallerySubtitle: "Momen-momen indah kami",
        locationSubtitle: "Temukan kami di sini",
        
        // UI Text
        scrollText: "Scroll untuk melihat undangan",
        socialText: "Ikuti momen bahagia kami",
        coupleLabel: "Putri", // or "Putra" for groom
        fatherLabel: "Bapak",
        motherLabel: "Ibu",
        andText: "dan",
        loadingText: "Mempersiapkan undangan...",
        mapClickText: "Klik untuk membuka peta"
    },
    
    // Buttons & Form Labels
    buttons: {
        directionsText: "Petunjuk Arah",
        saveLocationText: "Simpan Lokasi",
        submitRsvpText: "Kirim RSVP"
    },
    
    // Form Labels
    formLabels: {
        fullName: "Nama Lengkap *",
        phone: "Nomor Telepon *",
        attendance: "Kehadiran *",
        guestCount: "Jumlah Tamu *",
        message: "Pesan Ucapan (Opsional)",
        fullNamePlaceholder: "Masukkan nama lengkap Anda",
        phonePlaceholder: "08xx-xxxx-xxxx",
        messagePlaceholder: "Tulis pesan atau ucapan untuk kami...",
        selectAttendance: "-- Pilih Kehadiran --",
        attendanceYes: "Hadir",
        attendanceNo: "Tidak Hadir"
    },
    
    // Contact Info Labels
    contactLabels: {
        callUs: "Hubungi Kami",
        email: "Email",
        whatsapp: "WhatsApp"
    },
    
    // Footer Information
    footer: {
        date: "15 Juni 2026",
        coupleNames: "Yulia & Arif",
        copyrightText: "Dibuat dengan",
        copyrightSuffix: "untuk hari spesial kami.",
        year: 2026
    },

    // Gallery Images (optional)
    gallery: {
        enabled: true,
        images: [
            "https://i.pinimg.com/236x/63/9b/07/639b07f4d7aad25f6797f797cfd88898.jpg?text=Photo+1",
            "https://weddingsutra.com/wp-content/miniature_prewedding_pic6.jpg?text=Photo+2", 
            "https://miro.medium.com/v2/resize:fit:1400/1*oKzDw-4G5GpW7mMwBV0-cA.jpeg?text=Photo+3",
            "https://i.pinimg.com/736x/8a/62/14/8a6214d2e951f5a11a62515a29110a39.jpg?text=Photo+4",
            "https://i.pinimg.com/236x/71/7c/96/717c960bd62590bb063a4a68909dc0c9.jpg?text=Photo+5",
            "https://cdnpro.eraspace.com/media/.renditions/wysiwyg/artikel/Tahun_2025/September/PromptGeminiAIPolaroid-1.jpg?text=Photo+6"
        ]
    },

    // Music (optional)
    music: {
        enabled: true,
        file: "wedding-song.mp3",
        autoplay: true,
        loop: true,
        volume: 0.5
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
