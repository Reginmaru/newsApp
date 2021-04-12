import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DFA Github link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Digital Futures Academy/i);
  expect(linkElement).toBeInTheDocument();
});
