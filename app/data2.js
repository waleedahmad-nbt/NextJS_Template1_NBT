
export const ComputerandTablets = [
    {
        id: 1,
        imageSrc: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_04_1-655x655.jpg',
        hoverImage: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_04_2-655x655.jpg',
        thumbnail1: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_04_1-655x655.jpg',
        thumbnail2: "https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_04_2-655x655.jpg",
        thumbnail3: "https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_04_4-655x655.jpg",
        thumbnail4:"https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_04_3-655x655.jpg",
        category: 'Computers',
        title: 'New Product Form Lapbook Light Handlift Business Office Game Ben EDP 13.5 In – Black China',
        rating: 3,
        originalPrice: 472.90,
        discountedPrice: 450.00,
        color:'black',
    },
    {
        id: 2,
        imageSrc: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_25_1-655x655.jpg',
        hoverImage: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_25_2-655x655.jpg',
        thumbnail1:"https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_25_1-655x655.jpg",
        thumbnail2: "https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_25_2-655x655.jpg",
        thumbnail3: "https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_25_3-655x655.jpg",
        thumbnail4:"https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_25_4-655x655.jpg",
        category: 'Computers',
        title: 'Teclast F7 Plus 14.1 Inch Notebook Intel N4100 8GB RAM 256GB SSD – Platinum 8GB+256GB',
        rating: 5,
        originalPrice: 696.90,
        discountedPrice: 650.99,
        color:'White',
    },
    {
        id: 3,
        imageSrc: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_31_1-150x150.jpg',
        hoverImage: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_31_2-150x150.jpg',
        thumbnail1: "https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_31_1-655x655.jpg",
        thumbnail2: "https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_31_2-655x655.jpg",
        thumbnail3: "https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_31_3-655x655.jpg",
        thumbnail4:"https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_31_4-655x655.jpg",
        category: 'TABLETS',
        title: 'Teclast M40 10.1 Inch Android 10.0 Tablet PC UNISOC T618 Octa Core 6GB RAM 128GB ROM 4G LTE Full HD',
        rating: 5,
        originalPrice: 307.60,
        discountedPrice: 289.95,
        color:'red',
    },
    {
        id: 4,
        imageSrc:'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_13_2-655x655.jpg',
        hoverImage:'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_13_3-655x655.jpg',
        thumbnail1:"https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_13_2-655x655.jpg",
        thumbnail2:"https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_13_3-655x655.jpg",
        thumbnail3:"https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_13_1-655x655.jpg",
        thumbnail4:"https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_13_4-655x655.jpg",
        category: 'TABLETS',
        title: 'Xiaomi Mijia LCD Writing Tablet With Pen 10 13.5inch Digital Drawing Message Graphics Electronic Handwriting Pad With Pen',
        rating: 5,
        originalPrice: 25.00,
        discountedPrice: 24.00,
        color:'red',
    }
       
];


export const getComputerThumbnails = (selectedcomputerId) => {
    const selectedcomputer = ComputerandTablets.find(computer => computer.id === selectedcomputerId);

    if (!selectedcomputer) {
        return [];
    }

    const thumbnails = [
        { id: selectedcomputer.id, thumbnail: selectedcomputer.thumbnail1 },
        { id: selectedcomputer.id, thumbnail: selectedcomputer.thumbnail2 },
        { id: selectedcomputer.id, thumbnail: selectedcomputer.thumbnail3 },
        { id: selectedcomputer.id, thumbnail: selectedcomputer.thumbnail4 },
    ];

    const nonEmptyThumbnails = thumbnails.filter(thumbnail => thumbnail.thumbnail);

    return nonEmptyThumbnails;
};