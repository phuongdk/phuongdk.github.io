import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Particles from 'react-particles-js';
import Layout from '../components/Layout';
// import Socialicons from '../components/Socialicons';

function Home() {
  const [information, setInformation] = useState('');
  const paramConfig = {
    particles: {
      number: {
        value: 60,
        density: {
          enable: true,
        },
      },
      size: {
        value: 5,
        random: true,
      },
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: 'bounce',
        },
        onclick: {
          enable: true,
          mode: 'repulse',
        },
      },
    },
  };
  useEffect(() => {
    axios.get('/api/information').then((response) => {
      setInformation(response.data);
    });
  }, []);
  return (
    <Layout>
      <div className='mi-home-area mi-padding-section'>
        <Particles className='mi-home-particle' params={paramConfig} />
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-10 col-12'>
              <div className='mi-home-content'>
                <h1>
                  Hi, I am{' '}
                  <span className='color-theme'>{information.name}</span>
                </h1>
                <p>{information.aboutContent}</p>
                {/* <Socialicons bordered /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
