import Thumbnail from "./Thumbnail";

export default function Results({ results }) {
  return (
    <div>
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </div>
  );
}
