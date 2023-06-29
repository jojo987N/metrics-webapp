import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../__mock__/storeMock';
import ListCities from '../../components/list/listCities/ListCities';

it('renders correctly', () => {
  const tree = render(
    <Provider store={store}>
      <ListCities />
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
