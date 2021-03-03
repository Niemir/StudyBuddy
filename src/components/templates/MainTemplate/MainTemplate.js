import React from 'react';
import Nav from 'components/organisms/Nav/Nav';
import { Wrapper } from './MainTemplate.styles';

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Nav />
      {children}
    </Wrapper>
  );
};
export default MainTemplate;
