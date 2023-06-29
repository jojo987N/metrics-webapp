import { useSelector } from 'react-redux';
import Country from '../country/Country';
import './list.css';

export default function List() {
  const { data, isLoading, error } = useSelector((state) => state.countries);
  let n = 0;
  if (error) { return <div>{error.message}</div>; }
  return (
    isLoading ? <div className="loading">Loading ...</div> : (
      <div className="container-list">
        {data.filter((item) => item.cca2 !== 'GB' && item.cca2 !== 'RU').map((item, i) => {
          if (i % 2 === 0 && i !== 0) { n += 1; }
          return <Country key={item.cca2} item={item} n={n} i={i} />;
        })}
      </div>
    )
  );
}
