import React from 'react'
import ReactDOM from 'react-dom'

import anecdotes from './anecdotes'
import App from './App'

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)