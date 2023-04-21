import style from "./header.module.css";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <div className={style.boxHeader}>
      <Link to="/" className={style.text}>
        Matheus Dallacort
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
