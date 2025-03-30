import React from 'react'

function About() {
  return (
    <>
      <div className='xl:px-[30vh] xl:w-4/6'>
      <h1 className='xl:mt-[20vh] xl:text-6xl sm:mt-10'>About Me.</h1>
      <div className='xl:w-full xl:h-full flex'>
        <div className='xl:w-1/2'>
            <h1 className='xl:text-5xl xl:leading-8'>Hi, I'm Mohammod Alif!.</h1>
            <p className='xl:text-xl xl:leading-6 sm:leading-5 md:leading-6 lg:leading-6 xl:mb-16'>A passionate Front-End Developer with expertise in React.js & Tailwind CSS, crafting interactive, high-performance web applications with a seamless user experience.</p>
        </div>
        <div className='xl:w-1/2 xl:px-10'>
            <h1 className='xl:text-5xl xl:leading-5 sm:leading-5 md:leading-6 lg:leading-5 sm:text-2xl md:text-3xl lg:text-4xl'>My Journey.</h1>
            <p className='xl:text-xl sm:text-base md:text-lg lg:text-lg'>With 8 months of hands-on experience, I have built multiple front-end projects that transform complex UI/UX designs into functional and visually appealing web applications.</p>
            <p className='xl:text-xl sm:text-base md:text-lg lg:text-lg'>Before stepping into development, I worked for 4 years at Dhaka Judge Court as a legal document composer, mastering attention to detail, precision, and deadline-driven efficiency—skills that now enhance my coding discipline.</p>
        </div>
      </div>
        <h1 className='xl:text-5xl sm:text-2xl md:text-3xl lg:text-4xl'>What I Bring to the Table</h1>
        <h3 className='xl:text-2xl leading-3 sm:leading-4 md:leading-5 lg:leading-5 sm:text-sm md:text-base lg:text-lg'>Expert in React.js, Tailwind CSS & Modern Front-End Technologies</h3>
        <h3 className='xl:text-2xl leading-3 sm:leading-4 md:leading-5 lg:leading-5 sm:text-sm md:text-base lg:text-lg'>Pixel-Perfect UI Implementation & Responsive Design</h3>
        <h3 className='xl:text-2xl leading-3 sm:leading-4 md:leading-5 lg:leading-5 sm:text-sm md:text-base lg:text-lg'>Problem-Solving & Attention to Detail from Legal Experience</h3>
        <h3 className='xl:text-2xl leading-3 sm:leading-4 md:leading-5 lg:leading-5 sm:text-sm md:text-base lg:text-lg'>Continuous Learning & Development</h3>
        <h3 className='xl:text-2xl sm:text-sm md:text-base lg:text-lg'>Fast Learner & Always Adapting to the Latest Web Trends</h3>
        <h1 className='xl:text-5xl sm:text-2xl md:text-3xl lg:text-4xl'>My Goal</h1>
        <p className='xl:text-xl sm:text-base md:text-lg lg:text-lg'>Currently, I am focusing on freelancing & remote front-end development opportunities on platforms like Fiverr. My aim is to create impactful digital experiences and collaborate with forward-thinking teams.</p> 
        <h2 className='xl:text-3xl sm:text-lg md:text-xl lg:text-2xl'>Let’s Connect!</h2>
        <a className='xl:text-3xl sm:text-lg md:text-xl lg:text-2xl no-underline text-[#BF2227] hover:text-gray-400' href='mailto:hashtagalif@gmail.com'>Email: hashtagalif@gmail.com</a>
      </div>
    </>
  )
}

export default About;
