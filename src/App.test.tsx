import React from 'react';
import { render, screen } from '@testing-library/react';
import './matchMedia';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    const appElement = screen.getByText(/User List Page/i);
    expect(appElement).toBeInTheDocument();
  });

});
