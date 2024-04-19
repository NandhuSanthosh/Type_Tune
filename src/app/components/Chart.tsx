import { Result } from '@/types'
import React from 'react'
import { Area, AreaChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'

const Chart = ({result}: {result: Result[]}) => {

    console.log(result)
  return (
    <AreaChart width={1000} height={250} data={result}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
            <linearGradient id="colorRaw" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#000000" stopOpacity={0.2}/>
            <stop offset="95%" stopColor="#000000" stopOpacity={0.1}/>
            </linearGradient>
            <linearGradient id="colorWPM" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#facc15" stopOpacity={0.2}/>
            <stop offset="95%" stopColor="#facc15" stopOpacity={0.0}/>
            </linearGradient>
            <linearGradient id="colorErr" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#f21804" stopOpacity={0.2}/>
            <stop offset="95%" stopColor="#f21804" stopOpacity={0.1}/>
            </linearGradient>
        </defs>
        <XAxis dataKey="time" fontSize={"14px"}/>
        <YAxis fontSize={"14px"} dataKey={"raw"}/>
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <Tooltip />
        <Area type="monotone" dataKey="raw" stroke="#71717a" strokeWidth={2} fillOpacity={.5} fill="url(#colorRaw)" />
        <Area type="monotone" dataKey="wpm" stroke="#facc15" strokeWidth={2} fillOpacity={.5} fill="url(#colorWPM)" />
        <Area type="monotone" dataKey="err" stroke='#f21804' fillOpacity={1} fill="url(#colorErr)"/>
        </AreaChart>
  )
}

export default Chart
