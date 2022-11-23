import React, { useState } from 'react';
import '../assets/css/Form.css';

export const Worditem = ({ word: wor }) => {
  const [word, setWord] = useState(wor);
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(word.isDone);

  const toggleBtn = () => {
    setIsShow(!isShow);
  };

  const toggleDone = () => {
    // setIsDone(!isDone);
    fetch(`http://localhost:3001/words/${word.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...word,
        isDone: !isDone,
      }),
    }).then((res) => {
      if (res.ok) {
        setIsDone(!isDone);
      }
    });
  };

  const delBtn = () => {
    if (window.confirm('정말 삭제 하시겠습니까~?')) {
      fetch(`http://localhost:3001/words/${word.id}`, {
        method: 'DELETE',
      }).then((res) => {
        if (res.ok) {
          setWord({ id: 0 });
        }
      });
    }
  };

  if (word.id === 0) {
    return null;
  }

  return (
    <>
      <div className={isDone ? 'off' : 'list'}>
        <input type="checkbox" checked={word.isDone} onChange={toggleDone} />
        <p className='eng'>{word.eng}</p>
        <p className='kor'>{isShow && word.kor}</p>
        <div className="btnbox">
          <button className='btn' onClick={toggleBtn}>{isShow ? '숨기기' : '뜻보기'}</button>
          <button className='btn delBtn' onClick={delBtn}>삭제하기</button>
        </div>
      </div>
    </>
  );
};
