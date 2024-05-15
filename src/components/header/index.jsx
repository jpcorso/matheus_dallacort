import { useState, useEffect } from 'react';
import style from "./header.module.css";
import { Link } from "react-router-dom";
import logo from "../../z_images/LOGO  1.png";

export default function Header(props) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 460);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 460);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={style.boxHeader}>
      {isMobile ? (
        <div>
          <div className={style.hamburgerMenu} onClick={handleMenuClick}>
            <div className={style.line}></div>
            <div className={style.line}></div>
            <div className={style.line}></div>
          </div>
          {menuOpen && (
            <div className={style.mobileMenu}>
              <Link to="/" className={style.text} onClick={props.onServicosClick}>
                Serviços
              </Link>
              <Link to="/" className={style.text} onClick={props.onResultadosClick}>
                Resultados
              </Link>
              <Link to="/" className={style.text} onClick={props.onSobreClick}>
                Sobre
              </Link>
              <Link to="/" className={style.text} onClick={props.onContactClick}>
                Contate-me
              </Link>
            </div>
          )}
        </div>
      ) : (
        <>
          <Link to="/" className={style.logo} onClick={props.onLogoClick}>
            <img src={logo} alt='logo' />
          </Link>
          <Link to="/" className={style.text} onClick={props.onServicosClick}>
            Serviços
          </Link>
          <Link to="/" className={style.text} onClick={props.onResultadosClick}>
            Resultados
          </Link>
          <Link to="/" className={style.text} onClick={props.onSobreClick}>
            Sobre
          </Link>
          <Link to="/" className={style.text} onClick={props.onContactClick}>
            Contate-me
          </Link>
        </>
      )}
    </div>
  );
}
