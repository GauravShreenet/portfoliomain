import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './component/Home';
import { NavBar } from './component/NavBar';
import { About } from './component/About';
import { Footer } from './component/Footer';
import { Project } from './component/Project';

function App() {
  return (
    <>
      <div className="wrapper position-relative">
        <NavBar />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/project' element={ <Project />} />
        </Routes>
        <Footer />
      </div>
    </>

  );
}

export default App;
