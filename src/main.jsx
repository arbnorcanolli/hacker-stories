import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import List from './List'

const stories2 = [
  {
    title: 'C#',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: '.Net',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <App />
  </React.StrictMode>,
)
