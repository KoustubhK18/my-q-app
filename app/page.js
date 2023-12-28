'use client'
import Image from 'next/image'
import { useEffect } from 'react'
import { themeChange } from 'theme-change'
import Countdown from './(Components)/Countdown';


export default function Home() {

useEffect(() => {
  themeChange(false)
  // 👆 false parameter is required for react project
}, []);
  return (
    <main  className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Hello NextJS</div>
      <Countdown data={{min: 3, sec:0}}/>
      <Countdown />
    </main>
  )
}
