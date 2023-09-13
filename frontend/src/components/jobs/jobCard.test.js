import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import JobCard from './jobCard';

test('JobCard renders correctly with job details', () => {
  const job = {
    title: 'Software Engineer',
    salary: '100,000',
    equity: 0.01,
    companyName: 'Tech Co.',
  };

  render(<JobCard {...job} />);

  expect(screen.getByText('Software Engineer')).toBeInTheDocument();
  expect(screen.getByText('Tech Co.')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Apply' })).toBeInTheDocument();
});

test('Clicking "Apply" button changes its state', () => {
  const job = {
    title: 'Software Engineer',
    salary: '100,000',
    equity: 0.01,
    companyName: 'Tech Co.',
  };

  render(<JobCard {...job} />);

  const applyButton = screen.getByRole('button', { name: 'Apply' });

  fireEvent.click(applyButton);

  expect(applyButton).toBeDisabled();
});
