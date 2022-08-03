import React from "react";
import {useNavigate} from "react-router-dom";

const Products = () => {
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
            </div>
        </div>
        </>
    )
}
export default Products