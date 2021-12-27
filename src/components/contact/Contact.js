import React, { useContext } from 'react'
import "../contact/Contact.css"
import zack from "../../images/pf1.jpg"
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { ThemeContext } from '../../Context';

const Contact = () => {

    const form = useRef();
    const [done, setDone] = useState(false);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_3iuiiwq',
            'template_2o1smzf',
            form.current,
            'user_JeIM9r7ooc83wPYmsuslN')
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h2 className="c-title">Lets discus your project</h2>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={zack} alt="img" className="c-icon"></img>
                            070-3218-5546
                        </div>
                        <div className="c-info-item">
                            <img src={zack} alt="img" className="c-icon"></img>
                            zacks.haruna@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src={zack} alt="img" className="c-icon"></img>
                            Plot B70 Oduduwa Crescent, Phase 2 Site 2, Kubwa, FCT Abuja                          </div>
                    </div>
                </div>
                <div className="c-right">

                    <p className="c-desc">
                        <b>What is your story? </b>Anthropology plays a crucial or central role in the area of global understanding
                        and recognition of diverse ways of seeing the world as critical social, political,
                    </p>
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" placeholder="Name" name="user_name" style={{ backgroundColor: darkMode && "gray" }}></input>
                        <input type="text" placeholder="Subject" name="user_subject" style={{ backgroundColor: darkMode && "gray", color: darkMode && "white" }}></input>
                        <input type="email" placeholder="Email" name="user_email" style={{ backgroundColor: darkMode && "gray" }}></input>
                        <textarea rows="5" placeholder="Message" name="message" style={{ backgroundColor: darkMode && "gray" }}></textarea>
                        <button>Submit</button>
                        {done && "Message sent"}
                    </form>
                </div>
            </div>

        </div>
    )

}

export default Contact
