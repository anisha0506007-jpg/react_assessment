


import React, { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  function Increment() {
    if (count < 25) {
      setCount(count + 5)
    }
  }

  function Decrement() {
    if (count > 0) {
      setCount(count - 5)
    }
  }

  return (
    <div>
      <h1>Counter Display</h1>

      <h2>{count}</h2>

      <button onClick={Increment}>
        Increase
      </button>

      <button
        onClick={Decrement}
        disabled={count==0}
      >
        Decrease
      </button>

      {
        count >= 25
          ? <h1>Maximum Limit Reached</h1>
          : null
      }
    </div>
  )
}

export default App


