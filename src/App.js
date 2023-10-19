import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './component/Home';
import { NavBar } from './component/NavBar';
import { Skills } from './component/Skills';

function App() {
  return (
  
      <div className="wrapper">
        <NavBar />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/skills' element={ <Skills />} />
        </Routes>
      </div>
    

  );
}

export default App;
