import { thunk } from 'easy-peasy';
import { navigate } from '@reach/router';

import { API } from './index';

export default {
  authLoading: false,
  login: thunk(async (_, payload) => {
    const response = await API.postLogin(payload);
    localStorage.setItem(
      process.env.REACT_APP_ACCESS_TOKEN_PATH,
      response.data.access_token
    );
    navigate('/', { replace: true });
  }),
  logout: thunk(() => {
    localStorage.removeItem(process.env.REACT_APP_ACCESS_TOKEN_PATH);
    navigate('/login', { replace: true });
  })
};
