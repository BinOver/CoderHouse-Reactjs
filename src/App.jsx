import { NavBar } from './components/NavBar/NavBar'
import { ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import './styles/styles.scss'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { Cart } from './components/Cart/Cart'


function App() {

  return (
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer mensaje="Bienvenidos a nuestro e-Commerce" />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={ <Navigate to={"/"} />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
  )
}

export default App
