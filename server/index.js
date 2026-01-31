const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Simple "destinations" API
app.get('/api/destinations', (req, res) => {
  res.json([
    { id: 1, name: "Paris", description: "City of Lights" },
    { id: 2, name: "Tokyo", description: "Land of the Rising Sun" },
    { id: 3, name: "New York", description: "The Big Apple" }
  ]);
});

app.listen(5000, () => {
  console.log('Backend server running on http://localhost:5000');
});
