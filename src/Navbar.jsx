import React, { useRef, useState } from 'react'
import img3 from './images/logo.png'
import sushi from './images/Sushi_replace.avif'
import veggie from './images/Veggies_new.avif'
import genie from './images/cardimages/genie.png'
import fooddeliveryimg from './images/cardimages/fooddeliveryimg.png'
import instamartimg from './images/cardimages/instamartimg.png'
import dineout from './images/cardimages/dineout.png'
import { RxArrowTopRight } from "react-icons/rx";
import { ImLocation } from "react-icons/im";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import pizza from './images/FoodImages/foodimg01.png'
import foodimg02 from './images/FoodImages/foodimg02.png'
import foodimg03 from './images/FoodImages/foodimg03.png'
import foodimg04 from './images/FoodImages/foodimg04.png'
import foodimg05 from './images/FoodImages/foodimg05.png'
import foodimg06 from './images/FoodImages/foodimg06.png'
import foodimg07 from './images/FoodImages/foodimg07.png'
import foodimg08 from './images/FoodImages/foodimg08.png'
import foodimg09 from './images/FoodImages/foodimg09.png'
import foodimg10 from './images/FoodImages/foodimg10.png'
import groceryimg1 from './images/Groceryimages/groceryimg1.png'
import groceryimg2 from './images/Groceryimages/groceryimg2.png'
import groceryimg3 from './images/Groceryimages/groceryimg3.png'
import groceryimg4 from './images/Groceryimages/groceryimg4.png'
import groceryimg5 from './images/Groceryimages/groceryimg5.png'
import groceryimg6 from './images/Groceryimages/groceryimg6.png'
import groceryimg7 from './images/Groceryimages/groceryimg7.png'
import groceryimg8 from './images/Groceryimages/groceryimg8.png'
import { FaStar } from "react-icons/fa";
import { LuClipboardList } from "react-icons/lu";
import { RiDiscountPercentLine } from "react-icons/ri";
import applink from './images/Linkimages/linkimg1.png'
import appstore from './images/Linkimages/linkimg8.png'
import playstore from './images/Linkimages/linkimg9.png'
import RestaurantSection from './RestaurantSection'
// import Login from './components/Login'
import { ImCross } from "react-icons/im";
import loginimg from './images/loginimg.avif'
import { Link } from 'react-router-dom'
import Login from './components/Login'



