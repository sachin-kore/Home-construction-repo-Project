import React from 'react';
import './Card.css'
import { AiOutlineMail } from 'react-icons/ai';
import { HiOutlinePhoneMissedCall } from 'react-icons/hi';


// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Cards() {
    return (
        <div className='about-middle'>
            <div className=''>
                <div className='about-top'>
                    <p className='about-p'>TALK TO US AND</p>
                    <h1 className='about-h'>WE CAN <span className='about-span'>BUILDAHOME</span> AROUND YOU</h1>
                    <p className='ppp'>Home .. ContactUs</p>
                </div>
                <div>
                    <h1 className='about-h'>HOW CAN WE <span className='about-span'>HELP</span></h1>
                    <li className='list'>Do You have any general question for construction?</li>
                    <li className='list'>Do you have any upcoming project I’d like to discuss?</li>
                    <li className='list'>Are you a Subcontractor and I’d love to partner with buildAhome?</li>
                    <li className='list'>Are you enquiring about careers at buildAhome?</li>

                    <div className='contactDetails'>
                        <h1 className='about-h'>STAY <span className='about-span'>CONNECTED</span> </h1>

                        <div className='wrapper'>
                            <div className='contacttexts'>
                                <AiOutlineMail size={50} className='icon' />
                                <div className='text'>
                                    <p>Mail us at</p>
                                    <p>prasannamadiwal09@gmail.com</p>
                                </div>
                            </div>
                            <div className='contacttexts'>
                                <HiOutlinePhoneMissedCall size={50} className='icon' />
                                <div className='text'>
                                    <p>Call Us</p>
                                    <p>9035772261</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <form className='form'>
                <h1 className='about-h'>LET'S <span className='about-span'>TALK</span></h1>
                <input type='text' placeholder='Name' />
                <input type='text' placeholder='Phone no' />
                <input type='email' placeholder='Email' />
                <div className='selectors'>
                    <label className='select-label' for="cars">--Select Location--</label>
                    <select name="--Select Location--" id="cars" selected="none">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                    {/* <KeyboardArrowDownIcon /> */}
                </div>

                <input type='text' placeholder='Your Requirement' />
                <button className='formbutton' >Submit</button>

            </form>
        </div>

    )


}
