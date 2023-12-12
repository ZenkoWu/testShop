import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import { Catalog } from './components/Catalog/Catalog';
import { Cart } from './components/Cart/Cart';
import { Home } from './components/Home/Home';

export const App = () => {
	return (
		<BrowserRouter> 
		<Header/>
		<div className="content">
			<Routes>
				<Route index path='/' element={<Home/>}/>
				<Route index path='/catalog' element={<Catalog/>}/>
				<Route path='/cart' element={<Cart/>}/>
			</Routes>
		</div>
	</BrowserRouter>
	)
}

