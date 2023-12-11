import { useDispatch, useSelector } from "react-redux"
import { TListItem, TState } from "../../types"
import {Preloader} from "../Preloader/Preloader"
import { useCallback, useEffect } from "react"
import { setList } from "../../redux/asyncActions"
import { ItemCard } from "./ItemCard/ItemCard"
import { cart } from "../../redux/actionCreators"
import "./Catalog.css"

export const Catalog = () => {
    const {list, itemsCount} = useSelector((state: TState) => state.catalog)
    const dispatch = useDispatch()
  
    const addToCart = useCallback((item: TListItem) => dispatch(cart.add(item)), [])

    useEffect(()=> {
        dispatch(setList() as any)
    }, [])

    if(!itemsCount) {
        return <Preloader/>
    }
   
    return (
        <div className="catalog-container">
            <h1>Каталог</h1>
            <div  className="items-list">
            {
                list.map(el => 
                    <ItemCard 
                        key={el.id} 
                        {...el} 
                        addToCart={addToCart}
                    />
                )
            }
            </div>
        </div>
    )
}