import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import Homepage from "./homepage";

test('Homepage renders correctly', () => {
    render(
      <BrowserRouter>
        <Homepage />
      </BrowserRouter>
    );
  
    expect(screen.getByText('Jobly')).toBeInTheDocument();
    expect(screen.getByText('All the jobs in one, convenient place!')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Login' })).toHaveAttribute('href', '/login');
    expect(screen.getByRole('link', { name: 'Signup' })).toHaveAttribute('href', '/auth/signup');
  });