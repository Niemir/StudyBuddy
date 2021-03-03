import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.grey};
    bottom: 0;
  }
`;

export const StyledInfo = styled.div`
  padding: 25px 20px;
  h2 {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.darkGrey};
    font-size: ${({ theme }) => theme.fontSize.l};
  }
  p {
    font-weight: 400;
    color: ${({ theme }) => theme.colors.darkGrey};
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;
