import React from 'react'

const CourseCards = (props) => {
  return (
    <>
        <div className='bg-background'>
            <div className='px-8 bg-white py-5 mb-8 mx-5 mt-2 rounded-2xl'>
                <img src=".\src\assets\icon-run.svg" alt="icon"/>
                <h4 className='py-9 text-2xl font-bold'>{props.title}</h4>
                <p className='text-gray-500 text-lg'>{props.describe}</p>
                <p className='text-lg text-pink-400 pt-6 font-bold'>Get Started</p>
            </div>
        </div>  
    </>
  )
}

export default CourseCards
