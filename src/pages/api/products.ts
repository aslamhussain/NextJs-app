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
