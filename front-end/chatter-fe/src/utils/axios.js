import axios from 'axios';

const setHeader = () => {
  axios.defaults.headers.post['Content-Type'] = 'application/json';
};

export const getAxios = (reqUrl, reqParams = {}) => {
  setHeader();
  return axios
    .create({
      baseURL: 'http://localhost:5000/',
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
      baseURL: 'http://localhost:5000/',
      method: 'post',
      timeout: 10000,
    })
    .request({ url: reqUrl, data: reqData });
};