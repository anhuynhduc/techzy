'use client';

import {Typography, Divider, Flex} from 'antd';
import TodoList from '@/container/TodoList/TodoList';
import Filters from '@/container/TodoList/Filter';
import styled from "styled-components";
import '@/styles/globals.css';

export default function Home() {
  return (
    <Wrapper
    >
      <Title>TODO APP with REDUX</Title>
      <Filters />
      <Divider />
      <TodoList />
    </Wrapper>
  );
}

const Wrapper = styled(Flex)`
  width: 500px;
  margin: 50px auto;
  flex-direction: column;
  background: white;
  padding: 20px;
  box-shadow: 0 0 10px 4px #bfbfbf;
  border-radius: 5px;
  height: 90vh;
`

const Title = styled(Typography)`
  text-align: center;
`
