import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Table from './components/Test/Test'
import ProductForm from './components/Form/Form'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ProductForm/>
    </>
  )
}

export default App
