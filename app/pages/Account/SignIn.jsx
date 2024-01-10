'use client';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const SignIn = () => {
    const [error, setError] = useState("");
    const router = useRouter();
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const onLogin = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await axios.post("/api/users/login", user);
            console.log("Login Success", response.data);
            toast.success("Login Success");
            router.push("/pages/MyAccount");
        }
        catch (error) {
            console.log("Login Failed", error.message);
            toast.error(error.message);
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (
            user.email.length > 0 &&
            user.password.length > 0
        ) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);


    return (
        <>

            <section className="bg-white  rounded-lg shadow-xl p-10 md:p-14 border h-full w-full mx-0 lg:mx-4 mt-12">
                <div className="flex flex-col">
                    <div className="md:mt-0 xl:p-0">
                        <div className=" ">
                            <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">

                                {loading ? "Processing" : "Sign In"}
                            </h1>
                            <form onSubmit={onLogin} className="space-y-4 md:space-y-6">
                                <div>
                                    <label for="email" className="block mb-2 text-sm leading-5 text-black font-semibold">Username or email *</label>
                                    <input
                                        value={user.email}
                                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-full
                                        block w-full p-2.5 py-3"
                                        placeholder=""
                                        required=""
                                    />
                                </div>
                                <div>
                                    <label for="password" className="block mb-2 text-sm leading-5 text-black font-semibold">Password *</label>
                                    <input
                                        value={user.password}
                                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder=""
                                        className="bg-gray-50 border border-gray-300 text-gray-900 
                                        sm:text-sm rounded-full block w-full p-2.5 py-3 dark:placeholder-gray-400"
                                        required=""
                                    />
                                </div>
                                <p className="text-red-600 text-[16px] mb-4">{error && error}</p>
                                <div className="flex flex-col md:flex-row space-y-2 items-start md:items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label for="remember" className="text-gray-500 dark:text-gray-300">Stay signed in</label>
                                        </div>
                                    </div>
                                    <Link href="/pages/ForgotPassword">
                                        <p className="text-sm font-medium text-primary-600 hover:underline dark:text-gray0600">Forgot your password?</p>
                                    </Link>
                                </div>
                                <button type="submit" className="hover:scale-105 duration-300 focus:ring-4
                                focus:outline-none bg-black text-white font-medium rounded-full text-lg 
                                w-full py-2 text-center ">
                                    LOGIN
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}

export default SignIn;
