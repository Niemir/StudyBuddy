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
          Users
        </StyledLink>
        <StyledLink to="add-user">Add User</StyledLink>
      </StyledNav>
    </Wrapper>
  );
};
export default Nav;
