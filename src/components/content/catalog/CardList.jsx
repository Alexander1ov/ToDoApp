import React from "react";

import Card from "./Card";

import styles from '../Content.module.css'

function CardList({ cards, title, remove }) {
    return !cards.length ?
        <h1 className={styles.headerH1}>
            Карточек нет
        </h1> :
        <>
            <h1 className={styles.headerH1}>
                {title}
            </h1>
            <div className={styles.catalog__content}>
                {cards.map((card, index) =>
                    <Card remove={remove} number={index + 1} card={card} key={card.id} />
                )}
            </div>
        </>
}
export default CardList;