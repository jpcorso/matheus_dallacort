import React, { useRef } from 'react';
import Header from "../../components/header";
import Banner from "../../components/banner";
import Avaliacoes from "../../components/avaliacoes";
import Servicos from "../../components/servicos";
import Sobre from '../../components/sobre';
import Contact from "../../components/contact";
import "../../index.css"  //globals

import style from "./home.module.css"

export default function Home() {

  const homeRef = useRef(null);
  const servicosRef = useRef(null);
  const resultadosRef = useRef(null);
  const sobreRef = useRef(null)
  const contactRef = useRef(null);


  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={style.container}>
      <div className={style.header}>
      <Header 
        onLogoClick={() => scrollToRef(homeRef)}
        onServicosClick={() => scrollToRef(servicosRef)}
        onResultadosClick={() => scrollToRef(resultadosRef)}
        onSobreClick={() => scrollToRef(sobreRef)}
        onContactClick={() => scrollToRef(contactRef)}
      />
      </div>
      <div  ref={homeRef} className={style.banner}>
        <Banner/>
      </div>
      <div ref={servicosRef} className={style.servicos}>
        <Servicos />
      </div>
      <div ref={resultadosRef}>
        <Avaliacoes/>
      </div>
      <div ref={sobreRef}>
        <Sobre />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
}
