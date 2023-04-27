import style from "./resultados.module.css"
import Aluno from "../resultado_aluno"

import Antes1 from "../../z_images/resultados/antes_desenho.jpeg"
import Depois1 from "../../z_images/resultados/depois_desenho.jpg"

function Portfolio() {
    return (
      <div className={style.container}>
        <h1>Meu Portfolio</h1>
        <div className={style.boxProjetos}>
            <div className={style.linhaProjetos}>
              <Aluno nome={"Nome"}
                      antes={Antes1}
                      depois={Depois1}
              />
              <Aluno nome={"Nome"}
                          antes={Antes1}
                          depois={Depois1}
              />
              <Aluno nome={"Nome"}
                          antes={Antes1}
                          depois={Depois1}
              />
            </div>
            <div className={style.linhaProjetos}>
              <Aluno nome={"Nome"}
                     antes={Antes1}
                     depois={Depois1}
              />
              <Aluno nome={"Nome"}
                          antes={Antes1}
                          depois={Depois1}
              />
              <Aluno nome={"Nome"}
                          antes={Antes1}
                          depois={Depois1}
              />
            </div>
        </div>
      </div>
    );
  }
  
  export default Portfolio;