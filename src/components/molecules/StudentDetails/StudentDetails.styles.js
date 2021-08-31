import styled from 'styled-components';
import { Title } from 'components/atoms/Title/Title';

export const StyledWrapper = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.colors.darkGrey};
`;
export const StyledHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;
export const StyledTitle = styled(Title)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  max-width: 200px;
  text-align: center;
`;

export const StyledButtons = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 150px;
`;
export const StyledContent = styled.div`
  padding: 36px;
  h2 {
    font-weight: 400;
    margin: 5px 0 20px;
    font-size: 21px;
  }
`;

export const StyledGrade = styled.div`
  display: flex;
  align-items: center;
  p {
    width: 170px;
    margin-right: 20px;
    margin-bottom: 20px;
    font-size: 15px;
  }
`;
