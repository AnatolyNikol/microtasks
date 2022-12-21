import React from "react";

type HeaderTitleType = {
    titleForHeader: string
}

export const Header = (props: HeaderTitleType) => {
    return (
        <>
            {props.titleForHeader}
        </>
    )
}