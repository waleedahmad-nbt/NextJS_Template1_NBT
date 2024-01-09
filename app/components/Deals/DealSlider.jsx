'use client';
import Image from 'next/image';
import { CiStar } from 'react-icons/ci';


const DealSlider = ({ products }) => (
    <>
        <div className='flex flex-col'>
            {products.map((product, index) => (
                <div key={index} className='flex  mx-4'>
                    {product && product.imageUrl && (
                        <Image src={product.imageUrl} alt="" width={152} height={152} />
                    )}
                    <div className='flex flex-col'>
                        <div className='flex flex-row'>
                            {Array.from({ length: product && product.rating }).map((_, starIndex) => (
                                <CiStar key={starIndex} />
                            ))}
                        </div>
                        <p className='text-base text-gray-500 hover:text-black duration-300 ease-in-out'>{product && product.category}</p>
                        <p className='text-base text-black hover:text-gray-400 font-bold'>{product && product.title}</p>
                        <div className='flex gap-4'>
                        <p className='text-[#32BDE8] text-base'>{product && product.originalPrice}</p>
                        <p className='text-[#ff4d4d] text-base'>{product && product.discountedPrice}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </>
);

export default DealSlider;
