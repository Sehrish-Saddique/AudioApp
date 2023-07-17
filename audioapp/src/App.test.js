import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app title element', () => {
  render(<App />);
  const linkElement = screen.getByText(/React Posts Sharer/i);
  expect(linkElement).toBeInTheDocument();
});
