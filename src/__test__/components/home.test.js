import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../__mock__/storeMock';
import Home from '../../components/home/Home';

it('renders correctly', () => {
  const tree = render(
    <Provider store={store}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
