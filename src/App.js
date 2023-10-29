import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './Pages/Home';
import { NavBar } from './component/NavBar';
import { About } from './Pages/About';
import { Footer } from './component/Footer';
import { Project } from './Pages/Project';
import { Contact } from './Pages/Contact';
import { Transition } from './component/Transition';

function App() {
  return (
    <>
      <div className="wrapper position-relative">
        <Transition />
        <NavBar />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/project' element={ <Project />} />
          <Route path='/contact' element={ <Contact />} />
        </Routes>
        <Footer />
      </div>
    </>

  );
}

export default App;
