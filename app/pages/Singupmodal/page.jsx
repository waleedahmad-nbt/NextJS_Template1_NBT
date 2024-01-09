import React from 'react'

const page = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');

    
    const handleTogglePassword = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword);
    };
    return (
        <>
            <div
                className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center"
            >
                <div className="bg-white p-6 mt-10 rounded-md ">

                    <h3 className="text-4xl font-semibold mb-4 mt-6 text-gray-900 dark:text-white text-center">Sign Up</h3>

                    <form className="space-y-6 mt-7" action="#">
                        <div>
                            <p className='text-gray-700 text-sm items-center text-center'>Already have an account?

                                <span className='font-semibold text-base cursor-pointer'> Log in </span>

                                for free</p>
                        </div>
                        <div className='flex flex-row gap-2 mb-4 items-center text-center'>
                            <div>
                                <input type="Name" name="Name" id="Name" className="bg-gray-50 border p-2.5 w-[210px] py-3 border-gray-300 text-gray-900 sm:text-sm rounded-full  block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="First Name" required="" />
                            </div>
                            <div>
                                <input type="Name" name="Name" id="Name" placeholder="Last Name" className="bg-gray-50 border p-2.5 w-[210px] py-3 border-gray-300 text-gray-900 sm:text-sm rounded-full  block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>
                        </div>
                        <input type="Username" name="Username" id="Username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-[436px] h-[45px] p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            placeholder="Your UserName or Email" required="This field is required" />
                        <div>
                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-full block w-[436px] h-[45px] p-2.5 py-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="" required="" />
                        </div>

                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                id="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-full focus:ring-blue-500
                                     focus:border-blue-500 block w-[436px] h-[45px] p-2.5 dark:bg-gray-600 dark:border-gray-500
                                      dark:placeholder-gray-400 dark:text-white"
                                required="This field is required"
                            />
                            {/* Eye Icon for Show/Hide Password */}
                            <button
                                className="absolute top-1/2 transform -translate-y-1/2 right-6 cursor-pointer"
                                onClick={handleTogglePassword}
                            >
                                {showPassword ? (
                                    <IoEyeOff size={24} />
                                ) : (
                                    <IoEye size={24} />
                                )}
                            </button>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" type="checkbox" className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 
                                        h-4 w-4 rounded dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600
                                         dark:ring-offset-gray-800" required="" />
                                </div>
                                <div className="text-sm ml-3">
                                    <label for="remember" className="font-medium text-gray-900 dark:text-gray-300 cursor-pointer"> Stay signed in</label>
                                </div>
                            </div>
                            <a href="#" className="text-sm text-black hover:underline hover:text-gray-500">Forgot your password?</a>
                        </div>
                        <button type="submit" className="w-full text-white bg-black hover:scale-105 font-medium 
                                rounded-full text-base px-5 py-2.5 text-center">
                            SIGNUP</button>

                    </form>
                </div>

            </div>
        </>
    )
}

export default page
