import { Input } from 'components/atoms/Input/Input';
import styled from 'styled-components';
export const SearchBarWrapper = styled.div`
  grid-row: 1/2;
  grid-column: 2/3;
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkPurple};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 40px;
  ${Input} {
    font-size: ${({ theme }) => theme.fontSize.l};
    width: 100%;

    border: 2px solid ${({ theme }) => theme.colors.lightPurple};
  }
`;
export const StatusInfo = styled.div`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.l};
  margin-right: 40px;
  p {
    margin: 5px;
  }
`;

export const StyledInputWrapper = styled.div`
  width: 100%;
  position: relative;
  max-width: 350px;
`;

export const StyledUsers = styled.div`
  position: absolute;
  left: 0;
  bottom: 2px;
  transform: translateY(100%);
  background: white;
  width: 100%;
  border-radius: 10px;
  max-height: 300px;
  overflow: auto;
  li {
    padding: 10px 20px;
  }
`;
