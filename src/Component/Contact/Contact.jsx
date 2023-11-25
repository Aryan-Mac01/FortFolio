import React from 'react';

const Contact = () => {
    return(
        <p id="contact" >
            <form className="contact-form">
                <input type="text" name="name" id="name" autocomplete="off" placeholder="Name"/>
                <input type="text" name="email" id="email" autocomplete="off" placeholder="Email"/>
                <textarea name="msg" id="msg" placeholder="message" autocomplete="off"></textarea>
                <button type="submit" class="form-submit-btn">Contact</button>
                
            </form>
        </p>        

    )
}

export default Contact;