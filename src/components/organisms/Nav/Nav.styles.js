import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.header`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${({ theme }) => theme.colors.darkPurple};
  justify-content: flex-start;
  padding: 30px 0;
  grid-row: 1/3;
  grid-column: 1/1;
`;

export const Logo = styled.div`
  background-color: ${({ theme }) => theme.colors.darkGrey};
  margin-top: 19px;
  h1 {
    color: ${({ theme }) => theme.colors.white};
    font-size: 15px;
    text-align: right;
    padding: 11px 15px;
  }
`;
export const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin-top: 40px;
  padding-left: 20px;
`;

export const StyledLink = styled(NavLink).attrs({ activeClassName: 'active' })`
  color: ${({ theme }) => theme.colors.darkGrey};
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.m};
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-align: right;
  font-weight: bold;
  &::after {
    content: '';
    height: 3px;
    width: 20px;
    margin-left: 5px;
    background-color: ${({ theme }) => theme.colors.borderColor};
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }
  &.active::after {
    opacity: 1;
  }
`;
