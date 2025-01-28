import React, { useState } from 'react'
import { ImCross } from "react-icons/im";
import loginimg from '../images/loginimg.avif'



const Login = () => {

    const [toggle, setToggle] = useState(true)
    const [signup, setSignup] = useState(false)
  
  
    function openlogin() {
      setToggle(true)
    }
    function closelogin() {
      setToggle(false)
    }
  
    // function openlogin(){
    //   <Login/>
    // }
  
    function signuppage() {
      setSignup(true)
    }
    function loginpage() {
      setSignup(false)
    }
  
    // Signup inputs handler
    const [inpdata, setinpdata] = useState({})
    function inputhandler(e) {
      let name = e.target.name
      let value = e.target.value
      // console.log(name,value)
      setinpdata({ ...inpdata, [name]: value })
    }
    function signupsubmithandler() {
  
      localStorage.setItem('Phonenumber', JSON.stringify(inpdata.phonenumber))
      localStorage.setItem('Name', JSON.stringify(inpdata.name))
      localStorage.setItem('Email', JSON.stringify(inpdata.email))
      setSignup(false)
    }
  
    // Logins input handler
    let phonum = JSON.parse(localStorage.getItem('Phonenumber'))
    const [logininpdata, setlogininpdata] = useState()
    function logininputhandler(e) {
      let loginvalue = e.target.value
      setlogininpdata(loginvalue)
    }
    function loginsubmithandler() {
      if (phonum == logininpdata) {
        alert('Login Successfull')
        setToggle(false)
      } else {
        alert('You are not registered, Signup yourself')
        // setSignup(true)
      }
  
    }

  return (
    <>
    {/* <button onClick={openlogin}>Login</button> */}
     {/* Signup and Login page */}
      <div className={`fixed z-[4] bg-[rgba(0,0,0,0.7)] w-full h-full duration-700 ${toggle ? 'translate-x-0' : 'translate-x-full'}`}
      onClick={closelogin}
    // Signup page
    >{signup ? <div className={`absolute bg-white w-[40%] h-full right-0 duration-700 ${toggle ? 'translate-x-0' : 'translate-x-full'}`}
      onClick={(e) => e.stopPropagation()}>
      <div className='py-11 px-14'>
        <ImCross onClick={closelogin} className='cursor-pointer' />
        <div className='flex justify-between '>
          <div className='my-7 leading-8 border-b-2  border-black py-3  text-sm'>
            <h1 className='text-3xl font-semibold text-gray-700'>Signup</h1>
            <h2>or <span className='text-[#FF5200] font-semibold cursor-pointer' onClick={() => { loginpage() }}>Login to your account</span></h2>
          </div>
          <div><img src={loginimg} className='h-[150px] px-6 py-4' /></div>
        </div>

        <div className='border flex flex-col px-5 py-4 gap-1'>
          {/* Inputs taken for Signup page */}
          <label className='text-xs font-semibold text-gray-500'>Phone Number</label>
          <input className='outline-none' type='text' name='phonenumber' onChange={(e) => { inputhandler(e) }} />
        </div>
        <div className='border flex flex-col px-5 py-4 gap-1'>
          <label className='text-xs font-semibold text-gray-500'>Name</label>
          <input className='outline-none' type='text' name='name' onChange={(e) => { inputhandler(e) }} />
        </div>
        <div className='border flex flex-col px-5 py-4 gap-1'>
          <label className='text-xs font-semibold text-gray-500'>Email</label>
          <input className='outline-none' type='text' name='email' onChange={(e) => { inputhandler(e) }} />
        </div>

        <h1 className='font-semibold text-[#5D8ED5] mt-2 cursor-pointer'>Have a referral code?</h1>
        <button className='bg-[#FF5200] text-white font-semibold text-lg w-full py-3 mt-4 mb-2' onClick={() => { signupsubmithandler() }}>CONTINUE</button>
        <h1 className='text-xs text-gray-500'>By clicking on Login, I accept the <span className='text-gray-800 cursor-pointer font-semibold'>Terms & Conditions & Privacy Policy</span></h1>
      </div>
    </div> :
      // Login page
      <div className={`absolute bg-white w-[40%] h-full right-0 duration-500 ${toggle ? 'translate-x-0' : 'translate-x-full'}`}
        onClick={(e) => e.stopPropagation()}>
        <div className='py-11 px-14'>
          <ImCross onClick={closelogin} className='cursor-pointer' />
          <div className='flex justify-between '>
            <div className='my-7 leading-8 border-b-2  border-black py-3  text-sm'>
              <h1 className='text-3xl font-semibold text-gray-700'>Login</h1>
              <h2>or <span className='text-[#FF5200] font-semibold cursor-pointer' onClick={() => { signuppage() }}>create an account</span></h2>
            </div>
            <div><img src={loginimg} className='h-[150px] px-6 py-4' /></div>
          </div>
          <div className='border flex flex-col px-5 py-4 gap-1 mt-4'>
            {/* Inputs taken for Login page */}
            <label className='text-xs font-semibold text-gray-500'>Phone Number</label>
            <input className='outline-none' type='text' onChange={(e) => { logininputhandler(e) }} />
          </div>
          <button className='bg-[#FF5200] text-white font-semibold text-lg w-full py-3 mt-6 mb-2' onClick={() => { loginsubmithandler() }}>LOGIN</button>
          <h1 className='text-xs text-gray-500'>By clicking on Login, I accept the <span className='text-gray-800 cursor-pointer font-semibold'>Terms & Conditions & Privacy Policy</span></h1>
        </div>
      </div>}


    </div>
    </>
  )
}

export default Login