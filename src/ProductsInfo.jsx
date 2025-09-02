export default function ProductsInfo({id, name, price,onDelete}) {
  return (
    <div className="product">
      <h3><b>Product name :{name}</b></h3>
        <h3>Product id :{id}</h3>
        <h3>Product price :{price}</h3>
        <button onClick={()=>onDelete(id)}>Delete Product</button>
    </div>
  )
}
