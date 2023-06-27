import React from "react";
import ReactDom from "react-dom/client";
import "./css/index.css";

// I need to create a Booklist of the most famous books and mangas.
const books = [
  {
    title: "Harry Potter one",
    author: "J.K. Rowling",
    img: "./images/one.jpg",
    id: 1,
  },

  {
    title: "One Piece",
    author: "Eichiro Oda",
    img: "./images/one.jpg",
    id: 2,
  },
];

const BookList = () => {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id);
    console.log(book);
  };

  return (
    <div>
      <section className="bookList">
        {books.map((book) => {
          return <Book {...book} key={book.id} getBook={getBook} />;
        })}
      </section>

      <div className="but">
        <Click />
      </div>
    </div>
  );
};

//events

const Book = (props) => {
  const { img, title, author, getBook, id } = props;
  const getSingleBook = () => {
    getBook(id);
  };
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={getSingleBook}>Clickkkkkkk</button>
      <h4>{author}</h4>
    </article>
  );
};

const Click = () => {
  return <button type="submit">Click me</button>;
};

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<BookList />);
