import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

function App() {
 /* Delivered code generated by Create New App
 return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );*/

  //Code for the Multistep Form
  return(
  
  <div>
    <Header/>
    <Navbar/>
    <Footer/>
  </div>
  );

}

export default App;
