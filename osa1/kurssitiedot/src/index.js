import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return(
<h1>{props.head['name']}</h1>
  )
}

const Content = (props) => {
  return(
    <div>
      <Part name={props.parts[0].name} points={props.parts[0].exercises} />
      <Part name={props.parts[1].name} points={props.parts[1].exercises} />
      <Part name={props.parts[2].name} points={props.parts[2].exercises} />
  </div>
  )
}

const Part = (props)=> {
  return (
    <p>{props.name} {props.points}</p>
  )
}

const Total = (props) => {
  return(
    <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises+ props.parts[2].exercises} </p>
  
  )
}

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
      <Header head={course} />
      <Content  parts={course.parts}/>     
      <Total parts={course.parts} />      
    </div>
  )
}


ReactDOM.render(
    <App />, document.getElementById('root')
);


