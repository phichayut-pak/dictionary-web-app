import Image from "next/image";
import search from '../../../assets/images/icon-search.svg'

export default function Search({ className }: any) {
    return (
        <Image
        className={className}
        src={search}
        alt="Search Icon"
        />
    )
}