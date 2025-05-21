import React from 'react';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';

const TestimonialsContainer = styled.section`
  max-width: 1200px;
  margin: 3rem auto;
  padding: 2rem 1rem;
  background-color: #f8f8f8;
  border-radius: 10px;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  color: #333;
  margin-bottom: 2rem;
`;

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const TestimonialCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Stars = styled.div`
  display: flex;
  color: #ffc107;
`;

const Quote = styled.p`
  margin: 0;
  font-style: italic;
  color: #555;
  font-size: 1rem;
  line-height: 1.6;
`;

const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: auto;
`;

const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #777;
  font-weight: bold;
`;

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.span`
  font-weight: bold;
  color: #333;
`;

const Location = styled.span`
  font-size: 0.9rem;
  color: #777;
`;

const testimonials = [
  {
    id: 1,
    rating: 5,
    quote: "Incredibile! Ho sempre odiato sbucciare le mele, ma con SbucciAmela Pro è diventato un gioco da ragazzi. Risparmio tantissimo tempo e le mele vengono perfette!",
    name: "Laura B.",
    location: "Milano",
    initial: "L"
  },
  {
    id: 2,
    rating: 5,
    quote: "La mia pasticceria ha bisogno di sbucciare decine di mele ogni giorno. Da quando abbiamo acquistato SbucciAmela Pro, abbiamo ridotto i tempi di preparazione della metà!",
    name: "Marco T.",
    location: "Roma",
    initial: "M"
  },
  {
    id: 3,
    rating: 5,
    quote: "Un regalo per mia madre che adora fare le torte di mele. Non poteva essere più felice! Sbuccia perfettamente e in un attimo.",
    name: "Giulia F.",
    location: "Torino",
    initial: "G"
  }
];

const Testimonials = () => {
  return (
    <TestimonialsContainer>
      <SectionTitle>Cosa dicono i nostri clienti</SectionTitle>
      <TestimonialGrid>
        {testimonials.map(testimonial => (
          <TestimonialCard key={testimonial.id}>
            <Stars>
              {[...Array(testimonial.rating)].map((_, i) => <FaStar key={i} />)}
            </Stars>
            <Quote>{testimonial.quote}</Quote>
            <Author>
              <Avatar>{testimonial.initial}</Avatar>
              <AuthorInfo>
                <Name>{testimonial.name}</Name>
                <Location>{testimonial.location}</Location>
              </AuthorInfo>
            </Author>
          </TestimonialCard>
        ))}
      </TestimonialGrid>
    </TestimonialsContainer>
  );
};

export default Testimonials;