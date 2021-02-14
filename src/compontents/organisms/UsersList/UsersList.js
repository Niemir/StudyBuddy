import React from 'react';
import { users } from 'data/users';

import { Wrapper, StyledList } from './UsersList.styles';

import UsersListItem from 'compontents/molecules/UsersListItem/UsersListItem';

const UsersList = () => (
  <Wrapper>
    <StyledList>
      {users.map((userData, index) => (
        <UsersListItem key={userData.name} id={index} userData={userData} />
      ))}
    </StyledList>
  </Wrapper>
);

export default UsersList;
