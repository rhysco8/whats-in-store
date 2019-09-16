import React from 'react';

export const Products = ({products}) => {
  const ProductRow = (product, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{product.name}</td>
        <td>{product.sku}</td>
        <td>{product.quantity}</td>
      </tr>
    )
  }

  const ProductTable = products.map((product, index) => ProductRow(product, index))

  const productTableHeader =  <thead>
                                <tr>
                                  <th>#</th>
                                  <th>Description</th>
                                  <th>SKU</th>
                                  <th>Quantity</th>
                                </tr>
                              </thead>

  return (
    <div>
      <table id="products" class="table table-hover table-striped">
        {productTableHeader}
        <tbody>
          {ProductTable}
        </tbody>
      </table>
    </div>
  )
}
