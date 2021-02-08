import Reactcd from 'react';
import { users } from 'data/users';

import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  max-width: 500px;
  background-color: white;
  padding: 40px 30px;
  box-shadow: 0 5px 15px -10px (0, 0, 0, 0.3);
`;

const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

import UsersListItem from 'compontents/UsersListItem/UsersListItem';

const UsersList = () => (
  <Wrapper>
    <StyledList>
      {users.map((userData) => (
        <UsersListItem userData={userData} />
      ))}
    </StyledList>
  </Wrapper>
);

export default UsersList;
