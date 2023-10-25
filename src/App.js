import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './component/Home';
import { NavBar } from './component/NavBar';
import { About } from './component/About';

function App() {
  return (
    <>
      <div className="wrapper">
        <NavBar />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/about' element={ <About /> } />
        </Routes>
      </div>
    </>

  );
}

export default App;
