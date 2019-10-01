import React, { Component } from 'react';
import { Products } from './Products';
import './App.css';
import { ExportCSV } from './ExportCSV';

class App extends Component {
  products = () => {
    const productList = [
      { name: 'Snowdrop 3 seat sofa in Charcoal brushed linen cotton', sku: 'FSSNO130BLCCHA', quantity: 1 },
      { name: 'Isla armchair in Ash soft wool', sku: 'FSISL110STWASH', quantity: 1 },
      { name: 'Stella medium corner sofa in Olive cotton matt velvet', sku: 'FMSTE320CMVOLI', quantity: 1 }
    ]
    return productList
  }

  state = {
    products: this.products(),
    fileName: 'Products'
  }

  render() {
    return (
      <div className="App">
        <h1>What's In Store</h1>
        <div className="row">
          <div className="col-md-8">
            <h2>Products</h2>
          </div>
          <div className="col-md-4 center">
            <ExportCSV csvData={this.state.products} fileName={this.state.fileName} />
          </div>
        </div>
        <Products products={this.products()} />
      </div>
    );
  }
}

export default App;
