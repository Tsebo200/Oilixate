import logo from './logo.svg';
import './App.css';
import {Helmet} from "react-helmet";
import Login from './components/Login';
import {Route, Routes} from 'react-router-dom';
import Dashboard from './components/Dashboard';

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
    </Routes>
    </div>
  );
}

export default App;
