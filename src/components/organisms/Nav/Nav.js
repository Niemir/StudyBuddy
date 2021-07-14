import React from 'react';
import { Wrapper, StyledLink, StyledNav, Logo } from './Nav.styles';

const Nav = () => {
  return (
    <Wrapper>
      <Logo>
        <h1>
          Studdy <br />
          Buddy
        </h1>
      </Logo>
      <StyledNav>
        <StyledLink to="/group" exact>
          Dashboard
        </StyledLink>
      </StyledNav>
    </Wrapper>
  );
};
export default Nav;
