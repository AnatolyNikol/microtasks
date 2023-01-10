import React from "react";

type UniversalButtonComponentType = {
    name: string
}

const UniversalButtonComponent = (props: UniversalButtonComponentType) => {
    return (
        <>
            <button>{props.name}</button>
        </>
    )
}

export default UniversalButtonComponent
