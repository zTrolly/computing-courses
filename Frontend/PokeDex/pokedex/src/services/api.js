import axios from 'axios';

const API = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/'
});

return API;  // nn sei se ta certo