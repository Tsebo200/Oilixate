import React from "react";
import {useNavigate} from "react-router-dom";

const Dashboard = () => {
    return(
        <>
        <div className="main-container">
            <div className="label-container">
            <a href="/Dashboard"><p className="home-label">Home</p></a>
            <a href="/IndiProduct"><p className="products-label">Products</p></a>
            <a href="/Checkout"><p className="checkout-label">Checkout</p></a>
            <a href="/Admin"><p className="admin-label">Admin</p></a>
            </div>
            <a href="/Dashboard"><div className="dash-logo"></div></a>
            <div className="slider-index">
                <div className="index-active"></div>
                <div className="index-inactive"></div>
                <div className="index-inactive"></div>
            </div>
            <div className="slider-container">
                <div className="text-content">
                    <p className="oilixate-heading">Oilixate</p>
                    <p className="welcome-text">Welcome to Oilixate, we offer the best spiritual oils 
                    for any occasion from love attraction to healing.</p>
                    <p className="more-text">MORE</p>
                    <div className="right-arrow"></div>
                </div>
            <div className="image-slide"></div>
            </div>
            
        </div>
        </>
    )
}
export default Dashboard