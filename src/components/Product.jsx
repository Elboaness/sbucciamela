import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Countdown from 'react-countdown';
import { FaStar, FaCheck, FaTruck, FaShieldAlt, FaArrowRight } from 'react-icons/fa';

const ProductContainer = styled.section`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ImageSection = styled.div`
  flex: 1;
  
  img {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
    
    &:hover {
      transform: scale(1.02);
    }
  }
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  aspect-ratio: 1;
  background-color: #f5f5f5;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: #777;
`;

const ProductInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ProductTitle = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin: 0;
`;

const ProductSubtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin: 0;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const OriginalPrice = styled.span`
  font-size: 1.5rem;
  color: #999;
  text-decoration: line-through;
`;

const CurrentPrice = styled.span`
  font-size: 2.5rem;
  font-weight: 700;
  color: #ff6b6b;
`;

const Discount = styled.span`
  background-color: #ff6b6b;
  color: white;
  padding: 0.3rem 0.7rem;
  border-radius: 4px;
  font-weight: bold;
  font-size: 1rem;
`;

const ReviewsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Stars = styled.div`
  display: flex;
  color: #ffc107;
`;

const ReviewCount = styled.span`
  color: #666;
`;

const AvailabilityContainer = styled.div`
  background-color: #fff8e6;
  border-radius: 8px;
  padding: 1rem;
  border-left: 4px solid #ffc107;
`;

const StockText = styled.p`
  margin: 0;
  font-weight: 600;
  color: #d17d00;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background-color: #ffe0b2;
  border-radius: 4px;
  margin-top: 0.5rem;
  overflow: hidden;
`;

const Progress = styled.div`
  height: 100%;
  background-color: #ffa000;
  width: ${props => props.percentage}%;
`;

const CountdownContainer = styled.div`
  background-color: #f8f8f8;
  border-radius: 8px;
  padding: 1rem;
  margin-top: 1rem;
`;

const CountdownTitle = styled.p`
  margin: 0 0 0.5rem 0;
  font-weight: 600;
  font-size: 1rem;
  color: #333;
`;

const CountdownDisplay = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
`;

const TimeUnit = styled.div`
  background-color: #333;
  color: white;
  border-radius: 4px;
  padding: 0.5rem;
  min-width: 3rem;
  text-align: center;
  font-weight: bold;
  
  .value {
    font-size: 1.5rem;
  }
  
  .label {
    font-size: 0.7rem;
    opacity: 0.8;
  }
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

const Feature = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  color: #555;
  
  svg {
    color: #4d8b31;
    font-size: 1.2rem;
  }
`;

const BenefitsSection = styled.div`
  margin-top: 1rem;
`;

const BenefitsTitle = styled.h3`
  font-size: 1.2rem;
  color: #333;
  margin: 0 0 1rem 0;
`;

const BenefitsList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  
  @media (min-width: 480px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const BenefitItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #f8f8f8;
  padding: 0.8rem;
  border-radius: 6px;
  
  svg {
    color: #4d8b31;
    font-size: 1.2rem;
  }
`;

const AddToCartButton = styled.button`
  background-color: #ff6b6b;
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: background-color 0.2s, transform 0.2s;
  
  &:hover {
    background-color: #ff5252;
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const Product = ({ addToCart }) => {
  const [remainingItems, setRemainingItems] = useState(12);
  const totalItems = 50;
  const percentage = (remainingItems / totalItems) * 100;
  
  // Set random countdown target (24-48 hours from now)
  const [countdownTarget] = useState(() => {
    const now = new Date();
    return new Date(now.getTime() + (24 + Math.random() * 24) * 60 * 60 * 1000);
  });
  
  // Countdown renderer
  const countdownRenderer = ({ days, hours, minutes, seconds }) => (
    <CountdownDisplay>
      <TimeUnit>
        <div className="value">{days}</div>
        <div className="label">Giorni</div>
      </TimeUnit>
      <TimeUnit>
        <div className="value">{hours}</div>
        <div className="label">Ore</div>
      </TimeUnit>
      <TimeUnit>
        <div className="value">{minutes}</div>
        <div className="label">Minuti</div>
      </TimeUnit>
      <TimeUnit>
        <div className="value">{seconds}</div>
        <div className="label">Secondi</div>
      </TimeUnit>
    </CountdownDisplay>
  );
  
  return (
    <ProductContainer>
      <ImageSection>
        <ImagePlaceholder>
          Immagine dello SbucciAmela
        </ImagePlaceholder>
      </ImageSection>
      
      <ProductInfo>
        <div>
          <ProductTitle>SbucciAmela Pro</ProductTitle>
          <ProductSubtitle>Lo sbucciamele professionale che rivoluzionerà la tua cucina</ProductSubtitle>
        </div>
        
        <ReviewsContainer>
          <Stars>
            {[...Array(5)].map((_, i) => <FaStar key={i} />)}
          </Stars>
          <ReviewCount>4.9/5 (384 recensioni verificate)</ReviewCount>
        </ReviewsContainer>
        
        <PriceContainer>
          <OriginalPrice>€39,99</OriginalPrice>
          <CurrentPrice>€19,99</CurrentPrice>
          <Discount>-50%</Discount>
        </PriceContainer>
        
        <CountdownContainer>
          <CountdownTitle>Offerta speciale termina tra:</CountdownTitle>
          <Countdown date={countdownTarget} renderer={countdownRenderer} />
        </CountdownContainer>
        
        <AvailabilityContainer>
          <StockText>⚠️ Attenzione: solo {remainingItems} pezzi rimasti in magazzino!</StockText>
          <ProgressBar>
            <Progress percentage={percentage} />
          </ProgressBar>
        </AvailabilityContainer>
        
        <FeaturesList>
          <Feature><FaCheck /> Sbuccia, affetta e togli il torsolo in secondi</Feature>
          <Feature><FaCheck /> Lame in acciaio inossidabile di alta qualità</Feature>
          <Feature><FaCheck /> Meccanismo di sicurezza integrato</Feature>
          <Feature><FaCheck /> Facile da pulire e lavabile in lavastoviglie</Feature>
          <Feature><FaCheck /> Design ergonomico per un uso confortevole</Feature>
        </FeaturesList>
        
        <BenefitsSection>
          <BenefitsTitle>Vantaggi esclusivi:</BenefitsTitle>
          <BenefitsList>
            <BenefitItem>
              <FaTruck />
              <span>Spedizione gratuita in 24h</span>
            </BenefitItem>
            <BenefitItem>
              <FaShieldAlt />
              <span>Garanzia 2 anni</span>
            </BenefitItem>
          </BenefitsList>
        </BenefitsSection>
        
        <AddToCartButton onClick={addToCart}>
          Aggiungi al Carrello <FaArrowRight />
        </AddToCartButton>
      </ProductInfo>
    </ProductContainer>
  );
};

export default Product;