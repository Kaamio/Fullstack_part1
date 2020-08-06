import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Head = ({text}) => (
  <h1>{text}</h1>
)

const Button = ({onClick, feedback}) => (  
  <button onClick={onClick}>
  {feedback}
  </button>
)

const StatisticLine = (props) => {  
  return (<tr><td>{props.text}</td>
          <td>{props.value} {props.mark} </td></tr>)
  }

const Statistics = (props) => {

  const {good, bad, neutral} = props

  const positive = () =>  good / (neutral + good + bad) * 100 
  const all = () => good+neutral+bad 
  const average = () => (good*1 + bad*-1) / (all())

  if (all() === 0) {
    return(
      <div>
      <h2>No feedback given</h2>
      </div>
    )

  } 
  
    return (
      <div>
        <div>
          <h1>Statistics</h1>
        </div>
        <table>
          <tbody>
            <StatisticLine text='good' value={good}/>
            <StatisticLine text='neutral' value={neutral}/>
            <StatisticLine text='bad' value={bad}/>
            <StatisticLine text='all' value={all()}/>
            <StatisticLine text='average' value={average()}/>
            <StatisticLine text='positive' value={positive()} mark={'%'}/>
          </tbody>
        </table>      
      </div>
        )
}



const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const good_vote = () => {
    setGood(good+1)
  }
  const neutral_vote = () => {
    setNeutral(neutral+1)
  }
  const bad_vote = () => {
    setBad(bad+1)
  }

  
  return (
  <div>  
    <div>
      <Head text='Give feedback'/>
      <Button onClick={good_vote}  feedback={'good'} />
      <Button onClick={neutral_vote}  feedback={'neutral'} />
      <Button onClick={bad_vote}  feedback={'bad'} />
    </div>
      <Statistics good={good} neutral={neutral} bad={bad}/>
  </div> 
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
);


