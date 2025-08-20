import React from 'react';
import styled from 'styled-components';

const ItemCard = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  transition: transform 0.2s ease-in-out;
  text-align: center;
  width: 22%;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Title = styled.h4`
  margin: 0 0 0.5rem 0;
  color: #333;
  font-size: 1.35rem;
  font-weight: bold;
`;

const InfoText = styled.p`
  margin: 0.1rem 0;
  color: #666;
  font-size: 1rem;
`;

const WeatherItem = ({ item }) => {
  return (
    <ItemCard>
      <Title>{item.category}</Title>
      <InfoText>값: {item.value}</InfoText>
    </ItemCard>
  );
};

export default WeatherItem;
