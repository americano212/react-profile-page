import { render, screen } from '@testing-library/react';
import FullPageLanding from './App';

test('renders learn react link', () => {
  render(<FullPageLanding />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
