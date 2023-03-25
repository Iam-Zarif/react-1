import { useState } from 'react'

import './App.css'
import Details from './Components/Details/Details'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className="App">
      <h1 className='Header'>The Countries</h1>
      <Details></Details>
    </div>
  )
}



export default App
