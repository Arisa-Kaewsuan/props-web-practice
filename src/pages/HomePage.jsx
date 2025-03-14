import React from 'react'
import CourseCards from '../components/CourseCards'
import GetStartButton from '../components/GetStartButton'

const HomePage = () => {
  return (
    <>
      <div className='w-full max-w-screen font-display bg-background'>
        <div className='w-full bg-white'>
            {/* Header Section*/}
            <div className='flex justify-between p-5 md:px-30 md:pt-10'>
              <div>
                <img src=".\src\assets\logo.svg" alt="logo"/> 
              </div>
              <GetStartButton/>
            </div>

            {/* Hero Section */}
            <div className='md:px-30 text-start p-5 md:flex'>
              <div className='w-90'>
                <h1 className='text-6xl font-semibold text-gray-600 my-10'>Maximize skill, minimize budget</h1>
                <p className='text-lg text-gray-500 mb-10'>Our modern courses across a range of in-demand skills will give you the knowledge you need to live the life you want.</p>
                <GetStartButton/>
              </div>
                <img src="./src/assets/img.svg" alt="amount of course hours and members" className='rounded-2xl md:hidden'/>
                <img src="./src/assets/hero-img.png" alt="banner" className='hidden md:flex flex-row w-4xl absolute -top-30 -right-2 z-1' />
            </div>

            {/* Course Section */}
            <div className='flex flex-col items-center md:flex-row md:px-30'>
              <h1 className='flex items-center mb-10 px-8 text-4xl font-bold text-start w-85 h-60 md:h-84 rounded-2xl bg-gradient-to-t from-pink-400 via-pink-200 to-salmon-400 text-white '>Check out our most popular courses!</h1>
              <CourseCards title="Animation" describe="Learn the latest animation techniques to create stunning motion design and captivate your audience."/>
              <CourseCards title="Design" describe="Create beautiful, usable interfaces to help shape the future of how the web looks."/>
            </div>
            <div className='md:flex md:flex-row md:px-30'>
                <CourseCards title="Photography" describe="Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos."/>
                <CourseCards title="Crypto" describe="All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course."/>
                <CourseCards title="Business" describe="A step-by-step playbook to help you start, scale, and sustain your business without outside investment."/>
            </div>

            {/* Footer Section */}
            <div className='p-5 md:px-30 w-full h-40 bg-gray-600 flex justify-between items-center'>
              <h1 className='text-white font-bold text-4xl'>Skilled</h1>
              <GetStartButton/>
            </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
