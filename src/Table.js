import React, { Component } from 'react';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { id: 1, name: 'Bluebell 3 seat sofa in Charcoal brushed linen cotton', sku: 'FSBLB130BLCCHA', quantity: 1 },
        { id: 2, name: 'Isla armchair in Ash soft wool', sku: 'FSISL110STWASH', quantity: 1 },
        { id: 3, name: 'Stella medium corner sofa in Olive cotton matt velvet', sku: 'FMSTE320CMVOLI', quantity: 1 }
      ]
    }
  }

  renderTableData() {
    return this.state.products.map((product, index) => {
      const { id, name, sku, quantity } = product
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{name}</td>
          <td>{sku}</td>
          <td>{quantity}</td>
        </tr>
      )
    });
  }

  render() {
    return (
      <div>
        <h1>What's In Store</h1>
        <table id='products' class="table table-hover table-striped">
          <thead>
            <th>#</th>
            <th>Product</th>
            <th>SKU</th>
            <th>Quantity</th>
          </thead>
          <tbody>
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Table;
