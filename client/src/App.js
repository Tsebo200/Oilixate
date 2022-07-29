import logo from './logo.svg';
import './App.css';
import {Helmet} from "react-helmet";

function App() {
  return (
    <div className="App">
    <Helmet>
    <meta charSet="utf-8" />
    <title>Oilixate</title>
    <meta name="description" content="E-commerce website on Medicinal Oils" />
    </Helmet>
    </div>
  );
}

export default App;
