import express from 'express';
import routerApi from "./routes/index.js";

const app = express();
const port = 3000;

// Middleware, para procesar solicitudes JSON
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/endpoint', (req, res) => {
  res.send('Endpoint!');
});

// Enviamos el app para que lo utilicen los routers
routerApi(app);

app.listen(port, () => {
  console.log('Port: ', port);
});
