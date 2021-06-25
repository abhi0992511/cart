
import './App.css';
import { reduce } from 'async';
import Cart from './cart';
import Navbar from './navbar';

function App() {
  return (
    <div className="App">
      <h1>
        <Navbar/>
        <Cart/>
        
    
      </h1>
    </div>
  );
}



export default App;
