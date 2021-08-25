import React, { useEffect } from 'react';
import { Layout } from 'antd';
import { NextPage, GetStaticProps } from 'next';
import styled from 'styled-components';
import { getDishInfo } from 'server/api/menu';

const { Header, Content } = Layout;

export const getStaticProps: GetStaticProps = async () => {
  const dishInfo = await getDishInfo();
  return {
    props: {
      dishInfo: dishInfo,
    },
  };
};

interface Props {
  dishInfo: MenuGlobal.Dish[];
}

const MenuPage: NextPage<Props> = ({ dishInfo }) => {
  useEffect(() => {}, [dishInfo]);
  return (
    <div>
      <Header>菜单</Header>
      <Content>
        {dishInfo.map((item) => (
          <div>{JSON.stringify(item)}</div>
        ))}
      </Content>
    </div>
  );
};

export default MenuPage;
