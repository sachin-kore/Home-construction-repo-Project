import React from 'react'
import "./ourService.css";
import Layout from '../layout/Layout';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import styles from "./../Login/styles.module.css"
import chevronDown from "./../../assets/chevron-down.svg"
import { Link } from 'react-router-dom';

const OurService = () => {


    const AccordionItem = ({ header, ...rest }) => (
        <Item
            {...rest}
            header={
                <>
                    {header}
                    <img className={styles.chevron} src={chevronDown} alt="Chevron Down" />
                </>
            }
            className={styles.item}
            buttonProps={{
                className: ({ isEnter }) =>
                    `${styles.itemBtn} ${isEnter && styles.itemBtnExpanded}`
            }}
            contentProps={{ className: styles.itemContent }}
            panelProps={{ className: styles.itemPanel }}
        />
    );
    return (
        <Layout >
            <div className='h-[200px] bg-[#001659] text-[white] flex items-center justify-center font-bold'>
                <h1 className='text-center text-[32px]'>Our Services .</h1>
            </div>
            <div className='sm:w-[1200px] m-auto flex sm:flex-row flex-col justify-between gap-[40px]'>
                <div className=' sm:w-[70%] w-[90%] m-auto'>
                    <h1 className='text-[32px] my-[30px] font-bold'>What We <span style={{ color: "orangered" }}>Offer.</span></h1>
                    <p style={{ color: "gray" }}>Nirmaan
                        constructions
                        is one of the Best & Most Trusted home construction companies
                        in Bidar. We have successfully completed and handed over many
                        projects with Satisfied customers across Bidar,
                        The Company has a very Professional Team of architects, Structural Designers,
                        Experienced Civil Engineers, and Skilled Supervisors and Labors team. To provide
                        a one-stop solution to our clients. We are the best civil construction company in Bangalore.
                        We work closely with our partners and clients, utilize the best quality of products, and offer
                        a working environment that creates a lasting infrastructure made by heart.</p>
                    <p style={{ color: "gray" }}>     We play a crucial role in rural and urban development, helping drive economic growth
                        that provides structures to be cherished for a lifetime. We started with a construction company in Bangalore,
                        and now we are among the top choice among the luxury builders in Bangalore.</p>
                </div>
                <div className='p-3 flex flex-col items-center gap-9 sm:w-[330px] m-auto drop-shadow-lg bg-[#ffffff] ' style={{ borderTop: "3px solid red" }}>
                    <h className="OurserviceCategaryh1">Service <span style={{ color: "orangered" }}>Categories</span></h>
                    <ul className='OurList'>
                        <li>Industrial</li>
                        <li>Commercial</li>
                        <li>Residential</li>
                        <li>Renovation</li>
                    </ul>
                </div>
            </div>
            <div className='sm:w-[1200px] m-auto sm:flex sm:mt-[40px] sm:gap-[200px]'>

                <div className='sm:w-[60%] flex flex-wrap gap-[20px]'>
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

                <div className='bg-[#10276b] drop-shadow-xl sm:w-[330px] w-[90%] m-auto p-4 text-[white] flex flex-col gap-[20px] h-[350px] mt-[40px]'>
                    <p style={{ fontSize: "20px", fontWeight: "bold" }}> Have Additional Questions?</p>
                    <p style={{ fontSize: "32px", fontWeight: "bold" }}> Contact <span style={{ color: "orangered" }}>Us!</span></p>
                    <p> Phone #1: +91 8549933305</p>
                    <p> Email: nc.nirmaanconstructions@gmail.com</p>
                    <div>
                        <span style={{ fontSize: "20px", fontWeight: "bold" }}> Contact Us</span>
                        <ArrowRightAltIcon />
                    </div>
                </div>
            </div>
            <div className='relative'>
                <button className='text-[white] absolute sm:right-[210px] top-[-60px] right-[120px] sm:top-[-60px] sm:w-[250px] font-medium p-2 bg-[#ff5e14]'>Download Our Brochure <span><SimCardDownloadIcon /></span></button>
            </div>

            <div className='w-full'>

                <div className='sm:w-[1200px] m-auto  sm:flex justify-between pt-[40px] p-2 '>
                    <div className='flex flex-col sm:w-[50%]'>
                        <h1 className='mb-[10px] text-[16px] font-bold'>We Building Everything <span style={{ color: "orangered" }}>Best That You Needed..</span></h1>
                        <p style={{ color: "gray" }} className='mb-[20px]'>Nirmaan
                            constructions is one of the best construction companies in Bidar. Our company’s motto is to provide an end-to-end, professional construction service that goes beyond customer expectations.
                            Timeline, Pre-construction management, Planning, Designing, and Execution are the major areas of focus and the client can rely on excellence from essential construction through its experienced professional hands.
                            With the decades of experience and world-class quality at Essential Construction, we are on the mission to change the industry which is baffling with issues such as over estimating the time, bluffing the project delivery and
                            quality compromise issues. At Essential Construction, your satisfaction is our commitment. After all, being said, our team will provide a professional touch to your commercial, residential & industrial construction,
                            renovation, and other corresponding design by optimizing both time and resources.
                        </p>
                    </div>
                    <div className='w-[320px] drop-shadow-md bg-[#ffffff] h-max p-4' style={{ borderTop: "2px solid gray" }}>
                        <p className='p-2  '>"If you can offer a free tier that provides a lot of value,
                            it will naturally help your product to spread much more rapidly."</p>
                        <div className='flex gap-[40px] mt-[40px]'>
                            <span className='userIcon'><AccountCircleIcon style={{ fontSize: "50px", color: "gray" }} /></span>
                            <div className='flex flex-col gap-[10px]'>
                                <span className='font-bold'>Sangamesh Katagi</span>
                                <span style={{ color: "gray" }}>CEO</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='sm:w-[1200px] m-auto'>
                <Accordion className='flex flex-col gap-[20px]'>
                    <AccordionItem header="Efficient. Reliable. Experienced.">
                        <p>Our clients are our number one priority, and we’ll go the extra mile to make sure they get the best
                            from their investment. Have a specific project that requires our wealth of experience? Our services
                            are designed to tackle even
                            the most complex projects.</p>
                    </AccordionItem>
                    <AccordionItem header="Customized to Your Preferences">
                        <p>Do you have a construction or development idea that you’d love to bring to
                            life? Since 2020, we’ve provided our clientele with a wide range of
                            services such as this at competitive market rates. If you’re looking for a
                            certified expert for your next project, get in touch for your free
                            estimate.</p>
                    </AccordionItem>
                    <AccordionItem header="It’s All in the Details">
                        <p>Looking for a reliable Real Estate Development Firm with years of
                            experience? We’ve earned a reputation for absolute customer satisfaction
                            with our services. We offer this and many other services at competitive
                            rates while providing clientele with personalized attention that sets us
                            apart from the competition.
                            Get in touch so we can get started today.</p>
                    </AccordionItem>
                </Accordion>
            </div>
            <div className='bg-[#ffffff] sm:w-[1200px] m-auto'>

                <div className='my-[100px] flex flex-col items-center justify-center p-3'>
                    <h1 className='text-[#001659] mb-[30px] text-[32px] sm:text-[38px] font-bold'>Trusted By More Than <span className='text-[#FF5E14]'>1000+ Happy People.</span></h1>
                    <h4 className='text-[#565969] text-[18px]'>Hire the best house construction service for 600+ Homes, 140+ Quality Checks, and 100% Safe Money Transactions.</h4>
                    <Link to='/ourpackage'>
                        <button className='bg-[#FF5E14] mt-[50px] p-4 w-[250px]'>Get a Free Quote</button></Link>
                </div>

            </div>
        </Layout>
    )
}

export default OurService