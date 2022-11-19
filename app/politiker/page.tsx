// Server component
import "tailwindcss/tailwind.css";
import Image from 'next/image';

//v1/politician/{id}
//TO DO: resolve $dynamic ID fetching

async function getPolitician() {
  try {
	  //Robert Habeck ID
	  const res = await fetch("http://127.0.0.1:8000/v1/politician/139064");
	  
	  //FAST api 
	  //const res = await fetch("http://127.0.0.1:8000/v1/politician/139064?votes_start=0&votes_end=6");
	  
	//   const res = await fetch(`http://127.0.0.1:8000/v1/politician/${id}`);
		const data = await res.json();
    return data;
  } catch (error) {
	console.error(error)
  }
}

export default async function PoliticianPage() {
  const politiker : Politiker = await getPolitician();
  return (
    <div className="flex flex-row">
		<Image
			src="https://image.facethefacts-api.de/139064.jpg"
			// src="https://image.facethefacts-api.de/${}.jpg"
			width={100}
			height={100}
			alt="Politikers Bild"
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