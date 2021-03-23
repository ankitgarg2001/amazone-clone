import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Header() {
    return (
        <div className='header'>
            <img
            className="header_logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
        <div className="header_search">
            <select className="header_SearchCategories">
                <option value="All">All</option>
                </select>
            <input className="header_SearchInput" type="text"/>
            <SearchIcon className="header_SearchIcon"></SearchIcon>
            {/* Logo */}
        </div> 
        <div className="header_nav">
            <div className='header_option'>
                <span className='header_optionLineOne'>
                    Hello Guest
                </span>
                <span className='header_optionLineTwo'>
                     Sign In
                </span>
            </div>
            <div className='header_option'>
                <span className='header_optionLineOne'>
                    Returns
                </span>
                <span className='header_optionLineTwo'>
                    & Orders
                </span>
            </div>
            <div className='header_option'>
                <span className='header_optionLineOne'>
                    Your
                </span>
                <span className='header_optionLineTwo'>
                    Prime
                </span>
            </div>
            <div className="header_BasketAndCart">
                <div className="header_optionBasket">
                    <span className="header_optionLineTwo header_basketCount">0</span>
                        <ShoppingCartIcon/>
                </div>
                <span className="header_optionLineTwo header_cart">cart</span>
            </div>    
        </div>
        </div>
    )
}

export default Header
