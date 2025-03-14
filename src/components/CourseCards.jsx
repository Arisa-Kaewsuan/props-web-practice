import React from 'react'

const CourseCards = (props) => {
  return (
    <>
      <div>
        <div>icon</div>
        <h1>{props.title}</h1>
        <p>{props.describe}</p>
        <a href="#">Get Started</a>
      </div>
    </>
  )
}

export default CourseCards
