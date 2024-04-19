import React from 'react';


export interface IMarginerProps{
    margin?:number | string;
    direction?: "horizontal" | "vertical"
}
function Marginer(props:IMarginerProps) {

    const {direction, margin} = props;

    const marginClass = typeof margin === "string" ? margin : margin !== undefined ? `${margin}px`: "";
    console.log(marginClass)
    return (
        <div
            className={`${direction === "horizontal" ? "flex" : ""} 
                 ${marginClass ? `min-${direction === "horizontal" ? "w" : "h"}-${marginClass}` : ""}`}
        />
    );
}

export default Marginer;