import React, { useState } from 'react'

function About() {

  return (
    <div className='text-justify sm:h-screen px-10 pb-10 text-2xl dark:text-white text-gray-900'>
      <div className=' sm:grid sm:grid-cols-4 sm:gap-5 sm:pt-8 flex items-center flex-col gap-10'>
      <img className='rounded-full mt-5 sm:mt-0 h-44 w-44 sm:mx-auto'
        src="./src/assets/Images/Amit2.jpg" />
      <p className=' sm:col-span-3'>
      I'm a passionate web developer with a love for technology and coding. What excites me most is the ability to solve problems and create innovative solutions that make people's lives easier.
      </p>
      </div>
      <p className=' pt-10 pb-10'>
      Web development allows us to build tools that help us  stay organized with tasks and information. Imagine never forgetting an appointment or deadline again!  We can also use web applications to simplify daily activities  like shopping or filling out forms, freeing up valuable time.
      </p>
      <p className='pt-10 pb-10'>
      The magic of coding is that it lets us  transform the digital world  and create a more efficient and connected future. I'm eager to learn and grow as a developer, and I'm excited to contribute to building these innovative solutions.
      </p>
    </div>
  )
}

export default About