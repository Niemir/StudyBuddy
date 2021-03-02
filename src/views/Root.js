import React, { useState, useEffect } from 'react';
import { users as usersData } from 'data/users';
import UsersList from 'compontents/organisms/UsersList/UsersList';
import Form from 'compontents/organisms/Form/Form';
import { GlobalStyle } from 'assets/styles/globalStyle';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const mockAPI = (success) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (usersData) {
        resolve([...usersData]);
      } else {
        reject({ message: 'Error' });
      }
    }, 2000);
  });
};

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
};

const Root = () => {
  const [users, setUsers] = useState(usersData);
  const [isLoading, setLoadingState] = useState([]);
  const [formValues, setFormValues] = useState(initialFormState);

  useEffect(() => {
    setLoadingState(true);

    mockAPI().then((data) => {
      setLoadingState(false);
      setUsers(data);
    });
  }, []);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = {
      name: formValues.name,
      attendance: formValues.attendance,
      average: formValues.average,
    };
    setUsers([newUser, ...users]);

    setFormValues(initialFormState);
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <nav>
            <Link to="/">Users</Link>
            <Link to="add-user">Add User</Link>
          </nav>
          <Switch>
            <Route path="/" exact>
              <UsersList deleteUser={deleteUser} users={users} isLoading={isLoading} />
            </Route>
            <Route path="/add-user">
              <Form formValues={formValues} handleInputChange={handleInputChange} handleAddUser={handleAddUser} />
            </Route>
          </Switch>
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
