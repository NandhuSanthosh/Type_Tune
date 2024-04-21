"use client"
import React, { useEffect, useRef, useState } from 'react'

import { HiAtSymbol } from "react-icons/hi";
import { FaHashtag } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { FaRepeat } from "react-icons/fa6";
import { FaStop } from "react-icons/fa";
import { FaKeyboard } from "react-icons/fa";

import testString from '@/constants/testString'
import Letter from './Letter'
import "./styles.css"
import {ControllerOptins, TimeOptions} from './ControllerOptins';
import { Result } from '@/types';
import ResultViewer from './ResultViewer';

const TypeTest = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  const [isNumbers, setIsNumbers] = useState<Boolean>(false)
  const [isPunctuation, setIsPunctuation] = useState<Boolean>(false)

  const [isStarted, setIsStarted] = useState<Boolean>(false)
  const [startingTime, setStartingTime] = useState<Date>()
  const [finalDuration, setFinalDuration] = useState<number>()
  const [testDuration, setTestDuration] = useState<number>(15)
  const [showingResult, setShowingResult] = useState<Boolean>(false)
  const [result, setResult] = useState<Result[]>([])
  const [timer, setTimer] = useState<number>(0)
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null)
  const [calculateIntervalId, setCalculateIntervalId] = useState<NodeJS.Timeout | null>(null)
  const [calculateRerender, setCalcuateRerender] = useState<number>(0)
  
  const practiceString = testString
  const practiceStringArray = testString.split(" ")
  const [completed, setCompleted] = useState<string[]>([""])

  function handleInput(str: string){
    if(!isStarted) return;
    let completed = inputRef?.current?.value || ""
    if( (str[str.length - 1] == " " && str[str.length - 2] == " ")) return;

    let completedArray = completed.split(' ')

    let completedLength = completedArray.length;
    
    
    if( completedArray.length > practiceStringArray.length ) {
      const timeDiff = Math.abs(new Date().getTime() - (startingTime as Date).getTime()) / 1000
      testCompleted(timeDiff);
      return;
    }
    if(completedArray[completedLength - 1].length > practiceStringArray[completedLength - 1].length) return;

    setCompleted(completedArray)
  }

  function updateIsNumbers() {
    setIsNumbers(!isNumbers)
  }

  function updateIsPunctuation(){
    console.log("updateing is punctuation")
    setIsPunctuation(!isPunctuation)
  }

  function calculateInterval(){

    let count: number = 15;
    const id = setInterval( () => {
      setCalcuateRerender(count); 
      count -= 1; 
      if(count == 0) {
        clearInterval(id)
      }
    }, Math.floor(testDuration / 15) * 1000)
    setCalculateIntervalId(id)
  }

  function testCompleted(duration = testDuration){
    if(intervalId) clearInterval(intervalId)
    if(calculateIntervalId) clearInterval(calculateIntervalId)

    setFinalDuration(duration)
    setShowingResult(true);
    setIsStarted(false);
    setTimer(0)
  }

  useEffect( () => {
    if(calculateRerender == 0) {
      console.log("cr = 0")
      return;
    }
    const timeDiff = Math.floor(testDuration / 15) * (16 - calculateRerender)
    const differenceInMinutes= timeDiff / 60; 
    console.log(calculateRerender, differenceInMinutes, completed.length)

    const slicedCompleted = completed.slice(0, -1)
    const raw = Math.round(slicedCompleted.length / differenceInMinutes);
    const correctWords = slicedCompleted.filter( (x, index) => {
      return x == practiceStringArray[index];
    })
    const wpm = Math.round( correctWords.length / differenceInMinutes)
    const err = slicedCompleted.length - correctWords.length
    console.log(timeDiff)

    const r: Result = {
      raw, 
      wpm, 
      err, 
      time: timeDiff
    }

    setResult([...result, r])
  }, [calculateRerender])
  
  function handleStart() {
    setCompleted([""])
    startTimer(3, () => {
      setStartingTime(new Date())
      setIsStarted(true)
      if (inputRef.current) {
        inputRef.current.focus();
      }

      startTimer(testDuration, () => {
        testCompleted()
        setIsStarted(false)
      })

      calculateInterval()
    })
  }

  function startTimer(sec: number, callback: () => void) {
    setTimer(sec)
    const id = setInterval( () => {
      sec--;
      setTimer(sec)
      if(sec == 0) {
        console.log("deleting ", id)
        clearInterval(id);
        callback();
      }
    }, 1000)
    console.log("created ", id)
    setIntervalId(id)
  }

  function handleRestart(){
    setShowingResult(false)
    handleStop();
    handleStart();
  }

  function handleStop(){
    if(intervalId){
      clearInterval(intervalId)
    }
    if(calculateIntervalId)
      clearInterval(calculateIntervalId)
    setTimer(0)
    setIsStarted(false)
    setCompleted([""])
  }


  useEffect( () => {
    let handleKeyPress = () => {
      if(inputRef.current )
        inputRef.current.focus();
    }
    document.addEventListener('keydown', handleKeyPress)

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [])

  const controllerOptions = [{
    icon: HiAtSymbol, 
    lable: "punctuation", 
    state: isPunctuation, 
    handler: updateIsPunctuation
  }, {
    icon: FaHashtag, 
    lable: "number", 
    state: isNumbers, 
    handler: updateIsNumbers
  }]

  const timeOptions = [15, 30, 60, 120]
  function handleTimeUpdate(lable: number) {
    setTestDuration(lable)
  }


  return (
    <div 
      className={`w-full h-full flex flex-col items-center font-normal text-2xl relative ${!showingResult && "justify-center"}`} 
    >

      {
        // result
        showingResult ? 
          <ResultViewer result={result} duration={finalDuration as number} completed={completed} practiceStringArray={practiceStringArray} handleRestart={handleRestart}/>
        : 
          <>
            {/* controlles */}
            {
              !isStarted && timer == 0 &&
              <div className='absolute top-10 left-0 right-0 flex justify-center '>
                <div className='bg-black-dark rounded-md px-10 py-2 flex items-center gap-10 w-max '>
                  <button onClick={() => {}} className='text-zinc-500 hover:text-gray-200'>
                    <FaKeyboard />
                  </button>
                  <div className='w-1 h-6 bg-black-lite'></div>
                  {
                    controllerOptions.map( (option) => {
                      return (
                        <ControllerOptins key={option.lable} state={option.state} handler={option.handler}>
                          <option.icon />
                          <div><span>{option.lable}</span></div>
                        </ControllerOptins>
                      )
                    })
                  }
                  <div className='w-1 h-6 bg-black-lite'></div>
                  {
                    timeOptions.map( (option) => {
                      return (
                        <TimeOptions key={option} lable={option} current={testDuration} handler={handleTimeUpdate}/>
                      )
                    })
                  }
                </div>
              </div>
            }
      
            {/* type test */}
            <div className={`flex gap-3 flex-wrap justify-start relative`}>
              {
                practiceStringArray.map( (word, wordIndex) => {
                  return (
                    <div key={wordIndex}
                    className={`word flex text-zinc-500 relative ${wordIndex < completed.length - 1 && completed[wordIndex] != practiceStringArray[wordIndex] && "underline decoration-red-500  "}`} 
                    >
                      { 
                          word.split("").map( (char, charIndex) => {

                            if(wordIndex >= completed.length) {
                              return (
                                <div key={wordIndex + "" + charIndex} className={`letter flex justify-center`}>
                                  <Letter>{char}</Letter>
                                </div>
                              )
                            }
                            return <div key={wordIndex + "" + charIndex} 
                            className={` 
                                letter flex justify-center relative
                                ${completed[wordIndex][charIndex] == practiceStringArray[wordIndex][charIndex]  ? "text-white" : completed[wordIndex][charIndex] == undefined && completed.length - 1 == wordIndex ? "text-zinc-500" : "text-red-500" }
                            `}
                            >     
                                  <Letter>{char}</Letter>
                                  {
                                    isStarted && wordIndex == completed.length - 1 && charIndex == completed[completed.length - 1].length && 
                                    <div id='cursor' className='cursor absolute left-0 bg-yellow-500 h-9 w-0.5 rounded-md'></div>
                                  }
                            </div>
                        })
                      }
                      {
                        isStarted && wordIndex == completed.length - 1 && practiceStringArray[wordIndex].length == completed[ completed.length - 1 ].length && 
                        <div id='cursor' className='cursor absolute right-0 bg-yellow-500 h-9 w-0.5 rounded-md'></div>
                      }
                    </div>
                  )
                })
              }



              {/* input */}
              <input type="text" ref={inputRef}
              className='opacity-0'
              value={completed.join(" ")}
              onChange={(e) => handleInput(e.target.value)}
              />

              {/* timer */}
              <div className='absolute -top-10 left-0'>
                {
                  timer != 0 && 
                    <div className='text-orange-400 mb-2'>
                      <span>
                        {
                          isStarted ? "Ends in " : "Starts in "
                        }
                      </span>
                      {Math.floor(timer / 60).toString().padStart(2, '0')}:{Math.floor(timer % 60).toString().padStart(2, '0')}
                    </div>
                }
              </div>
            </div>
      
            {/* start button */}
            <div className='flex gap-10 mt-10 h-10'>
              {
                isStarted ? 
                  <>
                    <button onClick={handleRestart} className='text-zinc-500 hover:text-gray-200 '>
                      <FaRepeat />
                    </button>
                    <button onClick={handleStop} className='text-zinc-500 hover:text-gray-200 '>
                      <FaStop />
                    </button>
                  </>
                : 
                  timer == 0 &&   
                  <button onClick={handleStart} className='text-zinc-500 hover:text-gray-200 '>
                    <FaPlay/> 
                  </button>
              }
            </div>
          </>
      }

    </div>
  )
}

export default TypeTest
