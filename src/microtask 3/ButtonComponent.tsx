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

    return (
        <>
            {/*<button onClick={(event) => {console.log('Hello')}}>MyYouTubeChanel-1</button>*/}
            <button onClick={(event) => onClickHandler('Vasya')}>MyYouTubeChanel-1</button>
            <button onClick={(event) => onClickHandler('Ivan')}>MyYouTubeChanel-2</button>
            <button onClick={() => onClickHandler('some info')}>MyYouTubeChanel-3</button>
        </>
    )
}
