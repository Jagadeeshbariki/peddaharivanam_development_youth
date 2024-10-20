import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Menu from './Components/Menu/Menu';
import 'bootstrap/dist/css/bootstrap.css';
import About from './Components/About/About';

function App() {
  return (
    <div className="App">
      <Header/>
      <Menu/>
      <Home/>
      <About/>
    </div>
  );
}

export default App;
