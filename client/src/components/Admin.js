import React from "react";
import {useNavigate} from "react-router-dom";

const Admin = () => {
    return(
        <>
        <div className="main-container-three">
            <div className="admin-container">
            <p className="admin-heading">The Oilixate Shop: Oil Spells</p>
            </div>
            <div className="card-one">
                <div className="oil-img"></div>
                <p className="oil-name">Lucid Dreaming Spell</p>
                <div className="delete-btn"></div>
                <p className="oil-size">Size:</p>
                <p className="oil-colour-cap">Cap:</p>
                <p className="stock-left">intock:</p>
                <p className="oil-price">Price:</p>
                <p className="oil-desc-label">Description:</p>
                <p className="oil-desc">Lorem ipsum</p>
                <p className="oil-disclaimer-label">Disclaimer:</p>
                <p className="oil-disclaimer">Lorem ipsum</p>
                <div className="view-btn"><p className="view-text">View product</p></div>
                <div className="edit-btn"><p className="edit-text">Edit product</p></div>
            </div>
        </div>
        </>
    )
}

export default Admin