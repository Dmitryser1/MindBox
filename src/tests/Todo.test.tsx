import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

test('adds a new todo', () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/what needs to be done/i);
  fireEvent.change(input, { target: { value: 'Test task' } });
  fireEvent.submit(input);
  expect(screen.getByText('Test task')).toBeInTheDocument();
});
