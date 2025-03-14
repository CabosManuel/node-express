import express from 'express';
import ProductsService from '../services/products.service.js';

// Router especifico para productos
const router = express.Router();
const service = new ProductsService(); // Servicio de productos

// Endpoints que van despues de /products:

router.get('/', (req, res) => {
  const products = service.getAll();
  res.json(products);
});


router.get('/filter', (req, res) => {
  res.send('Filter!');
});

router.get('/:productId', (req, res) => {
  const { productId } = req.params;
  const product = service.findOne(productId);
  return res.json(product);
});

router.post('/', (req, res) => {
  const body = req.body;

  const product = service.create(body);
  res.status(201).json({
    message: 'Created',
    data: product,
  });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;

  const product = service.update(id, body);
  res.json({
    message: 'Updated',
    data: product,
  });
});

router.delete('/:productId', (req, res) => {
  const { productId } = req.params;
  const productDeletedId = service.delete(productId);
  res.json({
    message: 'Deleted',
    productDeletedId,
  });
});

// Exportamos el router
export default router;
