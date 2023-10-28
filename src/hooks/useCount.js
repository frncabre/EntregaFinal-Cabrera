import { useState } from "react"

 export const useCount = () => {
    const [count, setCount] = useState(0)

    const decrement = () =>{
       setCount(old => old - 1) 
    }

    const increment = () =>{
        setCount(old => old + 1) 
    }

    return{
        count,
        decrement,
        increment
    }
}