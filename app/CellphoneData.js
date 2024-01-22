
export const CellPhone = [
    {
        id: 1,
        imageSrc: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_06_2-655x655.jpg',
        hoverImage: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_06_1-655x655.jpg',
        thumbnail1: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_06_2-655x655.jpg',
        thumbnail2: "https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_06_1-655x655.jpg",
        thumbnail3: "https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_06_3-655x655.jpg",
        thumbnail4:"https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_06_4-655x655.jpg",
        thumbnail5:"https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_06_5-655x655.jpg",
        thumbnail6:"https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_06_6-655x655.jpg",
        category: 'Dual Sim Phones',
        title: 'Global Version 6.7 Inch U Screen 5G Smartphone 12GB+512GB For Apple IPhone 13 Pro Max',
        rating: 3,
        originalPrice: 112.00,
        discountedPrice:112.00,
        color:'black',
    },
    {
        id: 2,
        imageSrc: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_21_1-655x655.jpg',
        hoverImage: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_21_2-655x655.jpg',
        thumbnail1:"https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_21_1-655x655.jpg",
        thumbnail2: "https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_21_2-655x655.jpg",
        thumbnail3: "https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_21_3-655x655.jpg",
        thumbnail4:"https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_21_4-655x655.jpg",
        category: 'Dual Sim Phones',
        title: 'Global Version Mi MIX4 Camera Face Recognition Fingerprint Unlock Phone 7.3 Inch 16GB+1T Android 12 4G/5G 48MP+72M – 8GB 512GB',
        rating: 5,
        originalPrice: 151.89,
        discountedPrice:151.89,
        color:'White',
    },
    {
        id: 3,
        imageSrc: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_03_1-655x655.jpg',
        hoverImage: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_03_2-655x655.jpg',
        thumbnail1: "https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_03_1-655x655.jpg",
        thumbnail2: "https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_03_2-655x655.jpg",
        thumbnail3: "https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_03_3-655x655.jpg",
        thumbnail4:"https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_03_4-655x655.jpg",
        category: 'Dual Sim Phones',
        title: 'Global Version Redmi Note 9 Pro 6GB RAM 64GB ROM Smartphone Mobile Phone',
        rating: 5,
        originalPrice: 280.90,
        discountedPrice: 280.90,
        color:'red',
    },
    {
        id: 4,
        imageSrc: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_30_1-655x655.jpg',
        hoverImage: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_30_2-655x655.jpg',
        thumbnail1: "https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_30_1-655x655.jpg",
        thumbnail2: "https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_30_2-655x655.jpg",
        thumbnail3: "https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_30_3-655x655.jpg",
        thumbnail4:"https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_30_4-655x655.jpg",
        category: 'FEATURED PHONES',
        title: 'UMIDIGI Power 3 6150mAh 6.53 Inch FHD+ 4GB Global Version Helio P60 64GB ROM Quad Camera Android 10 Face ID Smartphone',
        rating: 5,
        originalPrice: 219.90,
        discountedPrice: 219.90,
        color:'red',
    },
        
];


export const getCellPhoneThumbnails = (selectedCellPhoneId) => {
    const selectedCellPhone= CellPhone.find(CellPhone => CellPhone.id === selectedCellPhoneId);

    if (!selectedCellPhone) {
        return [];
    }

    const thumbnails = [
        { id: selectedCellPhone.id, thumbnail: selectedCellPhone.thumbnail1 },
        { id: selectedCellPhone.id, thumbnail: selectedCellPhone.thumbnail2 },
        { id: selectedCellPhone.id, thumbnail: selectedCellPhone.thumbnail3 },
        { id: selectedCellPhone.id, thumbnail: selectedCellPhone.thumbnail4 },
        { id: selectedCellPhone.id, thumbnail: selectedCellPhone.thumbnail5 },
        { id: selectedCellPhone.id, thumbnail: selectedCellPhone.thumbnail6 },
    ];

    const nonEmptyThumbnails = thumbnails.filter(thumbnail => thumbnail.thumbnail);

    return nonEmptyThumbnails;
};