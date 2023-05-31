import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import Image1 from "./../../assets/home.webp"

export const ImgSlider = () => {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        autoplay: true

    }
    return (
        <Carousel {...settings}>
            <Wrap>
                <img src={Image1} alt='' />
            </Wrap>
            <Wrap>
                <img src="https://heartwaveconstruct.com/wp-content/uploads/2022/06/PRM.png" alt='' />
            </Wrap>
            <Wrap>
                <img src='https://heartwaveconstruct.com/wp-content/uploads/2022/06/8.jpeg' alt='' />
            </Wrap>
            <Wrap>
                <img src='https://heartwaveconstruct.com/wp-content/uploads/2022/06/D3.png' alt='' />
            </Wrap>
        </Carousel>
    )
}

const Carousel = styled(Slider)`
    margin:20px 0px;

    ul li button{
        &:before{
            font-size:10px;
            color: rgb(150, 158, 171);
        }
    }
    li.slick-active button::before{
        color:white;
    }

    .slick-list{
        overflow:visible;
    }

    button{
        z-index:1;
    }
`
const Wrap = styled.div`
cursor:pointer;
width:800px;
height:500px;

    img{
        border:4px solid transparent;
        border-radius:4px;
        width:90%;
        height:90%;
        box-shadow:rgb(0 0 0 /69%) 0px 26px 30px -10px,
        rgb(0 0 0 /73%) 0px 16px 10px -10px;
        transition-duration:300ms;


        &:hover{
            border: 4px solid rgba(249, 249,249,0.8)
        }
    }
`
