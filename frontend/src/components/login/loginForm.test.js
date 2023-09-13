import React from 'react';
import { render, screen } from '@testing-library/react';
import LoginForm from './loginForm';

test('LoginForm renders correctly with a form', () => {
  render(<LoginForm />);

  expect(screen.getByText('Login')).toBeInTheDocument();
  expect(screen.getByRole('form')).toBeInTheDocument();
});
