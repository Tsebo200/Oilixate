import React from "react";
import {useNavigate} from "react-router-dom";

const Dashboard = () => {
    return(
        <>
        <div className="main-container">
            <div className="label-container">
            <p className="home-label">Home</p> 
            <p className="products-label">Products</p>
            <p className="checkout-label">Checkout</p>
            <p className="admin-label">Admin</p>
            </div>
            <div className="dash-logo"></div>
            <div className="slider-container">
            <div className="image-slide"></div>
            </div>
        </div>
        </>
    )
}
export default Dashboard