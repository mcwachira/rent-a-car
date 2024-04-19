import React from "react";
import clsx from "clsx";


const variantStyles = {
    outlineClassName: "bg-red-500 hover:bg-transparent hover:text-red-500 hover:border-red-500",
    filledClassName: "border-red-500 text-red-500 bg-transparent hover:bg-red-500 hover:text-white hover:border-transparent",


};

// interface ButtonProps {
//
//     className:string,
//     href:string,
//     variant:string
// }

const Button = ({ variant='outline', className, href, ...props }:{variant:string, className:string, href:string, props:React.ReactNode}) => {
    className = clsx(
        "pl-5 pr-5 pt-3 pb-3 outline-none rounded-md text-white text-xs font-semibold border-transparent border-2 border-solid focus:outline-none transition-all duration-200 ease-in-out m-1",
        variantStyles[`${variant}ClassName`],
        className
    );
    return href ? (
        <a href={href} className={className} {...props} />
    ) : (
        <button className={className} {...props} />
    );
};

export default Button;