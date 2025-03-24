import * as React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> { }


const DSalesIcon: React.FC<IconProps> = (props) => (
    <svg
        width={22}
        height={20}
        viewBox="0 0 22 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M18 3.8965V0.5C18 0.224 17.776 0 17.5 0H14.1035C13.881 0 13.769 0.2695 13.9265 0.427L17.573 4.0735C17.7305 4.2305 18 4.119 18 3.8965Z"
            fill="#007AD9"
        />
        <path
            d="M21.5 19.5H0.5C0.224 19.5 0 19.276 0 19V10C0 9.724 0.224 9.5 0.5 9.5H21.5C21.776 9.5 22 9.724 22 10V19C22 19.276 21.776 19.5 21.5 19.5Z"
            fill="#61E3A7"
        />
        <path
            d="M2.5 9.5V19.5H19.5V9.5H2.5ZM8.5 18C6.567 18 5 16.433 5 14.5C5 12.567 6.567 11 8.5 11C10.433 11 12 12.567 12 14.5C12 16.433 10.433 18 8.5 18ZM17.75 18C17.336 18 17 17.664 17 17.25C17 16.836 17.336 16.5 17.75 16.5C18.164 16.5 18.5 16.836 18.5 17.25C18.5 17.664 18.164 18 17.75 18ZM15.75 18C15.336 18 15 17.664 15 17.25C15 16.836 15.336 16.5 15.75 16.5C16.164 16.5 16.5 16.836 16.5 17.25C16.5 17.664 16.164 18 15.75 18Z"
            fill="#33C481"
        />
        <path
            d="M11.293 6.707L8.5 3.914L5.5605 6.8535C5.365 7.049 5.0485 7.049 4.8535 6.8535L4.1465 6.1465C3.951 5.951 3.951 5.6345 4.1465 5.4395L7.793 1.793C8.1835 1.4025 8.8165 1.4025 9.207 1.793L12 4.586L15.293 1.293L16.707 2.707L12.707 6.707C12.3165 7.0975 11.6835 7.0975 11.293 6.707Z"
            fill="#007AD9"
        />
    </svg>
);
export default DSalesIcon;
