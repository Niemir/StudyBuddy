import styled from 'styled-components';

export const ViewWrapper = styled.div`
  margin: 25px;
  width: 100%;
  max-width: 500px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 40px 30px;
  border-radius: 25px;
  box-shadow: 0 5px 25px -10px rgba(0, 0, 0, 0.3);
`;
