
import { MdErrorOutline } from "react-icons/md";

export default function SearchError() {

    return (
    <div className="w-full h-full flex flex-col gap-y-5 justify-center items-center">
        <MdErrorOutline className="text-red-500 w-10 h-10"></MdErrorOutline>
        <div className="font-sans font-bold text-red-500 text-xl">Word not found!</div>
    </div>
    )
}