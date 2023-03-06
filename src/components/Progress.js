import React from 'react';
import Lib from 'react-slick/lib';

function Progress(props) {
  const winWidth = window.innerWidth;
  const progressQuery = () => {
    if (winWidth && winWidth > 767) {
      return (
        <React.Fragment>
          <span
            className='mi-progress-active'
            style={
              props.isVisible ? { width: `${props.percentage}%` } : { width: 0 }
            }
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
        </React.Fragment>
      );
    }
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
