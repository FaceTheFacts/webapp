// Server component
import Image from 'next/image';
import { fetchPolitician } from '../../domain/politician';

//TO DO: Styling. Resolve use of input refs for the politicians #id

export default async function PoliticianPage() {
	// Static politiker id
	const  id  = 139064
	const politiker : Politiker = await fetchPolitician(id);
  
  return (
    <div className="flex flex-row">
		<Image
			src={`https://image.facethefacts-api.de/${politiker.id}.jpg`}
			width={100}
			height={100}
			alt={`Bild von ${politiker.label}`}
      	/>
        <h1>{politiker.label}</h1>
		<ul className="p-4 space-y-4 bg-slate-400">
			<li key={politiker.id}>
				<ul>
					{politiker.occupations.map((occupation) => (
					<li key={politiker.id}> {occupation} </li>
					))}
				</ul>
				<ul key={politiker.party.party_style.id}>{politiker.party.party_style.display_name}</ul>
			</li>
		</ul>
    </div>
  );
}