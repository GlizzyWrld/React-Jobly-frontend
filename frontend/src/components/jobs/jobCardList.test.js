import React from 'react';
import { render, screen } from '@testing-library/react';
import JobCardList from './jobCardList';

test('JobCardList renders correctly with job cards', () => {
  const jobs = [
    {
      id: 1,
      title: 'Software Engineer',
      salary: '100,000',
      equity: 0.01,
      companyName: 'Tech Co. A',
    },
    {
      id: 2,
      title: 'Web Developer',
      salary: '90,000',
      equity: 0.0,
      companyName: 'Tech Co. B',
    },
  ];

  render(<JobCardList jobs={jobs} />);

  expect(screen.getByText('Software Engineer')).toBeInTheDocument();
  expect(screen.getByText('Web Developer')).toBeInTheDocument();
  expect(screen.getByText('Tech Co. A')).toBeInTheDocument();
  expect(screen.getByText('Tech Co. B')).toBeInTheDocument();

  // Ensure that both job cards are rendered
  expect(screen.getAllByRole('button', { name: 'Apply' })).toHaveLength(2);
});
