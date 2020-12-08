import React from 'react';
import TrackVisibility from 'react-on-screen';
import Project from './Project';

function ProjectsView({ uProjects }) {
  return (
    <div className='row mt-30-reverse'>
      {uProjects.map((project) => (
        <TrackVisibility
          once
          offset={200}
          className='col-lg-4 col-md-6 col-12 mt-30'
          key={project.id}
        >
          <Project content={project} />
        </TrackVisibility>
      ))}
    </div>
  );
}

export default ProjectsView;
