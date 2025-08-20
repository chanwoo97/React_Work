import React from 'react';
import axios from 'axios';
import WeatherItem from './WeatherItem';
import styled from 'styled-components';
import usePromise from '../lib/usePromise'; // Added usePromise import

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: space-around;
  align-items: flex-start;
  padding: 1rem;
`;

const WeatherList = () => {
  const [loading, response, error] = usePromise(async () => {
    const API_KEY = 'bde82c3020ccfc693e813da990156eb1';
    const CITY_NAME = 'Busan';
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}&units=metric&lang=kr`;
    const res = await axios.get(API_URL);
    const data = res.data;

    const parsedData = [
      { category: '날씨', value: data.weather[0].description },
      { category: '기온', value: `${data.main.temp}°C` },
      { category: '체감온도', value: `${data.main.feels_like}°C` },
      { category: '최저기온', value: `${data.main.temp_min}°C` },
      { category: '최고기온', value: `${data.main.temp_max}°C` },
      { category: '습도', value: `${data.main.humidity}%` },
      { category: '풍속', value: `${data.wind.speed}m/s` },
    ];
    return parsedData;
  }, []);

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>오류가 발생했습니다: {error.message}</div>;
  if (!response || response.length === 0)
    return <div>날씨 데이터가 없습니다.</div>;

  return (
    <ListContainer>
      {response.map((item, index) => (
        <WeatherItem key={index} item={item} />
      ))}
    </ListContainer>
  );
};

export default WeatherList;
