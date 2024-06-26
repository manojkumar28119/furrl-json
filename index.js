const express = require('express');
const cors = require('cors');
const app = express();

// Use CORS to allow requests from any origin
app.use(cors());

// Serve your JSON data
app.get('/', (req, res) => {
  const data = require('./data.json');
  res.json(data);
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
