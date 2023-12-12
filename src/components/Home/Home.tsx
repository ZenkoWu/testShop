import groceryPackage from "../../images/groceryPackage.svg"
import "./Home.css"

export const Home = () => {
    return (
        <div className="home-page">
            <img 
                src={groceryPackage} 
                alt="groceryPackage"
                className="home-page__img"
            />
            <p className="home-page__title">
                Скоро мы добавим информацию о нашем магазине, 
                а пока перейдите в каталог для совершения покупок
            </p>
        </div>
    )
}