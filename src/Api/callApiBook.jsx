import { useState, useEffect } from "react";

import ApiIndexBook from "./ApiIPopular";
import ApiIndex from "./ApiAuthor";
import ApiInfor from "./ApiInfor";
import clsx from "clsx";

import { client } from "./api";

function CallApiBook() {
  const [Books, setBooks] = useState([]);
  const [Authors, setAuthors] = useState([]);
  const [inforBooks, setInforBooks] = useState([]);

  // Functions

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
    const response = await client.get(`Books/?_limit=1&id=${id}`);
    setInforBooks(Books.filter((Book) => Book.id === id));
  };

  return (
    <div className={clsx("grid grid-cols-1")}>
      <div className={clsx(" z-30")}>
        <ul
          className={clsx(
            "gap-x-7 gap-y-4 grid grid-cols-4 grid-rows-2 text-center mb-7 justify-center"
          )}
        >
          {Authors.map((Author) => (
            <ApiIndex key={Author.id} id={Author.id} author={Author.author} />
          ))}
        </ul>

        <ul
          className={clsx(
            "PopularBook text-black flex gap-x-7 gap-y-4 flex-wrap text-center mb-8 justify-center"
          )}
        >
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
      </div>
      <div>
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
    </div>
  );
}

export default CallApiBook;
