import Link from "next/link";

export interface Search {
    id: number;
    label: string;
  }

export default function SearchResults({ searchResults }: { searchResults: Search[] }) {
  
    return (
      <ul>
        {searchResults.map((result) => (
          <li key={result.id}><Link href={`profile/${result.id}`} className='text-white'>{result.label}</Link></li>
        ))}    
      </ul>
    )
}