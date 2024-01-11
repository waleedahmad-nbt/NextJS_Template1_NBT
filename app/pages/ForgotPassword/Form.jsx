import React from 'react'

const Form = () => {
    return (
        <div>
            <main id="content" role="main" className=" mx-auto mt-20">
                <div className="mt-7 bg-white w-[570px] m-auto h-[380px] p-4 border rounded-md shadow-lg">
                    <div className="p-4 ">
                        <div className="text-start">
                            <h1 className="block text-2xl font-semibold text-gray-800">Lost your password?</h1>
                            <p className="mt-4 mb-4 text-base font-medium text-[#4B5563]">
                                Please enter your username or email address. You will receive a link to create a new password via email.

                            </p>
                        </div>

                        <div className="mt-5">
                            <form>
                                <div className="grid gap-y-4">
                                    <div>
                                        <div>
                                            <label for="Username" className="block mb-2 text-base leading-5 text-black font-medium">Username or email</label>
                                            <input type="Username" name="Username" id="Username" className="bg-transparent border border-gray-300 text-gray-900 sm:text-sm rounded-full 
                                            block w-[246px] h-[45px] p-2.5 py-3" placeholder="" required="" />
                                        </div>

                                        <p className="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
                                    </div>
                                    <button type="submit" className="text-sm hover:scale-105 duration-300 focus:ring-4 focus:outline-none
                                     bg-black text-white font-semibold mt-6 rounded-full px-5 py-3 text-center ">RESET PASSWORD</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    )
}

export default Form
