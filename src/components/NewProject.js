import React, { useState } from 'react'
import './NewProject.css'
import pic1 from './../assets/projectsPics/pic1.jpeg'
import pic4 from './../assets/projectsPics/pic4.jpeg'
import pic5 from './../assets/projectsPics/pic5.jpeg'
import pic6 from './../assets/projectsPics/pic6.jpeg'
import pic7 from './../assets/projectsPics/pic7.jpeg'
import pic8 from './../assets/projectsPics/pic8.jpeg'
import pic9 from './../assets/projectsPics/pic9.jpeg'
import pic10 from './../assets/projectsPics/pic10.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import Layout from './layout/Layout'


export const NewProject = () => {

    const [open, setOpen] = useState(false);
    const [imageIndex, seImageIndex] = useState(0);

    const images = [{
        src: pic1
    },
    { src: pic4 },
    { src: pic5 },
    { src: pic6 },
    { src: pic7 },
    { src: pic8 }, { src: pic9 }, { src: pic10 }]

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

        <Layout className='ContainerNew'>
            <div className='ourProjects'>
                <div className='ourprojTitle'>
                    <h1 className='ourprojTitleheading'>Our Projects .</h1>
                </div>
            </div>
            {open && <div className='slider'>
                <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={() => setOpen(false)} />
                <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={() => handledir("l")} />
                <div className='wrapper'>
                    <img src={images[imageIndex].src} />
                </div>
                <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={() => handledir("r")} />
            </div>}
            <div className='newproject'>
                {images.map((pic, i) => <div className='projectsItems' key={i}>
                    <img src={pic.src} onClick={() => handleClick(i)} />
                </div>)}
            </div>
        </Layout>

    )
}
