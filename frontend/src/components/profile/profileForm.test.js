import React from 'react';
import { render, screen } from '@testing-library/react';
import ProfileForm from './profileForm';

test('ProfileForm renders correctly with a form', () => {
  render(<ProfileForm />);

  expect(screen.getByText('Profile')).toBeInTheDocument();
  expect(screen.getByRole('form')).toBeInTheDocument();
});
