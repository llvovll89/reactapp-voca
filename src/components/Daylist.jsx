import { v4 as uuid } from 'uuid';
import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import '../assets/css/Day.css';
import { Loading } from './Loading';

export const Daylist = () => {
  const days = useFetch('http://localhost:3001/days');

  if(days.length === 0) {
    return <Loading />
  }

  return (
    <ul className="day-list">
      {days.map((day) => (
        <Link key={uuid()} to={`/word/${day.day}`}>
          <li className="day">
            Day <span className="day-item">{day.day}</span>
          </li>
        </Link>
      ))}
    </ul>
  );
};
