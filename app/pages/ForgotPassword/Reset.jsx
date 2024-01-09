import React from 'react'
import { FaRegBell } from 'react-icons/fa'

const Reset = () => {
    return (
        <>
            <div className='w-[1170px] m-auto'>
                <div className='flex flex-row  p-4 bg-[#F7F7F7] m-auto mt-24 gap-3 items-center'>
                    <FaRegBell className='text-xl'/>

                    <p className='text-base font-semibold text-[#000000] break-words'>Password reset email has been sent.</p>
                </div>
                <h1 className='text-md text-[#666666] font-medium mt-8'>A password reset email has been sent to the email address on file for your account, but may take several minutes
                 to show up in your inbox. Please wait at least 10 minutes before attempting another reset.</h1>
            </div>
        </>
    )
}

export default Reset
