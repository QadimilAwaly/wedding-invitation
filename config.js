// WEDDING INVITATION CONFIGURATION
// Edit this file to easily customize your wedding invitation
// Susunan ini telah disesuaikan dengan urutan tampilan dari atas ke bawah.

const WEDDING_CONFIG = {
    // ==========================================
    // 1. PENGATURAN UMUM & SEO
    // ==========================================
    meta: {
        title: "Undangan Pernikahan Romeo & Juliet",
        description: "Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir di acara pernikahan kami.",
        keywords: "undangan pernikahan, wedding invitation, romeo juliet",
        author: "Romeo & Juliet",
        imageUrl: "https://via.placeholder.com/1200x630.png?text=Romeo+%26+Juliet", // Thumbnail sosmed (Rekomendasi 1200x630)
        faviconUrl: "https://via.placeholder.com/32x32.png?text=R%26J", // Ikon browser (Rekomendasi 32x32)
        url: "https://domainkamu.com"
    },

    theme: {
        primary: "#d4a574",        // Warna utama (Emas/Hangat)
        secondary: "#2c3e50",       // Warna sekunder (Biru gelap)
        accent: "#e74c3c",          // Warna aksen (Merah)
        background: "#faf8f5",     // Warna latar belakang
        text: "#333333",            // Warna teks gelap
        textLight: "#666666"        // Warna teks terang
    },

    fonts: {
        googleFontsUrl: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Lato:wght@300;400;700&family=Dancing+Script:wght@400;700&display=swap",
        heading: "'Playfair Display', serif",
        body: "'Lato', sans-serif",
        script: "'Dancing Script', cursive"
    },

    features: {
        countdown: true,  // Aktifkan/Matikan hitung mundur
        gallery: true,    // Aktifkan/Matikan galeri
        music: true,      // Aktifkan/Matikan musik
        maps: true,       // Aktifkan/Matikan Google Maps
        print: true,      // Aktifkan/Matikan tombol print
        share: true       // Aktifkan/Matikan tombol bagikan
    },

    music: {
        enabled: true,
        file: "wedding-song.mp3",
        autoplay: true,
        loop: true,
        volume: 0.5
    },

    // ==========================================
    // 2. TAMPILAN LOADING
    // ==========================================
    loading: {
        text: "Mempersiapkan undangan...",
        instruction: "Klik untuk masuk"
    },

    // ==========================================
    // 3. MENU NAVIGASI ATAS
    // ==========================================
    nav: {
        logoText: "Y & A",
        home: "Beranda",
        couple: "Mempelai",
        events: "Acara",
        gallery: "Galeri"
    },

    // ==========================================
    // 4. BAGIAN DEPAN (HERO SECTION)
    // ==========================================
    hero: {
        title: "Undangan Pernikahan",
        subtitle: "Dengan memohon rahmat dan ridho Allah SWT",
        connector: "&", // Penghubung nama (misal: & atau 'and')
        scrollText: "Scroll untuk melihat undangan"
    },

    // ==========================================
    // 5. PROFIL MEMPELAI
    // ==========================================
    couple: {
        sectionTitle: "Mempelai",
        sectionSubtitle: "Yang bersatu dalam cinta dan takwa",
        andText: "dan",
        
        bride: {
            name: "Yulia Sari Maharani",
            nickname: "Yuli",
            label: "Putri",
            photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsgCmpaVKa_WMfCY2a5fZEPpS9A8_1fhHviw&s",
            fatherLabel: "Bapak",
            father: "Ahmad Budiman",
            motherLabel: "Ibu",
            mother: "Mariam Bellayanti"
        },
        
        groom: {
            name: "Arif Sulaiman Putra",
            nickname: "Ari",
            label: "Putra",
            photo: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXf2VdxL_FIN9XLcnotVQK-7HNxazbvGkVPL5XD-NFYot1gJqiWgPUNjMRvithDQCkP_AS6QPe7eKpd73WqzhyO37BEhJpnqR350n7xjE922skbPBZhWpRUn2V8Z-fjfnrxiuS8sbA?key=fdGJFh6tNqkuqPwML1E38g",
            fatherLabel: "Bapak",
            father: "Muhammad Ali",
            motherLabel: "Ibu",
            mother: "Syifa Fauziah"
        }
    },

    // ==========================================
    // 6. KUTIPAN (QUOTE)
    // ==========================================
    quote: {
        text: "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan hidup dari jenismu sendiri supaya kamu merasa tenteram kepadanya. Dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berpikir.",
        source: "(QS. Ar-Rum: 21)"
    },

    // ==========================================
    // 7. JADWAL ACARA (EVENTS)
    // ==========================================
    events: {
        sectionTitle: "Acara Pernikahan",
        sectionSubtitle: "Turut berbahagia menyaksikan momen suci ini",
        
        akad: {
            title: "Akad Nikah",
            date: "Sabtu, 15 Juli 2026",
            time: "09:00 WITA - Selesai",
            location: "Rumah Mempelai Wanita, Martapura, Kalimantan Selatan"
        },
        resepsi: {
            title: "Resepsi",
            date: "Sabtu, 15 Agustus 2026", 
            time: "08.00 WITA - Selesai",
            location: "Rumah Mempelai Wanita, Martapura, Kalimantan Selatan"
        }
    },

    // ==========================================
    // 8. HITUNG MUNDUR (COUNTDOWN)
    // ==========================================
    countdown: {
        sectionTitle: "Hitung Mundur Menuju Hari Bahagia",
        
        targetDate: {
            year: 2026,
            month: 7, // 1-based (1 = Januari, 7 = Juli)
            day: 15,
            hour: 8,
            minute: 0,
            second: 0
        },
        
        labels: {
            days: "Hari",
            hours: "Jam",
            minutes: "Menit",
            seconds: "Detik"
        }
    },

    // ==========================================
    // 9. GALERI FOTO
    // ==========================================
    gallery: {
        sectionTitle: "Galeri",
        sectionSubtitle: "Momen-momen indah kami",
        images: [
            "https://i.pinimg.com/236x/63/9b/07/639b07f4d7aad25f6797f797cfd88898.jpg?text=Photo+1",
            "https://weddingsutra.com/wp-content/miniature_prewedding_pic6.jpg?text=Photo+2", 
            "https://miro.medium.com/v2/resize:fit:1400/1*oKzDw-4G5GpW7mMwBV0-cA.jpeg?text=Photo+3",
            "https://i.pinimg.com/736x/8a/62/14/8a6214d2e951f5a11a62515a29110a39.jpg?text=Photo+4",
            "https://i.pinimg.com/236x/71/7c/96/717c960bd62590bb063a4a68909dc0c9.jpg?text=Photo+5",
            "https://cdnpro.eraspace.com/media/.renditions/wysiwyg/artikel/Tahun_2025/September/PromptGeminiAIPolaroid-1.jpg?text=Photo+6"
        ]
    },

    // ==========================================
    // 10. LOKASI & PETA
    // ==========================================
    location: {
        sectionTitle: "Lokasi Acara",
        sectionSubtitle: "Temukan kami di sini",
        mapClickText: "Klik untuk membuka peta",
        
        venueName: "Rumah Mempelai Wanita",
        venueAddress: "JL. Batuahar No. 123, Martapura, Kalimantan Selatan",
        googleMapsUrl: "https://maps.app.goo.gl/BHarxJ2Gwq1hJ7rcA",
        directionsUrl: "https://maps.app.goo.gl/BHarxJ2Gwq1hJ7rcA",
        mapBackgroundUrl: "https://maps.googleapis.com/maps/api/staticmap?center=Jakarta&zoom=15&size=600x450&style=feature:all|element:labels|visibility:off&style=feature:water|color:0xb3d9ff&style=feature:land|color:0xf3f3f3&style=feature:road|visibility:off&style=feature:administrative|element:geometry.stroke|color:0xcccccc&key=AIzaSyDummyKey",
        
        buttons: {
            directionsText: "Petunjuk Arah",
            saveLocationText: "Simpan Lokasi"
        }
    },

    // ==========================================
    // 11. FOOTER & MEDIA SOSIAL
    // ==========================================
    footer: {
        message: "Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kedua mempelai",
        date: "15 Juli 2026",
        coupleNames: "Arif & Yulia",
        copyrightHtml: "&copy; 2026 Arif & Yulia Wedding. Dibuat dengan <i class=\"fas fa-heart\"></i> untuk hari spesial kami.",
        
        socialText: "Ikuti momen bahagia kami",
        socialHashtag: "#YuliaArifWedding",
        socialLinks: {
            instagram: "https://instagram.com/",
            facebook: "https://facebook.com/",
            twitter: "https://twitter.com/"
        }
    },

    // ==========================================
    // 12. PEMBERITAHUAN (NOTIFICATIONS / SHARE)
    // ==========================================
    notifications: {
        shareTitle: "Undangan Pernikahan",
        shareText: "Kami mengundang Anda untuk merayakan hari bahagia kami",
        linkCopiedText: "Link undangan telah disalin!",
        addressCopiedText: "Alamat lokasi telah disalin!",
        countdownFinishedText: "Hari Bahagia Telah Tiba! 🎉"
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = WEDDING_CONFIG;
}