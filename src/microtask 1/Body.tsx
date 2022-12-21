import React from "react";

type BodyTitleType = {
    titleForBody: string
}

export const Body = (props: BodyTitleType) => {
    return (
        <>
            {props.titleForBody}
        </>
    )
}