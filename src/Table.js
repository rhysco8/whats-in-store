import React, { Component } from 'react';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { name: 'Bluebell 3 seat sofa in Charcoal brushed linen cotton', sku: 'FSBLB130BLCCHA', quantity: 1 },
        { name: 'Isla armchair in Ash soft wool', sku: 'FSISL110STWASH', quantity: 1 },
        { name: 'Stella medium corner sofa in Olive cotton matt velvet', sku: 'FMSTE320CMVOLI', quantity: 1 }
      ]
    }
  }

  render() {
    return (
      <div class="table table-hover">
        <h2>What's In Store</h2>
      </div>
    )
  }
}

export default Table;
