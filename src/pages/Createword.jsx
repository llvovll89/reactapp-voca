import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import '../assets/css/Create.css';
import { useFetch } from '../hooks/useFetch';

export const Createword = () => {
  const days = useFetch('http://localhost:3001/days');
  const history = useNavigate();


  const engVal = useRef(null);
  const korVal = useRef(null);
  const dayVal = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();

    fetch('http://localhost:3001/words/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        day: dayVal.current.value,
        eng: engVal.current.value,
        kor: korVal.current.value,
        isDone: false,
      }),
    }).then((res) => {
      if (res.ok) {
        alert(`${engVal.current.value.toUpperCase()}가 저장 되었습니다!`);
        history(`/word/${dayVal.current.value}`)
      }
    });
  };

  return (
    <>
      <form id="createForm" onSubmit={submitHandler}>
        <div className="add-title">
          <h1>
            새 <span className="sub-add">단어</span>
          </h1>
        </div>
        <div className="input-area input-eng">
          <label>English</label>
          <input type="text" placeholder="영단어 입력.." ref={engVal} pattern="[A-Za-z]+"/>
        </div>
        <div className="input-area input-kor">
          <label>한국어</label>
          <input type="text" placeholder="단어뜻 입력.." ref={korVal} />
        </div>
        <div className="input-area">
          <label>DAY(추가)</label>
          <select ref={dayVal}>
            {days.map((day) => (
              <option key={uuid()} value={day.day}>
                {day.day}
              </option>
            ))}
          </select>
        </div>
        <button className="submit-btn">저장하기</button>
      </form>
    </>
  );
};
