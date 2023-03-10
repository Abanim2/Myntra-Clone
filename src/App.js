import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Section from './Components/Section';
import Products from './Components/Products';
import Details from './Components/Details';
import Cart from './Components/Cart';

function App() {
  return (
    <>
    <Router>
      <div>
        <Routes>
          <Route path="/" element={[<Header/>,<Section/>,<Products/>]}></Route>
          <Route path="/Details" element={[<Header/>,<Details/>]}></Route>
          <Route path="/Cart" element={[<Header/>,<Cart/>]}></Route>
        </Routes> 
      </div>
    </Router>
    </>
  );
}

export default App;
