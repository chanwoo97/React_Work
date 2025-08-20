
import React from 'react';
import axios from 'axios';
import ArtItem from './ArtItem';
import styled from 'styled-components';
import usePromise from '../lib/usePromise';

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ArtItemList = () => {
  const [loading, response, error] = usePromise(async () => {
    const API_KEY = "1mk1O6r04EO4B2%2B%2Fdy1VA%2FvFrKRorSF8kxV0u4us85ne59tI38wBt9KApDBWC3bC%2FCpCMpw5XQ3IFfcSgUVymQ%3D%3D";
    const API_URL = `http://apis.data.go.kr/6260000/PublicArt/getPublicArtInfo?serviceKey=${API_KEY}&pageNo=1&numOfRows=20&resultType=json`;
    const res = await axios.get(API_URL);
    return res.data.response.body.items.item;
  }, []);

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>오류가 발생했습니다: {error.message}</div>;
  if (!response) return null;

  return (
    <ListContainer>
      {response.map((item, index) => (
        <ArtItem key={index} item={item} />
      ))}
    </ListContainer>
  );
};

export default ArtItemList;
