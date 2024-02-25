import React, { useState } from 'react';
import '../src/App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Cart from './pages/Cart';
import Detail from './pages/Detail';
import { useTranslation } from 'react-i18next';
import './i18n/i18n'

const App = () => {

  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const { t, i18n } = useTranslation();

  const changeLang=(language)=>{
    const lang = language.toLowerCase();
    i18n.changeLanguage(lang);
  }

  const addToCard = (product) => {
    setCart([...cart, product]);
    setCartCount((cartCount)=>cartCount +1);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const addPlusCart = (product) => {
    const plusProduct = cart.find((item) => item.id === product.id);
  
    if (plusProduct) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                count: (item.count || 0) + 1,
                price: typeof item.price === 'string' ? ((item.count || 0) + 1) * parseFloat(item.price.replace(/[^0-9.]/g, '')) : item.price,
              }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, count: 1, price: typeof product.price === 'string' ? parseFloat(product.price.replace(/[^0-9.]/g, '')) : product.price }]);
    }
  };
  
  const addMinusCart = (product) => {
    const minusProduct = cart.find((item) => item.id === product.id);
  
    if (minusProduct) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                count: (item.count || 0) - 1,
                price: typeof item.price === 'string' ? ((item.count || 0) - 1) * parseFloat(item.price.replace(/[^0-9.]/g, '')) : item.price,
              }
            : item
        )
      );
  
      if ((minusProduct.count || 0) === 1) {
        setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
      }
    }
  };
  
  
  const calculateTotalSum = () => {
    return cart.reduce((sum, item) => {
      const price = typeof item.price === 'string' ? parseFloat(item.price.replace(/[^0-9.]/g, '')) : item.price;
      return sum + (item.count || 1) * price;
    }, 0);
  };
  

  return (
    <div>
      <Header cartCount={cartCount} changeLang={changeLang}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/about' element={<About />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/cart' element={<Cart cart={cart} removeFromCart={removeFromCart} addPlusCart={addPlusCart} addMinusCart={addMinusCart} total={calculateTotalSum()}/>} />
        <Route path='/detail/:ProductId' element={<Detail addToCard={addToCard} />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
