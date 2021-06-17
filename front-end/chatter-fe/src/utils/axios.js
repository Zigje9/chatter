import axios from 'axios';
import 'dotenv/config';

const setHeader = () => {
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
      withCredentials: true,
      method: 'post',
      timeout: 10000,
    })
    .request({ url: reqUrl, data: reqData });
};
