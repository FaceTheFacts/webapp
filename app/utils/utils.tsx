export interface PartyStyle {
    name: string;
    style: string;
}
  
const partyStyles: Record<number, PartyStyle> = {
    1: { name: "SPD", style: "text-white bg-[#E95050]" },
    2: { name: "CDU", style: "text-white bg-[#636363]" },
    3: { name: "CSU", style: "text-white bg-[#0D6CB4] border-[#F8F8F8]" },
    4: { name: "FDP", style: "text-[#333333] bg-[#636363]" },
    5: { name: "GRUNE", style: "text-[#FFFFFF] bg-[#61A056]" },
    6: { name: "PIRATEN", style: "text-[#333333] bg-[#FFB430]" },
    7: { name: "FW", style: "text-[#2F5997] bg-[#F8F8F8] border-[#FD820B]" },
    8: { name: "LINKE", style: "text-white bg-[#CD3E72]" },
    9: { name: "AFD", style: "text-white bg-[#3AA6F4]" },
    10: { name: "TIER", style: "text-white bg-[#2F5997]" },
    11: { name: "FAMILIEN", style: "text-white bg-[#333333]" },
    12: { name: "ODP", style: "text-white bg-[#FD820B]" },
    16: { name: "PARTEI", style: "text-white bg-[#722B2B]" },
    19: { name: "BAYERN", style: "text-[#3AA6F4] bg-[#F8F8F8] border-[#3AA6F4]" },
    21: { name: "NPD", style: "text-white bg-[#9D420F]" },
    22: { name: "REP", style: "text-white bg-[#2F5997]" },
    145: { name: "SSW", style: "text-white bg-[#013C8E] border-[#FDCC01]" },
    146: { name: "STATT", style: "text-white bg-[#333333]" },
    204: { name: "FRAKTIONSLOSS", style: "text-black bg-[#F8F8F8]" },
  };
  
export function getPartyStyle(party: Party) {
    const partyStyle = partyStyles[party.id];

    if (partyStyle) {
      return partyStyle.style;
    }
    
    const defaultStyle = "text-white bg-[#333333]";
    return defaultStyle;
}