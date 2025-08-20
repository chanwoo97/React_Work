
import React from 'react';
import styled from 'styled-components';

const ItemCard = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  gap: 1.5rem;
  padding: 1.5rem;
  transition: transform 0.2s ease-in-out;
  text-align: left;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ItemImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid #eee;
`;

const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Title = styled.h4`
  margin: 0;
  color: #333;
  font-size: 1.25rem;
`;

const InfoText = styled.p`
  margin: 0;
  color: #666;
  font-size: 0.9rem;
`;

const ArtItem = ({ item }) => {
  const imageUrl = item.imgSrc ? item.imgSrc.split('||')[0] : 'https://via.placeholder.com/150';

  return (
    <ItemCard>
      <ItemImage src={imageUrl} alt={item.title} />
      <ItemContent>
        <Title>{item.title}</Title>
        <InfoText><strong>작품 내용:</strong> {item.content || '정보 없음'}</InfoText>
        <InfoText><strong>주소:</strong> {item.addr1 || '정보 없음'}</InfoText>
        <InfoText><strong>관리 기관:</strong> {item.mainAgent || '정보 없음'}</InfoText>
      </ItemContent>
    </ItemCard>
  );
};

export default ArtItem;
