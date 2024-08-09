"use client"
import { createContext, useState, useEffect, ReactNode } from 'react'

interface FontContextProps {
    currentFont: string;
    setCurrentFont: (font: string) => void;
}

export const FontContext = createContext<FontContextProps>({
    currentFont: '',
    setCurrentFont: () => {},
})

export const FontProvider = ({children} : {children: ReactNode}) => {
    const [currentFont, setCurrentFont] = useState<string>('')

    useEffect(() => {
        const storedFont = localStorage.getItem('currentFont')
        if(storedFont) {
            setCurrentFont(storedFont)
        }
    }, [])


    return (
        <FontContext.Provider value={{ currentFont, setCurrentFont }}>
            {children}
        </FontContext.Provider>
    )
}