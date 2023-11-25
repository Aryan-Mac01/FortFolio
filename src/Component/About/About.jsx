import React from 'react';
import Soap from '../../Assests/soap.png'

const About = () => {
    return (
        <section class="about-section active" id="about">
            <div class="about">
            <div class="about-img-container">
                <img src={Soap} class="about-img" alt=""/>
                <button class="download-cv-btn">downlaod cv</button>
            </div>
            <p class="about-info">Lorem ipsum.....</p>
            </div>
        </section>
    )
}

export default About;