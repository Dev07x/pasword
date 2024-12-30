import { useState } from 'react'

import './App.css'
import Navbar from './component/Navbar'
import Manger from './component/Manger'
import Footer from './component/Footer'

export default function App() {
  return (
    <> 
   <Navbar />
   <div className='min-h-[80vh]'>
   <Manger/>
   </div>
   <Footer/>
  </> 
  )
}
