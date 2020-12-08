import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sectiontitle from '../components/Sectiontitle';
import Layout from '../components/Layout';
import ProductsView from '../components/ProductsView';
import Pagination from '../components/Pagination';

function HandsOnProjects() {
  const [petProjects, setPetProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage] = useState(6);

  useEffect(() => {
    let mounted = true;
    axios.get('/api/petProjects').then((response) => {
      if (mounted) {
        setPetProjects(response.data);
      }
    });
    return () => (mounted = false);
  }, [petProjects]);

  const indexOfLast = currentPage * projectsPerPage;
  const indexOfFirst = indexOfLast - projectsPerPage;
  const current = petProjects.slice(indexOfFirst, indexOfLast);

  const paginate = (e, pageNumber) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

  return (
    <Layout>
      <div className='mi-about mi-section mi-padding-top mi-padding-bottom'>
        <div className='container'>
          <Sectiontitle title='Hands-on Projects' />
          <ProductsView blogs={current} />
          {!(petProjects.length > projectsPerPage) ? null : (
            <Pagination
              className='mt-50'
              itemsPerPage={projectsPerPage}
              totalItems={petProjects.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          )}
        </div>
      </div>
    </Layout>
  );
}

export default HandsOnProjects;
