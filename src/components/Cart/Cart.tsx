import { useSelector, useDispatch } from "react-redux";
import "./Cart.css"
import { TListItem, TState } from "../../types";
import emptyCart from "../../images/emptyCart.svg"
import { cart } from "../../redux/actionCreators";
import { useMemo } from "react";

export const Cart = () => {
    const {items, itemsCount} = useSelector((state: TState) => state.cart)
    const dispatch = useDispatch()

    const sum = useMemo(()=> 
        items.reduce((acc, el)=> el.price + acc, 0), 
        [items]
    )
    
    const deleteItem = (id: TListItem["id"]) => dispatch(cart.delete(id))
    return (
        <div className="cart-container">
            { 
                itemsCount > 0 ?
                    <>
                        <div className="cart-list">
                            {
                                items.map((el) => 
                                    <div className="card">
                                        <div className="card-content">
                                            <img 
                                                src={el.image} 
                                                alt="cardImg" 
                                                className="card-content__img"
                                            />
                                            <div className="card-list-description"> 
                                                <p className="card-list-description__title">{el.name}</p>
                                                <p>{el.price}₽</p>
                                            </div>
                                        </div>
                                        
                                        <div>
                                            <button 
                                                className="card-delete-btn"
                                                onClick={() => deleteItem(el.id)}
                                            >
                                                Убрать
                                            </button>
                                        </div>
                                    </div>
                                ) 
                            }
                        </div>
                        
                        <div className="result-sum">
                            <p>Итого:</p>
                            <div>{sum} ₽</div>
                        </div>
                    </>
                : 
                <div className="empty-cart">
                    <img 
                        src={emptyCart} 
                        alt="emptyCart"  
                        className="empty-cart__img"
                    />
                    <p className="empty-cart__title">Корзина пуста</p>
                </div>
            } 
        </div>
    )  
}
