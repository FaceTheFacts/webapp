const POLITICIAN_API_BASE_URL = process.env.POLITICIAN_API_BASE_URL || 'http://127.0.0.1:8000/v1/politician';

export async function fetchPolitician(id: number): Promise<any> {
  const url = `${POLITICIAN_API_BASE_URL}/${id}`;

  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Failed to fetch politician data: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
	if (error instanceof Error) {
    	throw new Error(`Failed to fetch politician data: ${error.message}`);
	} else {
		console.log('Unexpected error', error);
	}
  }
}