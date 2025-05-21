import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaInstagram, FaTwitter, FaCreditCard, FaPaypal } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 3rem 1rem;
  margin-top: 3rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FooterTitle = styled.h3`
  color: #fff;
  font-size: 1.3rem;
  margin: 0 0 1rem 0;
`;

const FooterLink = styled.a`
  color: #ddd;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s;
  
  &:hover {
    color: #ff6b6b;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  
  a {
    color: #fff;
    font-size: 1.5rem;
    transition: transform 0.2s;
    
    &:hover {
      transform: translateY(-3px);
    }
  }
`;

const PaymentMethods = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  
  svg {
    font-size: 2rem;
    color: #ddd;
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid #555;
  font-size: 0.9rem;
  color: #aaa;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>SbucciAmela Pro</FooterTitle>
          <p>Lo sbucciamele professionale che rivoluzionerà la tua cucina. Sbuccia, affetta e rimuove il torsolo in un unico movimento.</p>
          <SocialLinks>
            <a href="#" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
          </SocialLinks>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Link Utili</FooterTitle>
          <FooterLink href="#">Chi siamo</FooterLink>
          <FooterLink href="#">Termini e condizioni</FooterLink>
          <FooterLink href="#">Privacy Policy</FooterLink>
          <FooterLink href="#">Spedizioni e resi</FooterLink>
          <FooterLink href="#">FAQ</FooterLink>
          <FooterLink href="#">Contatti</FooterLink>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Metodi di Pagamento</FooterTitle>
          <PaymentMethods>
            <FaCreditCard />
            <FaPaypal />
          </PaymentMethods>
          <p>Pagamenti sicuri con SSL. Spedizione gratuita per ordini superiori a €30.</p>
        </FooterSection>
      </FooterContent>
      
      <Copyright>
        © {new Date().getFullYear()} SbucciAmela Pro. Tutti i diritti riservati.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;