import PlaceholderPic from "./PlaceholderPic";

export default function ProfileImage({id} : {id: number}) {

    return (
        <PlaceholderPic
            src={`https://image.facethefacts-api.de/${id}.jpg`}
            width={146}
            height={146}
            alt={"Profilbild"}
        />
    );
}