import style from "./home.module.css"
import Header from "../../components/header"
import Footer from "../../components/footer"

export default function Home() {
    return (
        <div className={style.container}>
            <Header/>
        </div>
    )
}