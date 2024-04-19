import React from 'react'

export const ControllerOptins = ({children, handler, state}: {children: React.ReactNode, handler: () => void, state: Boolean} ) => {
  return (
    <div className={`flex text-base items-center gap-2 cursor-pointer  transition duration-500 ${state ? "text-yellow-400 hover:text-yellow-400" : "text-zinc-500 hover:text-gray-200"}`} onClick={handler}>
        {children}
    </div>
  )
}

export const TimeOptions = ({lable, current, handler}: {lable: number, current: number | null, handler: (lable: number) => void}) => {
    return (
        <div className={`flex text-base items-center gap-2 cursor-pointer  transition duration-500 ${(current && current == lable) ? "text-yellow-400 hover:text-yellow-400" : "text-zinc-500 hover:text-gray-200"}`} onClick={() => handler(lable)}>
            {lable.toString()}
        </div>
    )
}


