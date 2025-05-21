import React from 'react';
import styled from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  color: #ff6b6b;
  span {
    color: #4d8b31;
  }
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
`;

const CartButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #333;
  cursor: pointer;
  position: relative;
  transition: transform 0.2s;
  
  &:hover {
    transform: scale(1.1);
  }
`;

const CartCount = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #ff6b6b;
  color: white;
  font-size: 0.7rem;
  font-weight: bold;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header = ({ cartItems = 0, openCart }) => {
  return (
    <HeaderContainer>
      <Logo>
        Sbucci<span>Amela</span>
      </Logo>
      <NavItems>
        <CartButton onClick={openCart}>
          <FaShoppingCart />
          {cartItems > 0 && <CartCount>{cartItems}</CartCount>}
        </CartButton>
      </NavItems>
    </HeaderContainer>
  );
};

export default Header;