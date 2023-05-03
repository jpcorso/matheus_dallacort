import style from "./avaliacoes.module.css";
import Cliente from "../cliente"
import foto1 from "../../z_images/LOGO  1.png";
import React, { useState } from 'react';
import Carousel from 'react-elastic-carousel';
import Item from "./Item"

export default function Avaliacoes(){

    return(
        <div className={style.container}>
            <hr className={style.separator}/>
            <div className={style.carouselWrapper}>
                <Carousel 
                    itemsToShow={1} 
                    enableAutoPlay={true}
                    transitionMs={3000}
                    autoPlaySpeed={8000}
                    renderArrow={myArrow}
                    renderPagination={myPagination}
                    itemPadding={[10, 10]}
                    pagination={true}
                    isInfinite={true} // adicionado aqui
                >
                    <Item>
                        <img className={style.foto} src={foto1}/>
                        <div className={style.nome}>Gostei muito das aulas e pipipi</div>
                    </Item>
                    <Item>2</Item>
                    <Item>3</Item>
                    <Item>4</Item>
                    <Item>5</Item>
                    <Item>6</Item>
                </Carousel>
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
