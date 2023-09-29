const pool = require("../config/database"); // Database configuration, adjust as needed

const bankStatementController = {
  uploadCSV: async (req, res) => {
    console.log("request object",req)
    try {
      // Handle CSV file upload here
      if (!req.files || Object.keys(req.files).length === 0) {
        console.log(req.files, req.body)
        return res.status(400).json({ error: "No files were uploaded." });
      }

      if (!uploadedFile || uploadedFile.mimetype !== "text/csv") {
        return res
          .status(400)
          .json({ error: "Invalid file format. Please upload a CSV file." });
      }

      const uploadedFile = req.files.file; // Assuming your file input field is named 'file'

      // Parse the CSV data
      // const csvData = [];
      // const csvParser = uploadedFile.data.toString().split("\n");
      // for (let i = 1; i < csvParser.length; i++) {
      //   const row = csvParser[i].split(",");
      //   if (row.length === 5) {
      //     //  5 columns in your CSV
      //     csvData.push({
      //       Date: row[0].trim(),
      //       Description: row[1].trim(),
      //       Debit: parseFloat(row[2].trim()),
      //       Credit: parseFloat(row[3].trim()),
      //       Balance: parseFloat(row[4].trim()),
      //     });
      //   }
      // }
      app.post('/upload', function(req, res) {
        console.log(req.files); // the uploaded file object
      });
      const insertQuery = `
      INSERT INTO bank_statements ("Date", "Description", "Debit", "Credit", "Balance")
      VALUES ($1, $2, $3, $4, $5)
    `;

      for (const record of csvData) {
        await pool.query(insertQuery, [
          record.Date,
          record.Description,
          record.Debit,
          record.Credit,
          record.Balance,
        ]);
      }

      res
        .status(201)
        .json({ message: "CSV file uploaded and data inserted successfully" });
    } catch (error) {
      console.error("Error uploading CSV and inserting data:", error);
      res.status(500).json({ error: "Internal server error" });
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

      await pool.query(insertStatementQuery, [
        date,
        description,
        amount,
        accountID,
      ]);

      res.status(201).json({ message: "Bank statement inserted successfully" });
    } catch (error) {
      console.error("Error inserting statement:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
};

module.exports = bankStatementController;
