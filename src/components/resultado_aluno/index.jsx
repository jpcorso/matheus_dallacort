import style from "../resultado_aluno/resultado_aluno.module.css"

export default function Aluno({nome, antes, depois}){
    return(
        <div className={style.projeto}>
            <div className={style.title}>{nome}</div>
            <div className="fundo-projeto">
                <div className={style.boxFotos}>
                    <img className={style.foto} src={antes} alt="antes"/>
                    <img className={style.foto} src={depois} alt="depois"/>
                
                </div>
            </div>
        </div>
    )
}