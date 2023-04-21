import React, { useRef } from 'react';
import Header from "../../components/header";
import Banner from "../../components/banner";
import Resultados from "../../components/resultados";
import Avaliacoes from "../../components/avaliacoes";
import Contact from "../../components/contact";
import Footer from "../../components/footer";

import style from "./home.module.css"

export default function Home() {
  const resultadosRef = useRef(null);
  const avaliacoesRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={style.container}>
      <Header 
        onResultadosClick={() => scrollToRef(resultadosRef)}
        onAvaliacoesClick={() => scrollToRef(avaliacoesRef)}
        onContactClick={() => scrollToRef(contactRef)}
      />
      <Banner />
      <div ref={resultadosRef}>
        <Resultados />
      </div>
      <div ref={avaliacoesRef}>
        <Avaliacoes />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
