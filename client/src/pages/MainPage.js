import React from 'react';
import { NavLink } from 'react-router-dom';
 import "../styles/mainpage.css";
 import web from "./bg_bggenerator_com.jpg"
 import RecruitersLogos from "../components/RecruitersLogo";
 import Footer from "../components/Footer";



const Home = () => {
  return (
    <>
   
    <div className='container_1' >
      <div className='image'><img src="https://raw.githubusercontent.com/Narendra03K/Placement-Portal/1ae756089380313955c2e916972193fba839bbfc/img/home.svg" style={{ display: "inline-block;" }}></img>
      <p>image credit:https://raw.githubusercontent.com/Narendra03K/</p></div><div className='text'>
      <h2 className='text-center'>V.G VAZE COLLEGE OF ARTS,SCIENCE AND COMMERCE
      <h3 className='my-4'>
          PLACEMENT CELL
      </h3>
      <div className='mt-3'>
          <NavLink to="/about" className='btn'>ABOUT US</NavLink>
      </div>
      </h2></div>
      
      </div>
      <RecruitersLogos />
      <Footer />

    </>
  )
}

export default Home;