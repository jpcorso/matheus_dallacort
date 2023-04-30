import style from "./servicos.module.css"

import logo from "../../z_images/LOGO_4.png"

function Servicos() {
    return (
      <div className={style.container}>
        <h1 className={style.title}>Serviços</h1>
        <div className={style.boxServicos}>

          <div className={style.item}>
            <img className={style.icone} src={logo}/>
            Treinos Personalizados
          </div>
          <div className={style.item}>
            <img className={style.icone} src={logo}/>
            Avaliações Físicas e posturais
          </div>

          <div className={style.item}>
            <img className={style.icone} src={logo}/>
            Acompanhamento diário
          </div>

        </div>
      </div>
    );
  }
  
  export default Servicos;