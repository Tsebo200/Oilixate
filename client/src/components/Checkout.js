import React from "react";
import {useNavigate} from "react-router-dom";

const Checkout = () => {
    return(
        <>
        <div className="main-container-two">
            <div className="products-table-container">
                <p className="checkout-heading">Checking Out</p>
                <div className="headings-container">
                <p className="product-heading">Products</p>
                <p className="size-heading">Size</p>
                <p className="quantity-heading">Quantity</p>
                <p className="total-price-heading">Total Price</p>
                </div>
                <div className="checkout-hor-line"></div>
                <div className="checkout-content-container">
                    <div className="row-one">
                        <div className="checkout-product-img"></div>
                    </div>
                </div>
            </div>
            <div className="payment-info-container"></div>
        </div>
        </>
    )
}

export default Checkout