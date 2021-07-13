import styled from 'styled-components';
import { Title } from 'components/atoms/Title/Title';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100%;
`;
export const StyledTitle = styled(Title)`
  min-width: 160px;
`;
export const StyledTop = styled.div`
  display: flex;
  align-items: center;
  padding-left: 30px;
  margin: 20px 0 30px 25px;
`;

export const StyledNav = styled.nav`
  margin-left: 20px;
  display: flex;
  a {
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.darkGrey};
    margin-right: 10px;
    &:hover {
      background-color: ${({ theme }) => theme.colors.darkGrey};
      color: #fff;
    }
  }
`;
