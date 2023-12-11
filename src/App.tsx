import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import { Catalog } from './components/Catalog/Catalog';
import { Cart } from './components/Cart/Cart';

export const App = () => {
	return (
		<BrowserRouter> 
		<Header/>
		<div className="content">
			<Routes>
				<Route path='/catalog' element={<Catalog/>}/>
				<Route path='/cart' element={<Cart/>}/>
			</Routes>
		</div>
	</BrowserRouter>
	)
}

