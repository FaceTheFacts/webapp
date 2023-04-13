import PartyTag from '@/app/components/PartyTag';
import { getPartyStyle } from '@/app/utils/utils';
import { render } from '@testing-library/react';

describe('function getPartyStyle test', () => {
    it('returns the default party tag style for a party without a custom style', () => {
    const party: Party = {
      id: 0,
      label: 'Other Party',
      party_style: {
        id: 0,
        display_name: '',
        foreground_color: '',
        background_color: '',
        border_color: '',
      }
    };
    const partyTagStyle = getPartyStyle(party);
    expect(partyTagStyle).toBe('text-white bg-[#333333]');
});

describe('PartyTag', () => {
    it('renders the party tag with the correct style and display name', () => {
      const party: Party = {
        id: 1,
        label: 'SPD',
        party_style: {
          id: 1,
          display_name: 'SPD',
          foreground_color: '',
          background_color: '',
          border_color: '',
        }
      };
      const { getByTestId } = render(<PartyTag party={party} />);
      const partyTag = getByTestId('party-tag');
      expect(partyTag).toHaveTextContent('SPD');
      
      const style = getPartyStyle(party);
      expect(style).toBe('text-white bg-[#E95050]');
    });
}); 
});