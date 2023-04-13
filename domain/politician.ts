const POLITICIAN_API_BASE_URL = process.env.NEXT_PUBLIC_POLITICIAN_API_BASE_URL;

export async function fetchPolitician(id: number): Promise<Politician> {
  const url = `${POLITICIAN_API_BASE_URL}/${id}`;

  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(
        `Failed to fetch politician data: ${res.status} ${res.statusText}`
      );
    }

    const data = await res.json();
    return data as Politician;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to fetch politician data: ${error.message}`);
    } else {
      console.log("Unexpected error", error);
    }
  }

  return {} as Politician;
}
