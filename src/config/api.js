import axios from 'axios';
import {SERVICE_URL,REQUEST_TIMEOUT} from 'react-native-dotenv';

const api = axios.create({
  baseURL: SERVICE_URL, // 'http://10.0.2.2:3000' for localhost from avd
  timeout: 5000,
});

export default api;
