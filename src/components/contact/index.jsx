import style from "./contact.module.css"

import React, { useState } from "react";

import logo from "../../z_images/LOGO  1.png"

import instaIcon from "../../z_images/icons8-instagram.svg"
import facebookIcon from "../../z_images/icons8-facebook.svg"
import linkedInIcon from "../../z_images/icons8-linkedin.svg"


    const ENDPOINT = "";

    const Contact = () => {
        const [submitted, setSubmitted] = useState(false);
        const handleSubmit = () => {
            setTimeout (() => {
                setSubmitted(true);
            }, 100);
    };

        if (submitted){
            return(
                <>
                <div className={style.container}>
                    <div className={style.title}>Contate-me</div>
                    <div className={style.boxContact}>
                        <form
                            action={ENDPOINT}
                            onSubmit={handleSubmit}
                            method="POST"
                            target="_blank"
                            name="contact"
                            data-netlify="true"
                        >
                            <textarea
                                type="text"
                                placeholder="Nome"
                                name="nome"
                                className={style.textContact}
                                required
                            />
                            <textarea
                                type="text"
                                placeholder="E-mail"
                                name="email"
                                className={style.textContact}
                                required
                            />
                            <textarea
                                placeholder="Mensagem"
                                name="mensagem"
                                className={style.mensagemContact}
                                required
                            />
                            <button
                                className={style.submitButton}
                                type="submit"
                                >
                                Enviar
                                </button>
                        
                        </form>
                    </div>
                </div>
                <div className={style.submited}>Obrigado! Entrarei em contato em breve!</div>
                </>
            )
        }

    
    return(
        <div className={style.container}>
            <p className={style.title}>Contate-me</p>
            <div className={style.boxFooter}>
                <img className={style.logo} src={logo} alt="logo"/>
                <div className={style.boxContact}>
                    <form
                        action={ENDPOINT}
                        onSubmit={handleSubmit}
                        method="POST"
                        target="_blank"
                        name="contact"
                        data-netlify="true"
                    >
                        <textarea
                            type="text"
                            placeholder="Nome"
                            name="nome"
                            className={style.textContact}
                            required
                        />
                        <textarea
                            type="text"
                            placeholder="E-mail"
                            name="email"
                            className={style.textContact}
                            required
                        />
                        <textarea
                            placeholder="Mensagem"
                            name="mensagem"
                            className={style.mensagemContact}
                            required
                        />
                        <button
                            className={style.submitButton}
                            type="submit"
                            >
                            Enviar
                            </button>
                    
                    </form>
                </div>
                <div className={style.redesSociais}>
                    <div className={style.textRedesSociais}>
                    Me siga nas redes sociais
                    </div>
                    <div className={style.iconRedesSociais}>
                        <a href="https://www.instagram.com/mateusdallacort/" alt="instagram" target="_blank">
                            <img className={style.icon} src={instaIcon} />    {/*Instagram icon by Icons8*/}
                        </a>
                        <a href="https://www.facebook.com/matedallacort" alt="facebook" target="_blank">
                            <img className={style.icon} src={facebookIcon}/>    {/*Facebook icon by Icons8*/}
                        </a>
                        <a href="https://www.linkedin.com/in/mateus-dallacort-561601239/?originalSubdomain=br" alt="linkedin" target="_blank">
                            <img className={style.icon} src={linkedInIcon}/> {/*LinkedIn icon by Icons8*/}
                        </a>
                
                    </div>
                </div>
                <a href="https://www.instagram.com/jp.corso/" target="_blank">
                    <div className={style.creditos}>
                        Feito por: @jp.corso
                    </div>
                </a>
            </div>
        </div>
    )
    }
    export default Contact;