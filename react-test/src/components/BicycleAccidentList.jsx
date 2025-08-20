import React from 'react';
import axios from 'axios';
import BicycleAccidentItem from './BicycleAccidentItem';
import styled from 'styled-components';
import usePromise from '../lib/usePromise';

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const BicycleAccidentList = () => {
  const [loading, response, error] = usePromise(async () => {
    const API_KEY =
      '1mk1O6r04EO4B2%2B%2Fdy1VA%2FvFrKRorSF8kxV0u4us85ne59tI38wBt9KApDBWC3bC%2FCpCMpw5XQ3IFfcSgUVymQ%3D%3D';
    const API_URL = `http://apis.data.go.kr/B552061/frequentzoneBicycle/getRestFrequentzoneBicycle?ServiceKey=${API_KEY}&searchYearCd=2021&siDo=26&guGun=530&numOfRows=10&pageNo=1&type=json`;
    const res = await axios.get(API_URL);
    return res.data?.items?.item || [];
  }, []);

  if (loading) return <div>로딩 중...</div>;
  if (error)
    return (
      <div>오류가 발생했습니다. API 응답 구조를 확인해야 할 수 있습니다.</div>
    );
  if (!response) return null;

  return (
    <ListContainer>
      {response.map((item, index) => (
        <BicycleAccidentItem key={index} item={item} />
      ))}
    </ListContainer>
  );
};

export default BicycleAccidentList;
