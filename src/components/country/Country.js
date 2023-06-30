import './country.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import noFlag from '../../img/no-flag1.png';

export default function Country({ item, n, i }) {
  const [loaded, setLoaded] = useState(false);
  const {
    name, population,
  } = item;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/details', {
      state: {
        country: item.name,
        population: population.toLocaleString(),
        item,
      },
    });
  };
  return (
    <button id={item.cca2} type="button" className={(i % 2 === 0 && n % 2 !== 0 && 'dark') || (i % 2 !== 0 && n % 2 === 0 && 'dark') || ''} onClick={handleClick}>

      <div className="container-1">
        <div className="icon-right margin">
          <FontAwesomeIcon icon={faCircleArrowRight} className="faCircleArrowRight" />
        </div>
        <div className="flag">
          <span>{loaded ? '' : 'Loading...'}</span>
          <img src={item.cca2 === 'XK' || item.cca2 === 'SJ' ? noFlag : `https://flagsapi.com/${item.cca2}/flat/64.png`} alt="flag" onLoad={() => setLoaded(true)} />
        </div>

        <h1 className="title ">{name ? name.official.toUpperCase().split(' ').slice(0, 4).join(' ') : ''}</h1>
        <p className="population margin">{population.toLocaleString()}</p>

      </div>

    </button>
  );
}
