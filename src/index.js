import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
// const Greeting = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "Hello again")
//   );
// };

// This is the component that we actually want to render.

const Booklist = () => {
  return (
    <section className="booklist">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      />

      <Book
        author={secondBook.author}
        title={secondBook.tile}
        img={secondBook.img}
      />

      <Book
        author={thirdBook.author}
        title={thirdBook.title}
        img={thirdBook.img}
      />
    </section>
  );
};

// This Book component is going to be rendered inside the Booklist component.

// store all the details of the books here.

//Details of the first book.
const firstBook = {
  author: "J.K. rowling",
  title: "Harry Potter and The Sorcerr's Stone",
  img: "https://m.media-amazon.com/images/I/51HSkTKlauL._SX346_BO1,204,203,200_.jpg",
};

//Details of the second book.

const secondBook = {
  author: "Eichiro Oda",
  title: "One Piece",
  img: "./images/three.jpg",
};

//Details of the third book.

const thirdBook = {
  author: "Gege Akutami",
  title: "Jujutsu Kaisen",
  img: "./images/two.jpg",
};

const Book = (props) => {
  return (
    <article className="book">
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<Greeting />);
root.render(<Booklist />);
