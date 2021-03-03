import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.header`
  border-right: 1px solid ${({ theme }) => theme.colors.borderColor};
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

export const StyledLink = styled(NavLink)`
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
  }
  &.active::after {
    opacity: 1;
  }
`;
