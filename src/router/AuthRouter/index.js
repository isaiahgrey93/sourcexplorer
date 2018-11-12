import { withRouter } from 'react-router-dom';

import qs from 'query-string';

const _token = (location, history) => {
  const { access_token } = qs.parse(location.search);

  if (access_token) {
    setToken(access_token);
    history.replace(location.pathname);

    return null;
  } else {
    return !!getToken();
  }
};

const setToken = token => {
  localStorage.setItem('github', token || undefined);
};

const getToken = () => {
  return localStorage.getItem('github');
};

const AuthRouter = ({ history, location, authenticated, guest }) => {
  const token = _token(location, history);

  switch (token) {
    case true:
      return authenticated();
    case false:
      return guest();
    default:
      return null;
  }
};

export default withRouter(AuthRouter);
