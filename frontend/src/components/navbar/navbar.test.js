import React from 'react';
import { render, screen } from '@testing-library/react';
import NavBar from './navbar';
import { BrowserRouter } from 'react-router-dom';

test('NavBar renders correctly with a navbar', () => {
  render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );

  expect(screen.getByText('Jobly')).toBeInTheDocument();
  expect(screen.getByRole('navigation')).toBeInTheDocument();
});
