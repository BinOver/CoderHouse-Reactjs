import { useState } from 'react'
import { Header } from './components/Header/Header'
import { ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import './styles/styles.scss'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <ItemListContainer mensaje="Productos " />
    </div>
  )
}

export default App
