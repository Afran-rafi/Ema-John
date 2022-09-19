import './App.css';
import Homepage from './Components/Pages/Homepage';
import Navbar from './Components/Shared/Navbar';

function App() {
  return (
    <div className="lg:px-24 xl:container mx-auto">
      <Navbar></Navbar>
      <Homepage></Homepage>
    </div>
  );
}

export default App;
