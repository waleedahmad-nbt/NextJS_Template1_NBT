
export const TvBox = [
    {
        id: 1,
        imageSrc: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_14_2-655x655.jpg',
        hoverImage: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_14_3-655x655.jpg',
        thumbnail1: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_14_2-655x655.jpg',
        thumbnail2: "https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_14_3-655x655.jpg",
        thumbnail3: "https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_14_1-655x655.jpg",
        category: 'Tv Box',
        title: 'Global Version Mi TV Stick Android TV 9.0 Smart 2K HDR 1GB RAM 8GB ROM Bluetooth 4.2 Mini TV Dongle',
        rating: 3,
        originalPrice: 21.99,
        discountedPrice:21.99,
        color:'black',
    },
    {
        id: 2,
        imageSrc: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_15_1-655x655.jpg',
        hoverImage: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_15_2-655x655.jpg',
        thumbnail1:"https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_15_1-655x655.jpg",
        thumbnail2: "https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_15_2-655x655.jpg",
        thumbnail3: "https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_15_3-655x655.jpg",
        thumbnail4:"https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_15_4-655x655.jpg",
        category: 'Tv Box',
        title: 'MECOOL KH3 Android 10.0 Smart 4K 60fps TV Box – Black 2GB RAM + 16GB ROM',
        rating: 5,
        originalPrice: 41.82,
        discountedPrice:41.82,
        color:'White',
    },
    {
        id: 3,
        imageSrc: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_20_2-655x655.jpg',
        hoverImage: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_20_1-655x655.jpg',
        thumbnail1:"https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_20_2-655x655.jpg",
        thumbnail2: "https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_20_1-655x655.jpg",
        thumbnail3: "https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_20_4-655x655.jpg",
        thumbnail4:"https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_20_3-655x655.jpg",
        category: 'Tv Box',
        title: 'T95X2 TV Box 2GB DDR4 + 16GB ROM – Black 2GB DDR4+16GB ROM',
        rating: 5,
        originalPrice: 78.79,
        discountedPrice:78.79,
        color:'White',
    }
        
];


export const getTvBoxThumbnails = (selectedTvBoxId) => {
    const selectedTvBox= TvBox.find(TvBox => TvBox.id === selectedTvBoxId);

    if (!selectedTvBox) {
        return [];
    }

    const thumbnails = [
        { id: selectedTvBox.id, thumbnail: selectedTvBox.thumbnail1 },
        { id: selectedTvBox.id, thumbnail: selectedTvBox.thumbnail2 },
        { id: selectedTvBox.id, thumbnail: selectedTvBox.thumbnail3 },
        { id: selectedTvBox.id, thumbnail: selectedTvBox.thumbnail4 },
        { id: selectedTvBox.id, thumbnail: selectedTvBox.thumbnail5 },
        { id: selectedTvBox.id, thumbnail: selectedTvBox.thumbnail6 },
    ];

    const nonEmptyThumbnails = thumbnails.filter(thumbnail => thumbnail.thumbnail);

    return nonEmptyThumbnails;
};