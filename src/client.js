import ApolloClient from 'apollo-boost';

const ROOT_ENDPOINT = 'https://api.github.com/graphql';

export default new ApolloClient({
  uri: ROOT_ENDPOINT,
  request: operation => {
    const token = localStorage.getItem('github');

    operation.setContext({
      headers: {
        Authorization: `bearer ${token}`,
      },
    });
  },
});
