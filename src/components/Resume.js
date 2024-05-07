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
        <p dangerouslySetInnerHTML={{ __html: details }}></p>
        {Array.isArray(projects) && projects.length > 0 && (
          <div className='project-involve-wrapper'>
            <h5 className='title' onClick={toggleProjectInvolved}>
              <span>
                {dropdownOpen ? <Icon.MinusCircle /> : <Icon.PlusCircle />}
              </span>{' '}
              Projects involved
            </h5>
            <div
              className={`mi-resume-wrapper mi-resume-project-wrapper ${dropdownOpen ? 'show' : ''
                }`}
            >
              {projects.map((project, index) => (
                <div
                  key={index}
                  className='mi-resume-summary mi-resume-project'
                >
                  <div className='field customer'>
                    <div>Client:</div>
                    <div>{project.client}</div>
                  </div>
                  <div className='field name'>
                    <div>Project about:</div>
                    <div>{project.name}</div>
                  </div>
                  <div className='field teamSize'>
                    <div>Team Size:</div>
                    <div>{project.teamSize}</div>
                  </div>
                  <div className='field domain'>
                    <div>Domain:</div>
                    <div>{project.domain}</div>
                  </div>
                  {project.description && (
                    <div className='field description'>
                      <div>Description:</div>
                      <div>{project.description}</div>
                    </div>
                  )}
                  {project.architecture && (
                    <div className='field architecture'>
                      <div>Architecture:</div>
                      <div>{project.architecture}</div>
                    </div>
                  )}
                  <div className='field technology'>
                    <div>Technologies:</div>
                    <div>{project.technologies}</div>
                  </div>
                  <div className='field responsibility'>
                    <div>Responsibilities:</div>
                    <div
                      dangerouslySetInnerHTML={{ __html: project.responsibilities }}
                    />
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
