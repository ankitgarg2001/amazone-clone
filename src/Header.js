import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import {useStateValue} from './StateProvider';
import { getTotalItems } from './reducer';
import {auth} from "./firebase"

function Header() {
    const[{basket,user}, dispatch] = useStateValue();
    const handleAuthentication=()=>{
        if(user){
            auth.signOut();
        }
    }

    return (
        <div className='header'>
            <Link to="/">
                <img
                className="header_logo"
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
            </Link>
        <div className="header_search">
            <select className="header_SearchCategories">
                <option value="All">All</option>
                </select>
            <input className="header_SearchInput" type="text"/>
            <SearchIcon className="header_SearchIcon"></SearchIcon>
            {/* Logo */}
        </div> 
        <div className="header_nav">
        <Link to={!user && '/login'}>
            <div onClick={handleAuthentication} className='header_option'>
            
                <span className='header_optionLineOne'>{
                    user ? user.email : 'Hello Guest'
                }    
                </span>
                <span className='header_optionLineTwo'>{user ? 
                'Sign Out' : 'Sign In'}  
                </span>
            </div></Link>
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
            <Link to="/checkout">
                <div className="header_optionBasket">
                    <span className="header_optionLineTwo header_basketCount">{getTotalItems(basket)}</span>
                     <ShoppingCartIcon/>
                </div> </Link>
                <span className="header_optionLineTwo header_cart">cart</span>
                 </div>
        </div>
        </div>
    )
}

export default Header
