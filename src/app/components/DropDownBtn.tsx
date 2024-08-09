import ArrowDown from "../svg/ArrowDown";
import { useState, useEffect } from 'react'

interface DropDownBtn {
    currentFont: string;
    setCurrentFont: any;
}

export default function DropDownBtn({ currentFont, setCurrentFont }: DropDownBtn) {
    
    const [leftOverFonts, setLeftOverFonts] = useState<any>(['serif', 'mono'])

    useEffect(() => {
        if(currentFont == 'sans') {
            setLeftOverFonts(['serif', 'mono'])
        } else if(currentFont == 'serif') {
            setLeftOverFonts(['sans', 'mono'])
        } else if(currentFont == 'mono') {
            setLeftOverFonts(['sans', 'serif'])
        }
    }, [currentFont])

    const itemBtnHandler = (newFont: string) => {
        setCurrentFont(newFont)
        localStorage.setItem('currentFont', newFont)
    }




    return (
        <div className="">
            <details className="dropdown dropdown-end">
                <summary tabIndex={0} role="button" className="flex gap-x-3">
                    <h1 className={`font-${currentFont} font-bold capitalize  text-dark dark:text-white`}>{currentFont} {currentFont === 'sans' && 'Serif'}</h1>
                    <ArrowDown/> 
                </summary>
                

                <ul tabIndex={0} className="bg-white px-10 rounded-md mt-2 border dropdown-content menu dropdown-open z-50">
                    
                    {leftOverFonts.map((e: string) => (
                        <li key={e} onClick={() => itemBtnHandler(e)} className={`capitalize font-${e} text-black font-bold my-1 hover:text-gray-500 transition-all cursor-pointer`}>
                            {e}
                        </li>
                    ))}

                </ul>
                
            </details>
        </div>
    )
}