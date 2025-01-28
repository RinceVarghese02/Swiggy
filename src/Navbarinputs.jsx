// import React, { useState } from 'react'

// const Navbarinputs = () => {

//     const [inpdata,setinpdata]=useState({})
//     function inputhandler(e){
//         let name=e.target.name
//         let value=e.target.value
//         // console.log(name,value)
//         setinpdata({...inpdata,[name]:value})
//     }
//     function submithandler(){

//         let phonum=localStorage.setItem('Phonenumber',JSON.stringify(inpdata.phonenumber))
//         let username=localStorage.setItem('Name',JSON.stringify(inpdata.name))
//         let useremail=localStorage.setItem('Email',JSON.stringify(inpdata.email))

//         // console.log(phonum,username,useremail)
//     }
//     // console.log(inpdata)


//   return (
//     <>
//     <div className='border flex flex-col px-5 py-4 gap-1'>
//             {/* Inputs taken for Signup page */}
//             <label className='text-xs font-semibold text-gray-500'>Phone Number</label>
//             <input className='outline-none' type='text' name='phonenumber' onChange={(e)=>{inputhandler(e)}} />
//           </div>
//           <div className='border flex flex-col px-5 py-4 gap-1'>
//             <label className='text-xs font-semibold text-gray-500'>Name</label>
//             <input className='outline-none' type='text' name='name' onChange={(e)=>{inputhandler(e)}} />
//           </div>
//           <div className='border flex flex-col px-5 py-4 gap-1'>
//             <label className='text-xs font-semibold text-gray-500'>Email</label>
//             <input className='outline-none' type='text' name='email' onChange={(e)=>{inputhandler(e)}} />
//           </div>
//           <button onClick={()=>{submithandler()}}>Submit</button>
//     </>
//   )
// }

// export default Navbarinputs


// import foodimg02 from './images/FoodImages/foodimg02.png'
// import foodimg03 from './images/FoodImages/foodimg03.png'
// import foodimg04 from './images/FoodImages/foodimg04.png'
// import foodimg05 from './images/FoodImages/foodimg05.png'
// import foodimg06 from './images/FoodImages/foodimg06.png'
// import foodimg07 from './images/FoodImages/foodimg07.png'
// import foodimg08 from './images/FoodImages/foodimg08.png'
// import foodimg09 from './images/FoodImages/foodimg09.png'
// import foodimg10 from './images/FoodImages/foodimg10.png'
// import { FaArrowLeft } from "react-icons/fa6";
// import { FaArrowRight } from "react-icons/fa6";
// import pizza from './images/FoodImages/foodimg01.png'

// import React from 'react'

// const Navbarinputs = () => {

//     const links=[
//         {
//             image:pizza
//         },
//         {
//             image:foodimg02
//         },
//         {
//             image:foodimg03
//         },
//         {
//             image:foodimg04
//         },
//         {
//             image:foodimg05
//         },
//         {
//             image:foodimg06
//         },
//         {
//             image:foodimg07
//         },
//         {
//             image:foodimg08
//         },
//         {
//             image:foodimg09
//         },
//         {
//             image:foodimg10
//         },
//     ]

