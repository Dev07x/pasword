import React from 'react'

const Footer = () => {
  return (
    <div className='bg-slate-800 text-white flex flex-col justify-center items-center  py-2 font-bold  w-full'>
      <div className='text-2xl'>
        <span className='text-green-700'>&lt;</span>Pass<span className='text-green-700'>op/&gt;</span>
      </div>



      <div className="font-mono flex text-xl " ><span>Created With</span>
       <div className=''>
        <lord-icon
          src="https://cdn.lordicon.com/ohfmmfhn.json"
          trigger="hover">
        </lord-icon>
      </div></div>
       </div>
    )}
export default Footer;