import Image from "next/image";
import arrowDown from '../../../assets/images/icon-arrow-down.svg'

export default function ArrowDown() {
    return (
        <Image src={arrowDown} alt="Arrown Down Icon" className="w-3" />
    )
}