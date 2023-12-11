import { TListItem, TState } from "../../../types"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import "./ItemCard.css"

export const ItemCard = ({
    image, 
    id, 
    price, 
    name, 
    addToCart
}: {
    image: TListItem["image"], 
    id: TListItem["id"], 
    price: TListItem["price"], 
    name: TListItem["name"], 
    addToCart: (item: TListItem) => void
}) => {
    const {items} = useSelector((state: TState) => state.cart)
    const navigate = useNavigate()

    return (
        <div className="item-card-container">
            <div className="item-card">
                <img 
                    src={image} 
                    alt={name}
                    className="item-card__img" 
                />
                <p className="item-card__name">{name}</p>
                <p className="item-card__price">{price}₽</p>
                {
                    items.find(el => el.id === id) ? 
                        <button 
                            className="item-card__btn item-card__btn_green" 
                            onClick={()=> navigate("/cart")}
                        >
                            Оформить заказ
                        </button> 
                    :
                        <button 
                            className="item-card__btn item-card__btn_orange" 
                            onClick={()=> addToCart({image, id, price, name})}
                        >
                            Добавить в корзину
                        </button>
                }  
            </div>
        </div>
    )
}