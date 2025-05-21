import React from 'react';
import styled from 'styled-components';
import { FaCheck, FaClock, FaShieldAlt, FaLeaf } from 'react-icons/fa';

const BenefitsContainer = styled.section`
  max-width: 1200px;
  margin: 4rem auto;
  padding: 0 1rem;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
`;

const SectionSubtitle = styled.p`
  text-align: center;
  color: #666;
  font-size: 1.1rem;
  max-width: 800px;
  margin: 0 auto 3rem auto;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const FeatureCard = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const IconContainer = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #f8f8f8;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  
  svg {
    font-size: 2rem;
    color: #ff6b6b;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.2rem;
  color: #333;
  margin: 0 0 1rem 0;
`;

const FeatureDescription = styled.p`
  color: #666;
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0;
`;

const Benefits = () => {
  const features = [
    {
      id: 1,
      icon: <FaClock />,
      title: "Risparmio di Tempo",
      description: "Sbuccia, affetta e rimuove il torsolo in un solo movimento, riducendo il tempo di preparazione dell'80%."
    },
    {
      id: 2,
      icon: <FaCheck />,
      title: "Risultati Perfetti",
      description: "Design ergonomico e lame in acciaio inossidabile per mele perfettamente sbucciate ogni volta."
    },
    {
      id: 3,
      icon: <FaShieldAlt />,
      title: "Sicurezza Garantita",
      description: "Sistema di sicurezza integrato che protegge le dita durante l'utilizzo, ideale anche per i bambini."
    },
    {
      id: 4,
      icon: <FaLeaf />,
      title: "Meno Sprechi",
      description: "Sbuccia con precisione riducendo al minimo gli scarti e mantenendo tutti i nutrienti della frutta."
    }
  ];

  return (
    <BenefitsContainer>
      <SectionTitle>Perché Scegliere SbucciAmela Pro?</SectionTitle>
      <SectionSubtitle>
        Scopri i vantaggi che hanno reso il nostro sbucciamele il preferito da migliaia di italiani
      </SectionSubtitle>
      
      <FeaturesGrid>
        {features.map(feature => (
          <FeatureCard key={feature.id}>
            <IconContainer>
              {feature.icon}
            </IconContainer>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </FeatureCard>
        ))}
      </FeaturesGrid>
    </BenefitsContainer>
  );
};

export default Benefits;