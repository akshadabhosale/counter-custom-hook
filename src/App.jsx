import React,{useState} from 'react';
import useCounter from './hooks/UseCounter';



export default function App() {
    const {count,handleIncrement}=useCounter();
   

  return (
    <div>
        <h1>Counter using cutsom hook</h1>
        <h4>count:{count}</h4>
        <button onClick={handleIncrement}>Increment</button>
      
    </div>
  )
}
