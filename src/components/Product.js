import React from 'react';

function Product(props) {
  const {
    featuredImage,
    title,
    createMonth,
    createYear,
    link,
    link2 = null,
    link3 = null,
    download,
  } = props.data;

  const getShortMonth = (month) => {
    return month.slice(0, 3);
  };

  return (
    <div className='mi-blog'>
      <div className='mi-blog-image'>
        <a
          download={download}
          href={link}
          rel='noopener noreferrer'
          target='_blank'
        >
          <img src={featuredImage} alt={title} />
        </a>
        <div className='mi-blog-date'>
          <span className='month'>{getShortMonth(createMonth)}</span>
          <span className='year'>{createYear}</span>
        </div>
      </div>
      <div className='mi-blog-content'>
        <h5>
          <a
            download={download}
            href={link}
            rel='noopener noreferrer'
            target='_blank'
          >
            {title}
          </a>
        </h5>
        {link2 && (
          <div style={{ marginBottom: '5px' }}>
            <a href={link2.link} rel='noopener noreferrer' target='_blank'>
              {link2.name}
            </a>
          </div>
        )}

        {link3 && (
          <div style={{ marginBottom: '5px' }}>
            <a href={link3.link} rel='noopener noreferrer' target='_blank'>
              {link3.name}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Product;
