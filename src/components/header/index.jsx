import style from "./header.module.css";
import { Link } from "react-router-dom";
import logo from "../../z_images/LOGO  1.png"

export default function Header(props) {
  return (
    <div className={style.boxHeader}>
      <Link to="/" className={style.logo}>
        <img src={logo} alt='logo'/>
      </Link>
      <Link to="/" className={style.text} onClick={props.onResultadosClick}>
        Resultados
      </Link>
      <Link to="/" className={style.text} onClick={props.onAvaliacoesClick}>
        Avaliações
      </Link>
      <Link to="/" className={style.text} onClick={props.onContactClick}>
        Contate-me
      </Link>
    </div>
  );
}
