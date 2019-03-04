import axios from 'axios';

const instance = axios.create({baseURL: 'https://react-burger-5f4f1.firebaseio.com/'})

export default instance ;