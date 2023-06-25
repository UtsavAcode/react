import React from "react";
import ReactDom from "react-dom/client";
import "./css/index.css";

// I need to create a Booklist of the most famous books and mangas.

const firstBook = {
  title: "Harry Potter one",
  author: "J.K. Rowling",
  img: "./images/one.jpg",
};

const secondBook = {
  title: "One Piece",
  author: "Eichiro Oda",
  img: "./images/one.jpg",
};

const BookList = () => {
  return (
    <div>
      <section className="booklist">
        <Book
          title={firstBook.title}
          author={firstBook.author}
          img={firstBook.img}
        />
        <Book
          title={secondBook.title}
          author={secondBook.author}
          img={secondBook.img}
        />
        <Book
          title={secondBook.title}
          author={secondBook.author}
          img={secondBook.img}
        />
      </section>

      <div className="but">
        <Click />
      </div>

      {/* subject section */}

      <div className="subjects">
        <Subject
          title={firstSubject.title1}
          author={firstSubject.author1}
          image={firstSubject.image1}
        />

        <Subject
          title={secondSubject.title1}
          author={secondSubject.author1}
          image={secondSubject.image1}
        />
        <Subject
          title={thirdSubject.title1}
          author={thirdSubject.author1}
          image={thirdSubject.image1}
        />
      </div>
    </div>
  );
};

const Book = (props) => {
  const { title, author, img } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const Click = () => {
  return <button type="button">Click me</button>;
};

// All the details of the ssubject.
const firstSubject = {
  title1: "React JS",
  author1: "Facebook",
  image1: "./images/react.png",
};

const secondSubject = {
  title1: "Java",
  author1: "Oracle",
  image1: "./images/java.png",
};

const thirdSubject = {
  title1: "Pyhton",
  author1: "Guido van Rossum",
  image1: "./images/pyton.png",
};

const Subject = (props) => {
  const { image1, title1, author1 } = props;
  return (
    <article className="sub">
      <img src={image1} alt={title1} />
      <h2>{title1}</h2>
      <h4>{author1}</h4>
    </article>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<BookList />);
