import React, { useState } from 'react'
import './NewProject.css'
import newpic1 from './../projectsPics/newpics/new1.jpeg'
import newpic2 from './../projectsPics/newpics/new2.jpeg'
import newpic3 from './../projectsPics/newpics/new3.jpeg'
import newpic4 from './../projectsPics/newpics/new4.jpeg'
import newpic5 from './../projectsPics/newpics/new5.jpeg'
import newpic6 from './../projectsPics/newpics/new6.jpeg'
import newpic7 from './../projectsPics/newpics/new7.jpeg'
import newpic8 from './../projectsPics/newpics/new8.jpeg'
import newpic9 from './../projectsPics/newpics/new9.jpeg'
import newpic10 from './../projectsPics/newpics/new10.jpeg'
import newpic11 from './../projectsPics/newpics/new11.jpeg'
import newpic12 from './../projectsPics/newpics/new12.jpeg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import Layout from './layout/Layout'


export const NewProject = () => {

    const [open, setOpen] = useState(false);
    const [imageIndex, seImageIndex] = useState(0);

    const images = [{
        src: newpic1
    },
    { src: newpic2 },
    { src: newpic3 },
    { src: newpic4 },
    { src: newpic5 },
    { src: newpic6 },
    { src: newpic7 },
    { src: newpic8 },
    { src: newpic9 },
    { src: newpic10 },
    { src: newpic11 },


    { src: newpic12 }]

    const handleClick = (i) => {
        setOpen(true);
        seImageIndex(i);
    }
    const handledir = (direction) => {
        let newIndex;
        if (direction === "l") {
            newIndex = imageIndex === 0 ? images.length - 1 : imageIndex - 1;
        } else {
            newIndex = imageIndex === images.length - 1 ? 0 : imageIndex + 1;
        }
        seImageIndex(newIndex);
    }
    return (

        <Layout >
            <div className='bg-[#001659] sm:h-[400px] h-[200px] '>
                <div className='text-[white] text-[40px] pt-[50px] '>
                    <h1 className='text-center'>On Going Projects .</h1>
                </div>
            </div>
            {open && <div className='slider'>
                <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={() => setOpen(false)} />
                <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={() => handledir("l")} />
                <div className='sm:w-full bg-[white] p-2 sticky top-0'>
                    <img className='sm:h-full sm:w-full object-cover h-[250px]' src={images[imageIndex].src} />
                </div>
                <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={() => handledir("r")} />
            </div>}
            <div className='flex flex-wrap gap-[2px]'>
                {images.map((pic, i) => <div className='m-auto' key={i}>
                    <img className='sm:h-[300px] sm:w-[300px] object-cover' src={pic.src} onClick={() => handleClick(i)} />
                </div>)}
            </div>
        </Layout>

    )
}
