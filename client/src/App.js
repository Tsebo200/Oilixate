import logo from './logo.svg';
import './App.css';
import {Helmet} from "react-helmet";
import Login from './components/Login';
import {Route, Routes} from 'react-router-dom';
import Dashboard from './components/Dashboard';
// import Products from './components/Products';
import IndividualProduct from './components/IndividualProduct';
import Checkout from './components/Checkout';
import Admin from './components/Admin';
import Navigation from './components/Navigation';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <div className="App">
    <Helmet>
    <meta charSet="utf-8" />
    <title>Oilixate</title>
    <meta name="description" content="E-commerce website on Medicinal Oils" />
    </Helmet>
    <Routes>
    <Route path="/Login" element={<><Login/></>}></Route>
    <Route path="/" element={<><Dashboard/></>}></Route>
     <Route path="/IndiProduct" element={<><Navigation/> <IndividualProduct/></>}></Route>
    {/* <Route path="/Products" element={<><Navigation/> <Products/></>}></Route> */}
    <Route path="/Checkout" element={<><Navigation/> <Checkout/></>}></Route>
    <Route path="/Admin" element={<><Navigation/> <Admin/></>}></Route>
    <Route path='/ShoppingCart' element={<><ShoppingCart/></>}></Route>
    </Routes>
    </div>
  );
}

export default App;
