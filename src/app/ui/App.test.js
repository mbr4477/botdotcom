import { render, screen } from '@testing-library/react';
import App from './App';

test('renders upload JSON button', () =>  {
  render(<App />);
  const uploadButton = screen.getByText(/upload sms/i);
  expect(uploadButton).toBeInTheDocument();
})

test('renders disclaimer label', () => {
  render(<App />);
  const disclaimerLabel = screen.getByText(/don't worry, we don't upload it anywhere/)
  expect(disclaimerLabel).toBeInTheDocument();
})
