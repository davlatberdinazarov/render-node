const express = require('express');
const app = express();

// say hello world

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// start server

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});