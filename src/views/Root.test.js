import React from 'react';
import { render, screen, fireEvent, waitFor } from 'test-utils';

import Root from './Root';

describe('Root Component', () => {
  it('Renders the root component as unauthenticated user', () => {
    render(<Root />);

    screen.getByLabelText('login');
  });

  it('Display error message when wrong credentials are passed', async () => {
    render(<Root />);

    const login = screen.getByLabelText('login');
    const password = screen.getByLabelText('password');

    fireEvent.change(login, { target: { value: 'Low' } });
    fireEvent.change(password, { target: { value: 'Low' } });
    fireEvent.click(screen.getByText('Sign in'));

    await waitFor(() => screen.getByText(/Oops/));
  });

  it('Display authenticated application', async () => {
    render(<Root />);

    const login = screen.getByLabelText('login');
    const password = screen.getByLabelText('password');

    fireEvent.change(login, { target: { value: 'test' } });
    fireEvent.change(password, { target: { value: 'test1234' } });
    fireEvent.click(screen.getByText('Sign in'));

    await waitFor(() => screen.getByText(/Lowell/));
  });
});
