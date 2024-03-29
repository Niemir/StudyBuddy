import { Title } from 'components/atoms/Title/Title';
import styled, { keyframes } from 'styled-components';

const shrinkAnimation = keyframes`
from{
    transform: translateX(-50%) scaleX(1);

}
to{
    transform: translateX(-50%) scaleX(0);

}
`;
const slideAnimation = keyframes`
from{
    transform: translateX(-50%) translateY(500%);

}
to{
    transform: translateX(-50%) translateY(0)

}
`;
export const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 10%;
  background: white;
  padding: 25px 25px 15px;
  color: ${({ theme }) => theme.colors.error};
  border: 3px solid ${({ theme }) => theme.colors.error};
  border-radius: 15px;
  animation: ${slideAnimation} 1s 1 forwards, ${slideAnimation} 1s 6s ease-in-out 1 reverse forwards;
  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 15px;
    background-color: ${({ theme }) => theme.colors.error};
    transform: translateX(-50%);
    width: 60px;
    height: 5px;
    border-radius: 50px;
  }
  &::before {
    opacity: 0.5;
  }
  &::after {
    transform: translateX(-50%) scaleX(1);
    transform-origin: left top;
    animation: ${shrinkAnimation} 5s 1s linear 1 forwards;
  }
  ${Title} {
    color: ${({ theme }) => theme.colors.error};
  }
`;
