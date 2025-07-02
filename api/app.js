require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./src/routes');
const Race = require('./models/race');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', routes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
