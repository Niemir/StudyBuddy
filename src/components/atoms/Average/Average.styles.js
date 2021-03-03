import styled from 'styled-components';

const calculateRating = (rating, theme) => {
  const ratingNum = parseFloat(rating);
  if (ratingNum >= 2.0 && ratingNum < 3.0) {
    return theme.colors.error;
  } else if (ratingNum >= 3.0 && ratingNum < 4.0) {
    return theme.colors.warning;
  } else if (ratingNum >= 4.0 && ratingNum <= 5.0) {
    return theme.colors.success;
  } else {
    return theme.colors.black;
  }
};

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 700;
  border-radius: 50%;
  width: 34px;
  height: 34px;
  color: white;
  background-color: ${({ theme }) => theme.colors.error};
  background: ${({ average, theme }) => calculateRating(average, theme)};
`;
