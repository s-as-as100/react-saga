import "./App.css";
import { addToCart, emptyCart, removeToCart } from "./redux/action";
import { useDispatch } from "react-redux";
import Header from "./Component/Header";
import { productList } from "./redux/productAction";
import { useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productReducer);
  console.log({data})

  const productDetails = {
    name: "Lenevo",
    type: "laptop",
    price: "80000",
    color: "grey",
  };
  
  return (
    <div className="App">
      <Header/>
      <button onClick={() => dispatch(addToCart(productDetails))}>
        Add to Cart
      </button>
      <button onClick={() => dispatch(removeToCart(productDetails.name))}>
       remove to cart
      </button>
      <button onClick={() => dispatch(emptyCart())}>
        empty cart
      </button>
      <button onClick={() => dispatch(productList())}>
        get product list
      </button>
    </div>
  );
}

export default App;
