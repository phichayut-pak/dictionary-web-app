import { useContext } from "react"
import { FontContext } from "../context/FontContext"
import Link from "next/link"
import NewWindows from "../svg/NewWindows"

interface SourceProps {
    sourceUrls: string
}

export default function Source({ sourceUrls }: SourceProps) {
    const { currentFont } = useContext(FontContext)
    return (
        <div className={`font-${currentFont} flex justify-start items-center text-sm pt-3 gap-x-4`}>
            <div className={`underline`}>Source</div>
            <Link href={sourceUrls} className={`text-black dark:text-white underline inline-flex gap-x-3 `}>{sourceUrls} <NewWindows className={''}/></Link>

        </div>
    )
}