import React from 'react'
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckProduct({id, image,title,price,rating,quantity}) {
    const [{basket},dispatch] = useStateValue();
    const removeFromBasket = ()=>{
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }
    return (
        <div className='checkoutProduct'>
            <img className="checkoutProduct_image" src={image} />            
            <div className='checkoutProduct_info'>
                <p className='checkoutProduct_title'>{title}</p>
                <p className='checkoutProduct_price'>
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className='checkoutProduct_rating'>
                    {Array(rating)
                    .fill()
                    .map((_,i)=>(
                        <p>🌟</p>
                    ))}
            </div>
            <p><strong>Quantity: {quantity}</strong></p>
            <button onClick={removeFromBasket}>Remove from basket</button> 
            </div>   
        </div>
    )
}

export default CheckProduct
