import React from 'react';
import { shallow } from 'enzyme';
import { Products } from '../Products';

xit('renders table headers', () => { // TODO: need to mock product list
  const wrapper = shallow(<Products />);
  const tableHeaderIndex = <th>#</th>;
  const tableHeaderName = <th>NAME</th>;
  const tableHeaderSku = <th>SKU</th>;
  const tableHeaderQuantity = <th>QUANTITY</th>;

  expect(wrapper).toContainReact(tableHeaderIndex);
  expect(wrapper).toContainReact(tableHeaderName);
  expect(wrapper).toContainReact(tableHeaderSku);
  expect(wrapper).toContainReact(tableHeaderQuantity);
});
