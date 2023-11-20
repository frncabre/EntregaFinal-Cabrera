import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'; 
import { createContext } from 'react'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'

function App() {
  return (
    <>
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/'element={<ItemListContainer greeting={'Lista de productos'}/>}> </Route>
          <Route path='/item/:itemId'element={<ItemDetailContainer />}> </Route>
          <Route path='/category/:categoryId'element={<ItemListContainer greeting={'Filtrado por categoria'}/>}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/checkout' element={<Checkout />}></Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
    </>
  )
}

export default App