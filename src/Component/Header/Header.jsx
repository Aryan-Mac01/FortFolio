import React from 'react';

//import './Main.css';

const Header = () => {
    return (
        <nav class="navbar">
            <ul class="link-group">
                <li class="link active"><a href="#">home</a></li>
                <li class="link"><a href="#">projects</a></li>
                <li class="link"><a href="#">about</a></li>
                <li class="link"><a href="#" id="contact">contact</a></li>
            </ul>
        </nav>
    )
}

export default Header;