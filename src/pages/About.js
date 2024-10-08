import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import Slider from 'react-slick';
import FsLightbox from 'fslightbox-react';
import * as Icon from 'react-feather';
import Sectiontitle from '../components/Sectiontitle';
import Layout from '../components/Layout';
import Service from '../components/Service';
// import Testimonial from '../components/Testimonial';

function About() {
  const [toggler, setToggler] = useState(false);
  const [information, setInformation] = useState('');
  const [services, setServices] = useState([]);
  // const [reviews, setReviews] = useState([]);

  // const sliderSettings = {
  //   dots: false,
  //   infinite: true,
  //   arrows: false,
  //   speed: 500,
  //   slidesToShow: 2,
  //   slidesToScroll: 2,
  //   autoplay: true,
  //   autoplaySpeed: 6000,
  //   pauseOnHover: true,
  //   adaptiveHeight: true,
  //   responsive: [
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };

  const handleToggler = (event) => {
    setToggler({
      toggler: !toggler,
    });
  };

  useEffect(() => {
    axios.get('/api/information').then((response) => {
      setInformation(response.data);
    });
    axios.get('/api/services').then((response) => {
      setServices(response.data);
    });
    // axios.get('/api/reviews').then((response) => {
    //   setReviews(response.data);
    // });
  }, []);

  return (
    <Layout>
      <div className='mi-about-area mi-section mi-padding-top'>
        <div className='container'>
          <Sectiontitle title='About Me' />
          <div className='row'>
            {/* <div className='col-lg-6'>
              <div className='mi-about-image'>
                <img
                  src={information.aboutImage}
                  alt='about'
                  onClick={() => handleToggler(!toggler)}
                />
                <span className='mi-about-image-icon'>
                  <Icon.ZoomIn />
                </span>
                <FsLightbox
                  toggler={toggler}
                  sources={[information.aboutImageLg]}
                />
              </div>
            </div> */}
            <div className='col-lg-6'>
              <div className='mi-about-content'>
                <h3>
                  My name is{' '}
                  <span className='color-theme'>{information.name_vi}</span>
                </h3>
                <p style={{ textAlign: 'justify' }}>{information.aboutContent}</p>
                <ul>
                  {!information.name ? null : (
                    <li>
                      <b>Full Name</b> {information.name_vi}
                    </li>
                  )}
                  {!information.dob ? null : (
                    <li>
                      <b>Date of Birth</b> {information.dob}
                    </li>
                  )}
                  {!information.phone ? null : (
                    <li>
                      <b>Phone</b> {information.phone}
                    </li>
                  )}
                  {!information.nationality ? null : (
                    <li>
                      <b>Nationality</b> {information.nationality}
                    </li>
                  )}
                  {!information.language ? null : (
                    <li>
                      <b>Languages</b> {information.language}
                    </li>
                  )}
                  {!information.email ? null : (
                    <li>
                      <b>Email</b> {information.email}
                    </li>
                  )}
                  {!information.address ? null : (
                    <li>
                      <b>Address</b> {information.address}
                    </li>
                  )}
                  {!information.freelanceStatus ? null : (
                    <li>
                      <b>Freelance</b> {information.freelanceStatus}
                    </li>
                  )}
                  <li>
                    <b>Experience</b> <span dangerouslySetInnerHTML={{ __html: information.experience }} />
                  </li>
                  <li>
                    <b>Hobbies</b> {information.hobby}
                  </li>
                  <li>
                    <b>Personalities</b> {information.personality}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- CERT AREA --> */}
      <div
        className='cert-area mi-section mi-padding-top'
      >
        <div className='container'>
          <Sectiontitle title='Certifications' />
          <div className='mi-service-wrapper'>
            <div className='mt-30-reverse'>
              <a
                href={information.cvfile}
                rel='noopener noreferrer'
                target='_blank'
                className='mi-button cert-btn1'
              >
                Inspect CV
              </a>
            </div>
            <div style={{marginTop: "40px"}}>
              <a
                href={information.cert1}
                rel='noopener noreferrer'
                target='_blank'
              >
                <img src={information.cert1Image} alt="certification" />
              </a>
              <a
                href={information.cert2}
                rel='noopener noreferrer'
                target='_blank'
              >
                <img src={information.cert2Image} width="150" height="150" alt="certification" />
              </a>
              <a
                href={information.cert3}
                rel='noopener noreferrer'
                target='_blank'
              >
                <img src={information.cert3Image} width="150" height="150" alt="certification" />
              </a>
              <a
                href={information.cert4}
                rel='noopener noreferrer'
                target='_blank'
              >
                <img src={information.cert4Image} width="150" height="150" alt="certification" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- SERVICE AREA --> */}
      <div
        className='mi-service-area mi-section mi-padding-top'
        style={{ marginBottom: '40px' }}
      >
        <div className='container'>
          <Sectiontitle title='Services' />
          <div className='mi-service-wrapper'>
            <div className='row mt-30-reverse'>
              {services.map((service) => (
                <div
                  className='col-lg-4 col-md-6 col-12 mt-30'
                  key={service.title}
                >
                  <Service content={service} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <div className='mi-review-area mi-section mi-padding-top mi-padding-bottom'>
        <div className='container'>
          <Sectiontitle title='Reviews' />
          <div className='row justify-content-center'>
            <div className='col-12'>
              <Slider className='mi-testimonial-slider' {...sliderSettings}>
                {reviews.map((review) => (
                  <Testimonial key={review.id} content={review} />
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div> */}
    </Layout>
  );
}

export default About;
