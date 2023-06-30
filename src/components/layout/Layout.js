import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { getCountries } from '../../redux/countries/countriesSlice';
import './layout.css';

export default function Layout() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);
  return (
    <div className="panel-bg">
      <div className="container">
        <Outlet />
      </div>
    </div>

  );
}
