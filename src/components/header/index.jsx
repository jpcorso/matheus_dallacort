import style from "./header.module.css"
import { Link} from 'react-router-dom';

export default function Header() {
    return (
        <div className={style.boxHeader}>
            <Link to="https://www.google.com" className={style.text}>Matheus Dallacort</Link>
            <Link to="https://www.google.com" className={style.text}>Cases</Link>
            <Link to="https://www.google.com" className={style.text}>Avaliações</Link>
            <Link to="https://www.google.com" className={style.text}>Contate-me</Link>
        </div>
    )
}