import React from 'react';
import { shallow } from 'enzyme';
import { Products } from '../Products';

describe('Products component renders props', () => {
  it('renders table headers', () => {
    const productList = [];
    const wrapper = shallow(<Products products={productList} />);

    expect(wrapper).toContainReact(<th>#</th>);
    expect(wrapper).toContainReact(<th>Description</th>);
    expect(wrapper).toContainReact(<th>SKU</th>);
    expect(wrapper).toContainReact(<th>Quantity</th>);
  });

  it('renders table data', () => {
    const productList = [
      { name: 'test sofa', sku: 'TEST', quantity: 2 }
    ];
    const wrapper = shallow(<Products products={productList} />);

    expect(wrapper).toContainReact(<td>1</td>);
    expect(wrapper).toContainReact(<td>test sofa</td>);
    expect(wrapper).toContainReact(<td>TEST</td>);
    expect(wrapper).toContainReact(<td>2</td>);
  });
});
