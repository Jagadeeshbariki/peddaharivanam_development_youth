import './App.css';
import Header from './Components/Header/Header';
import Menu from './Components/Menu/Menu';
import 'bootstrap/dist/css/bootstrap.css';
import { HashRouter  as Router } from 'react-router-dom';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Menu/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
