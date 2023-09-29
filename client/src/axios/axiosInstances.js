import axios from 'axios'
 const axiosInstances = axios.create({
    baseURL: 'localhost:3000/api',
    headers: {
      'Content-Type': 'application/json',
      
    },
    
  });

  export default axiosInstances;

