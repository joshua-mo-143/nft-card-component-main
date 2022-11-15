import { useState } from 'react'
import Card from './components/Card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="cardWrapper">
        <Card/>
    </div>
  )
}

export default App
