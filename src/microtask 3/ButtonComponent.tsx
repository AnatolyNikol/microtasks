import React from "react";

export const ButtonComponent = () => {
    // const myFirstSubscriber = () => {
    //     console.log('Hello I`m Vasya!')
    // }
    // const mySecondSubscriber = () => {
    //     console.log('Hello I`m Ivan!')
    // }

    const onClickHandler = (name: string) => {
        console.log(name)
    }

    // const func1 = () => {
    //     //ничего не передавать, но в консоли должно показаться 100200
    //     console.log(100200)
    // }
    //
    // const func2 = (value: number) => {
    //     //передать цифру 100200
    //     console.log(value)
    // }

    return (
        <>
            {/*<button onClick={(event) => {console.log('Hello')}}>MyYouTubeChanel-1</button>*/}

            <button onClick={(event) => onClickHandler('Vasya')}>MyYouTubeChanel-1</button>
            <button onClick={(event) => onClickHandler('Ivan')}>MyYouTubeChanel-2</button>
            {/*<button onClick={() => onClickHandler('some info')}>MyYouTubeChanel-3</button>*/}

            {/*<button onClick={func1}>Button1</button>*/}
            {/*<button onClick={() => func2(100200)}>Button2</button>*/}
        </>
    )
}
