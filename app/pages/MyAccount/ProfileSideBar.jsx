'use client';
import React, { useState } from 'react';
import { FaDownload, FaRegHeart } from 'react-icons/fa';
import { IoCartOutline, IoLocationOutline, IoPerson, IoSettingsOutline } from 'react-icons/io5';
import { TbLogout } from 'react-icons/tb';

const ProfileSideBar = ({ onItemClick }) => {
  const [activeItem, setActiveItem] = useState(null);


  const handleItemClick = (item) => {
    setActiveItem(item);

    if (typeof onItemClick === 'function') {
      onItemClick(item);
    }
  };



  return (
    <div className="flex flex-row py-10">
      <ul className="flex flex-col gap-2">
        <NavItem icon={<IoSettingsOutline />} label="Dashboard" onClick={() => handleItemClick('Dashboard')} isActive={activeItem === 'Dashboard'} />
        <NavItem icon={<IoCartOutline />} label="Orders" onClick={() => handleItemClick('Orders')} isActive={activeItem === 'Orders'} />
        <NavItem icon={<FaDownload />} label="Downloads" onClick={() => handleItemClick('Downloads')} isActive={activeItem === 'Downloads'} />
        <NavItem icon={<IoLocationOutline />} label="Addresses" onClick={() => handleItemClick('Addresses')} isActive={activeItem === 'Addresses'} />
        <NavItem icon={<IoPerson />} label="Account Details" onClick={() => handleItemClick('Account Details')} isActive={activeItem === 'Account Details'} />
        <NavItem icon={<IoSettingsOutline />} label="Compare" onClick={() => handleItemClick('Compare')} isActive={activeItem === 'Compare'} />
        <NavItem icon={<TbLogout />} label="LogOut" onClick={() => handleItemClick('LogOut')} isActive={activeItem === 'LogOut'} />
        <NavItem icon={<FaRegHeart />} label="Wishlist" onClick={() => handleItemClick('Wishlist')} isActive={activeItem === 'Wishlist'} />
      </ul>
    </div>
  );
};


const NavItem = ({ icon, label, onClick, isActive }) => {
  return (
    <li>
      <p
        className={`flex flex-row items-center text-center cursor-pointer p-6 h-12 transform text-[#9b9b9b] hover:text-[#000000] hover:translate-x-2 transition-transform duration-300 ease-in-out  
      ${isActive ? 'text-[#000000] bg-gray-200' : ' hover:text-[#000000]'}`}
        onClick={() => onClick(label)}
      >
        <span className={`inline-flex items-center justify-center h-14 w-28  scale-105 text-xl ${isActive ? 'text-[#000000]' : 'text-[#9b9b9b] hover:text-[#000000]'}`}>{icon}</span>
        <span className={`text-lg  font-medium ${isActive ? 'text-[#000000]' : 'text-[#9b9b9b] hover:text-[#000000]'}`}>{label}</span>
      </p>
    </li>
  );
};


export default ProfileSideBar;
