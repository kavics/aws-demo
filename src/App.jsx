import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import kavicsLogo from './assets/kavics.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <button onClick={() => alert('Helló Dávid!\r\n... from a very first AWS hosted webapp.\r\nNa ki a király?')}>
          Message to <b>edavid</b>
        </button><br/>
        <button onClick={() => setCount((count) => count + 1)}>
          count of clicks is {count}
        </button>
      </div>
      <div>
        <a href="https://vite.dev" target="_blank">
          built by: <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          dev with: <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="." target="_blank">
          written by: <img src={kavicsLogo} className="logo" alt="Kavics logo" />
        </a>
      </div>
    </>
  )
}

export default App
