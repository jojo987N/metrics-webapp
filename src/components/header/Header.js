import { faChevronLeft, faCog, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './header.css';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import mapEurope from '../../img/map-europe.png';
import noFlag from '../../img/no-flag1.png';

export default function Header({ country, population, item }) {
  const { data } = useSelector((state) => state.countries);
  const location = useLocation();
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      <div className="header-1">
        <div className="header-1-first">
          <Link to={item ? `/#${item.cca2}` : ''}><FontAwesomeIcon icon={faChevronLeft} className="faCircleArrowRight" /></Link>
          <span className="year">{location.pathname === '/' ? '2015' : ''}</span>
        </div>
        <span className="title">
          {location.pathname === '/' ? 'most ' : 'town/city '}
          people
        </span>
        <div className="header-1-last">
          <FontAwesomeIcon icon={faMicrophone} className="faCircleArrowRight" />
          <FontAwesomeIcon icon={faCog} className="faCircleArrowRight" />
        </div>
      </div>
      <div className="header-2">
        {location.pathname === '/' ? (
          <div style={{
            background: `url(${mapEurope})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPositionX: '120%',
          }}
          />
        )
          : (
            <div className="flag">
              <span>{loaded ? '' : 'Loading...'}</span>
              <img src={item.cca2 === 'XK' || item.cca2 === 'SJ' ? noFlag : `https://flagsapi.com/${item.cca2}/flat/64.png`} alt="flag" onLoad={() => setLoaded(true)} />
            </div>
          )}
        <div>
          <h1>{location.pathname === '/' ? 'EUROPE' : country.toUpperCase()}</h1>
          <span>
            {location.pathname === '/'
              ? `${data.reduce((a, v) => a + v.population, 0).toLocaleString()} people`
              : population }
          </span>
        </div>
      </div>
      <div className="title-1">{location.pathname === '/' ? 'STATS BY COUNTRY' : 'CITY/TOWN BREAKDOWN - 2015'}</div>
    </>
  );
}
