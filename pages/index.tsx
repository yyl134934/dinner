import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import { Button } from 'antd';
import styled from 'styled-components';

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  margin: 40px 0;
  font-weight: 700;
`;

const Home: NextPage = () => {
  return (
    <HomeWrapper>
      <Title>今晚吃什么？</Title>
      <Link href="/posts/menu">
        <Button type="primary">点餐</Button>
      </Link>
    </HomeWrapper>
  );
};
export default Home;
