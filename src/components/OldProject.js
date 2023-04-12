import React, { useState } from 'react'
import './OldProject.css'
import pic11 from './../assets/projectsPics/pic11.jpeg'
import pic12 from './../assets/projectsPics/pic12.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import Layout from './layout/Layout'

export const OldProject = () => {
    const [opendiv, setOpendiv] = useState(false);
    const [imageNumber, setImageNumber] = useState(0);

    const images = [{
        src: pic11
    },
    { src: pic12 }]

    const handleclick = (i) => {
        setImageNumber(i);
        setOpendiv(true);
    }

    const handledir = (direction) => {
        let newIndex;
        if (direction === "l") {
            newIndex = imageNumber === 0 ? images.length - 1 : imageNumber - 1;
        } else {
            newIndex = imageNumber === images.length - 1 ? 0 : imageNumber + 1;
        }
        setImageNumber(newIndex);
    }

    return (
        <Layout className='oldproject'>
            <div className='ourProjects'>
                <div className='ourprojTitle'>
                    <h1 className='ourprojTitleheading'>Our Projects .</h1>
                </div>
            </div>
            {opendiv &&
                <div className='sliderOld'>
                    <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={() => setOpendiv(false)} />
                    <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={() => handledir("l")} />
                    <div className='wrapperOld'>
                        <img src={images[imageNumber].src} className='SliderImg' />
                    </div>
                    <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={() => handledir("r")} />
                </div>}
            <div >
                {images.map((pic, i) => <div key={i} className='oldprojectsItems'>
                    <img src={pic.src} onClick={() => handleclick(i)} />
                </div>)}
            </div>

        </Layout>
    )
}
