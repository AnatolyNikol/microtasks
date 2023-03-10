import React, {useState} from "react";

export const Hook = () => {
    // let a = 1;

    let[a, setA] = useState(1)

    const onClickHandler = () => {
        setA(++a);
        console.log(a)
    }

    const zeroHandler = () => {
        setA(0);
    }

    return (
        <>
            <h1>{a}</h1>
            <button onClick={onClickHandler}>number</button>
            <button onClick={zeroHandler}>0</button>
        </>
    )
}