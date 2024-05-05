import { useState, useEffect } from "react"

const Counter = () =>{

    const [count, setCount] = useState(0)

    useEffect(() => {
      // This is the "do something" part
      // document.title is the task
      // counter is to display
      // [count] mean, when count change, do the task document.title = `Counter: ${count}`
      //, [] <--- when to do the task
      document.title = `Counter: ${count}`;
    }, [count]);

    const increase  = () =>{
        setCount(count+1)
    }

    const decrease = () => {
        setCount(count-1)
    }


    return (
      <div>
        <p>{count}</p>
        <button onClick={decrease}>decrease</button>
        <button onClick={increase}>increase</button>
      </div>
    );
}

export default Counter