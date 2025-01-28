import React from 'react'
import logo from './images/logo1.png'
import { IoIosArrowDown } from "react-icons/io";
import { FaSuitcase } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { RiDiscountPercentLine } from "react-icons/ri";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import groceryimg1 from './images/Groceryimages/groceryimg1.png'
import groceryimg2 from './images/Groceryimages/groceryimg2.png'
import groceryimg3 from './images/Groceryimages/groceryimg3.png'
import groceryimg4 from './images/Groceryimages/groceryimg4.png'
import groceryimg5 from './images/Groceryimages/groceryimg5.png'
import groceryimg6 from './images/Groceryimages/groceryimg6.png'
import groceryimg7 from './images/Groceryimages/groceryimg7.png'
import groceryimg8 from './images/Groceryimages/groceryimg8.png'
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Restaurants = () => {
    return (
        <>
            <div className='w-full shadow-lg flex justify-center'>
                <div className='flex w-[90%] p-3 justify-between'>
                    <div className='flex items-center gap-8'>
                    <Link to='/ '><img className='h-[60px]' src={logo} /></Link>
                        <div className='flex items-center gap-3'><h1 className='border-b-2 border-gray-800 font-bold text-sm text-gray-700 cursor-pointer hover:text-[#F6650C] hover:border-[#F6650C]'>Other</h1><IoIosArrowDown className='text-[#FF5200] text-xl' /></div>
                    </div>
                    <div className='flex gap-9 text-gray-700 font-semibold'>
                        <h1 className='flex items-center gap-3 cursor-pointer hover:text-[#F6650C]' ><FaSuitcase className='text-xl' />Swiggy Corporate</h1>
                        <h1 className='flex items-center gap-3 cursor-pointer hover:text-[#F6650C]' ><IoSearchOutline className='text-xl' />Search</h1>
                        <h1 className='flex items-center gap-3 cursor-pointer hover:text-[#F6650C]' ><RiDiscountPercentLine className='text-xl' />Offers</h1>
                        <h1 className='flex items-center gap-3 cursor-pointer hover:text-[#F6650C]' ><IoHelpBuoyOutline className='text-xl' />Help</h1>
                        <h1 className='flex items-center gap-3 cursor-pointer hover:text-[#F6650C]' ><IoPersonOutline className='text-xl' />Sign In</h1>
                        <h1 className='flex items-center gap-3 cursor-pointer hover:text-[#F6650C]' ><IoCartOutline className='text-xl' />Cart</h1>
                    </div>

                </div>

            </div>
            <div className='w-full pt-10 pb-10'>
                <div className='w-[80%] mx-auto flex justify-between'>
                    <div>
                        <h1 className='text-2xl font-bold text-black/90'>What's on your mind?</h1>
                    </div>
                    <div className='flex gap-4'>
                        <span className='bg-gray-300 p-2 rounded-full' ><FaArrowLeft /></span>
                        <span className='bg-gray-300 p-2 rounded-full' ><FaArrowRight /></span>
                    </div>
                </div>
                <div className='w-[80%] mx-auto flex justify-between overflow-x-scroll pt-7 gap-9 scrollbar-hidden'>
                    <img src={groceryimg1} className='h-[180px]' />
                    <img src={groceryimg2} className='h-[180px]' />
                    <img src={groceryimg3} className='h-[180px]' />
                    <img src={groceryimg4} className='h-[180px]' />
                    <img src={groceryimg5} className='h-[180px]' />
                    <img src={groceryimg6} className='h-[180px]' />
                    <img src={groceryimg7} className='h-[180px]' />
                    <img src={groceryimg8} className='h-[180px]' />
                </div>
            </div>
        </>
    )
}

export default Restaurants