import logo from './logo.svg';
import './App.css';
import {Helmet} from "react-helmet";
import Login from './components/Login';
import {Route, Routes} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Products from './components/Products';
import Checkout from './components/Checkout';
import Admin from './components/Admin';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
    <Helmet>
    <meta charSet="utf-8" />
    <title>Oilixate</title>
    <meta name="description" content="E-commerce website on Medicinal Oils" />
    </Helmet>
    <Routes>
    <Route path="/" element={<><Login/></>}></Route>
    <Route path="/Dashboard" element={<><Dashboard/></>}></Route>
    <Route path="/Products" element={<><Navigation/> <Products/></>}></Route>
    <Route path="/Checkout" element={<><Navigation/> <Checkout/></>}></Route>
    <Route path="/Admin" element={<><Navigation/> <Admin/></>}></Route>
    </Routes>
    </div>
  );
}

export default App;
