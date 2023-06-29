import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from '../header/Header';
import List from '../list/List';
import { reset } from '../../redux/cities/citiesSlice';

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);
  return (
    <>
      <Header />
      <section>
        <List />
      </section>
      <div className="horizontal-divider" />

    </>
  );
}
