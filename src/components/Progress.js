import React from 'react';

function Progress(props) {
  const progressQuery = () => {

    return (
      <React.Fragment>
        <span
          className='mi-progress-active'
          style={{ width: `${props.percentage}%` }}
        ></span>
        <span
          className='mi-progress-line-divider d1'></span>
        <span
          className='mi-progress-line-divider d2'></span>
        <span
          className='mi-progress-line-divider d3'></span>
        <span
          className='mi-progress-line-divider d4'></span>
        <span
          className='mi-progress-line-divider d5'></span>
        <span
          className='mi-progress-line-divider d6'></span>
        <span
          className='mi-progress-line-divider d7'></span>
        <span
          className='mi-progress-line-divider d8'></span>
      </React.Fragment>
    );
  };
  return (
    <div className='mi-progress'>
      <h6 className='mi-progress-title'>{props.title}</h6>
      {
        props.level && props.percentage && (
          <div className='mi-progress-inner'>
            <div className='mi-progress-percentage'>{props.level}</div>
            <div className='mi-progress-container'>{progressQuery()}</div>
          </div>
        )
      }
      {
        props.additionalInfo && (
          <div className={`additional-info`}>
            Familiar with the following:
            <div
              dangerouslySetInnerHTML={{ __html: props.additionalInfo }}
            />
          </div>
        )
      }
    </div>
  );
}

export default Progress;
