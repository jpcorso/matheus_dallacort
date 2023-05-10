import style from "./servicos.module.css"

//icones por Fox Design: https://iconscout.com/icon-pack/gym-and-fitness-3
import calendario from "../../z_images/gym-schedule.svg"
import fitaMetrica from "../../z_images/measure-tape.svg"
import halter from "../../z_images/dumbbell.svg"

//carousel com videos
import Carousel from 'react-elastic-carousel';
import Item from './Item'
import VideoPlayer from "../videoPlayer";
import Video from "../video";

import React, {useState} from "react"



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


export default function Servicos() {

  const [videos] = useState([
    {
      id: 1,
      videoURL: "https://www.youtube.com/embed/watch?v=kmzStpkxkBM?showinfo=0&enablejsapi=1&origin=http://localhost:3000",
    },
    {
      id: 2,
      videoURL: "https://www.youtube.com/embed/watch?v=kmzStpkxkBM?showinfo=0&enablejsapi=1&origin=http://localhost:3000",
    },
    {
      id: 3,
      videoURL: "https://www.youtube.com/embed/watch?v=kmzStpkxkBM?showinfo=0&enablejsapi=1&origin=http://localhost:3000",
    },
  ]);

  const renderVideo = ({ id, videoURL }) => {
    return (
      <div key={id}>
        <Video videoURL={videoURL} />
      </div>
    );
  };

  return (
    <div className={style.container}>
      <div className={style.title}>Serviços</div>
      <div className={style.boxServicos}>
        <div className={style.item}>
          <img className={style.icone} src={halter} />
          <div className={style.textItem}>
            Treinos
            <br />
            Personalizados
          </div>
        </div>
        <div className={style.item}>
          <img className={style.icone} src={fitaMetrica} />
          <div className={style.textItem}>
            Avaliações Físicas
            <br />
            e posturais
          </div>
        </div>
        <div className={style.item}>
          <img className={style.icone} src={calendario} />
          <div className={style.textItem}>Acompanhamento</div>
        </div>
      </div>
        <div className={style.carouselWrapper}>
          {/* Aqui está o carousel */}
          <Carousel
            itemsToShow={1}
            renderArrow={myArrow}
            renderPagination={myPagination}
            itemPadding={[10, 10]}
            pagination={true}
          >
            <Item>
              <Video
                videoURL={"https://www.youtube.com/watch?v=kmzStpkxkBM?showinfo=0&"}/>
            </Item>
            <Item>
              <Video
                videoURL={"https://www.youtube.com/watch?v=kmzStpkxkBM?showinfo=0&"}/>
            </Item>
            <Item>
              <Video
                videoURL={"https://www.youtube.com/watch?v=kmzStpkxkBM?showinfo=0&"}/>
            </Item>
          </Carousel>
        </div>
      </div>
  );
}
