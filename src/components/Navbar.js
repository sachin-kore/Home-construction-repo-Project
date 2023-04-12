import React, { useState } from 'react'
import './Navbar.css';
import Logo from './../assets/Logo.png';
import { Link } from 'react-router-dom';

export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="navbar">
        <div className='left'>
          <img className='navImg' src={Logo} alt="" />
          <div className='logoTitle'>
            <span className='logoTopText'>Nirmaan</span>
            <span className='logoButtomText'>constructions</span>
          </div>
        </div>
        <div className='right'>
          <Link to="/" className='link'>Home</Link>
          <Link to="/analytic" className='link'>About Us</Link>
          <div onClick={() => setOpen(!open)}> <Link className='link'>Our Projects</Link></div>

          {open && <div className='rightdropdown'>
            <Link to="/newproject">New Projects</Link>
            <Link to="/oldproject">Old Projects</Link>
          </div>}
          <Link className='link' to="/ourService">Services</Link>
          <Link className='link' to="/ourpackage">Our Packages</Link>

          <Link to="/cards" className='link'>Contact Us</Link>
          <button className='qtsbtn'>Get Quote</button>
        </div>

      </div>
    </>

  )
}
