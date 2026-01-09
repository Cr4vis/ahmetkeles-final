const siteData = {
    personal: {
        name: "Ahmet Keles",
        title: "Creative Director | 3D Motion",
        location: "London, UK",
        email: "hi@ahmetkeles.co.uk"
    },
    
    // TAM EKRAN AKACAK VİDEOLAR (SCROLL SNAP)
    heroProjects: [
        {
            id: 1,
            title: "Showreel 2026",
            subtitle: "Cinema 4D / Redshift",
            video: "images/04-Showreel2024-AhmetKELES-Slider.mp4",
            downloadUrl: "images/04-Showreel2024-AhmetKELES-Slider.mp4"
        },
        {
            id: 2,
            title: "PS5 Charger",
            subtitle: "Cinema 4D / Redshift",
            video: "images/03-Ps5chargerDock_F2.mp4",
            downloadUrl: "images/03-Ps5chargerDock_F2.mp4"
        },
        {
            id: 3,
            title: "NIKE",
            subtitle: "Cinema 4D / Redshift",
            video: "images/110-2.mp4",
            downloadUrl: "images/110-2.mp4"
        }
    ],

    // EN ALTTA IZGARA ŞEKLİNDE DURACAK VİDEOLAR
    gridProjects: [
        {
            title: "Fashion Film",
            category: "Commercial",
            video: "images/113-Prada_vid_0001.mp4",
            image: "images/grid1.jpg"
        },
        {
            title: "Product Render",
            category: "3D Design",
            video: "images/112-Xptorso_Vid_0001_r.mp4",
            image: "images/grid2.jpg"
        },
        {
            title: "Logo Animation",
            category: "Motion Graphics",
            video: "images/122-Bowl_Vid_02.mp4",
            image: "images/grid3.jpg"
        },
        {
            title: "Character Design",
            category: "Concept Art",
            video: "images/114-Vid_03.mp4",
            image: "images/grid4.jpg"
        }
    ], // <--- İŞTE KRİTİK VİRGÜL BURADA OLMALIYDI (Ekledim)

    photography: [
        {
            id: "fashion",
            title: "Fashion",
            cover: "images/fashion_cover.jpg",
            photos: [
                "images/DSC_0179.jpg", 
                "images/DSC_0100.jpg", 
                "images/DSC_1570.jpg",
                "images/DSC_3624.jpg"
            ]
        },
        {
            id: "architecture",
            title: "Architecture",
            cover: "images/arch_cover.jpg",
            photos: [
                "images/Bodrum-Palace_5.jpg", 
                "images/DSC_9486-HDR.jpg", 
                "images/DSC_9867-HDR.jpg"
            ]
        },
        {
            id: "food",
            title: "FOOD",
            cover: "images/Cravis-Studio-Kara-Fırın-DSC0705_1200x801.jpg",
            photos: [
                "images/Cravis-Studio-Kara-Fırın-DSC0355_801x1200.jpg", 
                "images/Cravis-Studio-Kara-Fırın-DSC0421_1200x801.jpg", 
                "images/Cravis-Studio-Kara-Fırın-DSC0457_1200x801.jpg",
		"images/Cravis-Studio-Kara-Fırın-DSC0570_1200x801.jpg",
		"images/Cravis-Studio-Kara-Fırın-DSC0662_1200x801.jpg",
		"images/Cravis-Studio-Kara-Fırın-DSC0683_801x1200.jpg",
		"images/Cravis-Studio-Kara-Fırın-DSC0705_1200x801.jpg"
            ]
        },
        {
            id: "product",
            title: "Product",
            cover: "images/product_cover.jpg",
            photos: [
                "images/DSC_9103.jpg", 
                "images/DSC_8296.jpg"
            ]
        }
    ]
};