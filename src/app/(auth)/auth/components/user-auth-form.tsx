"use client"  
import * as React from "react"
import { GoogleLogin } from '@react-oauth/google';
import jwt from "jsonwebtoken"

import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const router = useRouter();

  function handleGoogleAuth(response: any){
    try {
      let obj = jwt.decode(response.credential)
      console.log(obj)
      router.push('/')
    } catch (error: any) {
      console.log(error.message)      
    }
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <div className="flex items-center gap-3 justify-center">
        <GoogleLogin
          onSuccess={handleGoogleAuth}
          onError={() => {
            console.log('Login Failed');
          }}
        />
      </div>
    </div>
  )
}