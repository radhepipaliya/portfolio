import './App.css';
import Contactus from './components/Contactus';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
 <>
    <Navbar />
    <div className="home">
      <Home/>
    </div>

    <div className="container">
      <Contactus />
    </div>

 </>
  );
}

export default App;
