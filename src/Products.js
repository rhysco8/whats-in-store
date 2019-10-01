import React from 'react';

export const Products = ({products}) => {
  const ProductData = () => {
    return products.map((product, index) => {
      const { name, sku, quantity } = product
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{name}</td>
          <td>{sku}</td>
          <td>{quantity}</td>
        </tr>
      )
    });
  }

  const productTableHeader = () => {
    return (
      <tr>
        <th>#</th>
        <th>Description</th>
        <th>SKU</th>
        <th>Quantity</th>
      </tr>
    )
  }

  return (
    <div>
      <table id="products" className="table table-hover table-striped">
        <thead>
          {productTableHeader()}
        </thead>
        <tbody>
          {ProductData()}
        </tbody>
      </table>
    </div>
  )
}
