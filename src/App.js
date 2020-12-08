import React, { useState } from 'react';
import * as Icon from 'react-feather';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
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
      <Switch>
        <Route
          path='/'
          exact
          component={Home}
          component={() => <Home lightMode={lightMode} />}
        />
        <Route path='/about' component={About} />
        <Route path='/resume' component={Resumes} />
        <Route path='/hands-on-projects' exact component={HandsOnProjects} />
        <Route path='/university-projects' component={UniversityProjects} />
        <Route path='/contact' component={Contact} />
        <Route path='*' component={Notfound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
