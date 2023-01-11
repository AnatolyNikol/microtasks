import React from "react";

export const Hook = () => {
    let a = 1;

    const onClickHandler = () => {
        ++a;
        console.log(a)
    }

    return (
        <>
            <h1>{a}</h1>
            <button onClick={onClickHandler}>number</button>
        </>
    )
}