import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { Wrapper, StyledInfo } from './UsersListItem.styles';
import { Average } from 'components/atoms/Average/Average';
import { UsersContext } from 'providers/UsersProvider';

const UsersListItem = ({ userData: { name, attendance = '0%', average } }) => {
  const { deleteUser } = useContext(UsersContext);
  return (
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
};

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
    average: PropTypes.string.isRequired,
    deleteUser: PropTypes.func,
  }),
};

export default UsersListItem;
