import React from 'react';

//import './Main.css';

const Header = () => {
    return (
        <nav class="navbar">
            <ul class="link-group">
                <li className="link active"><a href="#home">home</a></li>
                <li className="link"><a href="#projects">projects</a></li>
                <li className="link"><a href="#about">about</a></li>
                <li className="link"><a href="#contact">contact</a></li>
            </ul>
        </nav>
    )
}

export default Header;