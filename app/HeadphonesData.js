
export const Headphones = [
    {
        id: 1,
        imageSrc: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_18_1-655x655.jpg',
        hoverImage: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_18_2-655x655.jpg',
        thumbnail1: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_18_1-655x655.jpg',
        thumbnail2: "https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_18_2-655x655.jpg",
        thumbnail3: "https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_18_3-655x655.jpg",
        thumbnail4:"https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_18_4-655x655.jpg",
        thumbnail5:"https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_18_5-655x655.jpg",
        thumbnail6:"https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_18_6-655x655.jpg",
        category: 'FITNESS HEADPHONES',
        title: 'Cwxuan Sports Magnetic Bluetooth V4.1 Stereo Earphone With Microphone',
        rating: 3,
        originalPrice: 15.90,
        discountedPrice:15.90,
        color:'black',
    },
    {
        id: 2,
        imageSrc: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_05_5-655x655.jpeg',
        hoverImage: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_05_1-655x655.jpg',
        thumbnail1:"https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_05_5-655x655.jpeg",
        thumbnail2: "https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_05_1-655x655.jpg",
        thumbnail3: "https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_05_4-655x655.jpg",
        thumbnail4:"https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_05_2-655x655.jpeg",
        thumbnail5:"https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_05_3-655x655.jpeg",
        category: 'Fitness Headphones',
        title: 'L21 Bluetooth Earphone Wireless Earbuds 5.0 TWS Headsets Dual Earbuds Bass Sound For Huawei Xiaomi IPhone Samsung Mobile Phones',
        rating: 5,
        originalPrice: 21.91,
        discountedPrice:21.91,
        color:'White',
    },
    {
        id: 3,
        imageSrc: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_19_1-655x655.jpg',
        hoverImage: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_19_3-655x655.jpg',
        thumbnail1: "https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_19_1-655x655.jpg",
        thumbnail2: "https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_19_3-655x655.jpg",
        thumbnail3: "https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_19_2-655x655.jpg",
        thumbnail4:"https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_19_4-655x655.jpg",
        thumbnail5:"https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_19_5-655x655.jpg",
        thumbnail6:"https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_19_6-655x655.jpg",
        thumbnail7:"https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_19_7-655x655.jpg",
        category: 'Microphones',
        title: 'Kinganda BT513 Foldable Bluetooth Headphones With Mic',
        rating: 5,
        originalPrice: 79.99,
        discountedPrice: 79.99,
        color:'red',
    },
    {
        id: 4,
        imageSrc: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_12_1-655x655.jpg',
        hoverImage: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_12_2-655x655.jpg',
        thumbnail1: "https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_12_1-655x655.jpg",
        thumbnail2: "https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_12_2-655x655.jpg",
        thumbnail3: "https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_12_3-655x655.jpg",
        thumbnail4:"https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_12_4-655x655.jpg",
        category: 'Bluetooth Speakers',
        title: 'New Creative Cloth Art Home Outdoors Bluetooth Sound Box',
        rating: 5,
        originalPrice: 79.99,
        discountedPrice: 79.99,
        color:'red',
    },
        
];


export const getHeadphonesThumbnails = (selectedHeadphonesId) => {
    const selectedHeadphones= Headphones.find(Headphones => Headphones.id === selectedHeadphonesId);

    if (!selectedHeadphones) {
        return [];
    }

    const thumbnails = [
        { id: selectedHeadphones.id, thumbnail: selectedHeadphones.thumbnail1 },
        { id: selectedHeadphones.id, thumbnail: selectedHeadphones.thumbnail2 },
        { id: selectedHeadphones.id, thumbnail: selectedHeadphones.thumbnail3 },
        { id: selectedHeadphones.id, thumbnail: selectedHeadphones.thumbnail4 },
        { id: selectedHeadphones.id, thumbnail: selectedHeadphones.thumbnail5 },
        { id: selectedHeadphones.id, thumbnail: selectedHeadphones.thumbnail6 },
    ];

    const nonEmptyThumbnails = thumbnails.filter(thumbnail => thumbnail.thumbnail);

    return nonEmptyThumbnails;
};