import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = (props) => {

  if (props.value !== null) {
    return <p>{props.name} {props.value}</p>
  } 

  return null
}


const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(null)
  const [neutral, setNeutral] = useState(null)
  const [bad, setBad] = useState(null)

  const isInitialValue = good === null && neutral === null && bad === null 



  const all = good + neutral + bad
  const avarage = (good * 1) + (neutral * 0) + (bad * -1)
  const positive = (good / all) * 100 + ' %'

  return (
    <div>
      <h1>GIVE FEEDBACK!</h1>
      <Button handleClick= {() => setGood(good ? good + 1 : 1)} text="good"/> 
      <Button handleClick= {() => setNeutral(neutral ? neutral+1 : 1)} text="neutral"/> 
      <Button handleClick= {() => setBad(bad ? bad+1 : 1)} text="bad"/>

      <h2>STATISTICS</h2>
        { isInitialValue ?           
        <p>No feedback available.</p> 
          : 
            <table>
            <tbody>
            
            <tr>
              <td><Statistics name="Good"/></td>
              <td><Statistics value={good}/></td>
            </tr>
            <tr>
              <td><Statistics name="Neutral"/></td>
              <td><Statistics value={neutral}/></td>
              </tr>
            <tr>
              <td><Statistics name="Bad" /></td>
              <td><Statistics value={bad}/></td>
            </tr>
            <tr>
              <td><Statistics name="All" /></td>
              <td><Statistics value={all}/></td>
            </tr>
            <tr>
              <td><Statistics name="Average" /></td>
              <td><Statistics value={avarage}/></td>
            </tr>
            <tr>
              <td><Statistics name="Positive" /></td>
              <td><Statistics value={positive}/></td>
            </tr>
            
            </tbody>
            </table>
             
        }
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)