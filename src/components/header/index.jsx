import style from "./header.module.css";
import { Link } from "react-router-dom";
import logo from "../../z_images/LOGO  1.png"

export default function Header(props) {
  return (
    <div className={style.boxHeader}>
      <Link to="/" className={style.logo} onClick={props.onLogoClick}>
        <img src={logo} alt='logo'/>
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
    </div>
  );
}
