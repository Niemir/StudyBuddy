import React, { useEffect, useState } from 'react';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import UsersList from 'components/organisms/UsersList/UsersList';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

import { StyledNav, StyledTitle, StyledTop, StyledWrapper } from './Dashboard.styles';

// import { UserShape } from 'prop-types';

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [groups, setGropus] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/groups/`)
      .then(({ data }) => setGropus(data.groups))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`/students/${id || groups[0]}`)
      .then(({ data }) => setStudents(data.students))
      .catch((err) => console.log(err));
  }, [id, groups]);

  return (
    <StyledWrapper>
      <StyledTop>
        <StyledTitle> Group {id || groups[0]}</StyledTitle>

        <StyledNav>
          {groups.map((group) => (
            <Link key={group} to={`/group/${group}`}>
              {group}{' '}
            </Link>
          ))}
        </StyledNav>
      </StyledTop>
      <ViewWrapper>
        <UsersList users={students} />
      </ViewWrapper>
    </StyledWrapper>
  );
};

export default Dashboard;
