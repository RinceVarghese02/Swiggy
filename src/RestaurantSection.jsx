import React, { useRef } from 'react'
import resimg1 from './images/Restaurantimg/restaurantimg1.jpg'
import resimg2 from './images/Restaurantimg/restaurantimg2.jpg'
import resimg3 from './images/Restaurantimg/restaurantimg3.jpg'
import resimg4 from './images/Restaurantimg/restaurantimg4.jpg'
import resimg5 from './images/Restaurantimg/restaurantimg5.jpg'
import resimg6 from './images/Restaurantimg/restaurantimg6.jpg'
import resimg7 from './images/Restaurantimg/restaurantimg7.jpg'
import resimg8 from './images/Restaurantimg/restaurantimg8.jpg'
import resimg9 from './images/Restaurantimg/restaurantimg9.jpg'
import { FaStar } from "react-icons/fa";
import { LuClipboardList } from "react-icons/lu";
import { RiDiscountPercentLine } from "react-icons/ri";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const RestaurantSection = () => {
  const resdata=[
    {
        resimg:resimg1,
        resname:'Biryani By Kilo',
        resrating:'3.7',
        resspecial:'Biryani • Mughlai',
        respricing:'₹800 for two',
        reslocation:'Vijay Nagar, Indore',
        resdist:'8.4 km'
    },
    {
        resimg:resimg2,
        resname:'Destiny Cafe',
        resrating:'3.8',
        resspecial:'Chinese • North Indian',
        respricing:'₹700 for two',
        reslocation:'Sudama Nagar, Indore',
        resdist:'3.6 km'
    },
    {
        resimg:resimg3,
        resname:'Flavours By Sarovar Portico',
        resrating:'4.3',
        resspecial:'Asian • North Indian',
        respricing:'₹1000 for two',
        reslocation:'Sarovar Portico Hotel, MG Road, Indore',
        resdist:'4.1 km'
    },
    {
        resimg:resimg4,
        resname:'Blue Salt & Coffee',
        resrating:'3.9',
        resspecial:'Continental • North Indian',
        respricing:'₹₹900 for two',
        reslocation:'Bicholi Mardana, Indore',
        resdist:'8 km'
    },
    {
        resimg:resimg5,
        resname:'Sarovar Portico',
        resrating:'4.3',
        resspecial:'Asian • North Indian',
        respricing:'₹1000 for two',
        reslocation:'Sarovar Portico Hotel, MG Road, Indore',
        resdist:'4.1 km'
    },
    {
      resimg: resimg6,
      resname: 'The Creative Kitchen',
      resrating: '4.5',
      resspecial: 'Continental • Italian • North Indian',
      respricing: '₹1500 for two',
      reslocation: 'Radisson Blu Hotel, Ring Road, Indore',
      resdist: '3.8 km'
  },
  {
      resimg: resimg7,
      resname: 'Mediterra',
      resrating: '4.6',
      resspecial: 'Mediterranean • European • Italian',
      respricing: '₹2000 for two',
      reslocation: 'Sayaji Hotel, Vijay Nagar, Indore',
      resdist: '5.2 km'
  },
  {
      resimg: resimg8,
      resname: 'Oregano',
      resrating: '4.2',
      resspecial: 'Italian • Continental',
      respricing: '₹1200 for two',
      reslocation: 'Effotel Hotel, Vijay Nagar, Indore',
      resdist: '4.5 km'
  },
  {
      resimg: resimg9,
      resname: 'The Square',
      resrating: '4.4',
      resspecial: 'Buffet • North Indian • Chinese',
      respricing: '₹1800 for two',
      reslocation: 'Novotel, Vijay Nagar, Indore',
      resdist: '6.0 km'
  }  

]
const scrollref=useRef(null)
function shiftleft(){
  if(scrollref.current){
    scrollref.current.scrollLeft-=400*2
  }
}
function shiftright(){
  if(scrollref.current){
    scrollref.current.scrollLeft+=400*2
  }
}

  return (
    <>
    <div className='w-full pt-10 pb-10'>
        <div className='w-[80%] mx-auto flex justify-between'>
          <div>
            <h1 className='text-2xl font-bold text-black/90'>Discover best restaurants on Dineout</h1>
          </div>
          <div className='flex gap-4'>
            <span className='bg-gray-300 p-2 rounded-full hover:bg-gray-400' onClick={shiftleft} ><FaArrowLeft /></span>
            <span className='bg-gray-300 p-2 rounded-full hover:bg-gray-400' onClick={shiftright} ><FaArrowRight /></span>
          </div>
        </div>
        {/* Restaurant card section */}
        {/* <div className='w-[80%] mx-auto flex justify-between overflow-hiden overflow-x-scroll pt-7 gap-9'>
        <img src={resimg2} className='h-[180px]' />
        <img src={resimg3} className='h-[180px]' />
        <img src={resimg4} className='h-[180px]' />
        <img src={resimg5} className='h-[180px]' />
        <img src={resimg6} className='h-[180px]' />
        <img src={resimg7} className='h-[180px]' />
        <img src={resimg8} className='h-[180px]' />
      </div> */}
      </div>
    <div className='w-[80%] mx-auto flex justify-between overflow-x-scroll pt-4 scrollbar-hidden' ref={scrollref}>
          {/* <div  className='border flex overflow-hidden'> */}
          <div className='flex gap-8'>

          {resdata.map(
            (data)=>{
              return <div className='rounded-2xl overflow-hidden shadow-lg mb-5 border flex-shrink-0 w-[400px]'>
            <div className='relative h-[230px] '>
              <img src={data.resimg} className='z-[2] brightness-50  w-[100%] h-[100%]' />
              <h1 className='absolute bottom-3 left-3 z-[3] font-bold text-xl text-white'>{data.resname}</h1>
              <h1 className='absolute bottom-3 right-3 z-[3] font-bold text-semilg text-white flex items-center gap-1'><FaStar />{data.resrating}</h1>
            </div>
            <div className='p-3'>
              <div className='flex justify-between text-gray-700 font-semibold text-sm'>
                <h1>{data.resspecial}</h1>
                <h1>{data.respricing}</h1>
              </div>
              <div className='flex justify-between text-gray-700 font-semibold text-sm'>
                <h1>{data.reslocation}</h1>
                <h1>{data.resdist}</h1>
              </div>
              <button className='flex items-center gap-1 text-xs bg-gray-200 text-gray-600 px-2 py-1 my-3 rounded-xl'><LuClipboardList />Table booking</button>
              <div className='flex justify-between bg-[#1BA672] text-white font-bold px-2 py-2 rounded-lg'>
                <h1 className='flex items-center gap-1 text-sm'><RiDiscountPercentLine className='text-lg' />Flat 40% off on pre-booking</h1>
                <h1 className='text-xs'>+ 2 more</h1>
              </div>
              <button className='w-[100%] bg-[#C8F9E5] text-[#1BA672] font-bold px-2 py-2 rounded-lg mt-3'>Up to 15% off with bank offers</button>
            </div>
          </div>
        }
      )}
      </div>
          
        </div>
    </>
  )
}

export default RestaurantSection