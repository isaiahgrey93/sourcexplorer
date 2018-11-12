import React, { Component } from 'react';

import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import { FileTree } from '../../components';

const REPOSITORY = gql`
  query repository($name: String!, $owner: String!) {
    repository(name: $name, owner: $owner) {
      id
    }
  }
`;

export default class Explorer extends Component {
  render() {
    const { username, repository, branch = 'master' } = this.props.match.params;

    return (
      <FileTree
        branch={branch}
        username={username}
        repository={repository}
        path={''}
      />
    );
  }
}
