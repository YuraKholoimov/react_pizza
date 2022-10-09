import React from "react";

export function Categories() {
    const [active, setActive] = React.useState(0)
    const arr = ["Все", "Мясные", "Вегетарианские", "Гриль", "Острые", "Закрытые"];

    const onClickSetActiveBtn = (index) => {
        setActive(index)
    }

    return <div className="categories">
        <ul>
            {
                arr.map((item, index) => <li onClick={() => onClickSetActiveBtn(index)} className={active === index ? 'active' : ''}>{item}</li>)
            }
        </ul>
    </div>
}