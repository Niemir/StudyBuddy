import { useCallback } from 'react';
import axios from 'axios';

const studentsAPI = axios.create({});

studentsAPI.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export const useStudents = () => {
  // const [students, setStudents] = useState([]);
  // const [groups, setGroups] = useState([]);

  const getGroups = useCallback(async () => {
    try {
      const result = await studentsAPI.get('/groups');
      return result.data.groups;
    } catch (e) {
      console.log(e);
    }
  }, []);

  const getStudentById = useCallback(async (studentId) => {
    try {
      const result = await studentsAPI.get(`/students/${studentId}`);
      return result.data.students;
    } catch (e) {
      console.log(e);
    }
  }, []);

  const getStudentsByGroup = useCallback(async (groupId) => {
    try {
      const result = await studentsAPI.get(`/groups/${groupId}`);
      return result.data.students;
    } catch (e) {
      console.log(e);
    }
  }, []);

  const findStudents = async (searchPhrase) => {
    try {
      const { data } = await studentsAPI.post(`/students/search`, {
        searchPhrase,
      });
      return data;
    } catch (e) {
      console.log(e);
    }
  };

  return {
    getStudentsByGroup,
    getGroups,
    findStudents,
    getStudentById,
  };
};
