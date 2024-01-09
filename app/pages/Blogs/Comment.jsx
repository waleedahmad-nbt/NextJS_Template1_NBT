import React from 'react'

const Comment = () => {
    return (
        <>
            <div className='mt-20 items-center'>
                <div className='flex flex-col text-center justify-center font-inter gap-3'>
                    <h1 className='text-3xl font-bold'>Leave a Comment</h1>
                    <p className='text-base text-[#666666] font-medium'>Your email address will not be published. Required fields are marked *</p>
                </div>


                <form action="" className='mt-20'>
                    <div className='flex flex-col md:flex-row gap-5 mb-8'>
                        <div className='w-full md:w-1/3 mb-4 md:mb-0'>
                            <input
                                type="text"
                                name="Name"
                                id="Name"
                                className="bg-transparent border p-2.5 py-3
                                border-gray-300 text-gray-900 sm:text-sm rounded-full w-full block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Name *"
                                required=""
                            />
                        </div>
                        <div className='w-full md:w-1/3 mb-4 md:mb-0'>
                            <input
                                type="email"
                                name="Email"
                                id="Email"
                                className="bg-transparent border p-2.5  py-3
                                border-gray-300 text-gray-900 sm:text-sm rounded-full w-full block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Email *"
                                required=""
                            />
                        </div>
                        <div className='w-full md:w-1/3 mb-4 md:mb-0'>
                            <input
                                type="text"
                                name="Website"
                                id="Website"
                                className="bg-transparent border p-2.5  py-3
                                border-gray-300 text-gray-900 sm:text-sm rounded-full w-full
                                 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Website"
                            />
                        </div>
                    </div>

                    <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300
                     dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                        placeholder="Comment"></textarea>

                    <div class="flex items-center mb-4 mt-6">
                        <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4  bg-transparent border-gray-300 rounded" />
                        <label for="default-checkbox" className="ms-2 text-base font-medium text-black
                         dark:text-gray-300">
                            Save my name, email, and website in this browser for the next time I comment.
                        </label>
                    </div>
                    <button type="submit" className="w-[160px] h-[42px] mb-8 flex justify-center mt-11 mx-auto hover:scale-105 duration-300 bg-black text-white font-semibold 
                    rounded-full text-base px-5 py-2 text-center ">SUBMIT</button>
                </form>

            </div>
        </>
    )
}

export default Comment;
