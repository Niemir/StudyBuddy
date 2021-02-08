import React from 'react';

import UsersList from 'compontents/UsersList/UsersList';

import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #f7f8fa;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const Root = () => (
  <Wrapper>
    <UsersList />
  </Wrapper>
);

export default Root;
