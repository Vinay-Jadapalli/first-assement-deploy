import React,{ useState } from 'react';
import './Counter.css'
function Counter() {
  const [count, setCount] = useState(0);

  const incrementCount = () => 
    setCount(count + 1);

  let decrementCount = () =>
   setCount(count - 1);

  if(count<=0) {
    decrementCount = () => setCount(0);
  }

  return (
    <div className='counter'> 
        <h3>{count}</h3>
        <div className='button'>
      <button onClick={incrementCount}>Increment</button> 
      <button onClick={decrementCount}>Decrement</button>
      </div>
    </div>
  );
}

export default Counter;