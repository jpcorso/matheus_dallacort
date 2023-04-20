import style from "./header.module.css"
import { Link} from 'react-router-dom';

export default function Header() {
    return (
        <Link to="https://www.google.com" className={style.text}>Matheus Dallacort</Link>
    )
}