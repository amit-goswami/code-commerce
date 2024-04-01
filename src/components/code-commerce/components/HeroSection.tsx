'use client'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef, useState } from 'react'

export const HeroSection = () => {
  const [buttonClicked, setButtonClicked] = useState(false)
  useGSAP(() => {
    gsap.to(['.circle-a'], { x: 280, duration: 2, backgroundColor: 'red' })
  })
  useGSAP(() => {
    gsap.to(['.circle-b'], { x: 80, duration: 2, backgroundColor: 'blue' })
  })

  useGSAP(() => {
    gsap.to(['.circle-c'], { x: -80, duration: 2, backgroundColor: 'yellow' })
  })

  useGSAP(() => {
    gsap.to(['.circle-d'], { x: -280, duration: 2, backgroundColor: 'green' })
  })

  useGSAP(() => {
    gsap.to(['.d'], {
      duration: 2,
      rotate: 360,
      ease: 'expo.out',
      repeat: -1,
      yoyo: true
    })
  })

  const container = useRef<any>()
  const { contextSafe } = useGSAP({ scope: container })

  const onClickGood = contextSafe(() => {
    setButtonClicked(!buttonClicked)
    buttonClicked === true
      ? gsap.to('.good', { backgroundColor: 'green', rotate: 360, duration: 2 })
      : gsap.to('.good', { backgroundColor: 'red' })
  })

  useGSAP(() => {
    gsap
      .timeline({ repeat: -1, yoyo: true })
      .to('.good', {
        duration: 1,
        scale: 1.1,
        ease: 'power1.inOut'
      })
      .to('.good', {
        backgroundColor: 'green',
        duration: 1
      })
      .to('.good', {
        duration: 1,
        scale: 1.2,
        ease: 'power1.inOut'
      })
      .to('.good', {
        backgroundColor: 'red',
        duration: 1
      })
  })

  return (
    <section className="flex items-center justify-center">
      <div className="max-w-[800px] flex flex-col items-center justify-center h-screen p-2 space-y-2 relative">
        <div className="absolute top-[20vh] left-0 bottom-0 right-0 -z-10">
          <div className="left-0 absolute h-[40vh] w-[40vh] rounded-full -z-10 circle-a"></div>
          <div className="left-20 absolute h-[40vh] w-[40vh] rounded-full -z-10 circle-b"></div>
          <div className="left-40 absolute h-[40vh] w-[40vh] rounded-full -z-10 circle-c"></div>
          <div className="left-60 absolute h-[40vh] w-[40vh] rounded-full -z-10 circle-d"></div>
        </div>
        <div className="text-3xl md:text-5xl font-bold text-black flex items-center justify-center">
          <div className="d">C</div>
          <div className="d">o</div>
          <div className="d">d</div>
          <div className="d">e</div>
          <div className="d">-</div>
          <div className="d">E</div>
          <div className="d">c</div>
          <div className="d">o</div>
          <div className="d">m</div>
          <div className="d">m</div>
          <div className="d">e</div>
          <div className="d">r</div>
          <div className="d">c</div>
          <div className="d">e</div>
        </div>
        <p className="text-xl md:text-2xl text-start text-gray-400">
          A simple e-commerce website built with React, Tailwind CSS, and
          TypeScript A simple e-commerce website built with React, Tailwind CSS,
          and TypeScript
        </p>
        <div ref={container}>
          <button
            className="bg-slate-200 text-black py-2 px-4 rounded-md mt-4 good"
            ref={container}
            onClick={onClickGood}
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  )
}
