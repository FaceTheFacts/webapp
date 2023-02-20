type Props = {
    results: Search[],
};

export default function SearchResults({results}: Props) {
    return (
        <ul>
        {results.map((result) => (
            <li key={result.id}>{result.label}</li>
        ))}    
        </ul>
    )

}