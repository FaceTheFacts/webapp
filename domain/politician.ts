export async function fetchPolitician(id: number) {
  try {
	  //Robert Habeck ID
	//   const res = await fetch("http://127.0.0.1:8000/v1/politician/139064");
	  
	  //FAST api 
	  //const res = await fetch("http://127.0.0.1:8000/v1/politician/139064?votes_start=0&votes_end=6");
	  
	  const res = await fetch(`http://127.0.0.1:8000/v1/politician/${id}`);
	  const data = await res.json();
    return data;
  } catch (error) {
	console.error(error)
  }
}