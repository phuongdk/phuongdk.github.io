import React, { useState } from 'react';
import * as Icon from 'react-feather';

function Resume(props) {
  const {
    year,
    position,
    graduation,
    university,
    company,
    companyLink,
    details,
    projects,
  } = props.resumeData;
  console.log('props', props);
  const [dropdownOpen, setDropdown] = useState(false);

  const toggleProjectInvolved = () => {
    setDropdown(!dropdownOpen);
  };

  return (
    <div className='mi-resume mt-30'>
      <div className='mi-resume-summary'>
        <h6 className='mi-resume-year'>{year}</h6>
      </div>
      <div className='mi-resume-details'>
        <h5>{position || graduation}</h5>
        <a
          className='mi-resume-company'
          href={companyLink || '#'}
          rel='noopener noreferrer'
          target='_blank'
        >
          {company || university}
        </a>
        <p>{details}</p>
        {Array.isArray(projects) && projects.length > 0 && (
          <div className='project-involve-wrapper'>
            <h5 className='title' onClick={toggleProjectInvolved}>
              <span>
                {dropdownOpen ? <Icon.MinusCircle /> : <Icon.PlusCircle />}
              </span>{' '}
              Projects involved
            </h5>
            <div
              className={`mi-resume-wrapper mi-resume-project-wrapper ${
                dropdownOpen ? 'show' : ''
              }`}
            >
              {projects.map((project, index) => (
                <div
                  key={index}
                  className='mi-resume-summary mi-resume-project'
                >
                  <div className='field name'>
                    <span>Project about:</span>
                    <span>{project.name}</span>
                  </div>
                  {project.description && (
                    <div className='field description'>
                      <span>Description:</span>
                      <span>{project.description}</span>
                    </div>
                  )}
                  <div className='field technology'>
                    <span>Technologies applied:</span>
                    <span>{project.technologies}</span>
                  </div>
                  <div className='field responsibility'>
                    <span>Responsibility:</span>
                    <span>{project.responsibility}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Resume;
