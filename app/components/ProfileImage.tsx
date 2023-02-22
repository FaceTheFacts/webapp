// Server component

import Image from "next/image";
import { fetchPolitician } from "../../domain/politician";


export default function ProfileImage(id : any) {
	// const politician : Politician =  fetchPolitician(id);
    const politician : Politician = id
    
    return (
        <Image
            src={`https://image.facethefacts-api.de/${politician.id}.jpg`}
            width={100}
            height={100}
            alt={`Bild von ${politician.label}`}
        />
    )
}