
import { useContext } from 'react'
import { FontContext } from '../context/FontContext';

interface MeaningProps {
    partOfSpeech: string;
    definitions: Array<any>;
    synonym: string;
}

export default function Meaning({ partOfSpeech, definitions, synonym}: MeaningProps) {
    const { currentFont } = useContext(FontContext)
    return (
        <div className="text-black py-5 ">
            <div className={`font-sans font-bold italic text-xl flex w-full justify-between items-center `}>
                <h1 className='pr-5 dark:text-white'>{partOfSpeech}</h1>
                <div className='h-px w-full  bg-[#E9E9E9] dark:bg-[#3A3A3A]'></div>
            </div>

            <div className='py-5 text-xl'>
                <div className={`font-${currentFont} text-[#757575] pb-3`}>Meaning</div>
                { definitions.map((e: any) => {
                    return (
                        <ul className={`md:text-lg font-${currentFont} text-sm list-outside marker:text-main-purple list-disc pl-8 py-1`} key={e.definition}>
                            <li className='dark:text-white'>{e.definition}</li>
                            {e.example && <div className='text-[#757575] pt-3'>"{e.example}"</div>}
                        </ul>
                    )
                })}
            </div>

            { synonym !== 'none' && 
            <div className='pt-5 flex justify-start items-center gap-x-5'>
                <div className={`font-${currentFont} text-[#757575]`}>Synonyms</div>
                <div className={`font-${currentFont} text-main-purple font-bold`}>{synonym}</div>
            </div>
            }


            
        </div>
    )
}