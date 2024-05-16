import React,{useState} from 'react';

function useCounter(){
    const [count,setCount]=useState(0);

    const handleIncrement=()=>{
        setCount((count)=>{
            return count+1;
        })
    }

    return {
        count,
        handleIncrement
    }

}

export default useCounter;