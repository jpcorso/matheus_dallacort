import style from "./avaliacoes.module.css";
import Cliente from "../cliente"
import logo from "../../z_images/LOGO  1.png";
import React, { useState } from 'react';
import Carousel from 'react-elastic-carousel';
import Item from "./Item"

import foto1 from "../../z_images/pessoa.jpeg"

export default function Avaliacoes(){

    return(
        <div className={style.container}>
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
                    <Item className={style.carouselItem}>
                      <Cliente nome='Nome'
                               mensagem='Lorem ipsum dolor, sit amet consectetur
                               adipisicing elit. Molestias perspiciatis praesentium 
                               reiciendis porro, tempore ipsam cumque repellat nemo et
                               voluptate obcaecati? Quam iure asperiores magni distinctio
                               commodi libero minus delectus.'
                               descricao='cliente há 3 anos'
                               foto={foto1}
                      />
                    </Item>
                    <Item className={style.carouselItem}>
                      <Cliente nome='Nome'
                               mensagem='Lorem ipsum dolor, sit amet consectetur
                               adipisicing elit. Molestias perspiciatis praesentium 
                               reiciendis porro, tempore ipsam cumque repellat nemo et
                               voluptate obcaecati? Quam iure asperiores magni distinctio
                               commodi libero minus delectus.'
                               descricao='cliente há 3 anos'
                               foto={foto1}
                      /> 
                    </Item>
                    <Item className={style.carouselItem}>
                      <Cliente nome='Nome'
                               mensagem='Lorem ipsum dolor, sit amet consectetur
                               adipisicing elit. Molestias perspiciatis praesentium 
                               reiciendis porro, tempore ipsam cumque repellat nemo et
                               voluptate obcaecati? Quam iure asperiores magni distinctio
                               commodi libero minus delectus.'
                               descricao='cliente há 3 anos'
                               foto={foto1}
                      />
                    </Item>
                    <Item className={style.carouselItem}>
                      <Cliente nome='Nome'
                               mensagem='Lorem ipsum dolor, sit amet consectetur
                               adipisicing elit. Molestias perspiciatis praesentium 
                               reiciendis porro, tempore ipsam cumque repellat nemo et
                               voluptate obcaecati? Quam iure asperiores magni distinctio
                               commodi libero minus delectus.'
                               descricao='cliente há 3 anos'
                               foto={foto1}
                      />
                    </Item>
                    <Item className={style.carouselItem}>
                      <Cliente nome='Nome'
                               mensagem='Lorem ipsum dolor, sit amet consectetur
                               adipisicing elit. Molestias perspiciatis praesentium 
                               reiciendis porro, tempore ipsam cumque repellat nemo et
                               voluptate obcaecati? Quam iure asperiores magni distinctio
                               commodi libero minus delectus.'
                               descricao='cliente há 3 anos'
                               foto={foto1}
                      />
                    </Item>
                    <Item className={style.carouselItem}>
                      <Cliente nome='Nome'
                               mensagem='Lorem ipsum dolor, sit amet consectetur
                               adipisicing elit. Molestias perspiciatis praesentium 
                               reiciendis porro, tempore ipsam cumque repellat nemo et
                               voluptate obcaecati? Quam iure asperiores magni distinctio
                               commodi libero minus delectus.'
                               descricao='cliente há 3 anos'
                               foto={foto1}
                      />
                    </Item>
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