const Navbar = () => {

  // const [toggle, setToggle] = useState(false)
  // const [signup, setSignup] = useState(false)


  // function openlogin() {
  //   setToggle(true)
  // }
  // function closelogin() {
  //   setToggle(false)
  // }

  // // function openlogin(){
  // //   <Login/>
  // // }

  // function signuppage() {
  //   setSignup(true)
  // }
  // function loginpage() {
  //   setSignup(false)
  // }

  // // Signup inputs handler
  // const [inpdata, setinpdata] = useState({})
  // function inputhandler(e) {
  //   let name = e.target.name
  //   let value = e.target.value
  //   // console.log(name,value)
  //   setinpdata({ ...inpdata, [name]: value })
  // }
  // function signupsubmithandler() {

  //   localStorage.setItem('Phonenumber', JSON.stringify(inpdata.phonenumber))
  //   localStorage.setItem('Name', JSON.stringify(inpdata.name))
  //   localStorage.setItem('Email', JSON.stringify(inpdata.email))
  //   setSignup(false)
  // }

  // // Logins input handler
  // let phonum = JSON.parse(localStorage.getItem('Phonenumber'))
  // const [logininpdata, setlogininpdata] = useState()
  // function logininputhandler(e) {
  //   let loginvalue = e.target.value
  //   setlogininpdata(loginvalue)
  // }
  // function loginsubmithandler() {
  //   if (phonum == logininpdata) {
  //     alert('Login Successfull')
  //     setToggle(false)
  //   } else {
  //     alert('You are not registered, Signup yourself')
  //     // setSignup(true)
  //   }

  // }
  const FoodImg=[
    {
        fimage:pizza
    },
    {
        fimage:foodimg02
    },
    {
        fimage:foodimg03
    },
    {
        fimage:foodimg04
    },
    {
        fimage:foodimg05
    },
    {
        fimage:foodimg06
    },
    {
        fimage:foodimg07
    },
    {
        fimage:foodimg08
    },
    {
        fimage:foodimg09
    },
    {
        fimage:foodimg10
    },
    ]
    const groceryimg=[
      {
        gimage:groceryimg1
    },
    {
        gimage:groceryimg2
    },
    {
        gimage:groceryimg3
    },
    {
        gimage:groceryimg4
    },
    {
        gimage:groceryimg5
    },
    {
        gimage:groceryimg6
    },
    {
        gimage:groceryimg7
    },
    {
        gimage:groceryimg8
    },

    ]

    const onlinefood=[
      {
        places:'Order food online in Bangalore'
      },
      {
        places:'Order food online in Gurgaon'
      },
      {
        places:'Order food online in Hyderabad'
      },
      {
        places:'Order food online in Delhi'
      },
      {
        places:'Order food online in Pune'
      },
      {
        places:'Order food online in Kolkata'
      },
      {
        places:'Order food online in Chennai'
      },
      {
        places:'Order food online in Ahmedabad'
      },
      {
        places:'Order food online in Chandigarh'
      },
      {
        places:'Order food online in Jaipur'
      },
      {
        places:'Order food online in Mumbai'
      },
    ]
    const onlinegrocery=[
      {
        places:'Order grocery delivery in Bangalore'
      },
      {
        places:'Order grocery delivery in Gurgaon'
      },
      {
        places:'Order grocery delivery in Hyderabad'
      },
      {
        places:'Order grocery delivery in Delhi'
      },
      {
        places:'Order grocery delivery in Pune'
      },
      {
        places:'Order grocery delivery in Kolkata'
      },
      {
        places:'Order grocery delivery in Chennai'
      },
      {
        places:'Order grocery delivery in Ahmedabad'
      },
      {
        places:'Order grocery delivery in Chandigarh'
      },
      {
        places:'Order grocery delivery in Jaipur'
      },
      {
        places:'Order grocery delivery in Mumbai'
      },
    ]

    const scrollRef = useRef(null);
    const scrollRef1 = useRef(null);

function shiftright() {
    if (scrollRef.current) {
        scrollRef.current.scrollLeft += 168 * 2; // Adjust scroll amount as needed
      }
}
function shiftleft() {
    if (scrollRef.current) {
        scrollRef.current.scrollLeft -= 168 * 2; // Adjust scroll amount as needed
      }
}
function shiftrightg() {
    if (scrollRef1.current) {
        scrollRef1.current.scrollLeft += 168 * 1; // Adjust scroll amount as needed
      }
}

function shiftleftg() {
    if (scrollRef1.current) {
        scrollRef1.current.scrollLeft -= 168 * 1;
      }
}
      // {/* Signup and Login page */}
      // <div className={`fixed z-[4] bg-[rgba(0,0,0,0.7)] w-full h-full duration-700 ${toggle ? 'translate-x-0' : 'translate-x-full'}`}
      //   onClick={closelogin}
      // // Signup page
      // >{signup ? <div className={`absolute bg-white w-[40%] h-full right-0 duration-700 ${toggle ? 'translate-x-0' : 'translate-x-full'}`}
      //   onClick={(e) => e.stopPropagation()}>
      //   <div className='py-11 px-14'>
      //     <ImCross onClick={closelogin} className='cursor-pointer' />
      //     <div className='flex justify-between '>
      //       <div className='my-7 leading-8 border-b-2  border-black py-3  text-sm'>
      //         <h1 className='text-3xl font-semibold text-gray-700'>Signup</h1>
      //         <h2>or <span className='text-[#FF5200] font-semibold cursor-pointer' onClick={() => { loginpage() }}>Login to your account</span></h2>
      //       </div>
      //       <div><img src={loginimg} className='h-[150px] px-6 py-4' /></div>
      //     </div>

      //     <div className='border flex flex-col px-5 py-4 gap-1'>
      //       {/* Inputs taken for Signup page */}
      //       <label className='text-xs font-semibold text-gray-500'>Phone Number</label>
      //       <input className='outline-none' type='text' name='phonenumber' onChange={(e) => { inputhandler(e) }} />
      //     </div>
      //     <div className='border flex flex-col px-5 py-4 gap-1'>
      //       <label className='text-xs font-semibold text-gray-500'>Name</label>
      //       <input className='outline-none' type='text' name='name' onChange={(e) => { inputhandler(e) }} />
      //     </div>
      //     <div className='border flex flex-col px-5 py-4 gap-1'>
      //       <label className='text-xs font-semibold text-gray-500'>Email</label>
      //       <input className='outline-none' type='text' name='email' onChange={(e) => { inputhandler(e) }} />
      //     </div>

      //     <h1 className='font-semibold text-[#5D8ED5] mt-2 cursor-pointer'>Have a referral code?</h1>
      //     <button className='bg-[#FF5200] text-white font-semibold text-lg w-full py-3 mt-4 mb-2' onClick={() => { signupsubmithandler() }}>CONTINUE</button>
      //     <h1 className='text-xs text-gray-500'>By clicking on Login, I accept the <span className='text-gray-800 cursor-pointer font-semibold'>Terms & Conditions & Privacy Policy</span></h1>
      //   </div>
      // </div> :
      //   // Login page
      //   <div className={`absolute bg-white w-[40%] h-full right-0 duration-500 ${toggle ? 'translate-x-0' : 'translate-x-full'}`}
      //     onClick={(e) => e.stopPropagation()}>
      //     <div className='py-11 px-14'>
      //       <ImCross onClick={closelogin} className='cursor-pointer' />
      //       <div className='flex justify-between '>
      //         <div className='my-7 leading-8 border-b-2  border-black py-3  text-sm'>
      //           <h1 className='text-3xl font-semibold text-gray-700'>Login</h1>
      //           <h2>or <span className='text-[#FF5200] font-semibold cursor-pointer' onClick={() => { signuppage() }}>create an account</span></h2>
      //         </div>
      //         <div><img src={loginimg} className='h-[150px] px-6 py-4' /></div>
      //       </div>
      //       <div className='border flex flex-col px-5 py-4 gap-1 mt-4'>
      //         {/* Inputs taken for Login page */}
      //         <label className='text-xs font-semibold text-gray-500'>Phone Number</label>
      //         <input className='outline-none' type='text' onChange={(e) => { logininputhandler(e) }} />
      //       </div>
      //       <button className='bg-[#FF5200] text-white font-semibold text-lg w-full py-3 mt-6 mb-2' onClick={() => { loginsubmithandler() }}>LOGIN</button>
      //       <h1 className='text-xs text-gray-500'>By clicking on Login, I accept the <span className='text-gray-800 cursor-pointer font-semibold'>Terms & Conditions & Privacy Policy</span></h1>
      //     </div>
      //   </div>}


      // </div>
    const [opensignin,setopensignin]=useState(false)
    function openlogin(){
      setopensignin(!opensignin)
      // console.log(opensignin)
    }

  return (
    <>

      {opensignin?<Login/>:""}

      {/* Navbar */}
      <div className='bg-[#FF5200] z-[1]'>

        {/* Navbar */}
        <div className='text-white font-bold  h-[120px]  py-9 flex justify-around '>
          {/* Logo image */}
          <img src={img3} className='bg-[#FF5200]' />
          <div className='flex gap-8 items-center'>

            <ul className='flex gap-7'>
              <li>Swiggy Corporate</li>
              <li>Partner with us</li>
            </ul>
            <button className='flex gap-2 items-center border rounded-xl p-4'>Get the App<RxArrowTopRight className='text-2xl font-bold' /></button>
            <button className='bg-black rounded-2xl py-4 px-10 flex items-center' onClick={() => { openlogin() }}>Sign in</button>
          </div>
        </div>

        <div className=' bg-[#FF5200] flex flex-col justify-center align-center py-14 text-center relative'>
          {/* Background image */}
          <img src={veggie} className='absolute h-[73%] top-0 z-[2]' />
          <img src={sushi} className='absolute h-[73%] right-0 top-0' />
          <div className='w-[57%] mx-auto z-[3]'>

            <h1 className='text-white font-bold text-5xl leading-tight'>Order food & groceries. Discover best restaurants. Swiggy it!</h1>
            <div className='flex gap-4 justify-center py-8'>
              {/* Enter delivery location */}
              <span className='flex h-[60px] bg-white px-4 py-2 justify-center gap-2 items-center rounded-2xl'>
                <ImLocation className='text-2xl  text-[#FF5200]' />
                <input type='text' placeholder='Enter your delivery location' className='outline-none w-[220px] font-semibold' />
                <IoIosArrowDown className='bg-white text-2xl' />
              </span>
              {/* Search restaurants */}
              <span className='flex h-[60px] bg-white px-4 py-2 justify-center gap-2 items-center rounded-2xl'>
                <Link to='/restaurant'><input type='text' placeholder='Search for restaurant, item or more' className='outline-none w-[430px] font-semibold text-lg' /></Link><IoSearchOutline className='bg-white text-xl font-bold' />
              </span>
            </div>

          </div>
          <div className='flex justify-center pt-10 z-[3]'>
          <Link to='/restaurant'><img src={fooddeliveryimg} className='h-[310px] w-[270px]' /></Link>
            <img src={genie} className='h-[310px] w-[270px]' />
            <img src={dineout} className='h-[310px] w-[270px]' />
            <img src={instamartimg} className='h-[310px] w-[270px]' />
          </div>
        </div>

      </div>

      {/* Order best food section */}
      <div className='w-full pt-20 pb-10'>
        <div className='w-[80%] mx-auto flex justify-between'>
          <div>
            <h1 className='text-2xl font-bold text-black/90'>Order our best food options</h1>
          </div>
          <div className='flex gap-4'>
            <span className='bg-gray-300 p-2 rounded-full hover:bg-gray-400' onClick={shiftleft} ><FaArrowLeft /></span>
            <span className='bg-gray-300 p-2 rounded-full hover:bg-gray-400' onClick={shiftright} ><FaArrowRight /></span>
          </div>
        </div>
        <div className='w-[80%] mx-auto flex justify-between overflow-x-scroll pt-7 scrollbar-hidden' ref={scrollRef} >
          {/* <img src={pizza} className='h-[180px]' />
          <img src={foodimg02} className='h-[180px]' />
          <img src={foodimg03} className='h-[180px]' />
          <img src={foodimg04} className='h-[180px]' />
          <img src={foodimg05} className='h-[180px]' />
          <img src={foodimg06} className='h-[180px]' />
          <img src={foodimg07} className='h-[180px]' />
          <img src={foodimg08} className='h-[180px]' />
          <img src={foodimg09} className='h-[180px]' />
          <img src={foodimg10} className='h-[180px]' /> */}

          <div className='flex w-[160px] gap-2'>
          {FoodImg.map((img,index)=>{
            return <img src={img.fimage} key={index} className='h-[180px]' />
          })}
          </div>

        </div>
      </div>

      {/* Shop groceries section */}
      <div className='w-full pt-10 pb-10'>
        <div className='w-[80%] mx-auto flex justify-between'>
          <div>
            <h1 className='text-2xl font-bold text-black/90'>Shop Groceries on Instamart</h1>
          </div>
          <div className='flex gap-4'>
            <span className='bg-gray-300 p-2 rounded-full hover:bg-gray-400 ' onClick={shiftleftg} ><FaArrowLeft /></span>
            <span className='bg-gray-300 p-2 rounded-full hover:bg-gray-400 ' onClick={shiftrightg} ><FaArrowRight /></span>
          </div>
        </div>
        <div className='w-[80%] mx-auto flex justify-between overflow-x-scroll pt-7 scrollbar-hidden' ref={scrollRef1}>
          {/* <img src={groceryimg1} className='h-[180px]' />
          <img src={groceryimg2} className='h-[180px]' />
          <img src={groceryimg3} className='h-[180px]' />
          <img src={groceryimg4} className='h-[180px]' />
          <img src={groceryimg5} className='h-[180px]' />
          <img src={groceryimg6} className='h-[180px]' />
          <img src={groceryimg7} className='h-[180px]' />
          <img src={groceryimg8} className='h-[180px]' /> */}
          <div className='flex w-[160px] gap-5'>
            {groceryimg.map((img,index)=>{
            return <img src={img.gimage} key={index} className='' />
          })}
          </div>
        </div>
      </div>


      {/* Restaurant section */}
      {/* <div className='w-full pt-20 pb-10'>
        <div className='w-[80%] mx-auto flex justify-between'>
          <div>
            <h1 className='text-2xl font-bold text-black/90'>Discover best restaurants on Dineout</h1>
          </div>
          <div className='flex gap-4'>
            <span className='bg-gray-300 p-2 rounded-full' ><FaArrowLeft /></span>
            <span className='bg-gray-300 p-2 rounded-full' ><FaArrowRight /></span>
          </div>
        </div>
        {/* Restaurant card section */}
        <RestaurantSection />
        {/* <div className='w-[80%] mx-auto flex justify-between overflow-hiden overflow-x-scroll pt-7 gap-9'>
        <img src={resimg2} className='h-[180px]' />
        <img src={resimg3} className='h-[180px]' />
        <img src={resimg4} className='h-[180px]' />
        <img src={resimg5} className='h-[180px]' />
        <img src={resimg6} className='h-[180px]' />
        <img src={resimg7} className='h-[180px]' />
        <img src={resimg8} className='h-[180px]' />
      </div> */}
      {/* </div> */} 

      {/* App Link Section Image */}
      <div className='my-6'>
        <img src={applink} />
      </div>

      {/* cities with Food delivery */}
      <div className='w-[80%] mx-auto my-20'>
        <div>
          <h1 className='text-2xl font-bold text-black/90 my-6'>Cities with food delivery</h1>
        </div>
        <div className='flex flex-wrap gap-6'>
          {onlinefood.map((data)=>{
            return <h1 className='border border-gray-300 py-4 px-5 rounded-xl w-[220px] text-gray-800 font-semibold text-center'>{data.places}</h1>
          })}
          {/* <h1 className='border border-gray-300 py-4 px-5 rounded-xl w-[220px] text-gray-800 font-semibold text-center'>Order food online in Bangalore</h1>
          <h1 className='border border-gray-300 py-4 px-5 rounded-xl w-[220px] text-gray-800 font-semibold text-center'>Order food online in Gurgaon</h1>
          <h1 className='border border-gray-300 py-4 px-5 rounded-xl w-[220px] text-gray-800 font-semibold text-center'>Order food online in Gurgaon</h1>
          <h1 className='border border-gray-300 py-4 px-5 rounded-xl w-[220px] text-gray-800 font-semibold text-center'>Order food online in Gurgaon</h1>
          <h1 className='border border-gray-300 py-4 px-5 rounded-xl w-[220px] text-gray-800 font-semibold text-center'>Order food online in Gurgaon</h1>
          <h1 className='border border-gray-300 py-4 px-5 rounded-xl w-[220px] text-gray-800 font-semibold text-center'>Order food online in Gurgaon</h1>
          <h1 className='border border-gray-300 py-4 px-5 rounded-xl w-[220px] text-gray-800 font-semibold text-center'>Order food online in Gurgaon</h1>
          <h1 className='border border-gray-300 py-4 px-5 rounded-xl w-[220px] text-gray-800 font-semibold text-center'>Order food online in Gurgaon</h1>
          <h1 className='border border-gray-300 py-4 px-5 rounded-xl w-[220px] text-gray-800 font-semibold text-center'>Order food online in Gurgaon</h1>
          <h1 className='border border-gray-300 py-4 px-5 rounded-xl w-[220px] text-gray-800 font-semibold text-center'>Order food online in Gurgaon</h1>
          <h1 className='border border-gray-300 py-4 px-5 rounded-xl w-[220px] text-gray-800 font-semibold text-center'>Order food online in Gurgaon</h1> */}
          <h1 className='border border-gray-300 rounded-xl w-[220px] font-bold text-center flex items-center justify-center gap-1 text-[#ff5200]'>Show More<IoIosArrowDown className='text-xl' /></h1>
        </div>
      </div>

      {/* cities with Grocery delivery */}
      <div className='w-[80%] mx-auto my-20'>
        <div>
          <h1 className='text-2xl font-bold text-black/90 my-6'>Cities with grocery delivery</h1>
        </div>
        <div className='flex flex-wrap gap-6'>
          {/* <h1 className='border border-gray-300 py-4 px-5 rounded-xl w-[220px] text-gray-800 font-semibold text-center'>Order grocery delivery in Bangalore</h1>
          <h1 className='border border-gray-300 py-4 px-5 rounded-xl w-[220px] text-gray-800 font-semibold text-center'>Order grocery online in Gurgaon</h1>
          <h1 className='border border-gray-300 py-4 px-5 rounded-xl w-[220px] text-gray-800 font-semibold text-center'>Order grocery online in Gurgaon</h1>
          <h1 className='border border-gray-300 py-4 px-5 rounded-xl w-[220px] text-gray-800 font-semibold text-center'>Order grocery online in Gurgaon</h1>
          <h1 className='border border-gray-300 py-4 px-5 rounded-xl w-[220px] text-gray-800 font-semibold text-center'>Order grocery online in Gurgaon</h1>
          <h1 className='border border-gray-300 py-4 px-5 rounded-xl w-[220px] text-gray-800 font-semibold text-center'>Order grocery online in Gurgaon</h1>
          <h1 className='border border-gray-300 py-4 px-5 rounded-xl w-[220px] text-gray-800 font-semibold text-center'>Order grocery online in Gurgaon</h1>
          <h1 className='border border-gray-300 py-4 px-5 rounded-xl w-[220px] text-gray-800 font-semibold text-center'>Order grocery online in Gurgaon</h1>
          <h1 className='border border-gray-300 py-4 px-5 rounded-xl w-[220px] text-gray-800 font-semibold text-center'>Order grocery online in Gurgaon</h1>
          <h1 className='border border-gray-300 py-4 px-5 rounded-xl w-[220px] text-gray-800 font-semibold text-center'>Order grocery online in Gurgaon</h1>
          <h1 className='border border-gray-300 py-4 px-5 rounded-xl w-[220px] text-gray-800 font-semibold text-center'>Order grocery online in Gurgaon</h1> */}
          {onlinegrocery.map((data)=>{
            return <h1 className='border border-gray-300 py-4 px-5 rounded-xl w-[220px] text-gray-800 font-semibold text-center'>{data.places}</h1>
          })}
          <h1 className='border border-gray-300 rounded-xl w-[220px] font-bold text-center flex items-center justify-center gap-1 text-[#ff5200]'>Show More<IoIosArrowDown className='text-xl' /></h1>
        </div>
      </div>

      {/* footer details section */}
      <footer className="bg-gray-100 text-gray-700 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Company Section */}
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Swiggy Corporate</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="#">Swiggy One</a></li>
                <li><a href="#">Swiggy Instamart</a></li>
                <li><a href="#">Swiggy Dineout</a></li>
                <li><a href="#">Swiggy Genie</a></li>
                <li><a href="#">Minis</a></li>
              </ul>
            </div>

            {/* Contact Us Section */}
            <div>
              <h3 className="font-bold mb-4">Contact us</h3>
              <ul className="space-y-2">
                <li><a href="#">Help & Support</a></li>
                <li><a href="#">Partner With Us</a></li>
                <li><a href="#">Ride With Us</a></li>
              </ul>
            </div>

            {/* Available In Section */}
            <div>
              <h3 className="font-bold mb-4">Available in:</h3>
              <ul className="space-y-2">
                <li>Bangalore</li>
                <li>Gurgaon</li>
                <li>Hyderabad</li>
                <li>Delhi</li>
                <li>Mumbai</li>
                <li>Pune</li>
                <li>
                  <button className="border border-gray-300 rounded px-2 py-1">
                    685 cities
                  </button>
                </li>
              </ul>
            </div>

            {/* Life at Swiggy Section */}
            <div>
              <h3 className="font-bold mb-4">Life at Swiggy</h3>
              <ul className="space-y-2">
                <li><a href="#">Explore With Swiggy</a></li>
                <li><a href="#">Swiggy News</a></li>
                <li><a href="#">Snackables</a></li>
              </ul>
            </div>
          </div>

          {/* Legal and Social Links */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            <div className="text-center md:text-left">
              <p>&copy; 2024 Swiggy Limited</p>
            </div>
            <div className="text-center">
              <ul className="inline-flex space-x-4">
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Cookie Policy</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
            <div className="flex justify-center md:justify-end space-x-4">
              <a href="#" className="hover:text-gray-500"><i className="fab fa-linkedin"></i></a>
              <a href="#" className="hover:text-gray-500"><i className="fab fa-instagram"></i></a>
              <a href="#" className="hover:text-gray-500"><i className="fab fa-facebook"></i></a>
              <a href="#" className="hover:text-gray-500"><i className="fab fa-pinterest"></i></a>
              <a href="#" className="hover:text-gray-500"><i className="fab fa-twitter"></i></a>
            </div>
          </div>

          {/* App Download Section */}
          <div className="mt-8 text-center">
            <p className="mb-4">For better experience, download the Swiggy app now</p>
            <div className="flex justify-center space-x-4">
              <a href="#">
                <img
                  src={appstore}
                  alt="Download on the App Store"
                  className="w-32"
                />
              </a>
              <a href="#">
                <img
                  src={playstore}
                  alt="Get it on Google Play"
                  className="w-32"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>


    </>
  )
}

export default Navbar