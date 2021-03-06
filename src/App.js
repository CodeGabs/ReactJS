import './App.css';
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { Nosotros } from './components/Nosotros'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { Cart } from "./components/Cart/Cart";
import { Checkout } from "./components/Checkout/Checkout";


function App() {
  return (

    <CartProvider>
      <BrowserRouter>

        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path='/productos/:catId' element={<ItemListContainer />} />
          <Route path='/detail/:itemId' element={<ItemDetailContainer />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={ <Checkout/> } />

          <Route path='*' element={<Navigate to='/' />} />
        </Routes>

      </BrowserRouter>
    </CartProvider>

  )
}

export default App;
