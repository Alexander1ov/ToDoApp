import React, { useState } from "react";

import MyButton from "../../interface/button/MyButton";
import MyInput from "../../interface/input/MyInput";

function NewCard({ build }) {
    const [card, setCard] = useState({ title: '', body: '' });
    const addNewCard = (e) => {
        e.preventDefault()
        const newCard = {
            ...card, id: Date.now()
        }
        build(newCard)
        setCard({ title: '', body: '' })
    }
    return (
        <div className="catalog">
            <form>
                <MyInput
                    value={card.title}
                    onChange={e => setCard({ ...card, title: e.target.value })}
                    type="text"
                    placeholder="Название карточки"
                />
                <MyInput
                    value={card.body}
                    onChange={e => setCard({ ...card, body: e.target.value })}
                    type="text"
                    placeholder="Описание карточки"
                />
                <MyButton onClick={addNewCard}>Создать карточку</MyButton>
            </form>
        </div>
    );
}
export default NewCard;