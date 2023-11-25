import React from 'react';

const Skills = () => {
    return(
        <div class="skill-section">
            <h1 class="heading">skills</h1>
            <div class="skills-container">
            <div class="skill-card">
                <img src="img/html.png" class="skill-img" alt=""/>
                <div class="skill-level">First</div>
                    <h1 class="skill-name">HTML</h1>
                    <p class="skill-info">The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.</p>
                </div>
                <div class="skill-card">
                <img src="img/html.png" class="skill-img" alt=""/>
                <div class="skill-level">Second</div>
                    <h1 class="skill-name">CSS</h1>
                    <p class="skill-info">Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.</p>
                </div>
                <div class="skill-card">
                <img src="img/html.png" class="skill-img" alt=""/>
                <div class="skill-level">Third</div>
                    <h1 class="skill-name">JAVASCRIPT</h1>
                    <p class="skill-info">JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior</p>
                </div>
                <div class="skill-card">
                <img src="img/html.png" class="skill-img" alt=""/>
                <div class="skill-level">Fourth</div>
                    <h1 class="skill-name">NODE.JS</h1>
                    <p class="skill-info">Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine, and executes JavaScript code outside a web browser.</p>
                </div>
                <div class="skill-card">
                <img src="img/html.png" class="skill-img" alt=""/>
                <div class="skill-level">Fifth</div>
                    <h1 class="skill-name">EXPRESS.JS</h1>
                    <p class="skill-info">Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js. </p>
                </div>
            </div>
        </div>

    )
}

export default Skills;