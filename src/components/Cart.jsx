import React from 'react';
import styled from 'styled-components';
import { FaTimesCircle, FaShoppingBag } from 'react-icons/fa';

const CartContainer = styled.div`
  position: fixed;
  top: 0;
  right: ${props => props.isOpen ? '0' : '-100%'};
  width: 100%;
  max-width: 400px;
  height: 100vh;
  background-color: white;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  z-index: 1001;
  transition: right 0.3s ease;
  display: flex;
  flex-direction: column;
`;

const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid #eee;
`;

const CartTitle = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  color: #333;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #666;
  cursor: pointer;
  transition: color 0.2s;
  
  &:hover {
    color: #ff6b6b;
  }
`;

const CartContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem;
`;

const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #999;
  text-align: center;
  
  svg {
    font-size: 3rem;
    margin-bottom: 1rem;
    opacity: 0.3;
  }
`;

const CartItem = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid #eee;
`;

const ItemImage = styled.div`
  width: 80px;
  height: 80px;
  background-color: #f5f5f5;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #777;
  font-size: 0.8rem;
  text-align: center;
`;

const ItemDetails = styled.div`
  flex: 1;
`;

const ItemTitle = styled.h3`
  font-size: 1.1rem;
  margin: 0 0 0.5rem 0;
  color: #333;
`;

const ItemPrice = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #ff6b6b;
  margin: 0;
`;

const ItemQuantity = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const QuantityButton = styled.button`
  background-color: #f5f5f5;
  border: none;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 4px;
  
  &:hover {
    background-color: #e0e0e0;
  }
`;

const QuantityValue = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  color: #999;
  font-size: 0.9rem;
  margin-top: 0.5rem;
  cursor: pointer;
  padding: 0;
  text-decoration: underline;
  
  &:hover {
    color: #ff6b6b;
  }
`;

const CartFooter = styled.div`
  padding: 1.5rem;
  border-top: 1px solid #eee;
  background-color: #f9f9f9;
`;

const CartTotal = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
`;

const CheckoutButton = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: #ff6b6b;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #ff5252;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transition: opacity 0.3s, visibility 0.3s;
`;

const Cart = ({ isOpen, closeCart, cartItems = [], updateQuantity, removeFromCart }) => {
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  
  return (
    <>
      <Overlay isOpen={isOpen} onClick={closeCart} />
      <CartContainer isOpen={isOpen}>
        <CartHeader>
          <CartTitle>Il tuo carrello</CartTitle>
          <CloseButton onClick={closeCart}>
            <FaTimesCircle />
          </CloseButton>
        </CartHeader>
        
        <CartContent>
          {cartItems.length === 0 ? (
            <EmptyCart>
              <FaShoppingBag />
              <p>Il tuo carrello è vuoto</p>
            </EmptyCart>
          ) : (
            cartItems.map(item => (
              <CartItem key={item.id}>
                <ItemImage>
                  SbucciAmela Pro
                </ItemImage>
                
                <ItemDetails>
                  <ItemTitle>{item.name}</ItemTitle>
                  <ItemPrice>€{item.price.toFixed(2)}</ItemPrice>
                  
                  <ItemQuantity>
                    <QuantityButton 
                      onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                    >
                      -
                    </QuantityButton>
                    <QuantityValue>{item.quantity}</QuantityValue>
                    <QuantityButton
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </QuantityButton>
                  </ItemQuantity>
                  
                  <RemoveButton onClick={() => removeFromCart(item.id)}>
                    Rimuovi
                  </RemoveButton>
                </ItemDetails>
              </CartItem>
            ))
          )}
        </CartContent>
        
        {cartItems.length > 0 && (
          <CartFooter>
            <CartTotal>
              <span>Totale:</span>
              <span>€{totalAmount.toFixed(2)}</span>
            </CartTotal>
            <CheckoutButton>
              Procedi al checkout
            </CheckoutButton>
          </CartFooter>
        )}
      </CartContainer>
    </>
  );
};

export default Cart;