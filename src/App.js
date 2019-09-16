import React, { Component } from 'react';
import Table from './Table'; // TODO: Remove this line
import { Products } from './Products';
import './App.css';

class App extends Component {
  products = () => {
    let productList = [
      { name: 'Snowdrop 3 seat sofa in Charcoal brushed linen cotton', sku: 'FSSNO130BLCCHA', quantity: 1 },
      { name: 'Isla armchair in Ash soft wool', sku: 'FSISL110STWASH', quantity: 1 },
      { name: 'Stella medium corner sofa in Olive cotton matt velvet', sku: 'FMSTE320CMVOLI', quantity: 1 }
    ]
    return productList
  }

  render() {
    return (
      <div className="App">
        <h1>What's In Store</h1>
        <Products products={this.products()} />
      </div>
    );
  }
}

export default App;
