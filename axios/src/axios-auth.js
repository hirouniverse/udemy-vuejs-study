import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://stock-trader-universe.firebaseio.com/',
  timeout: 3000,
});

instance.defaults.headers.common['X-Custom-Header'] = 'foobar';


instance.interceptors.request.use(function(config) {
  console.log('Request Interceptor', config);
  return config;
}, function(err) {
  Promise.reject(err);
})

instance.interceptors.response.use(function(res) {
  console.log('Response Interceptor', res);
  return res;
}, function(err) {
  Promise.reject(err);
})

export default instance;