import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>My Portfolio Website</header>
      <nav>
        <button onClick={() => console.log("Nav button 1")}>Nav 1</button>
        <button onClick={() => console.log("Nav button 2")}>Nav 2</button>
        <button onClick={() => console.log("Nav button 3")}>Nav 3</button>
      </nav>
      <div>
      </div>
      <h1>This is my Portfolio. Feel free to check out any of my projects</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <footer>
        Contact Me
      </footer>
    </>
  )
}

export default App
