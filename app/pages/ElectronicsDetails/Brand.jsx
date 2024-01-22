import React from 'react'

const Brand = () => {
    return (
        <>
            <div className='flex flex-col md:flex-row gap-10 mb-6 mx-6 md:mx-20 mt-10'>
                <img src="https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/brand-mi.png" alt=""
                    className='w-[301px] h-[140px] border-2 '
                />
                <div className='space-y-4'>
                    <h2 className='font-semibold text-xl'>Xiaomi</h2>
                    <p className='text-gray-500'>Celerisque justo condimentum est venenatis morbi mi senectus a enim vestibulum sodales placerat
                        parturient penatibus lacus vestibulum suspendisse cras parturient magnis a vestibulum. Augue ante platea consectetur velit taciti quis pulvinar egestas aliquam pharetra iaculis a dui eu euismod justo convallis.
                        Natoque a dignissim tristique a non purus a dui euismod neque mus non a adipiscing vestibulum.</p>

                </div>
            </div>
            <a href="#" className='underline mx-24 tracking-tight'>More Products</a>
        </>
    )
}

export default Brand
