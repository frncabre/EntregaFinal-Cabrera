import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/'element={<ItemListContainer greeting={'Lista de productos'}/>}> </Route>
          <Route path='/item/:itemId'element={<ItemDetailContainer />}> </Route>
          <Route path='/category/:categoryId'element={<ItemListContainer greeting={'Filtrado por categoria'}/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App