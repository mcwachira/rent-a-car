import React from "react";

interface IButtonProps {
    theme?: "filled" | "outlined";
    text: string;
    className?: string;
}


function Button(props: IButtonProps) {
    const { theme, text, className } = props;

    const baseClasses ='px-5 py-3 rounded-md text-xs font-semibold outline-none transition-all duration-200 ease-in-out m-1';


    const buttonClasses = theme === "filled" ? "bg-red-500 text-white hover:bg-transparent hover:text-red-500 hover:border-transparent border-red-500 border-2 border-solid" : "border-red-500 text-red-500 hover:bg-red-500 hover:text-white hover:border-transparent"

    return (
        <button className={`${baseClasses} ${buttonClasses} ${className}`}> {text} </button>
    );
}

export default Button