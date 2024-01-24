'use client';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

export const Register = () => {
    const [error, setError] = useState("");
    const router = useRouter();

    const [user, setUser] = useState({
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        password: "",
    });
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const onSignUp = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await axios.post("/api/users/register", user);
            router.push("/page/MyAccount");
        }
        catch (error) {
            toast.error(error.message);
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (
            user.firstname.length > 0 &&
            user.lastname.length > 0 &&
            user.username.length > 0 &&
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
            <div className='mt-20  md:mr-6 w-full h-full'>
                <h1 className="text-2xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-2xl">
                    {loading ? "Processing" : "Sign Up"}
                </h1>
                <form onSubmit={onSignUp} className="space-y-4 md:space-y-6 mt-6 flex flex-col gap-3">
                    <div className='flex flex-col md:flex-row gap-6'>
                        <div className='w-full md:w-1/2'>
                            <label for="firstname" className="block mb-2 text-base leading-5 text-black font-medium">First name *</label>
                            <input
                                value={user.firstname}
                                onChange={(e) => setUser({ ...user, firstname: e.target.value })}
                                type="Name"
                                name="firstname"
                                id="firstname"
                                className="bg-gray-50 border p-2.5 w-full py-3
                                border-gray-300 text-gray-900 sm:text-sm rounded-full block"
                                placeholder=""
                                required=""
                            />
                        </div>
                        <div className='w-full md:w-1/2'>
                            <label for="lastname" className="block mb-2 text-base leading-5 text-black font-medium">Last name *</label>
                            <input
                                value={user.lastname}
                                onChange={(e) => setUser({ ...user, lastname: e.target.value })}
                                type="Name"
                                name="lastname"
                                id="lastname"
                                placeholder=""
                                className="bg-gray-50 border p-2.5 w-full py-3
                                border-gray-300 text-gray-900 sm:text-sm rounded-full block"
                                required=""
                            />
                        </div>
                    </div>
                    <div>
                        <label for="Username" className="block mb-2 text-base leading-5 text-black font-medium">Username *</label>
                        <input
                            value={user.username}
                            onChange={(e) => setUser({ ...user, username: e.target.value })}
                            type="Username"
                            name="Username"
                            id="Username"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-full
                            block w-full p-2.5 py-3 "
                            placeholder=""
                            required=""
                        />
                    </div>
                    <div>
                        <label for="email" className="block mb-2 text-base leading-5 text-black font-medium">Email address *</label>
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
                        <label for="password" className="block mb-2 text-base leading-5 text-black font-medium">Password *</label>
                        <input
                            value={user.password}
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                            type="password"
                            name="password"
                            id="password"
                            placeholder=""
                            className="bg-gray-50 border border-gray-300 text-gray-900
                            sm:text-sm rounded-full block w-full p-2.5 py-3"
                            required=""
                        />
                    </div>

                    <p className="text-red-600 text-[16px] mb-4">{error && error}</p>
                    <button type="submit" className="hover:scale-105 duration-300 focus:ring-4
                     focus:outline-none bg-black text-white font-medium rounded-full text-lg 
                     px-4 py-2 text-center ">
                        {buttonDisabled ? "No signup" : "Signup"}
                    </button>
                </form>
            </div>
        </>
    )
}
