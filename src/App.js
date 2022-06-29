import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Tools from './pages/Tools';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="tools" element={<Tools />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
