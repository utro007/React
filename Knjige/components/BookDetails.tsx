import { Book } from "../types";

export default function BookDetails({ book, onBack }: { book: Book; onBack: () => void }) {
  return (
    <div>
      <button onClick={onBack}>Nazaj</button>
      <h2>{book.title}</h2>
      <p>Avtor: {book.author} | Žanr: {book.genre}</p>
      <p>{book.shortDescription}<br />{book.description}</p>
    </div>
  );
}