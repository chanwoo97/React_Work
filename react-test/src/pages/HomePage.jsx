import React from 'react';
import Categories from '../components/Categories';
import styled from 'styled-components';

const HomePageContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 3rem;
`;

const HomePage = () => {
  return (
    <HomePageContainer>
      <Title>데이터 조회 서비스</Title>
      <Categories />
    </HomePageContainer>
  );
};

export default HomePage;
