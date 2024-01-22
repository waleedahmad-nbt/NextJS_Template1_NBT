
export const SmartWatch = [
    {
        id: 1,
        imageSrc: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_02_3-655x655.jpg',
        hoverImage: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_02_1-1-655x655.jpg',
        thumbnail1: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_02_3-655x655.jpg',
        thumbnail2: "https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_02_1-1-655x655.jpg",
        thumbnail3: "https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_02_2-1-655x655.jpg",
        thumbnail4:"https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_02_4-655x655.jpg",
        category: 'Smart Health Watch',
        title: 'Amazfit GTS 2 Mini Sports Smartwatch GPS Bluetooth 5.0 Female Cycle Tracking Smart Watch For Android IOS Phone – GTS 2 Mini SPAIN',
        rating: 3,
        originalPrice: 129.99,
        discountedPrice:129.99,
        color:'black',
    },
    {
        id: 2,
        imageSrc: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_23_1-655x655.jpg',
        hoverImage: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_23_5-655x655.jpg',
        thumbnail1:"https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_23_1-655x655.jpg",
        thumbnail2: "https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_23_5-655x655.jpg",
        thumbnail3: "https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_23_3-655x655.jpg",
        thumbnail4:"https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_23_4-655x655.jpg",
        thumbnail5:"https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_23_2-655x655.jpg",
        thumbnail6:"https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_23_6-655x655.jpg",
        category: 'Smart Health Watch',
        title: 'Fitness M3 Color Screen Smart Sport Bracelet Activity Running Tracker Heart Rate For Children Men Women Watch For IOS Android',
        rating: 5,
        originalPrice: 14.90,
        discountedPrice:14.90,
        color:'White',
    },
    {
        id: 3,
        imageSrc: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_24_3-655x655.jpg',
        hoverImage: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_24_1-655x655.jpg',
        thumbnail1: "https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_24_3-655x655.jpg",
        thumbnail2: "https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_24_1-655x655.jpg",
        thumbnail3: "https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_24_2-655x655.jpg",
        thumbnail4:"https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_24_4-655x655.jpg",
        category: 'Smart Health Watch',
        title: 'Xiaomi Mi Watch Lite GPS Bluetooth 5.1 Smart Watch Sports Fitness Heart Rate Monitor 1.4 Inch TFTLCD Screen 5 ATM Waterproof Mi Band',
        rating: 5,
        originalPrice: 79.99,
        discountedPrice: 79.99,
        color:'red',
    },
        
];


export const getWatchThumbnails = (selectedSmartWatchId) => {
    const selectedSmartWatch = SmartWatch.find(SmartWatch => SmartWatch.id === selectedSmartWatchId);

    if (!selectedSmartWatch) {
        return [];
    }

    const thumbnails = [
        { id: selectedSmartWatch.id, thumbnail: selectedSmartWatch.thumbnail1 },
        { id: selectedSmartWatch.id, thumbnail: selectedSmartWatch.thumbnail2 },
        { id: selectedSmartWatch.id, thumbnail: selectedSmartWatch.thumbnail3 },
        { id: selectedSmartWatch.id, thumbnail: selectedSmartWatch.thumbnail4 },
        { id: selectedSmartWatch.id, thumbnail: selectedSmartWatch.thumbnail5 },
        { id: selectedSmartWatch.id, thumbnail: selectedSmartWatch.thumbnail6 },
    ];

    const nonEmptyThumbnails = thumbnails.filter(thumbnail => thumbnail.thumbnail);

    return nonEmptyThumbnails;
};