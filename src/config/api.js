import axios from 'axios';
import {SERVICE_URL,REQUEST_TIMEOUT} from 'react-native-dotenv';

const api = axios.create({
  baseURL: SERVICE_URL,
  timeout: 5000,
});

export default api;
