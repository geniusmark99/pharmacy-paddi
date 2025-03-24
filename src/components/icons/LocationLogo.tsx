import React from 'react'

interface LogoProps {
    className?: string
}

export const LocationLogo: React.FC<LogoProps> = ({ className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className={className}>
            <path
                d="M25 1C16.179688 1 9 8.179688 9 17C9 31.113281 23.628906 47.945313 24.25 48.65625C24.441406 48.875 24.710938 49 25 49C25.308594 48.980469 25.558594 48.875 25.75 48.65625C26.371094 47.933594 41 30.8125 41 17C41 8.179688 33.820313 1 25 1 Z M 25 12C28.3125 12 31 14.6875 31 18C31 21.3125 28.3125 24 25 24C21.6875 24 19 21.3125 19 18C19 14.6875 21.6875 12 25 12Z"
            />
        </svg>
    )

}

export default LocationLogo;