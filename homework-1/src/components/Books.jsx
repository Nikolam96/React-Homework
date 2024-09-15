//! koga pravime funkionalna komponenta nema potreba da go importirame react

import './../css/Books.css'

export const Books = () => {
  const books = [
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960
    },
    {
      title: "1984",
      author: "George Orwell",
      year: 1949
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      year: 1813
    },
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      year: 1937
    },
    {
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      year: 1997
    },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      year: 1951
    },
    {
      title: "The Lord of the Rings: The Fellowship of the Ring",
      author: "J.R.R. Tolkien",
      year: 1954
    },
    {
      title: "Brave New World",
      author: "Aldous Huxley",
      year: 1932
    },
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      year: 1988
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925
    }
  ];
  return (
    <div>
      <h3 className='b-title'>My Favorite books:</h3>
      <ol>
        {books.map(book => (
          <li key={book.title}>
            <b className='books-title'>{book.title}</b> by {book.author} ({book.year});
          </li>
        ))}
      </ol>
      <br />
      <hr />
    </div>
  );
};