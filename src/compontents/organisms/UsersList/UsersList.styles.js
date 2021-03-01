import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 25px;
  width: 100%;
  max-width: 500px;
  background-color: ${({ theme }) => theme.colors.whtie};
  padding: 40px 30px;
  border-radius: 25px;
  box-shadow: 0 5px 25px -10px rgba(0, 0, 0, 0.3);
`;

export const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const StyledTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.darkGrey};
`;
