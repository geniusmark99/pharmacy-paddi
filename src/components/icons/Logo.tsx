import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import LogoImage from '../../../public/images/main-logo.png';

interface LogoProps {
    className?: string
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
    return (
        <Link href="/" className={`flex items-center gap-x-0.5 lg:pr-10 ${className}`}>
            <Image width={200} height={200} src={LogoImage} priority alt='PharmacyPaddi' style={{ width: "auto", height: "auto" }} />
        </Link>
    )

}

export default Logo;