import React from 'react';
import './Card.css'
import { AiOutlineMail } from 'react-icons/ai';
import { HiOutlinePhoneMissedCall } from 'react-icons/hi';
import Layout from './layout/Layout';



export default function Cards() {
    return (
        <Layout>
            <div className='about-middle bg-white'>
                <div className="aboutleft">
                    <div className='about-top'>
                        <p className='about-p'>TALK TO US AND</p>
                        <h1 className='about-h'>WE CAN <span className='about-span'>BUILDAHOME</span> AROUND YOU</h1>

                    </div>
                    <div>
                        <h1 className='about-h'>HOW CAN WE <span className='about-span'>HELP</span></h1>
                        <li className='list'>Do You have any general question for construction?</li>
                        <li className='list'>Do you have any upcoming project I’d like to discuss?</li>
                        <li className='list'>Are you a Subcontractor and I’d love to partner with buildAhome?</li>
                        <li className='list'>Are you enquiring about careers at buildAhome?</li>

                        <div className='contactDetails'>
                            <h1 className='about-h'>STAY <span className='about-span'>CONNECTED</span> </h1>

                            <div className='Cardwrapper'>
                                <div className='contacttexts'>
                                    <AiOutlineMail size={50} className='icon' />
                                    <div className='text'>
                                        <p>Mail at us</p>
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

                    <select className='selectinput' for="city" >
                        <option value="Karnataka">Select</option>
                        <option value="AN">Andaman and Nicobar Islands</option>
                        <option value="AP">Andhra Pradesh</option>
                        <option value="AR">Arunachal Pradesh</option>
                        <option value="AS">Assam</option>
                        <option value="BR">Bihar</option>
                        <option value="CH">Chandigarh</option>
                        <option value="CT">Chhattisgarh</option>
                        <option value="DN">Dadra and Nagar Haveli</option>
                        <option value="DD">Daman and Diu</option>
                        <option value="DL">Delhi</option>
                        <option value="GA">Goa</option>
                        <option value="GJ">Gujarat</option>
                        <option value="HR">Haryana</option>
                        <option value="HP">Himachal Pradesh</option>
                        <option value="JK">Jammu and Kashmir</option>
                        <option value="JH">Jharkhand</option>
                        <option value="KA">Karnataka</option>
                        <option value="KL">Kerala</option>
                        <option value="LA">Ladakh</option>
                        <option value="LD">Lakshadweep</option>
                        <option value="MP">Madhya Pradesh</option>
                        <option value="MH">Maharashtra</option>
                        <option value="MN">Manipur</option>
                        <option value="ML">Meghalaya</option>
                        <option value="MZ">Mizoram</option>
                        <option value="NL">Nagaland</option>
                        <option value="OR">Odisha</option>
                        <option value="PY">Puducherry</option>
                        <option value="PB">Punjab</option>
                        <option value="RJ">Rajasthan</option>
                        <option value="SK">Sikkim</option>
                        <option value="TN">Tamil Nadu</option>
                        <option value="TG">Telangana</option>
                        <option value="TR">Tripura</option>
                        <option value="UP">Uttar Pradesh</option>
                        <option value="UT">Uttarakhand</option>
                        <option value="WB">West Bengal</option>
                    </select>


                    <input type='text' placeholder='Your Requirement' />
                    <button className='formbutton' >Submit</button>

                </form>
            </div>
        </Layout>

    )


}
