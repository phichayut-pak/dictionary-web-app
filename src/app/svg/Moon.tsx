import Image from "next/image";
import moon from '../../../assets/images/icon-moon.svg'
import moonActive from '../../../assets/images/icon-moon-active.svg'

interface Moon {
    isActive: boolean
}

export default function Moon({ isActive }: Moon ) {
    return (
        <Image src={isActive ? moonActive : moon} alt="Moon " />
    )
}