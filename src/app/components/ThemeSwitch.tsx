import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { FaRegMoon } from "react-icons/fa";

export default function ThemeSwitch() {
    const [mounted, setMounted] = useState<boolean>(false)
    const { setTheme, resolvedTheme } = useTheme()

    useEffect(() => setMounted(true), [])

    const switchTheme = () => {
        if (resolvedTheme === 'dark') {
            setTheme('light')
        } else {
            setTheme('dark')
        }
    }

    return (
        <div className='flex items-center gap-x-3'>
            <input
                readOnly
                onClick={switchTheme}
                checked={resolvedTheme === 'dark'}
                type="checkbox"
                value="synthwave"
                className="toggle theme-controller col-span-2 col-start-1 row-start-1 bg-white [--tglbg:theme(colors.gray)] checked:[--tglbg:theme(colors.purple.500)] checked:border-[#A445ED] checked:bg-white" />

            <FaRegMoon className='dark:text-[#A444ED] text-[#757575] w-6 h-6 -rotate-[30deg]'></FaRegMoon>
        </div>
    )
}