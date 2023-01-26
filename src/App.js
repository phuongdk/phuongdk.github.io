import React, { useState } from 'react';
import * as Icon from 'react-feather';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home';
import About from './pages/About';
import Resumes from './pages/Resumes';
import HandsOnProjects from './pages/HandsOnProjects';
import UniversityProjects from './pages/UniversityProjects';
import Contact from './pages/Contact';
import Notfound from './pages/Notfound';

function App() {
  const [lightMode, setLightMode] = useState(false); // Made it true if you want to load your site light mode primary

  lightMode
    ? document.body.classList.add('light')
    : document.body.classList.remove('light');

  const handleMode = () => {
    if (!lightMode) {
      setLightMode(true);
      document.body.classList.add('light');
    } else {
      setLightMode(false);
      document.body.classList.remove('light');
    }
  };

  return (
    <BrowserRouter>
      <div className='light-mode'>
        <span className='icon'>
          <Icon.Sun />
        </span>
        <button
          className={
            lightMode ? 'light-mode-switch active' : 'light-mode-switch'
          }
          onClick={() => handleMode()}
        ></button>
      </div>
      <Routes>
        <Route path='/' index element={<Home lightMode={lightMode} />} />
        <Route path='/about' element={<About />} />
        <Route path='/resume' element={<Resumes />} />
        <Route path='/hands-on-projects' element={<HandsOnProjects />} />
        <Route path='/university-projects' element={<UniversityProjects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
