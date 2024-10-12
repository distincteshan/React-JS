function ProductInfo() {
    const product = {
        produt_name: "Laptop",
        price: "$1200",
        availability: "In Stock"
    }
  return (
    <div>
        <h2>Product Name: {product.produt_name}</h2>
        <h2>Price: {product.price}</h2>
        <h2>Availability: {product.availability}</h2>
    </div>
  )
}

export default ProductInfo
