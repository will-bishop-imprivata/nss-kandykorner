import React from "react"
import "./Product.css"

export const Product = ({ product }) => {
    return (
        <section className="product">
            <h3 className="product__name">{product.name}</h3>
            <div className="product__price">${product.price}</div>
            <div className="product__type">Product Type: {product.productTypeId}</div>
        </section>
    )
}