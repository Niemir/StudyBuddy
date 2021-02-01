import React from 'react';
import PropTypes from 'prop-types';

const UsersListItem = ({ userData: { name, attendance, average = '0%' } }) => (
  <li>
    <div>{name}</div>
    <div>
      <p>{attendance}</p>
      <p>{average}</p>
    </div>
    <button>X</button>
  </li>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
    average: PropTypes.string.isRequired,
  }),
};

export default UsersListItem;
