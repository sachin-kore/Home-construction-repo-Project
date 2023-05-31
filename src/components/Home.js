import React from 'react'
import "./home.css";
import Layout from './layout/Layout';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Iconfinder from "./../assets/iconfinder.png";
import CalculationIcon from "./../assets/icon_calculation_blueprint.png";
import LocationIcon from "./../assets/location_gps_apartment.png";
import Bg1 from "./../assets/bg-Image-1.png";
import Bg2 from "./../assets/bg-Image-2.png";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import NearMeSharpIcon from '@mui/icons-material/NearMeSharp';
import Image1 from "./../assets/home.webp"
import { Link } from 'react-router-dom';


import logo1 from './../projectsPics/Ultratech_Cement_Logo.svg.png'
import logo11 from './../projectsPics/tatatiscon.png'
import logo2 from './../projectsPics/Asian Paints logo 2012.png'
import logo3 from './../projectsPics/Astrallogo.png'
import logo4 from './../projectsPics/ashirvad.png'
import logo5 from './../projectsPics/acclogo.jpeg'
import logo12 from './../projectsPics/JSW_Logo.jpg'
import logo13 from './../projectsPics/Supreme_Industries_logo.svg.png'
import logo14 from './../projectsPics/polycablogo.png'

import logo6 from './../projectsPics/hindware.png'
import logo7 from './../projectsPics/jaguar-bathroom-fittings-500x500.webp'
import logo8 from './../projectsPics/ceralogo.jpg'
import logo9 from './../projectsPics/finolexlogo.png'
import logo10 from './../projectsPics/pidilite_660_141220104004.webp'
import { ImgSlider } from './ImgSlider/ImgSlider';



