import * as React from 'react';

const title = "Test2"
const welcome = {
  greeting:'Hi',
  title:'Hellou'
}

function getTitle(title){
  return title;
}

const list = [
  {
  title: 'React',
  url: 'https://reactjs.org/',
  author: 'Jordan Walke',
  num_comments: 3,
  points: 4,
  objectID: 0,
  },
  {
  title: 'Redux',
  url: 'https://redux.js.org/',
  author: 'Dan Abramov, Andrew Clark',
  num_comments: 2,
  points: 5,
  objectID: 1,},
  ];

  const first = list[0];

const App = () =>  (
    <div>
      <Search/>
<hr />
<List  />
<hr />
<Author />
    </div>
  );

const Items = ({name}) =>{
  return (
    <ul>
    {list.map(function(item){
      return (<li key={item.objectID}>
        <span>{item.num_comments} comments</span>
        <br />
        <span>Hi {name}</span>
        <span>{item.points} points</span>
        <br />
      </li>
      )
      
    })}
    </ul>
  )
}

const Search = () => {
  return (
    <div>
      <h1>My Hacker Stories</h1>
<label htmlFor="search">Search: </label>
<input id="search" type="text" />
    </div>
  )
}

const List = () =>{
  return (
  <div>
    <Items name="Arbnor" />
    <Test />
    <br />
  </div>
  )
}

const Author = () => {
  return (
    <ul>
      {list.map((item) =>{
        return (
          <li key={item.objectID}>
            <span>{item.author}</span>
          </li>
        )
      })}
    </ul>
  )
}

const Test = () => {
  return React.createElement(
    'p',
    {className: 'danger'},
  'Hello React'
  );
}


export default App
