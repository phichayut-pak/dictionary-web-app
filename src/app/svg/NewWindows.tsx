import Image from "next/image";
import newWindow from '../../../assets/images/icon-new-window.svg'

interface NewWindowsProps {
    className: string
}

export default function NewWindows({ className }: NewWindowsProps) {
    return (
        <Image
        src={newWindow}
        alt="New windows"
        className={className}
        />
    )
}