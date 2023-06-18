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
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

// This Book component is going to be rendered inside the Booklist component.
const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img src="./images/one.jpg" alt="This image is not available" />
);

const Title = () => {
  return <h1>Why a Daughter Needs a Dad.</h1>;
};

const Author = () => <h4>Gregory E. Lang</h4>;

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<Greeting />);
root.render(<Booklist />);
