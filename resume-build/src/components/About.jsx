import React, { useState } from 'react'
import Card from './Card'

function About() {
  const data=[
    {
      id:1,
      image:'images/Outpass.png',
      h1:"Outpass and Complaints Automation System",
      h2:"IIIT Dharwad",
      text:"A software developed by students of our college that helps in automating the Outpass and Complaints procedure."
    },{
      id:2,
      image:"https://i1.rgstatic.net/publication/228332513_New_Discoveries_and_the_Necessity_of_Reconsidering_the_Perspectives_on_Newton's_Second_Law/links/0fcfd4ff8630b65fcc000000/largepreview.png",
      h1:"Physics Research Paper",
      h2:"Guided by Dr.Aswath Babu",
      text:"A Physics research paper on various methods of integration and their comparisions."
  }
  ]
  const [Data,setData] = useState(data)
  const list = Data.map((item)=>(
    <Card key={item.id} item={item}/>
  ))
  return (
    <div data-aos="fade-right" data-aos-offset="00" data-aos-easing="ease-in-out" data-aos-duration="500" className='relative mt-5 w-full sm:mt-32 text-gray-200 backdrop-blur-sm bg-black/50 rounded-lg p-4 '>
        <div className='pl-3 w-full flex flex-col'>
            <h1 className='text-4xl pl-5 pt-3 underline decoration-2 underline-offset-4 decoration-blue-500'>Projects</h1>
            <div className='flex w-full flex-wrap justify-start lg:justify-evenly px-3 py-4'>
              {list}
            </div>
        </div>
    </div>
  )
}

export default About