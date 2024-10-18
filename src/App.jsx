import { useState } from 'react'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'

function App() {
  function handleClick(){
    alert('button click')
  }
  function handleClick2(){
    alert('button 2 click')
  }
  const addToFive = (num) =>{
    alert(num+5);
  }

  return (
    <>
     
      <h2>React Core Concepts 2</h2>
      <Counter></Counter>
      <Team></Team>
      <Users></Users>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={() =>{alert('third clicked')}}>Click 3</button>
      <button onClick ={() => addToFive(3)}>Four</button>
 
    </>
  )
}

export default App
