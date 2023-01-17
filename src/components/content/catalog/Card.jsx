import React from "react";

import MyButton from "../../interface/button/MyButton";

import styles from '../Content.module.css'

const Card = ({ number, card, remove }) => {
    const clickHandler = () => {
        remove(card)
    }
    return (
        <div className={styles.card}>
            <div className={styles.card__content}>
                <h3>{number} {card.title}</h3>
                <div>{card.body}</div>
            </div>
            <div className={styles.card__btns}>
                <MyButton  onClick={clickHandler}>Удалить</MyButton>
            </div>
        </div>
    );
}
export default Card;