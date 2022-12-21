import React from "react";

type HeaderTitleType = {
    title: string
}

export const Header = (props: HeaderTitleType) => {
    return (
        <>
            {props.title}
        </>
    )
}