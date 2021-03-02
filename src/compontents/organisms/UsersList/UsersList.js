import React from 'react';
// import { users as usersData } from 'data/users';

import { Wrapper, StyledList, StyledTitle } from './UsersList.styles';
// import FormField from '../../molecules/FormField/FormField';
// import { Button } from 'compontents/atoms/Button/Button';
import UsersListItem from 'compontents/molecules/UsersListItem/UsersListItem';

const UsersList = ({ isLoading, users, deleteUser }) => {
  return (
    <>
      <Wrapper>
        <StyledTitle>{isLoading ? 'Loading...' : 'Users List'}</StyledTitle>
        <StyledList>
          {users.map((userData) => (
            <UsersListItem deleteUser={deleteUser} key={userData.name} userData={userData} />
          ))}
        </StyledList>
      </Wrapper>
    </>
  );
};

export default UsersList;
