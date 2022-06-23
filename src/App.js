import './App.css';
import { Routes, Route } from "react-router-dom";
import { HomePageView } from './pages/homepage-view/homepage-view';
import { CartView } from './pages/cart-view/cart-view';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePageView />} />
        <Route path="cart" element={<CartView />} />
      </Routes>
    </div>
  );
}

export default App;
