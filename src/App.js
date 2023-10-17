import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './component/Home';
import { NavBar } from './component/NavBar';

function App() {
  return (
  
      <div className="wrapper">
        <NavBar />
        <Routes>
          <Route path='/' element={ <Home /> } />
        </Routes>
      </div>
    

  );
}

export default App;
