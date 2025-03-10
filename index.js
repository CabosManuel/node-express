import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/endpoint', (req, res) => {
  res.send('Endpoint!');
});

app.get('/products', (req, res) => {
  // Responder en formato JSON
  res.json({
    name: 'Product 1',
    price: 100,
  });
});

app.listen(port, () => {
  console.log('Port: ', port);
});
