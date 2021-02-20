import React from 'react';
import PropTypes from 'prop-types';
import Button from 'compontents/atoms/Button/Button';
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
    <Button onClick={() => deleteUser(name)} />
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
