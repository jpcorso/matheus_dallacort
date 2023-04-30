import React, { useRef } from 'react';
import Header from "../../components/header";
import Banner from "../../components/banner";
import Resultados from "../../components/resultados";
import Avaliacoes from "../../components/avaliacoes";
import Sobre from '../../components/sobre';
import Contact from "../../components/contact";
import Footer from "../../components/footer";

import style from "./home.module.css"

export default function Home() {

  const homeRef = useRef(null);
  const resultadosRef = useRef(null);
  const avaliacoesRef = useRef(null);
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
        onResultadosClick={() => scrollToRef(resultadosRef)}
        onAvaliacoesClick={() => scrollToRef(avaliacoesRef)}
        onSobreClick={() => scrollToRef(sobreRef)}
        onContactClick={() => scrollToRef(contactRef)}
      />
      </div>
      <div  ref={homeRef} className={style.banner}>
        <Banner/>
      </div>
      <div ref={resultadosRef} className={style.Resultados}>
        <Resultados />
      </div>
      <div ref={avaliacoesRef}>
        <Avaliacoes />
      </div>
      <div ref={sobreRef}>
        <Sobre />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
