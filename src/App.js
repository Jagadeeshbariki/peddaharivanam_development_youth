import './App.css';
import Header from './Components/Header/Header';
import Menu from './Components/Menu/Menu';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Menu/>
      </div>
    </Router>
  );
}

export default App;
