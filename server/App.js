const express = require('express');
const app = express();
const cors = require('cors'); // If you need to enable CORS
const path = require('path');
const bodyParser = require('body-parser');

// Middleware
app.use(cors()); // Enable CORS if needed
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});