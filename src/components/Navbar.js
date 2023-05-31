import React, { useState } from 'react'
import './Navbar.css';
import Logo from './../assets/Logo.png';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from './sidebar/Sidebar';


export default function Navbar() {

  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <div className="h-[60px] w-[100%] sm:h-[70px] sm:w-full flex items-center justify-between px-3 bg-[#001659] text-[white] ">
        <div className='flex items-center'>

          <div className='relative' >
            {openMenu ? <Sidebar setOpenMenu={setOpenMenu} /> :
              <div className='sm:hidden'>
                <MenuIcon onClick={() => setOpenMenu(true)} />
              </div>}
          </div>

          <div className='sm:flex hidden mr-[10px]'>
            <img className='h-[70px] w-[90px] rounded-full object-contain ' src={Logo} alt="" />
          </div>
          <div className='sm:flex flex-col hidden '>
            <h1 className='logoTopText'>Nirmaan</h1>
            <h1 className='logoButtomText'>constructions</h1>
          </div>
        </div>
        <div className=' flex items-center gap-[30px]'>
          <div className=' sm:flex items-center gap-[30px] hidden'>
            <Link to="/" className='link'>Home</Link>
            <Link to="/analytic" className='link'>About Us</Link>
            <div onClick={() => setOpen(!open)}>
              <Link className='link'>Our Projects</Link>
            </div>

            {open && <div className='rightdropdown'>
              <Link to="/newproject">On-goining Projects</Link>
              <Link to="/oldproject">Completed Projects</Link>
            </div>}
            <Link className='link' to="/ourService">Services</Link>
            <Link className='link' to="/ourpackage">Our Packages</Link>

            <Link to="/cards" className='link'>Contact Us</Link>

          </div>
          <div className='flex items-center gap-[20px]'>
            <div className='sm:flex   hidden'>
              <button className='bg-[#ff5e14] w-[90px] h-[70px]'>Get Quote</button>
            </div>
            <img className='visible h-[40px] w-[40px] rounded-full object-contain mr-[10px] sm:hidden' src={Logo} alt="" />
          </div>
        </div>


      </div>
    </>

  )
}
