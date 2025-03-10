import express from 'express';
import { faker } from '@faker-js/faker';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/endpoint', (req, res) => {
  res.send('Endpoint!');
});

app.get('/products', (req, res) => {
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


app.get('/products/filter', (req, res) => {
  res.send('Filter!');
});

app.get('/products/:productId', (req, res) => {
  const { productId } = req.params;
  res.json(
    {
      productId,
    }
  );
});

app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json(
      {
        limit,
        offset,
      }
    );
  } else {
    res.send('No parameters');
  }
});

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json(
    {
      categoryId,
      productId,
    }
  );
});

app.listen(port, () => {
  console.log('Port: ', port);
});
