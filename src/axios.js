import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tinder-backk.herokuapp.com/'
});

export default instance;