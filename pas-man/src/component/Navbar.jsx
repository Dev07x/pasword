import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-800 text-white  '>
        <div className='mycontainer flex justify-between  items-center py-5 px-4 h-14'> 

        <div className='logo font-bold text-white text-2xl'><span className='text-green-700'>&lt;</span>Pass<span className='text-green-700'>op/&gt;</span>
        </div>
        <ul>
           <li className='flex gap-4'>
            <a className='hover:font-bold' href="">Home</a>
            <a className='hover:font-bold' href="">About</a>
            <a className='hover:font-bold' href="">Contact</a>
           </li>
        </ul> <button className='text-white bg-green-700 rounded-md  flex justify-items-center place-items-center ring-white ring-1'>
         <img className='invert w-16 px-2 py-1' src="/public/git.png" alt="gitub" ></img>
         <span className='font-bold px-3'>Gitub</span>
        </button>
        </div>
    </nav>
  )
}

export default Navbar