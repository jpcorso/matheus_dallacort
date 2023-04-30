import React, { useRef } from 'react';
import Header from "../../components/header";
import Banner from "../../components/banner";
import Avaliacoes from "../../components/avaliacoes";
import Servicos from "../../components/servicos";
import Contact from "../../components/contact";
import Footer from "../../components/footer";

import style from "./home.module.css"

export default function Home() {

  const homeRef = useRef(null);
  const servicosRef = useRef(null);
  const avaliacoesRef = useRef(null);
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
        onAvaliacoesClick={() => scrollToRef(avaliacoesRef)}
        onContactClick={() => scrollToRef(contactRef)}
      />
      </div>
      <div  ref={homeRef} className={style.banner}>
        <Banner/>
      </div>
      <div ref={servicosRef} className={style.servicos}>
        <Servicos />
      </div>
      <div ref={avaliacoesRef}>
        <Avaliacoes/>
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
