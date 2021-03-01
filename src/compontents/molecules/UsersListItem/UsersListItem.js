import React from 'react';
import PropTypes from 'prop-types';
import DeleteButton from 'compontents/atoms/DeleteButton/DeleteButton';
import { Wrapper, StyledInfo } from './UsersListItem.styles';
import { Average } from 'compontents/atoms/Average/Average';

const UsersListItem = ({ deleteUser, userData: { name, attendance = '0%', average } }) => (
  <Wrapper>
    <Average average={average} />
    <StyledInfo>
      <h2>{name}</h2>
      <div>
        <p>attendance: {attendance}</p>
      </div>
    </StyledInfo>
    <DeleteButton onClick={() => deleteUser(name)} />
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
