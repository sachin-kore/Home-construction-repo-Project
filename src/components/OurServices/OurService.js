import React from 'react'
import "./ourService.css";
import Layout from '../layout/Layout';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const OurService = () => {
    return (
        <Layout >
            <div className='ourServiceHeading'>
                <h1 className='ourpheadTitle'>Our Services .</h1>
            </div>
            <div className='ourService'>
                <div className='ourLeft'>
                    <h1 className='Ourserviceh1'>What We <span style={{ color: "orangered" }}>Offer.</span></h1>
                    <p style={{ color: "gray" }}>Nirmaan
                        constructions
                        is one of the Best & Most Trusted home construction companies
                        in Bengaluru. We have successfully completed and handed over many
                        projects with more than 100+ Satisfied customers across Bengaluru,
                        The Company has a very Professional Team of architects, Structural Designers,
                        Experienced Civil Engineers, and Skilled Supervisors and Labors team. To provide
                        a one-stop solution to our clients. We are the best civil construction company in Bangalore.
                        We work closely with our partners and clients, utilize the best quality of products, and offer
                        a working environment that creates a lasting infrastructure made by heart.</p>
                    <p style={{ color: "gray" }}>     We play a crucial role in rural and urban development, helping drive economic growth
                        that provides structures to be cherished for a lifetime. We started with a construction company in Bangalore,
                        and now we are among the top choice among the luxury builders in Bangalore.</p>
                </div>
                <div className='ourRight'>
                    <h className="OurserviceCategaryh1">Service <span style={{ color: "orangered" }}>Categories</span></h>
                    <ul className='OurList'>
                        <li>Industrial</li>
                        <li>Commercial</li>
                        <li>Residential</li>
                        <li>Renovation</li>
                    </ul>
                </div>
            </div>
            <div className='ourService1'>

                <div className='listContainer'>
                    <div className='IndustrialCont'>
                        <p className='Ptext'>We offer industrial planning, architecture design, construction,
                            and engineering services for industrial buildings.</p>
                        <h1 className='IndustrialTitle'>Industrial</h1>
                        <button style={{ color: "#2d4384" }}>Click Me</button>
                    </div>
                    <div className='IndustrialCont'>
                        <p className='Ptext'>Get end-to-end commercial building needs right from the planning to the execution of the projects.</p>
                        <h1 className='IndustrialTitle'>Commercial</h1>
                        <button style={{ color: "#2d4384" }}>Click Me</button>
                    </div>
                    <div className='IndustrialCont'>
                        <p className='Ptext'>Right from the first to the last brick of the building,
                            we take care of every aspect to ensure smooth and timely delivery.</p>
                        <h1 className='IndustrialTitle'>Residential</h1>
                        <button style={{ color: "#2d4384" }}>Click Me</button>
                    </div>
                    <div className='IndustrialCont'>
                        <p className='Ptext'>Get your building renovation done at a price you’ll fall for.
                            Request a quote and get the best-in-class home renovation services.</p>
                        <h1 className='IndustrialTitle'>Renovation</h1>
                        <button style={{ color: "#2d4384" }}>Click Me</button>
                    </div>
                </div>

                <div className='IndustrialRight'>
                    <p style={{ fontSize: "20px", fontWeight: "bold" }}> Have Additional Questions?</p>
                    <p style={{ fontSize: "32px", fontWeight: "bold" }}> Contact <span style={{ color: "orangered" }}>Us!</span></p>
                    <p> Phone #1: +91 97438 18210</p>
                    <p> Email: construct.heartwave@gmail.com</p>
                    <div>
                        <span style={{ fontSize: "20px", fontWeight: "bold", marginRight: "10px" }}> Contact Us</span>
                        <ArrowRightAltIcon />
                    </div>
                </div>
            </div>
            <div className='DownloadBtn'>
                <button className='MydownBtn'>Download Our Brochure <span><SimCardDownloadIcon /></span></button>
            </div>

            <div className='ourService1'>

                <div className='ourLeft'>
                    <h1 className='Ourserviceh1'>We Building Everything <span style={{ color: "orangered" }}>Best That You Needed..</span></h1>
                    <p style={{ color: "gray" }}>Nirmaan
                        constructions is one of the best construction companies in Bangalore. Our company’s motto is to provide an end-to-end, professional construction service that goes beyond customer expectations.
                        Timeline, Pre-construction management, Planning, Designing, and Execution are the major areas of focus and the client can rely on excellence from essential construction through its experienced professional hands.
                        With the decades of experience and world-class quality at Essential Construction, we are on the mission to change the industry which is baffling with issues such as over estimating the time, bluffing the project delivery and
                        quality compromise issues. At Essential Construction, your satisfaction is our commitment. After all, being said, our team will provide a professional touch to your commercial, residential & industrial construction,
                        renovation, and other corresponding design by optimizing both time and resources.</p>
                </div>

                <div className='ourRight'>
                    <p>"If you can offer a free tier that provides a lot of value,
                        it will naturally help your product to spread much more rapidly."</p>
                    <div className='UserDetails'>
                        <span className='userIcon'><AccountCircleIcon style={{ fontSize: "50px", color: "gray" }} /></span>
                        <div className='detailsofUser'>
                            <span>Prasanna Parit</span>
                            <span style={{ color: "gray" }}>CEO</span>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default OurService