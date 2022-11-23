import React from 'react';
import { Link } from 'react-router-dom';

export const Emptypage = () => {
  return (
    <div>
      <h1>주소를 잘못 입력 하였습니다,,,</h1>
      <Link to="/">돌아가기</Link>
    </div>
  );
};
