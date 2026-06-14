import { Book } from "../types";

export default function BookList({ books, onSelectBook, onAddClick }: {
  books: Book[]; onSelectBook: (b: Book) => void; onAddClick: () => void;
}) {
  return (
    <div>
      <h2>Seznam knjig <button onClick={onAddClick}>Dodaj</button></h2>
      {books.map((b) => (
        <div key={b.id} onClick={() => onSelectBook(b)}>
          <h3>{b.title}</h3>
          <p>Avtor: {b.author}<br />{b.shortDescription}</p>
        </div>
      ))}
    </div>
  );
}