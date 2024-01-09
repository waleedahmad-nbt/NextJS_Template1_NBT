'use client';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const Dashboard = () => {
    const router = useRouter();

    const logout = async () => {
        try {
            await axios.get('/api/users/logout');
            router.push('/pages/Account');
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className="mx-4 md:mx-8">
            <p className='mb-6'>
                Hello <strong className='font-bold text-[#666666]'>muhammad asad</strong>
                (not <strong className='font-bold text-[#666666]'>muhammad asad</strong>?
                <a className='text-[#000000] text-base hover:text-[#666666] duration-300 ease-in-out font-semibold cursor-pointer' onClick={logout}>
                    Log out</a>)</p>
            <p className='font-medium text-[#666666]'>
                From your account dashboard you can view your
                <a href="#" className='text-[#000000] hover:text-[#666666] duration-300 ease-in-out'> recent orders</a>
                <span className='font-medium'> manage your  </span>
                <a href="#" className='text-[#000000] hover:text-[#666666] duration-300 ease-in-out'>
                    shipping and billing addresses</a>, and
                <a href="#" className='text-[#000000] hover:text-[#666666] duration-300 ease-in-out'> edit your password and account details</a>.
            </p>
        </div>
    );
};

export default Dashboard;
