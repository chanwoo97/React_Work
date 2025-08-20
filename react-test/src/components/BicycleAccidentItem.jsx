import React from 'react';
import styled from 'styled-components';

const ItemCard = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  transition: transform 0.2s ease-in-out;
  text-align: left;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Title = styled.h4`
  margin: 0 0 1rem 0;
  color: #333;
  font-size: 1.25rem;
`;

const InfoText = styled.p`
  margin: 0.25rem 0;
  color: #666;
  font-size: 0.9rem;
`;

const BicycleAccidentItem = ({ item }) => {
  return (
    <ItemCard>
      <Title>{item.spot_nm}</Title>
      <InfoText>
        <strong>발생건수:</strong> {item.occrrnc_cnt}
      </InfoText>
      <InfoText>
        <strong>사상자수:</strong> {item.caslt_cnt}
      </InfoText>
      <InfoText>
        <strong>중상자수:</strong> {item.se_dnv_cnt}
      </InfoText>
      <InfoText>
        <strong>사망자수:</strong> {item.dth_dnv_cnt}
      </InfoText>
    </ItemCard>
  );
};

export default BicycleAccidentItem;
