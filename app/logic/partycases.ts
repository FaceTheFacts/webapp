
export function getPartyStyle(party: Party) {
    switch (party.id) {
        case 1:
            const spdStyle = "text-white bg-[#E95050]"
            return spdStyle;
        case 2:
            const cduStyle = "text-white bg-[#636363]"
            return cduStyle;
        case 3:
            const csuStyle = "text-white bg-[#0D6CB4] boder-[#F8F8F8]"
            return csuStyle;
        case 4:
            const fdpStyle = "text-[#333333] bg-[#636363]"
            return fdpStyle;
        case 5:
            const gruneStyle = "text-[#FFFFFF] bg-[#61A056]"
            return gruneStyle;
        case 6:
            const piratenStyle = "text-[#333333] bg-[#FFB430]"
            return piratenStyle;
        case 7:
            const fwStyle = "text-white bg-[#F8F8F8] border-[#FD820B]"
            return fwStyle;
        case 8:
            const linkeStyle = "text-white bg-[#CD3E72]"
            return linkeStyle;
        case 9:
            const afdStyle = "text-white bg-[#3AA6F4]"
            return afdStyle;
        case 10:
            const tierStyle = "text-white bg-[#2F5997]"
            return tierStyle;
        case 11:
            const familienStyle = "text-white bg-[#333333]"
            return familienStyle;
        case 12:
            const odpStyle = "text-white bg-[#FD820B]"
            return odpStyle;
        case 16:
            const parteiStyle = "text-white bg-[#722B2B]"
            return parteiStyle;
        case 19:
            const bayernStyle = "text-[#3AA6F4] bg-[#F8F8F8] border-[#3AA6F4]"
            return bayernStyle;
        case 21:
            const npdStyle = "text-white bg-[#9D420F]"
            return npdStyle;
        case 22:
            const repStyle = "text-white bg-[#2F5997]"
            return repStyle;
        case 145:
            const sswStyle = "text-white bg-[#013C8E] border-[#FDCC01]"
            return sswStyle;
        case 146:
            const stattStyle = "text-white bg-[#333333]"
            return stattStyle;
        case 204:
            const fraktionslosStyle = "text-black bg-[#F8F8F8]"
            return fraktionslosStyle;
    default:
        const defaultStyle = "text-white bg-[#333333]"
        return defaultStyle;
    }
}