import React,{useState} from 'react'

export default function App() {
    const [count,setCount]=useState(0);

    const handleIncrement=()=>{
        setCount((count)=>{
            return count+1;
        })
    }

  return (
    <div>
        <h1>Counter using cutsom hook</h1>
        <h4>count:{count}</h4>
        <button onClick={handleIncrement}>Increment</button>
      
    </div>
  )
}
