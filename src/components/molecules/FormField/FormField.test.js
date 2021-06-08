import React from 'react';
import FormField from './FormField';
import { render, screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';

describe('Input With Button', () => {
  it('Renders the component', () => {
    renderWithProviders(<FormField label="name" id="name" name="name" />);
  });
});
