import React from "react";

type FooterTitleType = {
    titleForFooter: string
}

export const Footer = (props: FooterTitleType) => {
    return (
        <>
            {props.titleForFooter}
        </>
    )
}