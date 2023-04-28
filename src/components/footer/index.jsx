import style from "./footer.module.css"
import logo from "../../z_images/LOGO  1.png"

export default function Footer(){

    return(
        <div className={style.container}>
            <img className={style.logo} src={logo}/>
            <div className={style.redesSociais}>
                <div className={style.textRedesSociais}>
                Me siga nas redes sociais
                </div>
                <div className={style.iconRedesSociais}>
                    <p>Insta</p>
                    <p>Facebook</p>
                </div>
            </div>
            <div className={style.creditos}>
                Feito por: @jp.corso
            </div>
        </div>
    )
}