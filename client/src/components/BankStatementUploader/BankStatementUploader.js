import React, { useState } from 'react'
import './bankStatementUploader.scss'
// import axios from 'axios';
import axiosInstance from '../../axios/axiosInstances';

const BankStatementUploader = () => {

    const [file, setFile] = useState(null);
    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
      };

      const handleUpload = async () => {
        try {
          const formData = new FormData();
          formData.append('file', file);
    
          const response = await axiosInstance.post('/upload-csv', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
    
          if (response.status === 201) {
            alert('CSV file uploaded successfully');
            setFile(null);
          }
        } catch (error) {
          console.error('Error uploading CSV:', error);
          alert('Error uploading CSV. Please try again later.');
        }
      };

      return(
        <div className='bank-statement'>
          <h2>Upload Bank Statement CSV</h2>
          <input type="file" accept=".csv" onChange={handleFileChange} />
          {file && (
            <div>
              <button onClick={handleUpload}>Upload</button>
            </div>
          )}
        </div>
      );
}

export default BankStatementUploader