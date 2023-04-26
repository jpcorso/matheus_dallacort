import style from "./contact.module.css"

import React, { useState } from "react";


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
            <p className={style.title}>Contate-me</p>
            <div className={style.boxContact}>
                <form
                    action={ENDPOINT}
                    onSubmit={handleSubmit}
                    method="POST"
                    target="_blank"
                    name="contact"
                    data-netlify="true"
                >
                    <input
                        type="text"
                        placeholder="Nome"
                        name="nome"
                        className={style.textContact}
                        required
                    />
                    <input
                        type="text"
                        placeholder="E-mail"
                        name="email"
                        className={style.textContact}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Mensagem"
                        name="Mensagem"
                        className={style.textContact}
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
            <div className={style.boxContact}>
                <form
                    action={ENDPOINT}
                    onSubmit={handleSubmit}
                    method="POST"
                    target="_blank"
                    name="contact"
                    data-netlify="true"
                >
                    <input
                        type="text"
                        placeholder="Nome"
                        name="nome"
                        className={style.textContact}
                        required
                    />
                    <input
                        type="text"
                        placeholder="E-mail"
                        name="email"
                        className={style.textContact}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Mensagem"
                        name="Mensagem"
                        className={style.textContact}
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
    )
    }
    export default Contact;