import Link from "next/link";

type Props = {
    results: Search[],
};

export default function SearchResults({results}: Props) {
    return (
        <ul>
        {results.map((result) => (
            <li key={result.id}><Link href={`profile/${result.id}`}>{result.label}</Link></li>
        ))}    
        </ul>
    )
}