import React from 'react'
import CourseCards from '../components/CourseCards'
import GetStartButton from '../components/GetStartButton'

const HomePage = () => {
  return (
    <>
      <div className='w-full max-w-screen'>
        <div className='w-full'>
            {/* Header Section*/}
            <div className='flex justify-between'>
              <img src=".\src\assets\logo.svg" alt="logo"/>
              <GetStartButton/>
            </div>

            {/* Hero Section */}
            <div className='text-start'>
                <h1 className='text-6xl font-semibold text-gray-600 my-18'>Maximize skill, minimize budget</h1>
                <p className='text-lg text-gray-500 mb-8'>Our modern courses across a range of in-demand skills will give you the knowledge you need to live the life you want.</p>
                <GetStartButton/>
                <img src=".\src\assets\img.svg" alt="amount of course hours and members"/>
            </div>

            {/* Course Section */}
            <div>
                <div>Check out our most popular courses!</div>
            </div>
            <CourseCards title="Animation" describe="Learn the latest animation techniques to create stunning motion design and captivate your audience."/>
            <CourseCards title="Design" describe="Create beautiful, usable interfaces to help shape the future of how the web looks."/>
            <CourseCards title="Photography" describe="Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos."/>
            <CourseCards title="Crypto" describe="All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course."/>
            <CourseCards title="Business" describe="A step-by-step playbook to help you start, scale, and sustain your business without outside investment."/>

            {/* Footer Section */}
            <div>
              <h1>Skilled</h1>
              <div>Get Started</div>
            </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
