import React from 'react';

function Product(props) {
  const {
    featuredImage,
    title,
    createMonth,
    createYear,
    link,
    linkReference,
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
        {
          createMonth && createYear && (
            <div className='mi-blog-date'>
              <span className='month'>{getShortMonth(createMonth)}</span>
              <span className='year'>{createYear}</span>
            </div>
          )
        }
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
      </div>
      {
        Array.isArray(linkReference) && linkReference.length > 0 && (
          <div className='mi-link-reference-wrapper'>
            {
              linkReference.map(item => (
                <div style={{ marginBottom: '5px' }}>
                  <a href={item.link} rel='noopener noreferrer' target='_blank'>
                    {item.name}
                  </a>
                </div>
              ))
            }
          </div>
        )
      }
    </div>
  );
}

export default Product;
