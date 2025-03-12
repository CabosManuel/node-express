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

  if (productId === '999') {
    res.status(404).json({
      message: 'Not found',
    });
  } else {
    res.json(
      {
        productId,
        name: "Product",
        price: 1234,
      }
    );
  }
});

router.post('/', (req, res) => {
  const body = req.body;

  res.status(201).json({
    message: 'Created',
    data: body,
  });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;

  res.json({
    message: 'Updated partial',
    id,
    data: body,
  });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;

  res.json({
    message: 'Updated partial',
    id,
    data: body,
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  res.json({
    message: 'Deleted',
    id,
  });
});

// Exportamos el router
export default router;
