"use client"
import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import axios from 'axios'
import Title from "./components/Title";
import Source from "./components/Source";
import { Suspense } from "react";
import Meaning from "./components/Meaning";

interface wordDataMeanings {
  partOfSpeech: string;
  definitions: Array<string>;
  synonym: string;
}

export default function Home() {
  const [word, setWord] = useState<string>('')
  const [wordData, setWordData] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null)

  // evertime the user submits an input
  useEffect(() => {
    const fetchWord = async () => {


      if(word !== '') {
        setLoading(true)
        
        try {
          const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
          const { data } = response

          setWordData(data[data.length-1])
          // console.log(data[0])
          console.log(data[data.length-1].meanings)
        } catch(err) {
          console.log(err)
          setLoading(false)
          setError('Word not found')
          setWordData(null)
        } finally {
          setLoading(false)
        }


  
      }
    }
    
    setLoading(false)
    fetchWord()

  }, [word])
    
  return (
    <div className="flex-grow  w-full flex flex-col pb-16 ">
      <div className="w-full h-full pb-12">
        <SearchBar setWord={setWord} />
      </div>

      { loading && <p className="text-purple-500">Loading...</p> }

      { error && <p className="text-error">{error}</p>}

      { wordData && !loading && !error &&
        <div>
          <Title
          word={wordData.word} 
          phonetic={wordData.phonetic || wordData.phonetics[wordData.phonetics.length-1]?.text || 'none'} 
          audioUrl={wordData.phonetics[wordData.phonetics.length -1 ]?.audio || 'no sound'}
          />

          

          {wordData.meanings.map((e: any) => 
            <Meaning key={e.partOfSpeech} partOfSpeech={e.partOfSpeech} definitions={e.definitions} synonym={e.synonyms[0] || 'none'} ></Meaning>
          )}

          <div className="h-px w-full bg-[#E9E9E9] dark:bg-[#3A3A3A]"></div>

          <Source sourceUrls={wordData.sourceUrls[0]}></Source>
        </div>
      }

  
      
      
    </div>
  );
}
