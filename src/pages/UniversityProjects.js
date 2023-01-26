import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sectiontitle from '../components/Sectiontitle';
import Layout from '../components/Layout';
import Pagination from '../components/Pagination';
import ProjectsView from '../components/ProjectsView';

function UniversityProjects() {
  const [uProjects, setUProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [uProjectsPerPage] = useState(9);

  useEffect(() => {
    let mounted = true;
    axios.get('/api/uProjects').then((response) => {
      console.log('response', response)
      if (mounted) {
        setUProjects(response.data);
      }
    });
    return () => (mounted = false);
  }, []);

  const indexOfLastUProjects = currentPage * uProjectsPerPage;
  const indexOfFirstUProjects = indexOfLastUProjects - uProjectsPerPage;
  const currentUProjects = uProjects.slice(
    indexOfFirstUProjects,
    indexOfLastUProjects,
  );

  const paginate = (e, pageNumber) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

  return (
    <Layout>
      <div className='mi-about mi-section mi-padding-top mi-padding-bottom'>
        <div className='container'>
          <Sectiontitle title='University Projects' />
          {<ProjectsView uProjects={currentUProjects} />}
          {!(uProjects.length > uProjectsPerPage) ? null : (
            <Pagination
              className='mt-50'
              itemsPerPage={uProjectsPerPage}
              totalItems={uProjects.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          )}
        </div>
      </div>
    </Layout>
  );
}

export default UniversityProjects;
