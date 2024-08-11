import { IoIosSearch } from "react-icons/io";

export default function NotSearched() {
    return (  
        <div className="w-full h-full flex flex-col gap-y-5 justify-center items-center">
            <IoIosSearch  className="w-16 h-16 text-[#757575] dark:text-white"/>
            <div className="font-sans text-[#757575] dark:text-white font-bold text-xl">Which word are you wondering? 🤔</div>
        </div>
    )
}