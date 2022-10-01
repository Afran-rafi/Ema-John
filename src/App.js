import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Pages/Home";
import Inventory from "./Components/Pages/Inventory";
import Login from "./Components/Pages/Login";
import Order from "./Components/Pages/Order";
import Register from "./Components/Pages/Register";
import Shop from "./Components/Pages/Shop";
import Errorpage from "./Components/Shared/Errorpage";
import Navbar from "./Components/Shared/Navbar";

function App() {
  return (
    <div className="2xl:container 2xl:mx-auto">
      <Navbar></Navbar>
      <div className="lg:px-24 px-6">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/shop" element={<Shop></Shop>}></Route>
          <Route path="/order" element={<Order></Order>}></Route>
          <Route path="/inventory" element={<Inventory></Inventory>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signUp" element={<Register></Register>}></Route>
          <Route path="*" element={<Errorpage></Errorpage>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
