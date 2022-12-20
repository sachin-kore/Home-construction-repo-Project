import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Background from './../assets/backgnd-img.png'
import './Navbar.css';
import { IoIosArrowDown } from 'react-icons/io';

export default function Navbar() {

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }

  const [openproject, setOpenproject] = useState(false);
  const handleprojects = () => {
    setOpenproject(!openproject);
  }
  return (
    <div className="flex text-white h-24 justify-between px-4 items-center max-w-full mx-auto static ...">
      <div className='flex'>
        <img src='https://www.buildahome.in/images/logo.png' className='object-contain w-[50px] mr-[10px] rounded-[100px] h-[50px] bg-white' />
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">Nirmaan Constructions</h1>
      </div>
      <ul className="hidden md:flex">
        <li className=" p-4 font-bold"><Link className="hover:text-red-500" to="/">Home</Link></li>
        <li className=" p-4 font-bold"><Link to="/Analytic">About</Link></li>
        <li className="  p-4 font-bold"><Link to="/Cards">Contact</Link></li>
        <div className='projecttext'>
          <li className=" " onClick={handleprojects}>Projects</li>
          <span>
            <IoIosArrowDown size={22} />
          </span>
        </div>
        <div className='dropContainer'>
          {openproject && <div className='down'>
            <Link to="/newproject">Current Projects</Link>
            <hr style={{ border: "1px solid lightgray", width: "130px" }} />
            <Link to="/oldproject">Old Projects</Link>
          </div>}
        </div>

        <li className=" p-4 font-bold"><Link to="Dummyproductapi">Help</Link></li>
      </ul>
      {/* <button className="bg-[#00df9a] rounded-md hover:bg-red-500 hidden md:flex w-[150px] p-2 justify-center">SignUp</button> */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[40%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h6 className="w-full text-3xl font-bold text-[#00df9a] ">Menu</h6>
        <li className=" p-4 font-bold"><Link className="hover:text-red-500" to="/">Home</Link></li>
        <hr />
        <li className=" p-4 font-bold"><Link to="/Analytic">About</Link></li>
        <hr />
        <li className="  p-4 font-bold"><Link to="/Cards">Contact</Link></li>
        <hr />
        <li Projects className=" p-4 font-bold cursor-pointer" onClick={handleprojects}>Projects</li>
        {openproject && <div className='dropdown'>
          <Link className='dropdownlink' to='/newproject' >Current Projects</Link>
          <Link className='dropdownlink' to='/oldproject'>Old Projects</Link>
        </div>}
        <hr />
        <li className=" p-4 font-bold"><Link to="Dummyproductapi">Help</Link></li>
      </ul>
    </div>


  )
}
