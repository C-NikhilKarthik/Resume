import React from 'react'
import Card from './Card'
import Outpass from '../images/Outpass.png'

function About() {
  return (
    <div className='relative mt-5 w-full sm:mt-32 text-gray-200 backdrop-blur-sm bg-black/50 rounded-lg p-4 '>
        <div className="absolute inset-0">
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(51 65 85 / 0.25)'><path d='M0 .5H31.5V32'/></svg>
        </div>
        <div className='pl-3 w-full flex flex-col'>
            <h1 className='text-4xl pl-5 pt-3 underline decoration-2 underline-offset-4 decoration-blue-500'>Projects</h1>
            <div className='flex w-full flex-wrap justify-start lg:justify-evenly px-3 py-4'>
                <Card image={Outpass}/>
                <Card image={Outpass}/>
                <Card image={Outpass}/>
                <Card image={Outpass}/>
                <Card image={Outpass}/>

            </div>
        </div>
    </div>
  )
}

export default About