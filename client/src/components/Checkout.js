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
                        <div className="checkout-product-detail-container">
                            <p className="checkout-product-name">Love Spell</p>
                            <p className="checkout-variation-product-one">Gold Cap</p>
                        </div>

                        <select className="size-selection">
                            <option>30 ml</option>
                            <option>75 ml</option>
                            <option>150 ml</option>
                        </select>

                        <div className="quantity-selector-container">
                            <div className="checkout-minus-block">
                                <div className="checkout-minus-icon"></div>
                            </div>
                            <p className="checkout-quantity-count">2</p>
                            <div className="checkout-plus-block">
                                <div className="checkout-plus-icon"></div>
                            </div>
                        </div>

                        <p className="row-one-total-price">R 120</p>
                    </div>
                </div>
            </div>
            <div className="payment-info-container"></div>
        </div>
        </>
    )
}

export default Checkout