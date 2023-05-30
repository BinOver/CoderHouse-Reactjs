import { NavBar } from './components/NavBar/NavBar'
import { ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import './styles/styles.scss'
import './App.css'

function App() {

  return (
    <div>
      <NavBar />
      <ItemListContainer mensaje="Bienvenidos a nuestro e-Commerce" />
    </div>
  )
}

export default App
