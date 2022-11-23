import React from "react";
import { useNavigate } from "react-router-dom";
import '../assets/css/Create.css'
import { useFetch } from "../hooks/useFetch";

export const CreateDay = () => {
    const days = useFetch('http://localhost:3001/days');
    const history = useNavigate();
    const addDayBtn = () => { 
    fetch('http://localhost:3001/days/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          day: days.length + 1
        }),
      }).then((res) => {
        if (res.ok) {
          alert(`${days.length +1}일 생성 완료!`);
          history('/')
        }
      });
    }
    
    return (
        <div className="day-container">
            <p>현재 일 수 : {days.length}일</p>
            <button className="submit-btn" onClick={addDayBtn}>Day 추가</button>
        </div>
    )
}