import React from 'react'
import { useState } from 'react'
const Counter = () => {
    const [count, setCount] = useState(0)
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Counter: {count}</button>
    </div>
  )
}

export default Counter
