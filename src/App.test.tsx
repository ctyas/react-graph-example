import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import gql from 'graphql-tag';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

it('renders without crashing', () => {

  const typeDefs = gql`
    type Query {
      hello(name: string): string
    }
  `

  const resolvers = {
    Query: {
      hello: (_parent: any, { name }: { name: string }) => (`Hello ${name}`),
    },
  };

  const client = new ApolloClient({
    typeDefs,
    resolvers
  });


  const div = document.createElement('div');
  ReactDOM.render(<ApolloProvider client={client}><App /></ApolloProvider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
