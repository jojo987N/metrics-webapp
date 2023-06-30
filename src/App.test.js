import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders Europe title', () => {
  render(
    <App />,
  );
  const linkElement = screen.getByText(/EUROPE/i);
  expect(linkElement).toBeInTheDocument();
});
