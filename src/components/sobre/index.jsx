import style from "../sobre/sobre.module.css"
import foto from "../../z_images/personal.jpeg"

export default function Sobre(){
    return(
        <div className={style.container}>
            <div className={style.title}>
                Sobre
                <div className={style.boxSobre}>
                    <div className={style.nameAndFoto}>
                        <img className={style.foto} src={foto}/>
                        <div className={style.nome}>Matheus Dallacort</div>
                    </div>
                    <div className={style.texto}>
                        "Sou personal há tantos anos e pipipi popopo
                        fiz faculdade de educação fisica e coisarada
                        tanto de experiencia, mais de 30 alunos satisfeitos
                        e tudo mais ta ligado porque aqui o negocio é louco
                        sabe como é Lorem ipsum dolor sit, amet consectetur 
                        adipisicing elit. Voluptates eos obcaecati cum accusamus
                         quidem sed deleniti alias minima, laudantium quae voluptatibus 
                         ad doloribus distinctio blanditiis exercitationem hic quaerat 
                         totam impedit."
                    </div>
                </div>
            </div>
        </div>
    )
}