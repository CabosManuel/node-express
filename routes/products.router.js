import express from 'express';
import { faker } from '@faker-js/faker';

// Router especifico para productos
const router = express.Router();

// Endpoints que van despues de /products:

router.get('/', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;

  for (let i = 0; i < limit; i++) {
    products.push(
      {
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.url(),
      }
    );
  }

  res.json(products);
});


router.get('/filter', (req, res) => {
  res.send('Filter!');
});

router.get('/:productId', (req, res) => {
  const { productId } = req.params;
  res.json(
    {
      productId,
    }
  );
});

router.post('/', (req, res) => {
  const body = req.body;

  res.json({
    message: 'Created',
    data: body,
  });
});

// Exportamos el router
export default router;
