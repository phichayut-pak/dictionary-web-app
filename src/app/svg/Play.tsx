import Image from "next/image";
import play from '../../../assets/images/icon-play.svg'

export default function Play({ className }: any) {
    return (
        <Image 
        src={play}
        alt="Play icon"
        className={className}
        />
    )
}