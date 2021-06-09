import React from 'react';

import Nav from 'components/organisms/Nav/Nav';
import { Wrapper } from './MainTemplate.styles';
import SearchBar from 'components/organisms/SearchBar/SearchBar';
import NewsSection from '../NewsSection/NewsSection';

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Nav />
      <SearchBar />
      {children}

      <NewsSection />
    </Wrapper>
  );
};
export default MainTemplate;
