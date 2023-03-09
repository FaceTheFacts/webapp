import Link from "next/link";

interface Search {
    id: number;
    label: string;
  }

export default function SearchResults({ searchResults }: { searchResults: Search[] }) {
    if (searchResults.length === 0) {
        return <p>No results.</p>
    }

    const searchResultItems = searchResults.map((result) => (
        <li key={result.id}>
            <Link href={`profile/${result.id}`}>
                {result.label}
            </Link>
        </li>
    ));

    return <ul className='text-white'>{searchResultItems}</ul>;
}