import React from 'react';
import { render, screen } from '@testing-library/react';
import SignupForm from './signupForm';
import { BrowserRouter } from 'react-router-dom';

test('SignupForm renders correctly with a form', () => {
  render(
    <BrowserRouter>
      <SignupForm />
    </BrowserRouter>
  );

  expect(screen.getByText('Sign Up')).toBeInTheDocument();
  expect(screen.getByRole('form')).toBeInTheDocument();
});
