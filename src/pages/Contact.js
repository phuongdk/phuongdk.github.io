import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as Icon from 'react-feather';
import Sectiontitle from '../components/Sectiontitle';
import Layout from '../components/Layout';

function Contact() {
  const [phoneNumbers, setPhoneNumbers] = useState([]);
  const [emailAddress, setEmailAddress] = useState([]);
  const [githubLink, setgithubLink] = useState([]);
  const [linkedinLink, setLinkedinLink] = useState([]);

  // const [formdata, setFormdata] = useState({
  //   name: '',
  //   email: '',
  //   subject: '',
  //   message: '',
  // });
  // const [error, setError] = useState(false);
  // const [message, setMessage] = useState('');

  // const submitHandler = (event) => {
  //   event.preventDefault();
  //   if (!formdata.name) {
  //     setError(true);
  //     setMessage('Name is required');
  //   } else if (!formdata.email) {
  //     setError(true);
  //     setMessage('Email is required');
  //   } else if (!formdata.subject) {
  //     setError(true);
  //     setMessage('Subject is required');
  //   } else if (!formdata.message) {
  //     setError(true);
  //     setMessage('Message is required');
  //   } else {
  //     setError(false);
  //     setMessage('You message has been sent!!!');
  //   }
  // };

  // const handleChange = (event) => {
  //   setFormdata({
  //     ...formdata,
  //     [event.currentTarget.name]: event.currentTarget.value,
  //   });
  // };

  const numberFormatter = (number) => {
    const phnNumber = number;
    return phnNumber;
  };

  // const handleAlerts = () => {
  //   if (error && message) {
  //     return <div className='alert alert-danger mt-4'>{message}</div>;
  //   } else if (!error && message) {
  //     return <div className='alert alert-success mt-4'>{message}</div>;
  //   } else {
  //     return null;
  //   }
  // };

  useEffect(() => {
    axios.get('/api/contactinfo').then((response) => {
      setPhoneNumbers(response.data.phoneNumbers);
      setEmailAddress(response.data.emailAddress);
      setgithubLink(response.data.githubLink);
      setLinkedinLink(response.data.linkedinLink);
    });
  }, []);

  return (
    <Layout>
      <div className='mi-contact-area mi-section mi-padding-top mi-padding-bottom'>
        <div className='container'>
          <Sectiontitle title='Contact Me' />
          <div className='row'>
            {/* <div className="col-lg-6">
              <div className="mi-contact-formwrapper">
                <h4>Get In Touch</h4>
                <form action="#" className="mi-form mi-contact-form" onSubmit={submitHandler}>
                  <div className="mi-form-field">
                    <label htmlFor="contact-form-name">Enter your name*</label>
                    <input onChange={handleChange} type="text" name="name" id="contact-form-name" value={formdata.name}/>
                  </div>
                  <div className="mi-form-field">
                    <label htmlFor="contact-form-email">Enter your email*</label>
                    <input onChange={handleChange} type="text" name="email" id="contact-form-email" value={formdata.email}/>
                  </div>
                  <div className="mi-form-field">
                    <label htmlFor="contact-form-subject">Enter your subject*</label>
                    <input onChange={handleChange} type="text" name="subject" id="contact-form-subject" value={formdata.subject}/>
                  </div>
                  <div className="mi-form-field">
                    <label htmlFor="contact-form-message">Enter your Message*</label>
                    <textarea onChange={handleChange} name="message" id="contact-form-message" cols="30" rows="6" value={formdata.message}></textarea>
                  </div>
                  <div className="mi-form-field">
                    <button className="mi-button" type="submit">Send Mail</button>
                  </div>
                </form>
                {handleAlerts()}
              </div>
            </div> */}
            <div className='col-lg-12'>
              <div className='mi-contact-info'>
                {!phoneNumbers ? null : (
                  <div className='mi-contact-infoblock'>
                    <span className='mi-contact-infoblock-icon'>
                      <Icon.Phone />
                    </span>
                    <div className='mi-contact-infoblock-content'>
                      <h6>Phone</h6>
                      {phoneNumbers.map((phoneNumber) => (
                        <a key={phoneNumber} href={numberFormatter(phoneNumber)}>
                          {phoneNumber}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
                <div className='mi-contact-infoblock'>
                  <span className='mi-contact-infoblock-icon'>
                    <Icon.PhoneCall />
                  </span>
                  <div className='mi-contact-infoblock-content'>
                    <div className='whatsapp-btn-wrapper' style={{ position: 'relative', top: '0px', width: '300px' }}>
                      <a
                        aria-label="Chat on WhatsApp"
                        href="https://wa.me/84393167157?text=Hello">
                        <img alt="Chat on WhatsApp"
                          src="/images/WhatsAppButtonGreenLarge.png" />
                      </a>
                    </div>
                  </div>
                </div>
                {!emailAddress ? null : (
                  <div className='mi-contact-infoblock'>
                    <span className='mi-contact-infoblock-icon'>
                      <Icon.Mail />
                    </span>
                    <div className='mi-contact-infoblock-content'>
                      <h6>Email</h6>
                      {emailAddress.map((email) => (
                        <a key={email} href={`mailto:${email}`}>{email}</a>
                      ))}
                    </div>
                  </div>
                )}
                <div className='mi-contact-infoblock'>
                  <span className='mi-contact-infoblock-icon'>
                    <Icon.Linkedin />
                  </span>
                  <div className='mi-contact-infoblock-content'>
                    <h6>Linkedin</h6>
                    <a
                      rel='noopener noreferrer'
                      href={linkedinLink}
                      target='_blank'
                    >
                      {linkedinLink}
                    </a>
                  </div>
                </div>
                <div className='mi-contact-infoblock'>
                  <span className='mi-contact-infoblock-icon'>
                    <Icon.GitHub />
                  </span>
                  <div className='mi-contact-infoblock-content'>
                    <h6>Github</h6>
                    <a
                      rel='noopener noreferrer'
                      href={githubLink}
                      target='_blank'
                    >
                      {githubLink}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
