// WEDDING INVITATION CONFIGURATION
// Edit this file to easily customize your wedding invitation
// Susunan ini telah disesuaikan dengan urutan tampilan dari atas ke bawah.

const WEDDING_CONFIG = {
    // ==========================================
    // 1. PENGATURAN UMUM & SEO
    // ==========================================
    meta: {
        title: "Undangan Pernikahan Arif dan janah",
        description: "Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir di acara pernikahan kami.",
        keywords: "undangan pernikahan, wedding invitation, romeo juliet",
        author: "Arif dan Janah",
        imageUrl: "https://drive.google.com/file/d/1EdNsLUX6-IIC_w98IUpE1_def6PeiF7x/view?usp=drivesdk", // Thumbnail sosmed (Rekomendasi 1200x630)
        faviconUrl: "https://via.placeholder.com/32x32.png?text=R%26J", // Ikon browser (Rekomendasi 32x32)
        url: ""
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
        text: "Undangan Pernikahan Arif dan Janah",
        instruction: "Klik untuk masuk"
    },

    // ==========================================
    // 3. MENU NAVIGASI ATAS
    // ==========================================
    nav: {
        logoText: "A & J",
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
            name: "Arif Rahman.S.T",
            nickname: "Arif",
            label: "Putra",
            photo: "https://drive.google.com/file/d/1QjUeZeaR3U7N9yH5VihoUCl0blggyg9j/view?usp=drivesdk",
            fatherLabel: "Bapak",
            father: "Darlan",
            motherLabel: "Ibu",
            mother: "Fatimah ( alm )"
        },
        
        groom: {
            name: "Janah",
            nickname: "Janah",
            label: "Putri",
            photo: "https://drive.google.com/file/d/12N3Y7vp2v51QPzcgr8zcJVNQyFWrPfYA/view?usp=drivesdk",
            fatherLabel: "Bapak",
            father: "Arpawi",
            motherLabel: "Ibu",
            mother: "Hj. Saniah"
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
            date: "Jum`at, 18 September 2026",
            time: "09:00 WITA - Selesai",
            location: "KUA Babirik, Murung panti hilir, Kec. Babirik, Kab HSU, Kalimantan Selatan"
        },
        resepsi: {
            title: "Resepsi",
            date: "Minggu, 20 September 2026", 
            time: "08.00 WITA - Selesai",
            location: "Jl. Alabio Babirik, Kab. Hulu Sungai Utara, Kalimantan Selatan"
        }
    },

    // ==========================================
    // 8. HITUNG MUNDUR (COUNTDOWN)
    // ==========================================
    countdown: {
        sectionTitle: "Hitung Mundur Menuju Hari Bahagia",
        
        targetDate: {
            year: 2026,
            month: 9, // 1-based (1 = Januari, 7 = Juli)
            day: 20,
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
            "https://drive.google.com/file/d/15MsVjTWkDxthderhIdy-Xaj8xXbEBIcf/view?usp=drivesdk",
            "https://drive.google.com/file/d/1w7s3_1jlcCyBst3f2PdmsQIOA4VCJqzZ/view?usp=drivesdk", 
            "https://drive.google.com/file/d/1x9i4Jq0IYmIBYgJ6596M2PAPt7-We8R2/view?usp=drivesdk",
            "https://drive.google.com/file/d/1r5tlO1P-wVQPduIWOFweZPvvXa-yM_Fl/view?usp=drivesdk",
            "https://drive.google.com/file/d/1bU5F-mp90kPwe0CcFwvZL-nfGUyzWEtR/view?usp=drivesdk",
            "https://drive.google.com/file/d/18YxCmioOr67L_xhLSZQxRb4hSMWqSwcK/view?usp=drivesdk"
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
        venueAddress: "Jl. Alabio Babirik, Kab. Hulu Sungai Utara, Kalimantan Selatan",
        googleMapsUrl: "https://maps.app.goo.gl/pLyvFzNyXkvzpfmH7?g_st=aw",
        directionsUrl: "https://maps.app.goo.gl/pLyvFzNyXkvzpfmH7?g_st=aw",
        mapBackgroundUrl: "",
        
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
        date: "20 September 2026",
        coupleNames: "Arif & Janah",
        copyrightHtml: "&copy; 2026 Arif & Janah Wedding. Dibuat dengan <i class=\"fas fa-heart\"></i> untuk hari spesial kami.",
        
        socialText: "Ikuti momen bahagia kami",
        socialHashtag: "#ArifJeje",
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
