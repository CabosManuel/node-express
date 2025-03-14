import { faker } from '@faker-js/faker';

export default class ProductsService {
  constructor () {
    this.products = []; // Array de productos
    this.generate(); // Generar productos
  }

  // Funcion para generar productos
  generate() {
    const limit = 3;
    for (let i = 0; i < limit; i++) {
      this.products.push(
        {
          id: faker.string.uuid(),
          name: faker.commerce.productName(),
          price: faker.commerce.price(),
          image: faker.image.url(),
        }
      );
    }
  }

  async create(body) {
    const newProduct = {
      id: faker.string.uuid(),
      ...body,
    };

    this.products.push(newProduct);
    return newProduct;
  }

  async getAll() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.products);
      }, 3000);
    })
  }

  async findOne(productId) {
    // const total = this.getTotal(); // Forzar error llamando a una función que no existe
    const product = this.products.find(p => p.id === productId);
    if (!product) {
      throw new Error('Product not found');
    }
    return product;
  }

  async update(productId, changes) {
    const product = await this.findOne(productId);
    const index = this.products.findIndex(p => p.id === product.id);

    this.products[index] = {
      ...product,
      ...changes,
    };
    return this.products[index];
  }

  async delete(productId) {
    const product = await this.findOne(productId);
    const index = this.products.findIndex(p => p.id === product.id);

    this.products.splice(index, 1);
    return product.id;
  }
}
