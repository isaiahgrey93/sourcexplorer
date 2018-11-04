import { PureComponent } from 'react';

import qs from 'query-string';

export default class Authenticate extends PureComponent {
  componentDidMount() {
    const { access_token } = qs.parse(this.props.location.search);

    if (access_token) {
      localStorage.setItem('github', access_token);
      return this.props.history.replace('/dashboard');
    }
  }

  render() {
    return null;
  }
}
