import "./App.css";
import Header from "./Component/Header";
import {Routes, Route} from 'react-router-dom' 
import Main from "./Component/Main";
import Cart from "./Component/Cart";

function App() {
 return (  
    <div className="App">
      <Header />
      <Routes>
        <Route path="/"  element={<Main/>}/>
        <Route path="/cart"  element={<Cart/>}/>
      </Routes>
   </div>
  );
}

export default App;
