import axios from 'axios'


// firebase auth endpoint
// https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]


const instance = axios.create({
  baseURL: 'https://identitytoolkit.googleapis.com/v1',
})

// instance.defaults.headers.common['SOMETHING'] = 'something'

export default instance