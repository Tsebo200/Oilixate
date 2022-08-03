import React from "react";
import {useNavigate} from "react-router-dom";

const Checkout = () => {
    return(
        <>
        <div className="main-container-two">
            <div className="products-table-container">
                <p className="shopping-cart-heading">Shopping Cart</p>
                <div className="headings-container">
                <p className="product-heading">Products</p>
                <p className="size-heading">Size</p>
                <p className="quantity-heading">Quantity</p>
                <p className="total-price-heading">Total Price</p>
                </div>
            </div>
            <div className="payment-info-container"></div>
        </div>
        </>
    )
}

export default Checkout