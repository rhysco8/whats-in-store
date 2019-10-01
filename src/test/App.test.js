import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

it('renders without crashing', () => {
  shallow(<App />);
});

it('renders name of app', () => {
  const wrapper = shallow(<App />);
  const pageHeader = <h1>What's In Store</h1>;
  expect(wrapper).toContainReact(pageHeader);
});
