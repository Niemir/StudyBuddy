import styled from 'styled-components';
import RoundedButton from 'components/atoms/RoundedButton/RoundedButton';

export const NoteWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  h3,
  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.darkGrey};
  }
`;

export const StyledDeleteButton = styled(RoundedButton)`
  position: absolute;
  top: 20px;
  left: -40px;
`;
