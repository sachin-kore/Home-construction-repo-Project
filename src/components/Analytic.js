import React from 'react';
import './analytic.css'
import AboutKeyImg from "./../assets/AboutKey-image.png";
import Layout from './layout/Layout';



export default function Analytic() {
  return (
    <Layout>
      <div className='AnalyticContainer'>
        <div className='aboutDetailsleft'>
          <p style={{ color: "black", fontSize: "42px", fontWeight: "bold" }}>ABOUT <span style={{ color: "red" }}>US</span></p>
          <p className='aboutTitle'>Welcome to Nirmaan Constructions</p>

          <h1>BUILDING AS PER YOUR <span>Convience</span></h1>
          <p>Nirmaan Constructions has been synonymous with quality and trust since it's inception
            has bettered itself with every project,while constantly expectation.
            Together,we discover ideas and connect the dots to build a better and a bold new future.We
            provide customized floor plans,3D Elevations,interior designa,technical drawing&Architectural guidance.</p>
        </div>
        <div className='aboutDetailsright'>
          <img className='AboutImg' src={AboutKeyImg} />
        </div>
      </div>
      <div className='mainContainer'>
        <div className='newContainer'>
          <form className='formItems'>
            <h1 className='aboutH1'>Get a FREE Consultation!</h1>
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

