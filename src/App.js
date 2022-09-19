import './App.css';
import Homepage from './Components/Pages/Homepage';
import Shop from './Components/Pages/Shop';
import Navbar from './Components/Shared/Navbar';

function App() {
  return (
    <div className="lg:px-24 xl:container mx-auto">
      <Navbar></Navbar>
      <Homepage></Homepage>
      <Shop></Shop>
    </div>
  );
}

export default App;
