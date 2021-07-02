import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './container/Home/Home'

function App() {
  return (
    <>
      <div className="App">
        <Navbar/>
        <Home/>
        
      </div>
      <Footer/>
    </>
  );
}

export default App;
