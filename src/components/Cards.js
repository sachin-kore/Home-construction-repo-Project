import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { HiOutlinePhoneMissedCall } from 'react-icons/hi';
import Layout from './layout/Layout';



export default function Cards() {

    const [mydata, setMydata] = useState([{
        name: "",
        email: "",
        phone: "",
        state: "",
        desc: "",
    }])

    const handleChange = (e) => {
        setMydata((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(mydata);
    }


    return (
        <Layout>
            <div className='w-full sm:flex  p-2 '>
                <div className="sm:w-[500px] m-auto rounded-md  sm:p-4 p-3 bg-[#001659] sm:bg-[#1E2A4D] ">
                    <div className='flex flex-col text-[white]'>
                        <p className='text-[26px] font-bold'>TALK TO US AND</p>
                        <h1 className='text-[18px] mt-[10px] text-[#b9b1b1]'>WE CAN <span className='about-span'>BUILD AHOME</span> AROUND YOU</h1>

                    </div>
                    <div className='sm:py-[10px] mt-[40px]'>
                        <div className='text-[#cbc2c2] sm:text-[18px] text-[18px]'>
                            <h1 className='font-semibold text-[white]'>HOW CAN WE <span className='about-span'>HELP</span></h1>
                            <li className=' px-4 mt-[10px] list-none'>Do You have any general question for construction?</li>
                            <li className=' px-4 mt-[10px] list-none'>Do you have any upcoming project I’d like to discuss?</li>
                            <li className=' px-4 mt-[10px] list-none'>Are you a Subcontractor and I’d love to partner with Nirmaan Constructions?</li>
                            <li className=' px-4 mt-[10px] list-none'>Are you enquiring about careers at Nirmaan Constructions?</li>

                        </div>
                        <div className=''>
                            <h1 className='my-[50px] text-[32px] text-[white]'>STAY <span className='about-span'>CONNECTED</span> </h1>

                            <div className=' flex flex-col gap-[40px] mt-[30px] p-2'>
                                <div className='sm:flex items-center gap-[30px] text-[white]'>
                                    <AiOutlineMail size={60} className='' />
                                    <div className='flex flex-col text-[22px]'>
                                        <p>Mail at Us</p>
                                        <p>nc.nirmaanconstructions@gmail.com</p>
                                    </div>
                                </div>
                                <div className='sm:flex items-center gap-[30px] text-[white]'>
                                    <HiOutlinePhoneMissedCall size={60} className='' />
                                    <div className='flex flex-col text-[22px]'>
                                        <p>Call Us</p>
                                        <p>8549933305</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <form className='sm:w-[400px] w-[80%] p-5 m-auto rounded-md flex flex-col items-center gap-[30px] bg-[white] mt-[40px]' onSubmit={handleSubmit}>
                    <h1 className='sm:text-[32px] text-[26px] font-bold text-[#001659]'>Get Free Consultation!</h1>
                    <input className='p-3  bg-[lightgray] w-full sm:text-[18px] text-[24px]' value={mydata.name} name='name' type='text' placeholder='Name' onChange={handleChange} />
                    <input className='p-3  bg-[lightgray] w-full sm:text-[18px] text-[24px]' value={mydata.phone} name="phone" type='text' placeholder='Phone no' onChange={handleChange} />
                    <input className='p-3  bg-[lightgray] w-full sm:text-[18px] text-[24px]' value={mydata.email} name="email" type='email' placeholder='Email' onChange={handleChange} />

                    <div className='w-full '>
                        <select className='w-[98%] outline-none p-3  bg-[lightgray] sm:text-[18px] text-[24px]' for="city" onChange={handleChange} value={mydata.state} name='state'>
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
                    </div>


                    <input className='p-3  bg-[lightgray] w-full sm:text-[18px] text-[24px]' value={mydata.desc} name='desc' type='text' placeholder='Your Requirement' onChange={handleChange} />
                    <button className='p-3  w-full sm:text-[18px] text-[24px] bg-[#0b6835] text-[white]' >Submit</button>

                </form>


            </div>
        </Layout>

    )


}
