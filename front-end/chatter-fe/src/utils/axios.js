import axios from 'axios';
import 'dotenv/config';

const setHeader = () => {
  if (document.cookie) {
    axios.defaults.headers.common['cookies'] = document.cookie.slice(4);
  }
  axios.defaults.headers.post['Content-Type'] = 'application/json';
};

export const getAxios = (reqUrl, reqParams = {}) => {
  setHeader();
  return axios
    .create({
      baseURL: process.env.REACT_APP_SERVER,
      method: 'get',
      timeout: 10000,
      params: reqParams,
    })
    .request({ url: reqUrl });
};

export const postAxios = (reqUrl, reqData) => {
  setHeader();
  return axios
    .create({
      baseURL: process.env.REACT_APP_SERVER,
      method: 'post',
    })
    .request({ url: reqUrl, data: reqData });
};
