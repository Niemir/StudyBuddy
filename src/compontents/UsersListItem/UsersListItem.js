import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: grey;
    bottom: 0;
  }
`;
const StyledButton = styled.button`
  width: 25px;
  height: 25px;
  background-color: '#c0c7d6';
  border-radius: 50%;
  border: none;
  color: white;
`;

const UsersListItem = ({ userData: { name, attendance, average = '0%' } }) => (
  <Wrapper>
    <div>{name}</div>
    <div>
      <p>{attendance}</p>
      <p>{average}</p>
    </div>
    <StyledButton isSecondary>X</StyledButton>
  </Wrapper>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
    average: PropTypes.string.isRequired,
  }),
};

export default UsersListItem;
