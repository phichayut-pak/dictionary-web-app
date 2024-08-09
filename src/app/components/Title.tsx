import { useContext } from 'react'
import { FontContext } from '../context/FontContext'
import Play from '../svg/Play'

interface TitleProps {
    word: string,
    phonetic: string,
    audioUrl: string
}

export default function Title({ word, phonetic, audioUrl }: TitleProps) {
    const { currentFont } = useContext(FontContext)

    const onPlayHandler = () => {
        if(audioUrl !== 'no sound') {
            const audio = new Audio(audioUrl)
            audio.play()
        }
    }

    return (
        <div className='w-full flex justify-between items-center'>

            {/* Left side */}
            <div className='flex flex-col justify-start items-start gap-y-2'>
                <h1 className={`font-${currentFont} font-bold text-5xl text-dark dark:text-white`}>
                    { word }
                </h1>

                <h5 className={`font-sans text-main-purple`}>
                    {phonetic == 'none' ? 'no phonetic' : phonetic}
                </h5>
            </div>

            {/* Right side => audio */}
            <div onClick={onPlayHandler} className={`${audioUrl === 'no sound' && 'opacity-50'}`}>
                <Play className={'cursor-pointer w-16 h-16 }'}></Play>
            </div>

        </div>
    )
}