import { useEffect, useState, useContext } from 'react'
import { FontContext } from '../context/FontContext'
import Search from '../svg/Search'

interface SearchBarProps {
    setWord: any
}

export default function SearchBar({ setWord }: SearchBarProps) {
    const { currentFont, setCurrentFont } = useContext(FontContext)
    const [searchText, setSearchText] = useState<string | React.ChangeEvent<HTMLInputElement> | any>('')
    const [onBlank, setOnBlank] = useState<boolean>(false)

    const onInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setSearchText(e.target.value)
        setOnBlank(false)
    }

    const onSubmitHandler = (e: any) => {
        e.preventDefault()

        if(searchText.trim() === '') {
            setOnBlank(true)
            return
        }
        setWord(searchText)
        // setSearchText('')
    }

    
    return (
        
            <form onSubmit={(e) => onSubmitHandler(e)} className="h-10 w-full bg-[#E9E9E9] dark:bg-[#1F1F1F] rounded-xl flex justify-between items-center relative z-0">
                <input placeholder={'Search for any word...'} value={searchText} onChange={(e) => onInputChangeHandler(e)} type="text" className={`pl-5 outline-none bg-transparent h-full w-full font-${currentFont} placeholder:font-${currentFont} text-[#2D2D2D] dark:text-white font-bold rounded-xl ${onBlank ? 'border border-[#ff5252]' : 'focus:border focus:border-[#A445ED]'}`} />
                <button onClick={onSubmitHandler} type="submit" className='absolute flex items-center justify-center h-full right-5'>
                    <Search className={'w-4 h-4'}/>
                </button>   

                {/* Error Handler */}
                { onBlank && <label className='absolute font-inter -bottom-7 text-sm left-0 text-red-500  '>Whoops, can't be empty...</label>}
                

            </form>
    )
}