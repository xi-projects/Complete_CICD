const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/hello', (req, res) => {
  res.send('Hello, World! Welcome to iQuant YouTube Channel.\n');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});