//style
import style from "./home.module.css"
//components
import Header from "../../components/header"
import Footer from "../../components/footer"
import Contact from "../../components/contact"

export default function Home() {
    return (
        <div className={style.container}>
            <Header/>
            <Contact/>
        </div>
    )
}