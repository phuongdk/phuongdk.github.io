import axios from 'axios';
import React, { Suspense, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Particle from '../components/Particle';
import Layout from '../components/Layout';
// import Socialicons from '../components/Socialicons';
import Spinner from '../components/Spinner';

function Home({ lightMode }) {
  let temp = {};
  // let temp = {
  //   particles: {
  //     color: {
  //       value: '#00e7ff',
  //     },
  //     line_linked: {
  //       shadow: {
  //         enable: true,
  //         color: '#00e7ff',
  //         blur: 5,
  //       },
  //     },
  //     number: {
  //       value: 120,
  //       density: {
  //         enable: true,
  //         value_area: 2000,
  //       },
  //     },
  //     size: {
  //       value: 5,
  //       random: true,
  //     },
  //   },
  //   interactivity: {
  //     events: {
  //       onhover: {
  //         enable: true,
  //         mode: 'bounce',
  //       },
  //       onclick: {
  //         enable: true,
  //         mode: 'repulse',
  //       },
  //     },
  //   },
  // };
  const [information, setInformation] = useState('');
  // const [paramConfig, setParamConfig] = useState(temp);

  // useEffect(() => {
  //   if (props.lightMode) {
  //     temp = {
  //       particles: {
  //         color: {
  //           value: '#037fff',
  //         },
  //         line_linked: {
  //           shadow: {
  //             enable: true,
  //             color: '#037fff',
  //             blur: 5,
  //           },
  //         },
  //         number: {
  //           value: 120,
  //           density: {
  //             enable: true,
  //             value_area: 2000,
  //           },
  //         },
  //         size: {
  //           value: 5,
  //           random: true,
  //         },
  //       },
  //       interactivity: {
  //         events: {
  //           onhover: {
  //             enable: true,
  //             mode: 'bounce',
  //           },
  //           onclick: {
  //             enable: true,
  //             mode: 'repulse',
  //           },
  //         },
  //       },
  //     };
  //   } else {
  //     temp = {
  //       particles: {
  //         color: {
  //           value: '#00e7ff',
  //         },
  //         line_linked: {
  //           shadow: {
  //             enable: true,
  //             color: '#00e7ff',
  //             blur: 5,
  //           },
  //         },
  //         number: {
  //           value: 120,
  //           density: {
  //             enable: true,
  //             value_area: 2000,
  //           },
  //         },
  //         size: {
  //           value: 5,
  //           random: true,
  //         },
  //       },
  //       interactivity: {
  //         events: {
  //           onhover: {
  //             enable: true,
  //             mode: 'bounce',
  //           },
  //           onclick: {
  //             enable: true,
  //             mode: 'repulse',
  //           },
  //         },
  //       },
  //     };
  //   }
  //   setParamConfig(temp);
  // }, [props.lightMode]);

  useEffect(() => {
    axios.get('/api/information').then((response) => {
      setInformation(response.data);
    });
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Home - Chester React Personal Portfolio Template</title>
        <meta
          name='description'
          content='Chester React Personal Portfolio Template Homepage'
        />
      </Helmet>
      <Suspense fallback={<Spinner />}></Suspense>
      <div className='mi-home-area mi-padding-section'>
        <Particle lightMode={lightMode} />
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-10 col-12'>
              <div className='mi-home-content'>
                <h1>
                  My name is{' '}
                  <span className='color-theme'>{information.name}</span>
                </h1>
                <p>{information.aboutHome}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
