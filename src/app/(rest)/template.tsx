import React from 'react'
import Header from "@/components/Header";

const template = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div className="p-3 w-full md:w-8/12 flex flex-col items-center" >
        <Header />
        {children}
    </div>
  )
}

export default template
