import { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import Header from './components/Header';
import Product from './components/Product';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Cart from './components/Cart';

const AppContainer = styled.div`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = () => {
    // Check if product is already in cart
    const existingItem = cartItems.find(item => item.id === 1);
    
    if (existingItem) {
      // If exists, update quantity
      updateQuantity(1, existingItem.quantity + 1);
    } else {
      // If not, add new item
      setCartItems([
        ...cartItems,
        {
          id: 1,
          name: 'SbucciAmela Pro',
          price: 19.99,
          quantity: 1
        }
      ]);
    }
    
    // Open cart after adding item
    setIsCartOpen(true);
  };

  const updateQuantity = (id, quantity) => {
    setCartItems(
      cartItems.map(item => 
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <AppContainer>
      <Header cartItems={cartItems.reduce((total, item) => total + item.quantity, 0)} openCart={openCart} />
      <Product addToCart={addToCart} />
      <Benefits />
      <Testimonials />
      <Footer />
      <Cart 
        isOpen={isCartOpen} 
        closeCart={closeCart} 
        cartItems={cartItems}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
      />
    </AppContainer>
  );
}

export default App;
