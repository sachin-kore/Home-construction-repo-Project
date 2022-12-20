import React from 'react';
import laptop from './../assets/laptop.jpg'
import './analytic.css'
import laptop1 from './../assets/about-image.png'


export default function Analytic() {
  return (
    <div className='about'>
      <img src='https://www.buildahome.in/_next/image?url=%2Fimages%2Faboutbanners.png&w=1920&q=75' />
      <div className='aboutDetails'>
        <h1>AbOUT US</h1>
        <p>About Nirmaan Constructions</p>
        <div className='aboutwrapper'>
          <div className='aboutitems'>
            <p>ABOUT US</p>
            <h1 className='about-h'>BUILDING AS PER YOUR <span>Convience</span></h1>
            <p>Nirmaan Constructions has been synonymous with quality and trust since it's inception
              has bettered itself with every project,while constantly expectation.
              Together,we discover ideas and connect the dots to build a better and a bold new future.We
              provide customized floor plans,3D Elevations,interior designa,technical drawing&Architectural guidance.</p>

          </div>
          <div className='aboutimg'>
            <img src='https://www.buildahome.in/_next/image?url=%2Fimages%2FAbout-us-2_05.png&w=1920&q=75' />
          </div>
        </div>
      </div>
    </div >
  )
}


