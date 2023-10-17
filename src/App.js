import './App.css';
import { Home } from './component/Home';
import { NavBar } from './component/NavBar';

function App() {
  return (
      <div className="wrapper">
        <NavBar />
        <Home />
      </div>
  );
}

export default App;
