// import { NextApiRequest, NextApiResponse } from 'next';
// import api from '../../app/services/api';

// const productsHandler = async (req: NextApiRequest, res: NextApiResponse) => {
//   try {
//     const { data } = await api.get('/products');
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch products' });
//   }
// };

// export default productsHandler;




// import { NextApiRequest, NextApiResponse } from 'next';
// import api from '../../app/services/api';

// const productsHandler = async (req: NextApiRequest, res: NextApiResponse) => {
//   try {
//     const { data } = await api.get('/products');
//     const courses = data.products.map((product: any) => ({
//       title: product.title,
//       instructor: product.brand,
//       image: product.images[0],
//       level: product.category,
//       duration: product.price,
//     }));
//     res.status(200).json(courses);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch products' });
//   }
// };

// export default productsHandler;



import { NextApiRequest, NextApiResponse } from 'next';
import api from '../../app/services/api';

const productsHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { data } = await api.get('/products');
    res.status(200).json(data.products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};

export default productsHandler;
