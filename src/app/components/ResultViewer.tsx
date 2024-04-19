import { Result } from '@/types'
import React, { useEffect, useState } from 'react'
import Chart from './Chart'
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { FaRepeat } from "react-icons/fa6";

type Props = {
  duration: number, 
  result: Result[], 
  completed: string[], 
  practiceStringArray: string[], 
  handleRestart: () => void
}

const ResultViewer = ({duration, result, completed, practiceStringArray, handleRestart}: Props) => {

  const [wpm, setWPM] = useState<number>(0)
  const [accuracy, setAccuracy] = useState<number>(0)

  useEffect( () => {
    console.log(duration, completed, practiceStringArray)
    const correctWords = completed.filter( (word, index) => {
      return word == practiceStringArray[index]
    })

    
    let overAllWPM = Math.round(correctWords.length / (duration / 60))
    let accuracy = Math.round((correctWords.length / completed.length) * 100)
    console.log(overAllWPM, accuracy, correctWords.length)

    setWPM(overAllWPM)
    setAccuracy(accuracy)
  }, [])
  return (
    <>
      <div className='w-full pt-40 flex gap-10 items-center'>
        <div className='mb-10 stats flex flex-col justify-center gap-10'>
          <StatComponent lable={"wpm"} value={wpm?.toString() || ""} />
          <StatComponent lable={"acc"} value={accuracy + "%"} />
        </div>

        <div className='flex justify-center flex-1'>
          <Chart result={result}/>
        </div>
      </div>

      <div className='flex gap-10 mt-10 h-10'>
              <button onClick={() => {}} className='text-zinc-500 hover:text-gray-200 '>
                <TbPlayerTrackNextFilled size={"20px"}/>
              </button>
              <button onClick={handleRestart} className='text-zinc-500 hover:text-gray-200 '>
                <FaRepeat size={"20px"}/>
              </button>
      </div>
    </>
  )
}


const StatComponent = ({lable, value, }: {lable: string, value: string}) => {
  return (
    <div >
      <div>
        <span className='text-zinc-500 font-medium text-3xl'>{lable}</span>
      </div>
      <div>
        <span className='text-7xl text-yellow-400'>
         {value}
        </span>
      </div>
    </div>
  )
}

export default ResultViewer
