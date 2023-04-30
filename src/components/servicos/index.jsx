import style from "./servicos.module.css"

import logo from "../../z_images/LOGO_4.png"
import logo1 from "../../z_images/LOGO  1.png"
import logo2 from "../../z_images/LOGO  2.png"

function Servicos() {
    return (
      <div className={style.container}>
        <h1 className={style.title}>Serviços</h1>
        <div className={style.boxServicos}>
          <div className={style.item}>
            <img className={style.icone} src={logo}/>
            Treinos<br/>
            Personalizados
          </div>
          <div className={style.item}>
            <img className={style.icone} src={logo1}/>
            Avaliações Físicas<br/>
            e posturais
          </div>

          <div className={style.item}>
            <img className={style.icone} src={logo2}/>
            Acompanhamento<br/>
            diário
          </div>

        </div>
      </div>
    );
  }
  
  export default Servicos;