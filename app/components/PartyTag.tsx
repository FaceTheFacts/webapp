

type PartyTag = {
    party: Party,
    // party_style: PartyStyle;
};

export default function PartyTag({ party } : PartyTag) {
    return (
        <div >
            {party.party_style.display_name}
        </div>
    )
}