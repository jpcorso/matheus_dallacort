import style from "./banner.module.css"

import banner from "../../z_images/banner.svg"

export default function Banner(){
    return(
        <div className={style.container}>
            <img className={style.banner} src={banner} alt="banner"/>
        </div>
    )
}