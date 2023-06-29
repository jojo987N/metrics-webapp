import './city.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function City({ item, i }) {
  return (

    <div className={i % 2 === 0 ? 'container-city dark1' : 'container-city dark'}>
      <h1 className="title">{item.city}</h1>
      <p className="persons">
        {parseFloat(item.populationCounts[0].value).toLocaleString()}
        {' '}
        people
      </p>
      <FontAwesomeIcon icon={faCircleArrowRight} className="faCircleArrowRight" />

    </div>

  );
}
