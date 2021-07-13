import React, { useEffect, useState } from 'react';
import { SearchBarWrapper, StatusInfo, StyledInputWrapper, StyledUsers } from './SearchBar.styles';
import { Input } from 'components/atoms/Input/Input';
import axios from 'axios';
const SearchBar = () => {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState('');

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (search === '') {
      setStudents([]);
    }
    axios
      .get(`/search/${search}`)
      .then(({ data }) => setStudents(data?.students))
      .catch((err) => console.log(err));
  }, [search]);

  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p> Logged as:</p>
        <p>
          <strong>Teacher</strong>
        </p>
      </StatusInfo>

      <StyledInputWrapper>
        <Input onChange={handleInputChange} value={search} />
        <StyledUsers>{students ? students.map((student) => <li key={student.id}>{student.name}</li>) : null}</StyledUsers>
      </StyledInputWrapper>
    </SearchBarWrapper>
  );
};

export default SearchBar;
