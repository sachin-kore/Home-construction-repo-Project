import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CancelIcon from '@mui/icons-material/Cancel';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';



const Sidebar = ({ setOpenMenu }) => {

    const [nav, setNav] = useState(false);

    return (
        <div className='bg-[#59599e] absolute top-[-20px] left-[-10px] h-[100vh]  z-50'>
            <div className='flex flex-col w-[250px] p-2 gap-[30px] sticky top-0 bottom-0'>
                <div><CancelIcon onClick={() => setOpenMenu(false)} /></div>
                <Link to="/" className='link'>Home</Link>
                <Link to="/analytic" className='link'>About Us</Link>
                {/* <select className='bg-inherit cursor-pointer' onChange={handleChange}>
                    <option className='bg-inherit text-[black]'>Select Projects</option>
                    <option className='bg-inherit text-[black]'>Ongoing Projects</option>
                    <option className='bg-inherit text-[black]'>Completed Projects</option>
                </select> */}
                <div>
                    <div className='flex items-center gap-[20px] '>
                        <p onClick={() => setNav(!nav)} className='cursor-pointer'>Selects Projects</p>
                        <ArrowDropDownIcon />
                    </div>
                    {nav && <div className='flex flex-col p-2 bg-[white] text-[black] gap-[10px] font-bold mt-[10px]'>
                        <Link to="/newproject">Ongoing Projects</Link>
                        <Link to="/oldproject">Completed Projects</Link>
                    </div>}
                </div>
                <Link className='link' to="/ourService">Services</Link>
                <Link className='link' to="/ourpackage">Our Packages</Link>

                <Link to="/cards" className='link'>Contact Us</Link>
            </div>

        </div>
    )
}

export default Sidebar