import style from "./servicos.module.css"

//icones por Fox Design: https://iconscout.com/icon-pack/gym-and-fitness-3
import calendario from "../../z_images/gym-schedule.svg"
import fitaMetrica from "../../z_images/measure-tape.svg"
import halter from "../../z_images/dumbbell.svg"

//carousel com videos
import Carousel from 'react-elastic-carousel';
import Item from './Item'

function Servicos() {
    return (
      <div className={style.container}>
        <div className={style.title}>Serviços</div>
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

        <div className={style.videosBox}>
        <div className={style.containerCarousel}>
            <div className={style.carouselWrapper}>
                <Carousel 
                    itemsToShow={1} 
                    enableAutoPlay={false}
                    transitionMs={2000}
                    autoPlaySpeed={8000}
                    renderArrow={myArrow}
                    renderPagination={myPagination}
                    itemPadding={[10, 10]}
                    pagination={true}
                    isInfinite={true} // adicionado aqui
                >
                    <Item className={style.carouselItem}>
              
                    </Item>
                    <Item className={style.carouselItem}>
                      
                    </Item>
                    <Item className={style.carouselItem}>
                      
                    </Item>
              
                </Carousel>
            </div>   
        </div>
        </div>

      </div>
    );

    function myArrow({ type, onClick, isEdge }) {
      const pointer = type === 'PREV' ? '<' : '>'
      return (
        <button onClick={onClick} disabled={isEdge} className={style.arrow}>{pointer}</button>
      )
    }

    function myPagination({ pages, activePage, onClick }) {
        return (
          <div className={style.pagination}>
            {pages.map(page => {
              const isActivePage = activePage === page
              return (
                <button key={page} onClick={() => onClick(page)} className={isActivePage ? style.activePage : style.inactivePage}/>
              )
            })}
          </div>
        )
    }
  }
  
  export default Servicos;