const pool = require('../config/database'); // Database configuration, adjust as needed

const bankStatementController = {
  uploadCSV: async (req, res) => {
    try {
      // Handle CSV file upload here
      // Parse the CSV data and insert into the database if necessary
      // Return a success message
      res.status(201).json({ message: 'CSV file uploaded and data inserted successfully' });
    } catch (error) {
      console.error('Error uploading CSV and inserting data:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  insertStatement: async (req, res) => {
    try {
      const { date, description, amount, accountID } = req.body;

      // Insert data into the bank_statements table
      const insertStatementQuery = `
        INSERT INTO bankStatements (date, description, amount, account_id)
        VALUES ($1, $2, $3, $4)
      `;

      await pool.query(insertStatementQuery, [date, description, amount, accountID]);

      res.status(201).json({ message: 'Bank statement inserted successfully' });
    } catch (error) {
      console.error('Error inserting statement:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
};

module.exports = bankStatementController;
