import React, { useState } from 'react';
import './App.css';

const App = ({ anecdotes }) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [votes, setVotes] = useState(Array.from(anecdotes, () => 0 ))

  const setRandomIndex = () => setSelectedIndex(Math.floor(anecdotes.length * Math.random()))




  const handleVote = () => {
    setVotes(votes.map((votesItem, index) => {
      if (index === selectedIndex) {
      return votesItem + 1
      }
      return votesItem
      } ))
    }



const highestScore = Math.max(...votes)


const mostVoted = () => anecdotes[votes.indexOf(Math.max(...votes))]
console.log(mostVoted())


  
  return (
    <div>
      <h2>Anecdote of the day</h2>
      {anecdotes[selectedIndex]}<br/>
      <p>Has {votes[selectedIndex]} votes</p>
      <button onClick={handleVote}>Vote for this anecdote</button>
      <button onClick={setRandomIndex}>Find random anecdote</button>
      <h2>Anecdote with most votes</h2>
      <p>{mostVoted()}</p>
      <p>Has {highestScore} votes</p>
    </div>
  )
}

export default App;