export default function Home() {

  return (


    <Layout>

      <div className=' sm:w-full overflow-hidden bg-[#1E2A4D] px-5'>
        <div className="sm:w-[1300px] sm:m-auto gap-3">
          <div className='flex'>
            <div className='w-full h-full ' >
              <div className='sm:w-[900px] sm:h-[500px] m-auto'>

                <ImgSlider />

              </div>
            </div>
          </div>
          <div className='my-[40px] text-[#ffffff] flex items-center justify-center'>
            <Link to="/ourpackage">
              <button className='bg-[#ff5e14] p-4  w-[160px] mr-6'>Get Quote <span><NearMeSharpIcon /></span></button>
            </Link>

            <button>Learn More</button>
          </div>
        </div>

      </div>

      <div className='bg-orange-500 text-[#ffffff] '>
        <div className='sm:w-[80%] m-auto sm:flex p-2   items-center justify-between sm:h-[300px]'>

          <h1 className='text-[38px] font-bold text-center sm:text-left sm:w-[200px]'>Some Facts About Us</h1>

          <div className='sm:flex items-center gap-[70px] flex flex-wrap '>
            <div className='w-[150px]'>
              <p className='text-[48px] font-bold'>5</p>
              <p className='font-bold text-[20px]'>Years of Experince</p>
            </div>
            <div className='w-[150px]'>
              <p className='text-[48px] font-bold'>6</p>
              <p className='font-bold text-[20px]'>Projects We Work In</p>
            </div>
            <div className='w-[150px]'>
              <p className='text-[48px] font-bold'>4</p>
              <p className='font-bold text-[20px]'>Companies We Work With</p>
            </div>
            <div className='w-[150px]'>
              <p className='text-[48px] font-bold'>10</p>
              <p className='font-bold text-[20px]'>Successful Project Done</p>
            </div>


          </div>
        </div>
      </div>


      <div className='w-full'>
        <div className='w-[80%] sm:h-[400px] flex flex-col items-center m-auto'>
          <div>
            <h className='text-[42px] font-bold text-center text-[#001659]'>TRUSTED <span className='text-[#ff5e14]'>BRANDS</span></h>
          </div>

          <div className='flex flex-wrap p-4 gap-[20px] justify-between m-auto'>
            <div className='w-[150px] h-[100px] p-2 hover:drop-shadow-md'><img className='w-full h-full object-contain   ' src={logo1}  ></img></div>
            <div className='w-[150px] h-[100px] p-2 hover:drop-shadow-md'><img className='w-full h-full object-contain ' src={logo11}  ></img></div>
            <div className='w-[150px] h-[100px] p-2 hover:drop-shadow-md'><img className='w-full h-full object-contain ' src={logo9}  ></img></div>
            <div className='w-[150px] h-[100px] p-2 hover:drop-shadow-md'><img className='w-full h-full object-contain ' src={logo10}  ></img></div>
            <div className='w-[150px] h-[100px] p-2 hover:drop-shadow-md'> <img className='w-full h-full object-contain ' src={logo2}  ></img></div>
            <div className='w-[150px] h-[100px] p-2 hover:drop-shadow-md'><img className='w-full h-full object-contain ' src={logo3}  ></img></div>
            <div className='w-[150px] h-[100px] p-2 hover:drop-shadow-md'> <img className='w-full h-full object-contain ' src={logo4}  ></img></div>
            <div className='w-[150px] h-[100px] p-2 hover:drop-shadow-md'>  <img className='w-full h-full object-contain ' src={logo5}  ></img></div>
            <div className='w-[150px] h-[100px] p-2 hover:drop-shadow-md'>   <img className='w-full h-full object-contain ' src={logo12}  ></img></div>
            <div className='w-[150px] h-[100px] p-2 hover:drop-shadow-md'>   <img className='w-full h-full object-contain ' src={logo13}  ></img></div>
            <div className='w-[150px] h-[100px] p-2 hover:drop-shadow-md'>   <img className='w-full h-full object-contain ' src={logo14}  ></img></div>
            <div className='w-[150px] h-[100px] p-2 hover:drop-shadow-md'><img className='w-full h-full object-contain ' src={logo6}></img></div>
            <div className='w-[150px] h-[100px] p-2 hover:drop-shadow-md'> <img className='w-full h-full object-contain ' src={logo7}></img></div>
            <div className='w-[150px] h-[100px] p-2 hover:drop-shadow-md'> <img className='w-full h-full object-contain ' src={logo8}></img></div>


          </div>


        </div>
      </div>





      <div className='w-[100%] bg-[#000F3C] text-white sm:py-24 p-4 '>
        <div className='sm:w-[1200px] m-auto'>
          <div className='mb-7'>
            <h1 className='font-bold text-[28px] sm:text-[45px] text-center mb-[30px]'>Best Construction Company in <span className='text-[#ff5e14]'>Karnataka</span></h1>
            <h4 className='text-center sm:text-[30px]'>The Sky is the limit when<span className='text-[#ff5e14] ml-3 font-bold'>Building</span></h4>
          </div>
          <div className=' sm:flex w-full gap-[20px] sm:gap-[40px] items-center'>
            <div className=''>
              <button className='text-[#ff5e14] '>Learn More <span className='ml-3'><ArrowForwardIcon /></span></button>
              <div>

              </div>
              <p className='sm:text-[45px] text-[24px]'>Types of Construction
                we <span className='text-[#ff5e14]'>Provide</span></p>
            </div>
            <div className='sm:text-[18px] text-[14px] mt-[15px]'>
              <p >Nirmaan construction is one of the Best & Most Trusted home construction companies in Bidar. We have successfully completed and handed over many projects with Satisfied customers across Bidar, The Company has a very Professional Team of architects, Structural Designers, Experienced Civil Engineers, and Skilled Supervisors and Labors team.
                To provide a one-stop solution to our clients.</p>
            </div>
          </div>
          <div className=' mt-[50px] flex flex-wrap justify-between gap-[20px]'>
            <div className='p-4 sm:w-[350px] bg-[#1E2A4D] sm:p-[70px] flex flex-col items-start gap-5'>
              <img src={Iconfinder} alt='' />
              <h1 className='text-[23px] font-bold text-[#ffffff]'>Project Planning</h1>
              <p>Managing construction projects requires excellent
                planning, organization and execution skills. To successfully
                manage a construction project, contractors need to work closely
                with developers to define the project's scope. It takes a team of
                both professionals and suppliers to accurately
                plan and deliver a successful construction project.</p>
              <button>Learn More<span className='ml-3'><ArrowForwardIcon /></span></button>
            </div>
            <div className='p-4 sm:w-[350px] bg-[#1E2A4D] sm:p-[70px] flex flex-col items-start gap-5'>
              <img src={CalculationIcon} alt='' />
              <h1 className='text-[23px] font-bold text-[#ffffff]'>Interior Design</h1>
              <p className=''>We have the flexibility to work within any space and style. Our firm will bring world-class knowledge and expertise, whether handling a single bathroom design or an entire home. No matter the location, you will get a safe, comfortable, and attractive interior design. We do everything in our power to make your interior design perfect. We are open to
                any style or design and will work tirelessly to make It a reality.</p>
              <button>Learn More<span className='ml-3'><ArrowForwardIcon /></span></button>
            </div>
            <div className='p-4 sm:w-[350px] bg-[#1E2A4D] sm:p-[70px] flex flex-col items-start gap-5'>
              <img src={LocationIcon} alt='' />
              <h1 className='text-[23px] font-bold text-[#ffffff]'>Budget Planning</h1>
              <p>Cost estimation and budgeting are essential tools for planning in the construction industry and play a central role in both preconstruction and construction phases of a project. Best practices dictate a total project budget should be developed as early as possible in a project. Heart wvae Construction typically aims to prepare the first budget at completion
                of the architect’s schematic design (SD) phase.</p>
              <button>Learn More<span className='ml-3'><ArrowForwardIcon /></span></button>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#ffffff] w-full'>
        <div className=' relative sm:w-[1200px] m-auto sm:flex  p-2 gap-[50px] mb-[100px]'>
          <div className='sm:flex sm:w-[50%] w-[100%]  gap-[20px] '>
            <img src={Bg2} alt='' className='mb-[20px] sm:w-[50%] w-[100%] sm:h-full object-cover mt-[20px]' />
            <img src={Bg1} alt='' className='sm:w-[50%] w-[100%] sm:h-full object-cover sm:mt-20' />

          </div>
          <div className='absolute sm:top-[50%] sm:left-[22%] top-[13%] left-[30%] bg-[#ff5e14] sm:h-[100px] h-[60px] w-[60px] sm:w-[100px] rounded-full flex justify-center items-center'>
            <a href='https://www.youtube.com/watch?v=fG8aPSsx3G0'>
              <PlayArrowIcon style={{ fontSize: "50px" }} className="text-white" />
            </a>
          </div>

          <div className='sm:w-[50%] flex flex-col sm:gap-[30px] gap-[10px]'>
            <h1 className='font-bold sm:text-[45px] text-[30px] mt-[20px] sm:text-center sm:mb-[50px]'>We Provide You a <span className='text-[#ff5e14]'>Future</span></h1>
            <p className='text-[#565969] sm:text-[16px] text-[20px]'>Standing tall with Two years of experience in the construction
              industry, Nirmaan construction is one of the best construction
              Company. The term best is added for its vast diversity
              of work experience and quality artistry. We are a civil construction
              company in Bangalore bagging 64k awards and have worked on more than

              15+ projects in Two years. We cover all the aspects that the
              job requires, from Architecture to material acquisition to design
              layout and construction finesse. We understand our customers and
              their dilemma over selecting the right firm for their dreams and
              goals to align. Right from costs, material quality, reliability,
              and labor to creating the perfect fit, heartwave construction is
              amongst the top professional home construction companies in
              Bangalore.</p>
            <p className='text-[#565969] sm:text-[16px] text-[20px]'>Nirmaan construction is an amalgamation of businesses like Construction, Finance, Real-estate, Interior
              designing, Investments, and Wealth management. Creating wealth through real estate investment is the crux
              of the business model. With a cent percent designated in-house solution, we break the conventional system
              of expecting whatever is in the offer through a researched and foolproof investment system. We aim to be
              one of the best construction companies in Bangalore.</p>
          </div>
        </div>
      </div>
    </Layout>

  )
}



