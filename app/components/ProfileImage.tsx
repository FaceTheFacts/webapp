// Server component
import Image from "next/image";

type Props = {
    id : number
}

export default function ProfileImage({id} : Props) {
    
    return (
        <Image
            src={`https://image.facethefacts-api.de/${id}.jpg`}
            width={100}
            height={100}
            alt={"ProfilBild"}
        />
    )
}