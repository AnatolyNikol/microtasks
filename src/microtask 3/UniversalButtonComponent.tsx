import React from "react";

type UniversalButtonComponentType = {
    name: string
    callBack: () => void
}

const UniversalButtonComponent = (props: UniversalButtonComponentType) => {

    const onclickHandler = () => {
        props.callBack()
    }

    return (
        <>
            <button onClick={onclickHandler}>{props.name}</button>
        </>
    )
}

export default UniversalButtonComponent
