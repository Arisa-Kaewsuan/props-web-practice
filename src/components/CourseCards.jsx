import React from 'react'

const CourseCards = (props) => {
  return (
    <>
        <div className='bg-background md:bg-white'>
            <div className='px-8 bg-white md:bg-background md:w-90 py-5 mb-8 mx-5 md:mx-2 mt-2 rounded-2xl'>
                <img src={props.icon} alt="icon"/>
                <h4 className='py-9 text-2xl font-bold'>{props.title}</h4>
                <p className='text-gray-500 text-lg'>{props.describe}</p>
                <p className='text-lg text-pink-400 pt-6 font-bold'>Get Started</p>
            </div>
        </div>  
    </>
  )
}

export default CourseCards
