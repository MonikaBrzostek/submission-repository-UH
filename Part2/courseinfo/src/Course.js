import React from 'react'
import ReactDOM from 'react-dom'

const totalExercises = (parts) =>
  parts.reduce((acc, { exercises }) => acc + exercises, 0)

const Header = ({ name }) => <h1>{name}</h1>

const Total = ({ courses }) => {
  console.log(courses.parts)
  const sum = totalExercises(courses.parts)
  return <p>Number of exercises {sum}</p>
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}

const Content = ({ courses }) => (
  <div>
    {courses.parts.map((partsItem) => (
      <Part key={partsItem.id} part={partsItem} />
    ))}
  </div>
)

const Course = ({ courses }) => {
  return (
    <div>
      <Header name={courses.name} />
      <Content courses={courses} />
      <Total courses={courses} />
    </div>
  )
}

export default Course
