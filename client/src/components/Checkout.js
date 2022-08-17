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
                            <option>5 ml</option>
                            <option>15 ml</option>
                            <option>30 ml</option>
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
                        <div className="remove-btn"></div>
                    </div>


                    {/* Row Two */}
                    <div className="row-two">
                        <div className="checkout-product-img"></div>
                        <div className="checkout-product-detail-container">
                            <p className="checkout-product-name">Love Spell</p>
                            <p className="checkout-variation-product-one">Gold Cap</p>
                        </div>

                        <select className="size-selection">
                            <option>5 ml</option>
                            <option>15 ml</option>
                            <option>30 ml</option>
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
                        <div className="remove-btn"></div>
                    </div>



                    {/* Row Three */}
                    <div className="row-three">
                        <div className="checkout-product-img"></div>
                        <div className="checkout-product-detail-container">
                            <p className="checkout-product-name">Love Spell</p>
                            <p className="checkout-variation-product-one">Gold Cap</p>
                        </div>

                        <select className="size-selection">
                            <option>5 ml</option>
                            <option>15 ml</option>
                            <option>30 ml</option>
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
                        <div className="remove-btn"></div>
                    </div>
                 
                </div>
                <div className="return-shop-ui">
                        <div className="return-icon"></div>
                        <p className="cont-shopping">Continue Shopping</p>
                </div>

                <div className="subtotal-price-container">
                        <p className="subtotal-text">Subtotal:</p>
                        <p className="subtotal-price">R 640</p>
                        <p className="shipping-text">Shipping:</p>
                        <p className="shipping-price">Free</p>
                        <p className="grand-total-text">Total:</p>
                        <p className="grand-total-price">R 640</p>
                </div> 
            </div>

             {/* Payment Section */}
            <div className="payment-info-container">
                <p className="payment-info">Payment Info</p>
            </div>
            <div className="payment-method-container">
                <p className="payment-method-text">Payment Method</p>
                <div className="checkboxes-container">
                <input className="credit" type="radio" name="checked"></input>
                    <div className="credit-icon"></div><p className="credit-text">Credit Card</p>
                    <div className="paypal-container">
                    <input className="paypal" type="radio" name="radio"></input>
                    <div className="paypal-icon"></div><p className="paypal-text">Paypal</p>
                    </div>
                <div className="name-container">
                    <p className="card-owner-text">Card owner:</p>
                    <p className="card-owner-name">John Cena</p>
                </div>
                <div className="card-number-container">
                    <div className="card-number-text"></div>
                </div>

            </div>
           




            </div>
        </div>
        </>
    )
}

export default Checkout