import ProductsInfo from "./ProductsInfo";
import { useState } from "react";

    let Productslist = [
    {id:1, name:"magazine T", price:1000},
    {id:2, name:"magazine N", price:600},
    {id:3, name:"magazine U", price:1000},
    {id:4, name:"magazine A", price:600},
    {id:5, name:"magazine Y", price:600}
];

export default function Products() {
  let [products,setProducts]= useState(Productslist);
  const DeleteProduct = (productId) => {
    setProducts(products.filter(p => p.id !== productId))
  }
    return (
    <div>
    <h1>Products</h1>
    <ProductsInfo id={products[0].id} name={products[0].name} price={products[0].price} onDelete={DeleteProduct}/>
    <ProductsInfo id={products[1].id} name={products[1].name} price={products[1].price} onDelete={DeleteProduct}/>
    <ProductsInfo id={products[2].id} name={products[2].name} price={products[2].price} onDelete={DeleteProduct}/>
    <ProductsInfo id={products[3].id} name={products[3].name} price={products[3].price} onDelete={DeleteProduct}/>
    <ProductsInfo id={products[4].id} name={products[4].name} price={products[4].price} onDelete={DeleteProduct}/>
    </div>
  )
}
