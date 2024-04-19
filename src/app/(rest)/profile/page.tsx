"use client"
import { useEffect, useRef, useState } from "react";

function MyComponent() {
    const [count, setCount] = useState(0);
    const [rerender, setRerender] = useState(0)
    

    function main(){
        let count = 10;
        const intervalId = setInterval(() => {
        // Access the current state value directly
            setRerender(count - 1);
            count--;
            console.log("here")
            if(count == 0) clearInterval(intervalId)
         // Make assumptions or perform actions based on the current state value
        }, 1000); // Interval of 10 seconds

    }
    
    useEffect( () => {
        console.log(count)
    }, [rerender])
  
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={main}>Main</button>
        <button onClick={() => setCount(count + 1)}>Hehe</button>
      </div>
    );
  }
  
  export default MyComponent;
  