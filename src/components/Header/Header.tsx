import { NavLink } from 'react-router-dom'
import cart from '../../images/cart.svg'
import { useSelector } from 'react-redux'
import { TState } from '../../types'
import './Header.css'

export const Header = () => {
    const {itemsCount} = useSelector((state: TState) => state.cart)
    return (
        <header className='header header_sticky'>
            <div className='nav-menu-and-logo-container'>
                <h1 className='shop-logo'>Батарейка Shop</h1>

                <div className='nav-menu'> 
                    <NavLink 
                        to='/catalog' 
                        className='nav-menu__link'
                    >
                        Каталог
                    </NavLink>
                </div>
            </div>
            
            <div className='cart-item'> 
                <NavLink to='/cart' className='cart-item__link'>
                    <img
                        src={cart}
                        alt="cart"
                    />
                    {
                        itemsCount > 0 && 
                        <p className='cart-item__link__items-count'>{itemsCount}</p>
                    }
                </NavLink>
            </div>
        </header>
    )
}