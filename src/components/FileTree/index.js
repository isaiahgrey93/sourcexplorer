import React, { Component } from 'react';

import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import { orderBy } from 'lodash';

import FileTreeNode from '../FileTreeNode';

class FileTree extends Component {
  render() {
    let { data = {}, ...props } = this.props;
    let { repository = {} } = data || {};
    let { object = {} } = repository || {};
    let { entries = [] } = object || {};

    return (
      entries &&
      orderBy(
        entries,
        ['type', ({ name }) => name.toLowerCase()],
        ['desc', 'asc'],
      ).map(entry => <FileTreeNode key={entry.oid} {...props} {...entry} />)
    );
  }
}

export default props => (
  <Query
    query={gql`
      query repo($repository: String!, $owner: String!, $path: String!) {
        repository(name: $repository, owner: $owner) {
          object(expression: $path) {
            ... on Tree {
              entries {
                mode
                name
                oid
                type
              }
            }
          }
        }
      }
    `}
    variables={{
      owner: props.username,
      repository: props.repository,
      path: `${props.branch}:${props.path}`,
    }}
  >
    {result => <FileTree {...props} {...result} />}
  </Query>
);
