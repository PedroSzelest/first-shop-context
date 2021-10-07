import './App.css';
import CartState from './context/cart/Cart.State';

//Components
import Nav from './components/Nav';
import Shop from "./components/Shop"
import RightBar from './components/RightBar';

function App() {
  return (
    <div className="App">
      <CartState>
        <Nav />
        <RightBar />
        <Shop />
      </CartState>
    </div>
  );
}

export default App;
