
// import { useQuery } from 'react-query';
// import { fetchCourses } from '../services/api';

// export const useCourses = () => {
//   return useQuery('courses', fetchCourses);
// };






// import { useQuery } from 'react-query';
// import axios from 'axios';

// const fetchCourses = async () => {
//   const { data } = await axios.get('/api/products'); 
//   return data;
// };

// export const useCourses = () => {
//   return useQuery('courses', fetchCourses);
// };








import { useQuery } from 'react-query';
import axios from 'axios';

const fetchCourses = async () => {
  const { data } = await axios.get('/api/products');
  return data;
};

export const useCourses = () => {
  return useQuery('courses', fetchCourses);
};
