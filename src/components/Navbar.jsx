import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className="text-white my-8 mb-6 flex flex-col justify-center items-center w-full
    md:w-[640px] md:text-3xl
    ">
      <h1 className='text-4xl py-4
      sm:text-5xl
      md:text-7xl
      '>Alexandre Dincq</h1>
      <div className="mt-10 mb-4
      md:mt-20 md:text-4xl
      ">
        <ul className="flex justify-center space-x-2">
          <li className='border-2 rounded-md p-1 scroll-smooth'>
            <a href="#header">Profile</a>
          </li>
          <li className='border-2 rounded-md p-1'>
            <a href="#stack">Stack</a>  
          </li>
          <li className='border-2 rounded-md p-1'>
            <a href="#projects">Projet</a>
          </li>
          <li className='border-2 rounded-md p-1'>
            <a href="#footer">Contact</a>
          </li>
        </ul>
      </div>
    </div>
    
    </>
  )
}

export default Navbar