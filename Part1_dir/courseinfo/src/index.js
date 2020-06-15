import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({ courseName }) => <h1>{courseName}</h1>
const Content = ({ courseContent }) => <p>{courseContent}</p>
const Total = ({ courseParts }) => {
  let exercisesSum = 0;
  courseParts.forEach(({ exercises }) => (exercisesSum += exercises));

  return <h2>TOTAL {exercisesSum}</h2>;
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

 
  return (
    <div>
      <Header courseName={course.name} /> 
      <Content courseContent=
      {course.parts.map(partsItem => 
        (<div> <p> {partsItem.name} </p> 
        <p>{partsItem.exercises}</p>
        </div>))}/>
        
      <Total courseParts={course.parts} />   
    </div>
    )
}



    ReactDOM.render(<App />, document.getElementById('root'))