import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './assets/components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    name: "Gaurav",
    age: 21
  }

  let myArr = [1,2,3,45]

  return (
    <>
            <Card username='chaiaurreact' sampleObj = {myArr}/>
            <Card/>
            
    </>
  )
}

export default App
