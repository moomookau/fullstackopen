import React, { useState } from 'react'

const Header = ({title}) => {
  return <h1>{title}</h1>
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header title="give feedback" />
      <Button handleClick={() => setGood(good+1)} text="good" />
      <Button handleClick={() => setNeutral(neutral+1)} text="neutral" />
      <Button handleClick={() => setBad(bad+1)} text="bad" />
      <Header title="statistics" />
      {good+neutral+bad>0 ? <Statistics good={good} neutral={neutral} bad={bad}/> : "No feedback given"}
    </div>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const StatisticLine = ({text,value}) => (
  <tr><td>{text}</td><td>{value}</td></tr>
)

const Statistics = ({good,neutral,bad}) => {
  return (
    <table>
      <tbody>
        <StatisticLine text="good" value ={good} />
        <StatisticLine text="neutral" value ={neutral} />
        <StatisticLine text="bad" value ={bad} />
        <StatisticLine text="all" value ={good+neutral+bad} />
        <StatisticLine text="average" value ={(good-bad)/(good+neutral+bad)} />
        <StatisticLine text="positive" value ={(good)/(good+neutral+bad)*100 + "%"} />
      </tbody>
    </table>
  )  
}

export default App