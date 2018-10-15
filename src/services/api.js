import axios from 'axios';
import qs from 'qs';

function get(url, params) {
  const requestConf = {
    method: 'get',
    url,
    params,
    paramsSerializer: function paramsSerializer(ps) {
      return qs.stringify(ps, { arrayFormat: 'repeat' });
    },
  };

  return axios(requestConf)
    .then(res => res.data)
    .catch((err) => {
      console.error(err);
      throw err;
    })
  ;
}

function post(url, data) {
  const requestConf = {
    method: 'post',
    url,
    data,
  };

  return axios(requestConf)
    .then(res => res.data)
    .catch((err) => {
      console.error(err);
      throw err;
    })
  ;
}

function put(url, data) {
  const requestConf = {
    method: 'put',
    url,
    data,
  };

  return axios(requestConf)
    .then(res => res.data)
    .catch((err) => {
      console.error(err);
      throw err;
    })
  ;
}

function setToken(token) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

function removeToken() {
  delete axios.defaults.headers.common.Authorization;
}

export default { get, post, put, setToken, removeToken };
