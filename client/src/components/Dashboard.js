import React from "react";
import {useNavigate} from "react-router-dom";

const Dashboard = () => {
    return(
        <>
        <div className="main-container">
            <div className="label-container">
            <a href="/Dashboard"><p className="home-label">Home</p></a>
            <a href="/Products"><p className="products-label">Products</p></a>
            <a href="/Checkout"><p className="checkout-label">Checkout</p></a>
            <a href="/Admin"><p className="admin-label">Admin</p></a>
            </div>
            <a href="/Dashboard"><div className="dash-logo"></div></a>
            <div className="slider-index"></div>
            <div className="slider-container">
            <div className="image-slide"></div>
            </div>
            
        </div>
        </>
    )
}
export default Dashboard