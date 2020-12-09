import axios from 'axios';

const myAxios = axios.create({
  baseURL: 'https://projeto-conclusao-curso.herokuapp.com',
});

export default myAxios;
