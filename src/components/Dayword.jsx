import '../assets/css/Day.css';
import { useParams } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { Worditem } from './Worditem';
import { useFetch } from '../hooks/useFetch';

export const Dayword = () => {
  const { day } = useParams();
  const words = useFetch(`http://localhost:3001/words?day=${day}`);

  return (
    <>
      <div className="content">
        <h2 className="title">day {day}</h2>
        {words.map((word) => (
          <Worditem word={word} key={uuid()} />
        ))}
      </div>
    </>
  );
};
