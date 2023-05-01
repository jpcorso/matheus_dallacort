import style from "./servicos.module.css"

//icones por Fox Design: https://iconscout.com/icon-pack/gym-and-fitness-3
import calendario from "../../z_images/gym-schedule.svg"
import fitaMetrica from "../../z_images/measure-tape.svg"
import halter from "../../z_images/dumbbell.svg"

function Servicos() {
    return (
      <div className={style.container}>
        <h1 className={style.title}>Serviços</h1>
        <div className={style.boxServicos}>

          <div className={style.item}>
            <img className={style.icone} src={halter}/>
            <div className={style.textItem}>Treinos<br/>
            Personalizados
            </div>
          </div>

          <div className={style.item}>
            <img className={style.icone} src={fitaMetrica}/>
            <div className={style.textItem}>Avaliações Físicas<br/>
            e posturais</div>
          </div>

          <div className={style.item}>
            <img className={style.icone} src={calendario}/>
            <div className={style.textItem}>Acompanhamento<br/>
            diário
            </div>
          </div>

        </div>
      </div>
    );
  }
  
  export default Servicos;