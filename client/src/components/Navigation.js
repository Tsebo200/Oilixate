import React from "react";
import {useNavigate} from "react-router-dom";

const Navigation = () => {
    return(
        <>
        <div className="nav-bar">
            <div className="nav-logo"></div>
            <a href="/Dashboard"><p className="nav-home">Home</p></a>
            <a href="/IndiProduct"><p className="nav-product">Products</p></a>
            <a href="/Checkout"><p className="nav-checkout">Checkout</p></a>
            <a href="/Admin"><p className="nav-admin">Admin</p></a>
            <input type={"text"} placeholder={'Search'} className="search-box"></input>
            <button className="search-btn"></button>
            <div className="shopping-cart-modal"></div>
            <div className="numb-items">
                <p className="one-item">1</p>
            </div>
        </div>
        </>
    )
}
export default Navigation