import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = ({onClick, text}) => (  
  <button onClick={onClick}>
  {text}
  </button>
)


const Current = (props) => {  
  return (<div>
          <p>Anecdote "{props.selected}" has {props.votes} votes</p>          
          </div>
  )}


const MostVotes = (props) => {

  const table = props.anecdotes  
  const votesa = props.votes
  
  let mostVotes = 0
  let mostVotesidx = 0

  for ( let i = 0; i<= table.length+1; i++) {    
    if (votesa[i]>mostVotes) {
      mostVotes = votesa[i]
      mostVotesidx = i
    }
  }
  return (<p>Anecdote "{anecdotes[mostVotesidx]}" has {mostVotes} votes </p>)
}  




const App = (props) => {
  const [selected,setSelected] = useState(0)
  const selectRandom = () => setSelected(Math.floor(Math.random() * anecdotes.length))  
  const [votes, setVote] = useState([0,0,0,0,0,0])
  
  
  const newValue = [...votes]
  newValue[selected] += 1 
  const plusVote = () => setVote(newValue)
  

  return (
    <div>
      <Current selected={props.anecdotes[selected]} votes={votes[selected]}/>
      
      <div>
      <Button 
      onClick={selectRandom}       
      text='next anecdote' 
      />
      <Button
      onClick = {plusVote}
      text='vote'
      />
      <h1>Anecdote with most votes</h1>
      <MostVotes anecdotes={props.anecdotes} votes = {votes} />
      </div>
      
    </div>
  )
}


const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)


