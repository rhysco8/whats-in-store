import React from 'react';
import { shallow } from 'enzyme';
import Table from './Table';

it('renders table headers', () => {
  const wrapper = shallow(<Table />);
  const tableHeaderId = <th>ID</th>;
  const tableHeaderName = <th>NAME</th>;
  const tableHeaderSku = <th>SKU</th>;
  const tableHeaderQuantity = <th>QUANTITY</th>;

  expect(wrapper).toContainReact(tableHeaderId);
  expect(wrapper).toContainReact(tableHeaderName);
  expect(wrapper).toContainReact(tableHeaderSku);
  expect(wrapper).toContainReact(tableHeaderQuantity);
});
