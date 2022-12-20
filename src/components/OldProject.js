import React from 'react'
import './OldProject.css'
import pic11 from './../assets/projectsPics/pic11.jpeg'
import pic12 from './../assets/projectsPics/pic12.jpeg'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark } from '@fortawesome/free-solid-svg-icons'

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
        <div className='oldproject'>
            {opendiv && <div className='slider'>
                <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={() => setOpendiv(false)} />
                <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={() => handledir("l")} />
                <div className='wrapper'>
                    <img src={images[imageNumber].src} />
                </div>
                <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={() => handledir("r")} />
            </div>}
            {images.map((pic, i) => <div className='oldprojectsItems'>
                <img src={pic.src} onClick={() => handleclick(i)} />
            </div>)}

        </div>
    )
}
