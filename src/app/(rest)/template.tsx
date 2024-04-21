import React from 'react'
import Header from "@/components/Header";

const template = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div className=" bg-black-lite flex justify-center h-lvh" >
      <div className="p-3 w-full md:w-8/12 flex flex-col items-center">
        <Header />
        {children}
      </div>
    </div>
  )
}

export default template
