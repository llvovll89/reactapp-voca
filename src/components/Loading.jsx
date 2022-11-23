import React from 'react';
import '../assets/css/Loading.css'

export const Loading = () => {
  return (
    <div className='loading-container'>
      <h1>Loading 중입니다..</h1>
      <span className="loadig">⚫</span>
    </div>
  );
};
