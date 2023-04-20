import style from "./contact.module.css"

import React, { useState } from "react";

export default function Contact(){
    return(
        <div className={style.container}>
            <p className={style.title}>Contate-me</p>
            <div className={style.boxContact}>
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
            </div>
            <div className={style.boxContato}>
            </div>
        </div>
    )
}