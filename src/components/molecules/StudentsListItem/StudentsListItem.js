import React from 'react';
import PropTypes from 'prop-types';
import RoundedButton from 'components/atoms/RoundedButton/RoundedButton';
import { StyledAverage, StyledInfo, Wrapper } from './StudentsListItem.styles';
import { UserShape } from 'types';

const StudentsListItem = ({ userData: { average, name, attendance = '0%' }, ...props }) => {
  return (
    <Wrapper {...props}>
      <StyledAverage value={average}>{average}</StyledAverage>
      <StyledInfo>
        <p>
          {name}
          <RoundedButton iconType="delete" />
        </p>
        <p>attendance: {attendance}</p>
      </StyledInfo>
    </Wrapper>
  );
};

StudentsListItem.propTypes = {
  userData: PropTypes.shape(UserShape),
};

export default StudentsListItem;
