import React, { ReactNode } from "react";

interface TooltipProps {
    text: string;
    children: ReactNode;
    bgColor?: string;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children, bgColor = "gray-900" }) => {
    return (
        <div className="relative group inline-block">
            {children}

            <div className={`absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block whitespace-nowrap bg-${bgColor} text-white text-xs py-1 px-2 rounded-md shadow-lg`}>
                {text}
                <div className={`absolute left-1/2 -translate-x-1/2 top-full border-4 border-transparent border-t-${bgColor}`}></div>
            </div>
        </div>
    );
};

export default Tooltip;
