import React from 'react';
import Soap from '../../Assests/soap.png'

const Project = () => {
    return (
        
        <section class="project-section active" id='projects'>
            <h1 class="project-heading">some of my projects</h1>
                <div class="project-container">
                    <div class="project-card">
                        <img src={Soap} class="project-img" alt=""/>
                            <div class="project-content">
                                <h1 class="project-title">Tindog</h1>
                                <p class="project-info-exp">
                                    Tindog is a simple web application built with HTML, CSS, and Bootstrap that allows users to browse and connect with other dog owners in their area and their dogs too.
                                </p>
                                <div class="project-btn-grp">
                                    <button onclick="mygithub()" class="button-89" role="button">Github</button>
                                    <button onclick="myrepl()" class="button-89" role="button">Replit</button>
                                </div>
                            </div>

                    </div>
                <div class="project-card">
                    <img src="images/cloud.png" class="project-img" alt=""/>
                        <div class="project-content">
                            <h1 class="project-title">Weather App</h1>
                                <p class="project-info-exp">
                                    Weather apps enable users to get instant alerts regarding weather conditions with thee help of Weather API.
                                </p>
                            <div class="project-btn-grp">
                                <button onclick="mygithub()" class="button-89" role="button">Github</button>
                                <button onclick="myrepl()" class="button-89" role="button">Replit</button>
                            </div>
                        </div>

                </div>
                <div class="project-card">
                    <img src="images/drumkit1.jpeg" class="project-img" alt=""/>
                        <div class="project-content">
                            <h1 class="project-title-exp">Stack-Overflow-Clone</h1>
                                <p class="project-info">
                                    The Drum Kit is a repository that offers a virtual drum set allowing users to play music by using the keys on their keyboard as input, providing an interactive drumming experience.
                                </p>
                            <div class="project-btn-grp">
                                <button onclick="mygithub()" class="button-69" role="button">Github</button>
                                <button onclick="myrepl()" class="button-69" role="button">Replit</button>
                            </div>
                        </div>

                </div>
                <div class="project-card">
                    <img src="images/news.png" class="project-img" alt=""/>
                        <div class="project-content">
                            <h1 class="project-title">Newsletter Signup</h1>
                                <p class="project-info-exp">
                                    An email newsletter is a recurring email sent to subscribed contacts containing curated informational content from news articles to resources and tips
                                </p>
                            <div class="project-btn-grp">
                                <button onclick="mygithub()" class="button-89" role="button">Github</button>
                                <button onclick="myrepl()" class="button-89" role="button">Replit</button>
                            </div>
                        </div>

                </div>
            </div>
        </section>
    )
}

export default Project;