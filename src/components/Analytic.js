import React from 'react';
import './analytic.css'
import AboutKeyImg from "./../assets/AboutKey-image.png";
import Layout from './layout/Layout';



export default function Analytic() {
  return (
    <Layout>
      <div className='sm:w-[1200px] m-auto sm:flex items-center  gap-[20px] p-4'>
        <div className='sm:w-[50%] flex flex-col gap-8'>
          <p className='text-[42px]'>ABOUT <span style={{ color: "red" }}>US</span></p>
          <p className='aboutTitle'>Welcome to Nirmaan Constructions</p>

          <h1>BUILDING AS PER YOUR <span>Convience</span></h1>
          <p className='mb-[20px]'>Nirmaan Constructions has been synonymous with quality and trust since it's inception
            has bettered itself with every project,while constantly expectation.
            Together,we discover ideas and connect the dots to build a better and a bold new future.We
            provide customized floor plans,3D Elevations,interior designa,technical drawing&Architectural guidance.</p>
        </div>
        <div className='aboutDetailsright'>
          <img className='AboutImg' src={AboutKeyImg} />
        </div>
      </div>
      <div className='bg-[#1E2A4D] p-5'>
        <div className='newContainer sm:w-[400px]'>
          <form className='formItems'>
            <h1 className=' text-[22px] text-[black] font-bold'>Get a FREE Consultation!</h1>
            <label className='AboutLable'>your name</label>
            <input className='inputField' type='text' />
            <label className='AboutLable'>your email</label>
            <input className='inputField' type='text' />
            <label className='AboutLable'>your subject</label>
            <input className='inputField' type='text' />
            <label className='AboutLable'>your message (optional)</label>
            <textarea className='inputField' />
            <button className='aboutButton' >Submit</button>
          </form>
        </div>
      </div>
    </Layout>
  )
}

