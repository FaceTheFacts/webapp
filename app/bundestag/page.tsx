// "use client"
// function getPolitician(id) {
//   const res = fetch(`http://127.0.0.1:8000/v1/politician/${id}`).then(res => res.json())
// }

export default function BundestagPage() {
  return (
    <div>
      <h1>Bundestag</h1>
      <h2>This is the Bundestag page</h2>
      <p className="text-red-600">Some content</p>
    </div>
  );
}

