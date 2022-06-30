import "./App.css";
import { addToCart } from "./redux/action";
import { useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();
  const productDetails = {
    name: "Lenevo",
    type: "laptop",
    price: "80000",
    color: "grey",
  };
  return (
    <div className="App">
      <button onClick={() => dispatch(addToCart(productDetails))}>
        Add to Cart
      </button>
    </div>
  );
}

export default App;
