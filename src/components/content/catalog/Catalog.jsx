import React, { useMemo, useState } from "react";

import DataCards from "./DataCards"

import CardList from "./CardList";
import NewCard from "./NewCard";
import CardFilter from "./CardFilter";

import MyBox from "../../interface/box/MyBox";
import MyButton from "../../interface/button/MyButton";
// Переделать импорты и функцию

function Catalog() {
    const [cards, setCards] = useState(DataCards);
    const [filter, setFilter] = useState({ sort: '', query: '' })
    const [box, setBox] = useState(false)

    const sortedCards = useMemo(() => {
        if (filter.sort) {
            return [...cards].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))   //localeCompare() возвращает число, указывающее, должна ли данная строка находиться до, после или в том же самом месте, что и строка, переданная через параметр, при сортировке этих строк.
        }
        return cards
    }, [filter.sort, cards])

    const sortedSearchCards = useMemo(() => {
        return sortedCards.filter(cards => cards.title.toLowerCase().includes(filter.query))
    }, [filter.query, sortedCards])

    const buildCard = (newCard) => {
        setCards([...cards, newCard])
        setBox(false)
    }

    const removeCard = (card) => {
        setCards(cards.filter(c => c.id !== card.id))
    }

    return (
        <div className="catalog">
            <MyButton
                onClick={() => setBox(true)}>
                Заполнить карточку
            </MyButton>
            {box &&
                <MyBox
                    setVisible={setBox}
                >
                    <NewCard build={buildCard} />
                </MyBox>}

            <CardFilter
                filter={filter}
                setFilter={setFilter}
            />
            <CardList remove={removeCard} cards={sortedSearchCards} title="Список карточек React JS" />
        </div>
    );
}
export default Catalog;