import React from 'react'

const EmptyCart = () => {
    return (
        <>
            <div className='container mx-auto'>
                <h1 className='text-center text-4xl font-bold'>Cart</h1>

                <div className='flex flex-col text-center justify-center gap-4'>
                    <img src="https://minimog-4437.kxcdn.com/supergear/wp-content/themes/minimog/assets/woocommerce/empty-cart.png"
                        alt=""
                        className='w-[350px] h-[310px] mx-auto'
                        />
                    <h2 className='text-3xl md:text-4xl font-bold'>Your cart is currently empty.</h2>
                    <p className='text-lg text-[#666666] mx-4 md:mx-0'>You may check out all the available products and buy some in the shop.</p>
                    <button className='w-[200px] mx-auto text-md text-white font-semibold py-2.5 mt-1
                     bg-black rounded-full duration-500  hover:scale-110'>
                        RETURN TO SHOP
                    </button>
                </div>
            </div>
        </>
    )
}

export default EmptyCart
