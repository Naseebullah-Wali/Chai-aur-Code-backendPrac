
import express from 'express';
const app = express();
const port = process.env.PORT;
require('dotenv').config()
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, (err) => {
  if (err) {
    console.error('Failed to start server:', err);
  } else {
    console.log(`Server is running on port ${port}`);
  }
});
