import "./App.css";
import Homepage from "./Components/Pages/Homepage";
import Shop from "./Components/Pages/Shop";
import Navbar from "./Components/Shared/Navbar";

function App() {
  return (
    <div className="2xl:container 2xl:mx-auto">
      <Navbar></Navbar>
      <div className="lg:px-24">
        <Homepage></Homepage>
        <Shop></Shop>
      </div>
    </div>
  );
}

export default App;
