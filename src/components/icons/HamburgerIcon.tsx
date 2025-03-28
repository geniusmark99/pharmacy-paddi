
interface IconProps {
    className: string;
}

const HamburgerIcon: React.FC<IconProps> = ({ className }) => {
    return <>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className={className}>
            <path d="M6 9 A 2.0002 2.0002 0 1 0 6 13L42 13 A 2.0002 2.0002 0 1 0 42 9L6 9 z M 6 22 A 2.0002 2.0002 0 1 0 6 26L42 26 A 2.0002 2.0002 0 1 0 42 22L6 22 z M 6 35 A 2.0002 2.0002 0 1 0 6 39L42 39 A 2.0002 2.0002 0 1 0 42 35L6 35 z" />
        </svg>
    </>
}

export default HamburgerIcon;