import { render } from '@testing-library/react';
import PartyTag, { Party } from '@/app/components/PartyTag';
import { getPartyStyle } from '@/app/logic/partycases';

describe('PartyTag', () => {
    it('renders the party tag with the correct style and display name', () => {
      const party: Party = {
        id: '1',
        label: 'Test Party',
        party_style: {
          display_name: 'Test Party Style'
        }
      };
      const { getByTestId } = render(<PartyTag party={party} />);
      const partyTag = getByTestId('party-tag');
      expect(partyTag).toHaveTextContent('Test Party Style');
    });
    
  it('returns the default party tag style for a party without a custom style', () => {
    const party: Party = {
      id: '2',
      label: 'Other Party',
      party_style: ''
    };
    const partyTagStyle = getPartyStyle(party);
    expect(partyTagStyle).toBe('text-white bg-[#333333]');
  });
});