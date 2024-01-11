import React from 'react'

const AccountDetails = () => {
    return (
        <>
            <form className="space-y-4 md:space-y-6 mt-6 flex flex-col gap-3 mx-2 sm:mx-5 md:mx-10 lg:mx-20 xl:mx-32">
                <div className='flex flex-row gap-6'>
                    <div className='w-full sm:w-1/2'>
                        <label for="Name" className="block mb-2 text-base leading-5 text-black font-light">First name *</label>
                        <input type="Name" name="Name" id="Name" className="bg-transparent  border p-2.5 h-[45px] w-full py-3
                             border-gray-300 text-gray-900 sm:text-sm rounded-full  block "
                            placeholder="" required="" />
                    </div>
                    <div className='w-full sm:w-1/2'>
                        <label for="Name" className="block mb-2 text-base leading-5 text-black font-light">Last name *</label>
                        <input type="Name" name="Name" id="Name" placeholder="" className="bg-transparent border p-2.5 w-full py-3
                             border-gray-300 text-gray-900 sm:text-sm rounded-full block" required="" />
                    </div>
                </div>
                <div>
                    <label for="Username" className="block mb-2 text-base leading-5 text-black font-light">Display name *</label>
                    <input type="Username" name="Username" id="Username" className="bg-transparent border border-gray-300 text-gray-900 sm:text-sm rounded-full 
                        block w-full h-[45px] p-2.5 py-3" placeholder="" required="" />
                    <label for="Username" className="block mb-2 text-xs text-gray-500 font-semibold leading-6">This will be how your name will be displayed in the account section and in reviews</label>
                </div>
                <div>
                    <label for="email" className="block mb-2 text-base leading-5 text-black font-light">Email address *</label>
                    <input type="email" name="email" id="email" className="bg-transparent border border-gray-300 text-gray-900 sm:text-sm rounded-full
                          block w-full p-2.5 py-3"
                        placeholder="" required="" />
                </div>
                <form className='w-full'>
                    <fieldset className="mb-6 border items-center p-5">
                        <legend className="text-base text-[#666666]  mb-2 ml-1">Password change</legend>
                        <div className="mb-5">
                            <label for="password1" className="block mb-2 text-base leading-5 text-[#666666] font-light">Current password (leave blank to leave unchanged)</label>
                            <input type="password" name="password1" id="password1" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 
          sm:text-sm rounded-full block w-full p-2.5 py-3" required />
                        </div>

                        <div className="mb-5">
                            <label for="password2" className="block mb-2 text-base leading-5 text-[#666666] font-light">New password (leave blank to leave unchanged)</label>
                            <input type="password" name="password2" id="password2" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 
          sm:text-sm rounded-full block w-full p-2.5 py-3" required />
                        </div>
                        <div className="mb-3">
                            <label for="password3" className="block mb-2 text-base leading-5 text-[#666666] font-light">Confirm new password</label>
                            <input type="password" name="password3" id="password3" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 
          sm:text-sm rounded-full block w-full p-2.5 py-3" required />
                        </div>
                    </fieldset>
                    <button className='px-5 mb-6 py-3 text-sm bg-black font-semibold text-white w-[175px] h-[45px] rounded-3xl tracking-tighter'>
                        SAVE CHANGES
                    </button>
                </form>
            </form>
        </>
    )
}

export default AccountDetails
