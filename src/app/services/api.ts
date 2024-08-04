// import axios from 'axios';

// export const fetchCourses = async () => {
//   const response = await axios.get('https://dummyjson.com/products');
//   return response.data.products.map((product: any) => ({
//     title: product.title,
//     instructor: product.brand,
//     image: product.images[0],
//     level: product.category,
//     duration: product.price,
//   }));
// };

import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dummyjson.com',
});

export default api;
