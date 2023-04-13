import { getPartyStyle, PartyStyle } from "@/app/utils/utils";

describe('getPartyStyle function', () => {
    it('returns the correct style for a known party id', () => {
      const party : Party = { 
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
      const style = getPartyStyle(party);
      expect(style).toBe('text-white bg-[#E95050]');
    });
  
    it('returns the default style for an unknown party id', () => {
      const party : Party = { 
        id: 123, 
        label: 'Unknown party', 
        party_style: {
            id: 123,
            display_name: 'Test',
            foreground_color: '',
            background_color: '',
            border_color: '',
        }
     };
      const style = getPartyStyle(party);
      expect(style).toBe('text-white bg-[#333333]');
    });
  });