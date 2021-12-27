import React from 'react'
import "../products/Products.css"
//import z from "../../images/pf1.jpg"
export default function Products(props) {
    const {product} = props
    console.log(product)
    return (
        <div key={product.id}className="p">
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
            <a href="http://lama.dev" target="_blank" rel="noreferrer">
                <img src={product.img} className="p-img" alt="img" />
            </a>
        </div>
    )
}


