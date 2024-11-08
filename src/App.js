import './App.css';
import Header from './Components/Header/Header';
import Menu from './Components/Menu/Menu';
import 'bootstrap/dist/css/bootstrap.css';
import { HashRouter  as Router } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Scroll from './Components/ScrollComponent/Scroll';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <div className='menu'>
          <Menu/>
        </div>
        <Scroll/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
