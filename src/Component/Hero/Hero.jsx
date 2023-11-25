import React from 'react';
import Soap from '../../Assests/soap.png'


 

const Hero = () => {
    return (
        <div id='home'>
            <section className="home-section active">
                <h1 className="hero-heading">hello, I <span className = "g">am</span> <br/> <span className = "f">Aryan</span></h1><br/>
    
                <img src={Soap} className="home-img" alt=""/>

            </section>
        </div>
    )
}

export default Hero;