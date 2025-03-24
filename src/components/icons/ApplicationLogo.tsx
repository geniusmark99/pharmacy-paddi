import React from 'react';

interface ApplicationLogoProps extends React.SVGProps<SVGSVGElement> { }

const ApplicationLogo: React.FC<ApplicationLogoProps> = (props) => (
    <svg
        {...props}
        width="115"
        height="31"
        viewBox="0 0 115 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M31.4378 25.9545H21.0895C19.2753 25.3084 17.9756 23.5744 17.9756 21.5367C17.9756 21.3269 17.9922 21.1171 18.0198 20.9127L19.8616 17.7761L22.6824 12.9773L31.4378 25.9545Z" />
        <path d="M21.0175 9.38781L13.5397 22.6412L12.7045 24.1267C12.7045 24.1267 12.6934 24.1377 12.6879 24.1432C11.7753 25.2477 10.3981 25.9545 8.84946 25.9545H0L10.5253 7.66487L11.3605 6.207C11.3605 6.207 11.3623 6.20516 11.366 6.20148L14.9335 0L18.7498 5.88671L19.8339 7.56547L21.0175 9.38781Z" />
        {/* (Keep pasting the remaining <path> elements here as you have above) */}
    </svg>
);

export default ApplicationLogo;