//   return (
//     <>
//     {/* Order best food section */}
//     <div className='w-full pt-20 pb-10'>
//         <div className='w-[80%] mx-auto flex justify-between'>
//           <div>
//             <h1 className='text-2xl font-bold text-black/90'>Order our best food options</h1>
//           </div>
//           <div className='flex gap-4'>
//             <span className='bg-gray-300 p-2 rounded-full' ><FaArrowLeft /></span>
//             <span className='bg-gray-300 p-2 rounded-full' ><FaArrowRight /></span>
//           </div>
//         </div>
//         <div className='w-[80%] mx-auto flex justify-between overflow-hiden overflow-x-scroll pt-7 scrollbar-hidden'>
//           <img src={pizza} className='h-[180px]' />
//           <img src={foodimg02} className='h-[180px]' />
//           <img src={foodimg03} className='h-[180px]' />
//           <img src={foodimg04} className='h-[180px]' />
//           <img src={foodimg05} className='h-[180px]' />
//           <img src={foodimg06} className='h-[180px]' />
//           <img src={foodimg07} className='h-[180px]' />
//           <img src={foodimg08} className='h-[180px]' />
//           <img src={foodimg09} className='h-[180px]' />
//           <img src={foodimg10} className='h-[180px]' />
//         </div>
//         <div>
//             <h1 className='text-2xl font-bold text-black/90'>Second Order our best food options</h1>
//           </div>
//         <div className='w-[80%] mx-auto flex justify-between overflow-x-scroll mb-[500px] scrollbar-hidden'>
//           {/* <img src={foodimg02} className='h-[180px]' />
//           <img src={foodimg03} className='h-[180px]' />
//           <img src={foodimg04} className='h-[180px]' />
//           <img src={foodimg05} className='h-[180px]' />
//           <img src={foodimg06} className='h-[180px]' />
//           <img src={foodimg07} className='h-[180px]' />
//           <img src={foodimg08} className='h-[180px]' />
//           <img src={foodimg09} className='h-[180px]' />
//           <img src={foodimg10} className='h-[180px]' /> */}
//         {links.map((img,index)=>{
//             return <img src={img.image} key={index} className='h-[180px]' />
//         })}
//         </div>
//       </div>
//     </>
//   )
// }

// export default Navbarinputs

// import React from 'react'
// import resimg1 from './images/Restaurantimg/restaurantimg1.jpg'
// import resimg2 from './images/Restaurantimg/restaurantimg2.jpg'
// import resimg3 from './images/Restaurantimg/restaurantimg3.jpg'
// import resimg4 from './images/Restaurantimg/restaurantimg4.jpg'
// import resimg5 from './images/Restaurantimg/restaurantimg5.jpg'
// import resimg6 from './images/Restaurantimg/restaurantimg6.jpg'
// import resimg7 from './images/Restaurantimg/restaurantimg7.jpg'
// import resimg8 from './images/Restaurantimg/restaurantimg8.jpg'
// import resimg9 from './images/Restaurantimg/restaurantimg9.jpg'
// import { FaStar } from "react-icons/fa";
// import { LuClipboardList } from "react-icons/lu";
// import { RiDiscountPercentLine } from "react-icons/ri";

