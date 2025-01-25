const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Render assigns a dynamic port

app.get('/', (req, res) => {
  res.send('Hello, World! This is my Render deployment.');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
