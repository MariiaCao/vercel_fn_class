import axios from 'axios';

const axiosPlaceHolder = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 9000,
    headers: {'X-Custom-Header': 'foobar'}
  });

export default axiosPlaceHolder;