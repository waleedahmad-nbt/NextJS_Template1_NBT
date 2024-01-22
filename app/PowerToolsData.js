
export const PowerTools = [
    {
        id: 1,
        imageSrc: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_09_1-655x655.jpg',
        hoverImage: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_09_2-655x655.jpg',
        thumbnail1: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_09_1-655x655.jpg',
        thumbnail2: "https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_09_2-655x655.jpg",
        thumbnail3: "https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_09_3-655x655.jpg",
        thumbnail4:"https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_09_4-655x655.jpg",
        category: 'Power Tools',
        title: 'Electric Hot Melt Glue Gun Cordless Repair DIY Tool Heating Mini Glue Gun With Glue Sticks',
        rating: 3,
        originalPrice: 21.99,
        discountedPrice:21.99,
        color:'black',
    },
    {
        id: 2,
        imageSrc: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_08_1-655x655.jpg',
        hoverImage: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_08_2-655x655.jpg',
        thumbnail1:"https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_08_1-655x655.jpg",
        thumbnail2: "https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_08_2-655x655.jpg",
        thumbnail3: "https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_08_3-655x655.jpeg",
        thumbnail4:"https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_08_4-655x655.jpeg",
        category: 'Power Tools',
        title: 'GSR 120-Li Hand Drill 12V Lithium Drill Household Power Tool Screwdriver With One Battery – GSR120-LI 1Battery',
        rating: 5,
        originalPrice: 141.99,
        discountedPrice:141.99,
        color:'White',
    }
        
];


export const getPowerToolsThumbnails = (selectedPowerToolsId) => {
    const selectedPowerTools= PowerTools.find(PowerTools => PowerTools.id === selectedPowerToolsId);

    if (!selectedPowerTools) {
        return [];
    }

    const thumbnails = [
        { id: selectedPowerTools.id, thumbnail: selectedPowerTools.thumbnail1 },
        { id: selectedPowerTools.id, thumbnail: selectedPowerTools.thumbnail2 },
        { id: selectedPowerTools.id, thumbnail: selectedPowerTools.thumbnail3 },
        { id: selectedPowerTools.id, thumbnail: selectedPowerTools.thumbnail4 },
        { id: selectedPowerTools.id, thumbnail: selectedPowerTools.thumbnail5 },
        { id: selectedPowerTools.id, thumbnail: selectedPowerTools.thumbnail6 },
    ];

    const nonEmptyThumbnails = thumbnails.filter(thumbnail => thumbnail.thumbnail);

    return nonEmptyThumbnails;
};