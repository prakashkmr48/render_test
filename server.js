const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

// Database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'mydb'
});

db.connect(err => {
  if (err) throw err;
  console.log('Database connected!');
});

// Routes
app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
