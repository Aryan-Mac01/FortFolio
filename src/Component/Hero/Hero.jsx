import React from 'react';
import Soap from '../../Assests/soap.png'


import {
    AiOutlineGithub,
    AiOutlineYoutube,
    AiOutlineFacebook,
    AiOutlineTwitter,
  } from "react-icons/ai";  

const Hero = () => {
    return (
        <div>
            <section className="home-section active">
                <h1 className="hero-heading">hello, I <span className = "g">am</span> <br/> <span className = "f">Aryan</span></h1><br/>
    
                <img src={Soap} className="home-img" alt=""/>

            </section>
            <div dir = "ltr" className='icon'>
                <a
                    href='https://github.com/Aryan-Mac01'
                    className='f ms-100'
                >
                    {" "}
                    <AiOutlineGithub size={40}/>{" "}
                </a>
                <a
                    href='https://github.com/Aryan-Mac01'
                    className='f ms-100'
                >
                    {" "}
                    <AiOutlineFacebook size={40}/>{" "}
                </a>
                <a
                    href='https://github.com/Aryan-Mac01'
                    className='f ms-100'
                >
                    {" "}
                    <AiOutlineTwitter size={40}/>{" "}
                </a>
                     

            </div>
        
        
        </div>
        
    )
}

export default Hero;