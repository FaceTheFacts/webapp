import { getPartyStyle } from '@/app/logic/partycases'

export default function PartyTag({ party } : PartyTag) {
    const partyTagStyle = getPartyStyle(party)
    const divShape = "rounded-lg max-w-fit mt-2.5"
    return (
        <div className={[partyTagStyle, divShape].join(" ")}>
            <div className="text-sm text-center font-semibold px-1.75 py-0.875">{party.party_style.display_name}</div>
        </div>
    )
}