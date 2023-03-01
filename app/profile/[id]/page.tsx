// Server component
import { fetchPolitician } from '../../../domain/politician';
import ProfileImage from '@/app/components/ProfileImage';
import PartyTag from '@/app/components/PartyTag';

//TO DO: Styling. Resolve use of input refs for the politicians #id

export default async function PoliticianPage({ params } : { params: { id: number } }) {
	const  id  = params.id
	const politician : Politician = await fetchPolitician(id);

  return (
    <div className="flex flex-row">
		<ProfileImage id={id} />
        <h1 className='text-xl text-white font-semibold'>{politician.label}</h1>
		<ul className="p-4 space-y-4 bg-slate-400">
			<li>
				<ul>
					{politician.occupations.map((occupation, index) => (
					<li key={index}> {occupation} </li>
					))}
				</ul>
				<PartyTag party={politician.party}/>
				
			</li>
		</ul>
    </div>
  );
}