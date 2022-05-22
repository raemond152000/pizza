import axios from "axios";

const instance = axios.create({
    baseURL: 'https://9cxlt1wgo5.execute-api.us-east-1.amazonaws.com/api',
    timeout: 5000,
    headers: {Authorization: 'basic c737d0e2-67bd-4d24-8818-2bf194aae53a'}
  });

  export default instance;
