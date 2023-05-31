import React from 'react';
import "./footer.css";
import {

    FaFacebookSquare,

    FaInstagram,
    FaTwitterSquare,
} from 'react-icons/fa';
import Logo from './../assets/Logo.png';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div className='myFooter'>
            <div className='max-w-[1240px]  mx-auto  grid lg:grid-cols-3 gap-8 text-white-500 py-5' >
                <div className='flex flex-col justify-between  '>
                    <div className='flex  gap-5'>
                        <img src={Logo} className='w-[80px] h-[80px] rounded-full object-cover' />
                        <p className='text-[14px] font-normal text-gray-300'>Nirmaan Construction is one of the best construction
                            Company. Our company’s motto is to provide an end-to-end,
                            professional construction service that goes beyond customer expectations.</p>
                    </div>
                    <div className='flex justify-between md:w-[75%] my-6 mx-7'>
                        <FaFacebookSquare size={30} className='hover:scale-105 duration-600 cursor-pointer' />
                        <FaInstagram size={30} className='hover:scale-105 duration-600 cursor-pointer' />
                        <FaTwitterSquare size={30} className='hover:scale-105 duration-600 cursor-pointer' />

                    </div>
                </div>
                <div className='lg:col-span-2  justify-between flex  '>
                    <div className='px-2'>
                        <h6 className='font-medium text-white-400'>Services we provide</h6>
                        <ul>
                            <li className='py-2 text-sm text-gray-400'>Planning & Designing</li>
                            <li className='py-2 text-sm text-gray-400'>3D-Modelling</li>
                            <li className='py-2 text-sm text-gray-400'>Cost-estimation</li>
                            <li className='py-2 text-sm text-gray-400'>Renovation works</li>
                            <li className='py-2 text-sm text-gray-400'>Survey & Layout preparation</li>
                            <li className='py-2 text-sm text-gray-400'>Construction permissions</li>
                            <li className='py-2 text-sm text-gray-400'>Building Supervision</li>
                        </ul>
                    </div>
                    <div >
                        <div >
                            <h6 className='font-medium text-white-400 '>Support</h6>
                            <ul>
                                <li className='py-2 text-sm text-gray-400 '>Pricing</li>
                                <li className='py-2 text-sm text-gray-400 '>Documentation</li>
                                <li className='py-2 text-sm text-gray-400 '>Guides</li>
                            </ul>
                        </div>
                    </div>
                    <div >
                        <h6 className='font-medium text-white-400'>Links</h6>
                        <ul>
                            <Link to='/'><li className='py-2 text-sm text-gray-400'>Home</li></Link>
                            <Link to='/analytic'><li className='py-2 text-sm text-gray-400'>About Us</li></Link>
                            <Link to='/ourService'><li className='py-2 text-sm text-gray-400'>Services</li></Link>
                            <Link to='/cards'><li className='py-2 text-sm text-gray-400'>Contact Us</li></Link>
                            <Link to='/newproject'><li className='py-2 text-sm text-gray-400'>On-goining Projects</li></Link>
                            <Link to='/oldproject'><li className='py-2 text-sm text-gray-400'>completed Projects</li></Link>
                        </ul>
                    </div>

                </div>
            </div>
        </div >
    )
}
