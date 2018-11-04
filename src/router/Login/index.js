import { PureComponent } from 'react';

const LOGIN_URL = `${process.env.REACT_APP_OAUTH_SERVER_URL}/login`;

export default class Login extends PureComponent {
  componentDidMount() {
    if (localStorage.getItem('github')) {
      return this.props.history.replace('/dashboard');
    }

    window.location.href = LOGIN_URL;
  }

  render() {
    return null;
  }
}
