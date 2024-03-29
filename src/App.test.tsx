import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MockedProvider } from '@apollo/react-testing';

it('renders without crashing', () => {

  const div = document.createElement('div');
  ReactDOM.render(<MockedProvider mocks={[]} addTypename={false}><App /></MockedProvider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
