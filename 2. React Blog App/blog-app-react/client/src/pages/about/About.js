import { useState } from "react";
import { useLocation } from "react-router";

import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import './about.css'

export default function About() {

  return (
      <>
        <Header/>
        <div className='about'>
            <span className="aboutTitle">Welcome to Anna's Blog!</span>
            <br></br>
            <p className="aboutDescription">
                Hello!! Welcome to this short project of me creating a MERN stack 
                blog application. This is a simple app where a person can create an 
                account and post small blogs that can include a picture or be tagged
                to a category. I wanted to get back into my fullstack skills and 
                thought this would be a great project. Enjoy and cheers!
            </p>
            <br></br>
            <span className="aboutSig"> 
                from, Anna
            </span>
        </div>
      </>
    
  )
}
