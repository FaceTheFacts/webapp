import React from 'react';
import { render, screen } from '@testing-library/react';
import PoliticianPage from "@/app/profile/[id]/page";
import { fetchPolitician } from '../../../domain/politician';

jest.mock('../../../domain/politician', () => ({
  fetchPolitician: jest.fn(() => Promise.resolve({
    label: 'Test Politician',
    occupations: ['Politician'],
    party: {
      party_style: {
        display_name: 'Test Party'
      }
    }
  })),
}));

describe('PoliticianPage', () => {
  it('should render politician details', async () => {
    render(<PoliticianPage params={{ id: 123 }} />);

    // Wait for the fetchPolitician call to complete and the component to re-render
    await screen.findByText('Test Politician');

    expect(screen.getByText('Test Politician')).toBeInTheDocument();
    expect(screen.getByText('Politician')).toBeInTheDocument();
    expect(screen.getByTestId('party-tag')).toHaveTextContent('Test Party');
  });
});
