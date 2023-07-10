import { useState, useEffect } from "react";
import axios from "axios";

import ApiIndexBook from "./ApiPopularjs";
import ApiIndex from "./ApiIndex";
import ApiInfor from "./ApiInfor";

function CallApiBook() {
  const [Books, setBooks] = useState([]);
  const [Authors, setAuthors] = useState([]);
  const [inforBooks, setInforBooks] = useState([]);

  // Functions
  const client = axios.create({
    baseURL: "https://my-json-server.typicode.com/Akatsuki-Naruto/dbHedwig/",
  });

  const fetchAuthors = async () => {
    const response = await client.get("Authors/?_limit=8");
    setAuthors(response.data);
  };

  const fetchBooks = async () => {
    const response = await client.get("Books/?_limit=12");
    setBooks(response.data);
  };

  useEffect(() => {
    fetchAuthors();
    fetchBooks();
  }, []);

  const getBooks = async (id) => {
    const reponse = await client.get(`Books/?_limit=1&id=${id}`);
    setInforBooks(Books.fund((Book) => Book.id === id));
  };

  return (
    <>
      <ul className="listAuthor">
        {Authors.map((Author) => (
          <ApiIndex key={Author.id} id={Author.id} author={Author.author} />
        ))}
      </ul>

      <ul className="PopularBook">
        {Books.map((Book) => (
          <ApiIndexBook
            key={Book.id}
            id={Book.id}
            name={Book.name}
            author={Book.author}
            price={Book.price}
            image={Book.image}
            getBooks={getBooks}
          />
        ))}
      </ul>

      <div className="inforBook">
        {inforBooks.map((Book) => (
          <ApiInfor
            key={Book.key}
            id={Book.id}
            name={Book.name}
            image={Book.image}
            author={Book.author}
            description={Book.description}
            price={Book.price}
          />
        ))}
      </div>
    </>
  );
}

export default CallApiBook;
