import React from 'react'
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from './CheckProduct';
import {useStateValue} from './StateProvider';
function Checkout() {
    const[{basket},dispatch]=useStateValue();
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
                    <div className='checkout_item'>
                    {basket.map(item=>(
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        quantity={item.quantity}
                        />
                    ))}
                    </div>
                    <div className='ckeckout_subtotal'>
                    <Subtotal/>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Checkout
