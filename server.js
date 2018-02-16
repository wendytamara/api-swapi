const express = require('express');
const app = express();

const server = app.listen(3000, createServer);
function createServer() {
  console.log('servidor activo');
}

app.use(express.static('public'));
