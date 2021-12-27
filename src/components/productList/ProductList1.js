import React from 'react'
import { products } from '../../Data1.js'
import Products from '../products/Products'
import "../productList/ProductList.css"

function ProductList1() {
    return (
        <div className="pl">
            <div className="pl-text">
                <h2 className="pl-title">
                    Inspire, its Zacks
                </h2>
                <p className="pl-desc">
                    Anthropology plays a crucial or central role in the area of global understanding
                    and recognition of diverse ways of seeing the world as critical social, political,
                </p>
            </div>
            <div className="pl-list">
                {products && products.map((product) => (
                    <Products key={product.id} product={product} />
                ))}

            </div>
        </div>
    )
}

export default ProductList1
