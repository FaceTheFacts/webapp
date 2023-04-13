import { getPartyStyle } from '@/app/utils/utils'

interface PartyTag {
    party: Party;
}

export default function PartyTag({ party }: PartyTag): JSX.Element {
    const partyTagStyle = getPartyStyle(party);
    const divShape = "rounded-lg max-w-fit mt-2.5";
    
    return (
      <div className={[partyTagStyle, divShape].join(" ")}>
        <div className="text-sm text-center font-semibold px-1.75 py-0.875" data-testid="party-tag">
          {party.party_style.display_name}
        </div>
      </div>
    );
}