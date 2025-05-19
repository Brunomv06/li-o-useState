import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {

  const handleEsconder = () => {
    ternario ? setEsconder("") : setEsconder("aperta no botão para ele sumir")

    ternario ? setTernario(false) : setTernario(true)
  }
  

  const [count, setCount] = useState(100)
  const [ternario, setTernario] = useState(true)
  const [esconder, setEsconder] = useState("aperta no botão para ele sumir")

  return (
    <>
      <div>
        <button onClick={() => setCount((count) => count + 100)}>
          count is {count}
        </button>
      </div>
      <p>
      {esconder}
      </p>
      <button onClick={handleEsconder}>
          {ternario ? "Aperte para sumir" : "Aperte para aparecer"}
      </button>
    </>
  )
}

export default App
