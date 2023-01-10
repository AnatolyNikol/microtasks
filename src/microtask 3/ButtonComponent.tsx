import React from "react";

export const ButtonComponent = () => {
    const myFirstSubscriber = () => {
        console.log('Hello I`m Vasya!')
    }

    return (
        <>
            {/*<button onClick={(event) => {console.log('Hello')}}>MyYouTubeChanel-1</button>*/}
            <button onClick={myFirstSubscriber}>MyYouTubeChanel-1</button>
        </>
    )
}