// const Navbarinputs = () => {
//     const resdata=[
//         {
//             resimg:resimg1,
//             resname:'Biryani By Kilo',
//             resrating:'3.7',
//             resspecial:'Biryani • Mughlai',
//             respricing:'₹800 for two',
//             reslocation:'Vijay Nagar, Indore',
//             resdist:'8.4 km'
//         },
//         {
//             resimg:resimg2,
//             resname:'Destiny Cafe',
//             resrating:'3.8',
//             resspecial:'Chinese • North Indian',
//             respricing:'₹700 for two',
//             reslocation:'Sudama Nagar, Indore',
//             resdist:'3.6 km'
//         },
//         {
//             resimg:resimg3,
//             resname:'Flavours By Sarovar Portico',
//             resrating:'4.3',
//             resspecial:'Asian • North Indian',
//             respricing:'₹1000 for two',
//             reslocation:'Sarovar Portico Hotel, MG Road, Indore',
//             resdist:'4.1 km'
//         },
//     ]
//   return (
//     <>
//     {resdata.map(
//         (data)=>{
//             return <div className='rounded-2xl overflow-hidden shadow-lg mb-5 border flex-shrink-0'>
//             <div className='relative'>
//               <img src={data.resimg} className='h-[190px] w-[330px] z-[2] brightness-50' />
//               <h1 className='absolute bottom-3 left-3 z-[3] font-bold text-xl text-white'>{data.resname}</h1>
//               <h1 className='absolute bottom-3 right-3 z-[3] font-bold text-semilg text-black flex items-center gap-1'><FaStar />{data.resrating}</h1>
//             </div>
//             <div className='p-3'>
//               <div className='flex justify-between text-gray-700 font-semibold text-sm'>
//                 <h1>{data.resspecial}</h1>
//                 <h1>{data.respricing}</h1>
//               </div>
//               <div className='flex justify-between text-gray-700 font-semibold text-sm'>
//                 <h1>{data.reslocation}</h1>
//                 <h1>{data.resdist}</h1>
//               </div>
//               <button className='flex items-center gap-1 text-xs bg-gray-200 text-gray-600 px-2 py-1 my-3 rounded-xl'><LuClipboardList />Table booking</button>
//               <div className='flex justify-between bg-[#1BA672] text-white font-bold px-2 py-2 rounded-lg'>
//                 <h1 className='flex items-center gap-1 text-sm'><RiDiscountPercentLine className='text-lg' />Flat 40% off on pre-booking</h1>
//                 <h1 className='text-xs'>+ 2 more</h1>
//               </div>
//               <button className='w-[100%] bg-[#C8F9E5] text-[#1BA672] font-bold px-2 py-2 rounded-lg mt-3'>Up to 15% off with bank offers</button>
//             </div>
//           </div>
//         }
//     )}
//     </>
//     // <div className='rounded-2xl overflow-hidden shadow-lg mb-5 border flex-shrink-0'>
//     //         <div className='relative'>
//     //           <img src={resimg1} className='h-[190px] w-[330px] z-[2] brightness-50' />
//     //           <h1 className='absolute bottom-3 left-3 z-[3] font-bold text-xl text-white'>Biryani By Kilo</h1>
//     //           <h1 className='absolute bottom-3 right-3 z-[3] font-bold text-semilg text-white flex items-center gap-1'><FaStar />3.7</h1>
//     //         </div>
//     //         <div className='p-3'>
//     //           <div className='flex justify-between text-gray-700 font-semibold text-sm'>
//     //             <h1>Biryani • Mughlai</h1>
//     //             <h1>₹800 for two</h1>
//     //           </div>
//     //           <div className='flex justify-between text-gray-700 font-semibold text-sm'>
//     //             <h1>Vijay Nagar, Indore</h1>
//     //             <h1>8.4 km</h1>
//     //           </div>
//     //           <button className='flex items-center gap-1 text-xs bg-gray-200 text-gray-600 px-2 py-1 my-3 rounded-xl'><LuClipboardList />Table booking</button>
//     //           <div className='flex justify-between bg-[#1BA672] text-white font-bold px-2 py-2 rounded-lg'>
//     //             <h1 className='flex items-center gap-1 text-sm'><RiDiscountPercentLine className='text-lg' />Flat 40% off on pre-booking</h1>
//     //             <h1 className='text-xs'>+ 2 more</h1>
//     //           </div>
//     //           <button className='w-[100%] bg-[#C8F9E5] text-[#1BA672] font-bold px-2 py-2 rounded-lg mt-3'>Up to 15% off with bank offers</button>
//     //         </div>
//     //       </div>
//   )
// }

// export default Navbarinputs


// import React, { useState } from 'react';

// const Navbarinputs = () => {
//   // State to manage the visibility of additional cities
//   const [showMore, setShowMore] = useState(false);

//   // Cities data (for demonstration purposes)
//   const cities = [
//     'Bangalore',
//     'Gurgaon',
//     'Hyderabad',
//     'Delhi',
//     'Mumbai',
//     'Pune',
//     'Kolkata',
//     'Chennai',
//     'Ahmedabad',
//     'Chandigarh',
//     'Jaipur',
//     'Lucknow',
//     'Indore',
//     'Surat',
//   ];

//   // Initial list size
//   const visibleCities = showMore ? cities : cities.slice(0, 9);

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold mb-4">Cities with food delivery</h2>
//       <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//         {visibleCities.map((city, index) => (
//           <button
//             key={index}
//             className="border border-gray-300 p-2 rounded-md text-center hover:bg-gray-100"
//           >
//             Order food online in {city}
//           </button>
//         ))}
//       </div>
//       <div className="mt-4 text-center">
//         <button
//           onClick={() => setShowMore(!showMore)}
//           className="text-orange-500 font-semibold hover:underline"
//         >
//           {showMore ? 'Show Less ▲' : 'Show More ▼'}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Navbarinputs;


