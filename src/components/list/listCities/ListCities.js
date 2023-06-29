import { useSelector } from 'react-redux';
import './listCities.css';
import City from '../../city/City';

export default function ListCities() {
  const { data1, isLoading, error } = useSelector((state) => state.cities);
  if (isLoading) return <div className="loading">Loading ...</div>;
  if (error) { return <div className="error">API doesn&apos;t provide data for this country</div>; }
  return (
    <div className="container">
      {data1.map((item, i) => <City key={item.city} item={item} i={i} />)}
    </div>
  );
}
