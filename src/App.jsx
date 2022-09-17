import { useState } from 'react'
import './App.css'
import Countries from './components/Countries'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
   
      <Countries />
     
    </div>
  )
}

export default App
