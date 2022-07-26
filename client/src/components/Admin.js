import React from "react";
import {useNavigate} from "react-router-dom";

const Admin = () => {
    return(
        <>
        <div className="main-container-three">
            <div className="admin-container">
            <p className="admin-heading">The Oilixate Shop: Oil Spells</p>
            </div>
            <div className="card-container">
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

                <div className="add-product-container">
                    <p className="add-product-heading">Add An Oil</p>
                    <form>
                        <input type={"text"} className={"product-name"} placeholder={"Product Name*"}></input>
                        <input type={"number"} className={"product-price"} placeholder={"Product Price*"}></input>
                        <input type={"text"} className={"product-desc"} placeholder={"Product Description*"}></input>
                        <input type={"text"} className={"product-disc"} placeholder={"Product Disclaimer*"}></input>
                        <select className="admit-product-size" placeholder={"Size:"}>
                            <option>----Select Size----</option>
                            <option>5ml</option>
                            <option>10ml</option>
                            <option>30ml</option>
                        </select>
                        <input type={"number"} className={"product-quantity"} placeholder={"Quantity*"}></input>
                        <input type={"text"} className={"product-black"} placeholder={"In Stock: Black*"}></input>
                        <input type={"text"} className={"product-white"} placeholder={"In Stock: White*"}></input>
                        <input type={"text"} className={"product-silver"} placeholder={"In Stock: Silver*"}></input>
                        <input type={"text"} className={"product-gold"} placeholder={"In Stock: Gold*"}></input>
                        <button type={"submit"} className={"new-product-btn"}>ADD NEW PRODUCT</button>
                    </form>

                </div>
            </div>

         
        </div>
        </>
    )
}

export default Admin