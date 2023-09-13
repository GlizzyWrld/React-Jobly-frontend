import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Router from './router';

test('Router renders correctly with routes', () => {
  render(
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );

  expect(screen.getByText('Jobly')).toBeInTheDocument();
  expect(screen.getByText('All the jobs in one, convenient place!')).toBeInTheDocument();

 
});