// import React from 'react'
// import { useRef } from 'react';
// import { useState } from 'react';
// import { FaArrowLeft } from "react-icons/fa6";
// import { FaArrowRight } from "react-icons/fa6";
// import pizza from './images/FoodImages/foodimg01.png'
// import foodimg02 from './images/FoodImages/foodimg02.png'
// import foodimg03 from './images/FoodImages/foodimg03.png'
// import foodimg04 from './images/FoodImages/foodimg04.png'
// import foodimg05 from './images/FoodImages/foodimg05.png'
// import foodimg06 from './images/FoodImages/foodimg06.png'
// import foodimg07 from './images/FoodImages/foodimg07.png'
// import foodimg08 from './images/FoodImages/foodimg08.png'
// import foodimg09 from './images/FoodImages/foodimg09.png'
// import foodimg10 from './images/FoodImages/foodimg10.png'

// const Navbarinputs = () => {
//     const FoodImg=[
//         {
//             fimage:pizza
//         },
//         {
//             fimage:foodimg02
//         },
//         {
//             fimage:foodimg03
//         },
//         {
//             fimage:foodimg04
//         },
//         {
//             fimage:foodimg05
//         },
//         {
//             fimage:foodimg06
//         },
//         {
//             fimage:foodimg07
//         },
//         {
//             fimage:foodimg08
//         },
//         {
//             fimage:foodimg09
//         },
//         {
//             fimage:foodimg10
//         },
//         {
//             fimage:foodimg10
//         },
//         {
//             fimage:foodimg10
//         },
        
//         ]
// //         const [slide, setslide] = useState(0)
//         function shiftright(){
//           if(FoodImg.length-6==slide) return false;
//           setslide(slide+3)
//         }
//         function shiftleft(){
//             if(slide==0) return false;
//             setslide(slide-3)
//         }
//   return (
//     <>
//     <div className='w-full pt-20 pb-10'>
//         <div className='w-[80%] mx-auto flex justify-between'>
//           <div>
//             <h1 className='text-2xl font-bold text-black/90'>Order our best food options</h1>
//           </div>
//           <div className='flex gap-4'>
//             <span className='bg-gray-300 p-2 rounded-full cursor-pointer hover:bg-gray-500' onClick={shiftleft} ><FaArrowLeft /></span>
//             <span className='bg-gray-300 p-2 rounded-full cursor-pointer hover:bg-gray-500' onClick={shiftright} ><FaArrowRight  /></span>
//           </div>
//         </div>
//         <div className='w-[80%] mx-auto flex justify-between pt-7 overflow-x-auto scrollbar-hidden'>
//             {/* <div className={`flex h-[180px] translate-x-[-${slide*180}px]`} > */}
//             {/* <div className={`flex h-[180px] translate-x-[-50%]`} > */}
//             <div className={`flex h-[180px] w-[160px] gap-2`} style={{transform:`translateX(-${slide*100}%)`}} >

//           {FoodImg.map((img,index)=>{
//               return <img src={img.fimage} key={index} className={``} />
//             })}
//             </div>
//         </div>
//       </div>
//     </>
//   )
// }
// const scrollRef = useRef(null);

// function shiftright() {
//     if (scrollRef.current) {
//         scrollRef.current.scrollLeft += 168 * 3; // Adjust scroll amount as needed
//     }
// }

// function shiftleft() {
//     if (scrollRef.current) {
//         scrollRef.current.scrollLeft -= 168 * 3;
//     }
// }

// return (<>
//     <div className="w-full pt-20 pb-10">
//         <div className="w-[80%] mx-auto flex justify-between">
//             <h1 className="text-2xl font-bold text-black/90">Order our best food options</h1>
//             <div className="flex gap-4">
//                 <span className="bg-gray-300 p-2 rounded-full cursor-pointer hover:bg-gray-500" onClick={shiftleft}>
//                     <FaArrowLeft />
//                 </span>
//                 <span className="bg-gray-300 p-2 rounded-full cursor-pointer hover:bg-gray-500" onClick={shiftright}>
//                     <FaArrowRight />
//                 </span>
//             </div>
//         </div>
//         <div
//             className="w-[80%] mx-auto flex justify-between pt-7 overflow-x-auto scrollbar-hidden"
//             ref={scrollRef}
//             >
//             <div className="flex h-[180px] w-auto gap-2">
//                 {FoodImg.map((img, index) => (
//                     <img src={img.fimage} key={index} className="w-[160px] h-full" />
//                 ))}
//             </div>
//         </div>
//     </div>
//                 </>
// );
// }

// export default Navbarinputs
