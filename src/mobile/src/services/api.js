import axios from 'axios';

const api = axios.create({
    baseURL: 'https://my-json-server.typicode.com/leandrogoncalves/be_the_hero_fake_api'
});

export default api;