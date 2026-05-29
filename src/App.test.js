import { render, screen } from '@testing-library/react';
import App from './App';

window.HTMLElement.prototype.scrollIntoView = jest.fn();

test('renders portfolio hero', () => {
  render(<App />);
  expect(
    screen.getAllByRole('heading', { name: /gandham sai balaji/i }).length
  ).toBeGreaterThan(0);
  expect(screen.getByRole('link', { name: /view projects/i })).toBeInTheDocument();
});
