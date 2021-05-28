import axios from 'axios';

const client = axios.create({
  headers: {
    Authorization: `KakaoAK ${process.env.API_KEY}`,
  },
});
console.log(process.env.API_KEY);

client.defaults.baseURL = 'https://dapi.kakao.com';

export default client;
