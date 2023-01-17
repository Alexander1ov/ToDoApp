import React from "react";

import MyInput from "../../interface/input/MyInput";
import MySelect from "../../interface/select/MySelect";

const CardFilter = ({ filter, setFilter }) => {
    const changeInputHandler = (e) => {
        setFilter({ ...filter, query: e.target.value })
    };
    const changeSelectHandler = (selectedSort) => {
        setFilter({ ...filter, sort: selectedSort })
    }
    return (
        <div className="">
            <MyInput
                value={filter.query}
                onChange={changeInputHandler}
                placeholder="Поиск"
            />
            <MySelect
                value={filter.sort}
                onChange={changeSelectHandler}
                defaultValue="Сортировка"
                options={[
                    { value: 'title', name: 'По названию' },
                    { value: 'body', name: 'По содержанию' }
                ]}
            />
        </div>
    );
}
export default CardFilter;