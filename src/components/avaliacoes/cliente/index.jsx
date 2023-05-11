import React from "react";
import style from "./cliente.module.css";

export default function Cliente({ nome, descricao, mensagem, foto, antes, depois }) {
  return (
    <div className={style.container}>
      <img className={style.foto} src={foto} alt="cliente" />
      <div className={style.nome}>{nome}</div>
      <div className={style.descricao}>{descricao}</div>
      <div className={style.mensagem}>{mensagem}</div>
      <div className={style.boxResultado}>
        <div className={style.antes}>
          <img className={style.fotoResultado} src={antes} alt='antes'/>
          Antes
        </div>
        <div className={style.depois}>
          <img className={style.fotoResultado} src={depois} alt='depois'/>
          Depois
        </div>
      </div>
    </div>
  );
}
