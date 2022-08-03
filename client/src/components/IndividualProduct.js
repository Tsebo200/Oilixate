import React from "react";
import {useNavigate} from "react-router-dom";

const IndividualProduct = () => {
    return(
        <>
        <div className="main-container-two">
            <div className="hor-line"></div>
            <div className="product-info-container-left">
                <div className="product-info-row-one">
                <p className="product-one">Love Spell</p>
                <p className="product-price">R90.00</p>
                <p className="product-details">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Nec dignissim risus vitae et nisl a integer. Euismod sed justo neque non, nisl gravida placerat. 
                 Sed laoreet integer cras venenatis aliquam nunc sed nunc viverra. Sed fermentum et, vitae magna 
                 vitae fames dignissim urna tincidunt. Enim, porttitor purus in neque. Et pellentesque id eget 
                 cursus. Turpis donec bibendum velit vel.</p>
            </div>

            <p className="bought-with-text">Usually Bought with</p>
            <div className="product-two-container">
                <div className="product-two-img"></div>
                <p className="product-two-name">Healing</p>
            </div>
            <div className="product-three-container">
                <div className="product-three-img"></div>
                <p className="product-three-name">Archangel haniel</p>
            </div>
            <div className="product-four-container">
                <div className="product-four-img"></div>
                <p className="product-four-name">7 Chakras</p>
            </div>
            <div className="buttons-container">
                <div className="add-and-sub-container">
                    <div className="sub-btn-side">
                        <div className="subtract-icon"></div>
                    <div className="vert-line"></div>
                    </div>
                    <div className="counter-side">
                        <p className="current-count">2</p>
                    <div className="vert-line-two"></div>
                    </div>
                    <div className="add-btn-side">
                        <div className="plus-icon"></div>
                    </div>
                </div>
                <div className="add-cart-btn">
                    <p className="add-to-cart-text"></p>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}
export default IndividualProduct