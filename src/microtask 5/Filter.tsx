import React, {useState} from "react";

export const Filter = () => {

    const [money, setMoney] = useState([
        {banknote: "dollar", nominal: 100, number: "a123456789"},
        {banknote: "dollar", nominal: 50, number: "b123456789"},
        {banknote: "ruble", nominal: 100, number: "c123456789"},
        {banknote: "dollar", nominal: 100, number: "d123456789"},
        {banknote: "dollar", nominal: 50, number: "e123456789"},
        {banknote: "ruble", nominal: 100, number: "f123456789"},
        {banknote: "dollar", nominal: 50, number: "j123456789"},
        {banknote: "ruble", nominal: 50, number: "h123456789"}
    ])

    const [filter, setFilter] = useState('all')

    let currentMoney = money;
    if (filter === 'Dollar') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === 'dollar')
    }
    if (filter === 'Ruble') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === 'ruble')
    }

    const onClickFilterHandler = (buttonName:string) => {
        setFilter(buttonName)
    }

    return (
        <>
            <ul>
                {currentMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span> {objFromMoneyArr.banknote}</span>
                            <span> {objFromMoneyArr.nominal}</span>
                            <span> {objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
                    <button onClick={() => onClickFilterHandler("All")}>All</button>
                    <button onClick={() => onClickFilterHandler("Ruble")}>Ruble</button>
                    <button onClick={() => onClickFilterHandler("Dollar")}>Dollar</button>
            </ul>
        </>
    )
}