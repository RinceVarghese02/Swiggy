// import img1 from './images/Veggies_new.avif'
// import img2 from './images/Sushi_replace.avif'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./Navbar"
import Restaurants from "./Restaurants"
// import Navbarinputs from "./Navbarinputs"
// import Login from "./components/Login"

function App() {
  return (
    <>
      {/* <Navbar/> */}
      {/* <Restaurants/> */}
      {/* <Navbarinputs/> */}
      {/* <Login/> */}
      {/* <img src={img1} />
    <img src={img2} /> */}
      <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navbar/>} />
      <Route path='/restaurant' element={<Restaurants/>} />
      
    </Routes>
    </BrowserRouter>
    </>
  )
}


export default App