const express = require('express');
const router = express.Router();
const bankStatementController = require('../controllers/bankStatementController');

// Define API routes
router.post('/upload-csv', bankStatementController.uploadCSV); // Handle CSV file upload
router.post('/insert-statement', bankStatementController.insertStatement); // Insert bank statement

module.exports = router;