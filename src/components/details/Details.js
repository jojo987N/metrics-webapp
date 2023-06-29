import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../header/Header';
// import { getCities } from '../../redux/cities/citiesSlice';
import ListCities from '../list/listCities/ListCities';
import { getCities } from '../../redux/cities/citiesSlice';

export default function Details() {
  const dispatch = useDispatch();
  const location = useLocation();
  const country = location.state.country.common.toLowerCase();
  const { population, item } = location.state;
  useEffect(() => {
    dispatch(getCities(country));
  }, [dispatch, country]);
  return (

    <>
      <Header country={country} population={population} item={item} />
      <ListCities />
    </>

  );
}
