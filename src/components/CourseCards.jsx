import React from 'react'

const CourseCards = (props) => {
  return (
    <>
      <div className='px-8'>
        <img src=".\src\assets\icon-run.svg" alt="icon" className='mt-20'/>
        <h4 className='py-9 text-2xl font-bold'>{props.title}</h4>
        <p className='text-gray-500 text-lg'>{props.describe}</p>
        <p className='text-lg text-pink-400 pt-6 font-bold'>Get Started</p>
      </div>
    </>
  )
}

export default CourseCards
