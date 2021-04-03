import React from 'react'
import "./Checkout.css";
import Subtotal from "./Subtotal";
function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout_left">
            <img
                className="checkout_ad"
                src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                alt=""
                />
            
                <div className="checkout_text">
                    <strong>Pay faster all your shopping needs<span className="color_text"><strong> with Amazon Pay balance</strong></span></strong><br/>
                    Get Instant refund on cancellations | Zero payment failures
                </div>
                <div className="checkout_title">
                    <h2>Shopping Cart</h2>
                </div>
                <div className="checkout_right">
                    <Subtotal/>
                </div>
            </div>
        </div>
    )
}

export default Checkout