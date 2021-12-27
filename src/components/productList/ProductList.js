import React from 'react'
import Products from '../products/Products'
import { products } from '../../Data'


const ProductList = () => {
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
                {products.map((items) => (
                    <Products key={items.id} img={items.img}/>

                ))}

            </div>
        </div>
    )
}

export default ProductList
