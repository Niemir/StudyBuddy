import React from 'react';
import AddUser from './AddUser';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';
import Dashboard from './Dashboard';

describe('Input With Button', () => {
  it('Add the new person to the list', () => {
    renderWithProviders(
      <>
        <AddUser />
        <Dashboard />
      </>
    );

    //commented bevause of weird error - fix later

    fireEvent.change(screen.getByTestId('Name'), { target: { value: 'test' } });
    fireEvent.change(screen.getByTestId('Attendance'), { target: { value: '55%' } });
    fireEvent.change(screen.getByTestId('Average'), { target: { value: '0' } });
    fireEvent.click(screen.getByTestId('Consent'));
    fireEvent.click(screen.getByText('Add'));
    screen.getByText('test');
  });

  it('Prevents adding new user if the consent is not checked', () => {
    renderWithProviders(
      <>
        <AddUser />
        <Dashboard />
      </>
    );

    //commented bevause of weird error - fix later

    fireEvent.change(screen.getByTestId('Name'), { target: { value: 'test' } });
    fireEvent.change(screen.getByTestId('Attendance'), { target: { value: '55%' } });
    fireEvent.change(screen.getByTestId('Average'), { target: { value: '0' } });
    fireEvent.click(screen.getByText('Add'));
    const newUser = screen.queryByText('test');
    expect(newUser).toBeNull();
  });
});
