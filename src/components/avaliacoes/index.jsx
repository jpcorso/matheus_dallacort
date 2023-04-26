import style from "./avaliacoes.module.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Cliente from "../cliente"

import foto1 from "../../z_images/LOGO  1.png";


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

export default function Avaliacoes(){
    return(
        <div className={style.container}>
            <div className={style.title}>Avaliações</div>
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true} // updated line
                autoPlaySpeed={2000}
                keyBoardControl={true}
                renderButtonGroupOutside={true}
                focusOnSelect={false}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={"desktop"}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            

            >
                <div className={style.carouselItem}><Cliente
                                                        nome={"João"}
                                                        descricao={"aluno há 1 ano"}
                                                        mensagem={"amei as aulas dele"}
                                                        foto={foto1}
                                                    />
                </div>
                <div className={style.carouselItem}><Cliente
                                                        nome={"Renato"}
                                                        descricao={"aluno há 6 meses"}
                                                        mensagem={"profissional muito competente, obtive resultados incriveis"}
                                                        foto={foto1}
                                                    />
                </div>
                <div className={style.carouselItem}><Cliente
                                                        nome={"Claudia"}
                                                        descricao={"aluna há 5 ano"}
                                                        mensagem={"muito dedicado em ajudar na evolução dos alunos"}
                                                        foto={foto1}
                                                    /></div>
                <div className={style.carouselItem}><Cliente
                                                        nome={"Amanda"}
                                                        descricao={"aluna há 1 ano"}
                                                        mensagem={"excelente profissonal"}
                                                        foto={foto1}
                                                    />
                </div>
                <div className={style.carouselItem}><Cliente
                                                        nome={"Arthur"}
                                                        descricao={"aluno há 5 ano"}
                                                        mensagem={"impressionante o empenho com os alunos"}
                                                        foto={foto1}
                                                    />
                </div>
                <div className={style.carouselItem}><Cliente
                                                        nome={"Estevão"}
                                                        descricao={"aluno há 3 meses"}
                                                        mensagem={"notei a melhora na minha qualidade de vida após o trabalho"}
                                                        foto={foto1}
                                                    />
                </div>
            </Carousel>
        </div>
    );
}
