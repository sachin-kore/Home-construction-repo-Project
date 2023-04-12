import React from 'react';
import "./footer.css";
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from 'react-icons/fa';

export default function Footer() {
    return (
        <div className='myFooter'>
            <div className='max-w-[1240px] mt-20px mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-white-500 ' >
                <div>
                    <h1 className='text-[#00df9a] font-bold text-3xl w-full'>React.</h1>
                    <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Id odit ullam iste repellat consequatur libero reiciendis,
                        blanditiis accusantium.
                    </p>
                    <div className='flex justify-between md:w-[75%] my-6'>
                        <FaFacebookSquare size={30} className='hover:scale-105 duration-600 cursor-pointer' />
                        <FaInstagram size={30} className='hover:scale-105 duration-600 cursor-pointer' />
                        <FaTwitterSquare size={30} className='hover:scale-105 duration-600 cursor-pointer' />
                        <FaGithubSquare size={30} className='hover:scale-105 duration-600 cursor-pointer' />
                        <FaDribbbleSquare size={30} className='hover:scale-105 duration-600 cursor-pointer' />
                    </div>
                </div>
                <div className='lg:col-span-2 mt-6 justify-between flex'>
                    <div>
                        <h6 className='font-medium text-white-400'>Solutions</h6>
                        <ul>
                            <li className='py-2 text-sm text-gray-400'>Analytics</li>
                            <li className='py-2 text-sm text-gray-400'>Marketing</li>
                            <li className='py-2 text-sm text-gray-400'>Commerce</li>
                            <li className='py-2 text-sm text-gray-400'>Insights</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='font-medium text-white-400'>Support</h6>
                        <ul>
                            <li className='py-2 text-sm text-gray-400'>Pricing</li>
                            <li className='py-2 text-sm text-gray-400'>Documentation</li>
                            <li className='py-2 text-sm text-gray-400'>Guides</li>
                            <li className='py-2 text-sm text-gray-400'>API Status</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='font-medium text-white-400'>Company</h6>
                        <ul>
                            <li className='py-2 text-sm text-gray-400'>About</li>
                            <li className='py-2 text-sm text-gray-400'>Blog</li>
                            <li className='py-2 text-sm text-gray-400'>Jobs</li>
                            <li className='py-2 text-sm text-gray-400'>Press</li>
                            <li className='py-2 text-sm text-gray-400'>Careers</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='font-medium text-white-400'>Legal</h6>
                        <ul>
                            <li className='py-2 text-sm text-gray-400'>Claim</li>
                            <li className='py-2 text-sm text-gray-400'>Policy</li>
                            <li className='py-2 text-sm text-gray-400'>Terms</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
