import React from "react";
import style from "./cliente.module.css";

export default function Cliente({ nome, descricao, mensagem, foto }) {
  return (
    <div className={style.container}>
      <img className={style.foto} src={foto} alt="cliente" />
      <div className={style.nome}>{nome}</div>
      <div className={style.descricao}>{descricao}</div>
      <div className={style.mensagem}>{mensagem}</div>
    </div>
  );
}
