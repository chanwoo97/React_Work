import React from 'react';
import { useParams } from 'react-router-dom';
import Categories from '../components/Categories';
import ArtItemList from '../components/ArtItemList';
import BicycleAccidentList from '../components/BicycleAccidentList';
import WeatherList from '../components/WeatherList';
import styled from 'styled-components';

const InfoText = styled.div`
  padding: 2rem;
  text-align: center;
  font-size: 1.2rem;
  color: #868e96;
`;

const categoryComponents = {
  art: <ArtItemList />,
  bicycle: <BicycleAccidentList />,
  weather: <WeatherList />,
};

const DataListPage = () => {
  const params = useParams();
  const category = params.category;

  const ListComponent = category ? categoryComponents[category] : null;

  return (
    <>
      <Categories />
      {ListComponent ? (
        ListComponent
      ) : (
        <InfoText>카테고리를 선택해주세요.</InfoText>
      )}
    </>
  );
};

export default DataListPage;
