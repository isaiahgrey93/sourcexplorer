import React, { PureComponent } from 'react';

const LOGIN_URL = process.env.REACT_APP_OAUTH_SERVER_URL + '/login';

export default class Login extends PureComponent {
  componentDidMount() {
    clearTimeout(this.delay);
    this.delay = setTimeout(() => (window.location.href = LOGIN_URL), 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.delay);
  }

  render() {
    return (
      <div>
        <div>Redirecting...</div>
      </div>
    );
  }
}
