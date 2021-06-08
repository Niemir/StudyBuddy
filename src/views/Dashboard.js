import React from 'react';
import PropTypes from 'prop-types';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import UsersList from 'components/organisms/UsersList/UsersList';
// import { UserShape } from 'prop-types';

const Dashboard = () => {
  return (
    <ViewWrapper>
      <UsersList />
    </ViewWrapper>
  );
};

export default Dashboard;
