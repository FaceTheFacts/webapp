// Server component
import Image from "next/image";
import { fetchPolitician } from "../../../domain/politician";
import ProfileImage from "@/app/components/ProfileImage";
//TO DO: Styling. Resolve use of input refs for the politicians #id

export default async function PoliticianPage({
  params,
}: {
  params: { id: number };
}) {
  const { id } = params;
  const politician: Politician = await fetchPolitician(id);

  // ToDO:Create image component. Check for img status, when E403 return placeholder image.
  return (
    <div className="flex flex-row">
      {/* <Image
			src={`https://image.facethefacts-api.de/${politician.id}.jpg`}
			width={100}
			height={100}
			alt={`Bild von ${politician.label}`}
      	/> */}
      <ProfileImage />
      <h1>{politician.label}</h1>
      <ul className="p-4 space-y-4 bg-slate-400">
        <li>
          <ul>
            {politician.occupations.map((occupation, index) => (
              <li key={index}> {occupation} </li>
            ))}
          </ul>
          <ul>{politician.party.party_style.display_name}</ul>
        </li>
      </ul>
    </div>
  );
}
