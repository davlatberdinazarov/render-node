const express = require('express');
const app = express();

// say hello world

app.get('/', (req, res) => {
  res.json({
    message: 'Hello, World!',
    status: 'success'
  })
});

// start server

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});