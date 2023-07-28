import { useState, useEffect } from "react";

import ApiIndexBook from "./ApiIPopular";
import ApiIndex from "./ApiAuthor";
import ApiInfor from "./ApiInfor";
import clsx from "clsx";

import { apiAuthor, apiBooks, apiMyBooks } from "./api";
import ApiMyBook from "./ApiMyBook";
import InfiniteScroll from "../layout/InfiniteList";

function CallApiBook() {
  let limit = 12;
  const [Books, setBooks] = useState([]);
  const [MyBooks, setMyBooks] = useState([]);
  const [Authors, setAuthors] = useState([]);
  const [inforBooks, setInforBooks] = useState([]);



const [page, setPage] = useState(1);
const [totalRows, setTotalRows] = useState(0);

useEffect(() => {
  (async () => {
    const response = await (
      await fetch(
        `http://js-post-api.herokuapp.com/api/posts?_page=${page}&_limit=10`
      )
    ).json();
    setBooks([...Books, ...response.data]);
    setTotalRows(response.pagination._totalRows);
  })();
}, [page]);







  // Functions
  const fetchMyBooks = async () => {
    const response = await apiMyBooks.get("MyBooks/?_limit=4");
    setMyBooks(response.data);
  };

  const fetchAuthors = async () => {
    const response = await apiAuthor.get("Authors/?_limit=8");
    setAuthors(response.data);
  };

  const fetchBooks = async () => {
    const response = await apiBooks.get(`Books/?_limit=${limit}`);
    setBooks(response.data);
  };

  // handleScroll = () => {
  //   if (
  //     window.innerHeight + document.documentElement.scrollTop !==
  //     document.documentElement.offsetHeight
  //   )
  //     return;
  //   setIsFetching(true);
  // }

  // const getMorePosts=()=> {
  //   setTimeout(() => {
  //     setBooks(page++)
  //     getBooks();
  //   }, 2000);
  // }

  useEffect(() => {
    fetchMyBooks();
    fetchAuthors();
    fetchBooks();
  }, []);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // useEffect(
  //   () => {
  //     getPosts();
  //   },
  //   []
  // );
  // useEffect(() => {
  //   if (!isFetching) return;
  //   getMorePosts();
  // }, [isFetching]);

  const getBooks = async (id) => {
    const response = await apiBooks.get(`Books/?_limit=1&id=${id}`);
    setInforBooks(Books.filter((Book) => Book.id === id));
  };

  const getMyBooks = async (id) => {
    const response = await apiMyBooks.get(`MyBooks/?_limit=1&id=${id}`);
    setInforBooks(Books.filter((Book) => Book.id === id));
  };

  const getBook = async (limit) => {
    const response = await apiBooks.get(`Books/?_limit=${limit}`);
    setBooks(response.data);
  };

  return (
    <div className={clsx("grid grid-cols-1")}>
      <div className={clsx(" z-20")}>
        <div
          className={clsx(
            " text-primary-156 flex text-left text-2xl pl-3 my-2 font-bold italic"
          )}
        >
          My Books
        </div>
        <ul
          className={clsx(
            "gap-x-7 gap-y-4 grid grid-cols-4 grid-rows-1 text-center mb-7 justify-center"
          )}
        >
          {MyBooks.map((MyBook) => (
            <ApiMyBook
              key={MyBook.id}
              id={MyBook.id}
              image={MyBook.image}
              name={MyBook.name}
              author={MyBook.author}
              getMyBooks={getMyBooks}
            />
          ))}
        </ul>
        <div
          className={clsx(
            " text-primary-156 flex text-left text-2xl pl-3 my-2 font-bold italic"
          )}
        >
          Popular Author
        </div>
        <ul
          className={clsx(
            "gap-x-7 gap-y-4 grid grid-cols-4 grid-rows-2 text-center mb-7 justify-center"
          )}
        >
          {Authors.map((Author) => (
            <ApiIndex key={Author.id} id={Author.id} author={Author.author} />
          ))}
        </ul>
        <div
          className={clsx(
            " text-primary-156 flex text-left text-2xl pl-3 my-2 font-bold italic"
          )}
        >
          Popular Books
        </div>
        <ul
          className={clsx(
            "PopularBook text-black flex gap-x-7 gap-y-4 flex-wrap text-center mb-8 justify-center"
          )}
          onScroll={() => getBook((limit += 1))}
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
              getBook={getBook}
            />
          ))}
        </ul>
      </div>
      <div>
        {inforBooks.map((Book) => (
          <ApiInfor
            key={Book.id}
            id={Book.id}
            name={Book.name}
            image={Book.image}
            author={Book.author}
            description={Book.description}
            price={Book.price}
            right={Book.right}
            left={Book.left}
          />
        ))}
      </div>
      <div>
        <InfiniteScroll
          loader={<p className={clsx("text-black")}>loading...</p>}
          className="w-[400px] mx-auto my-10"
          fetchMore={() => setPage((prev) => prev + 1)}
          hasMore={Books.length < totalRows}
          endMessage={<p className={clsx("text-black")}>You have seen it all</p>}
        >
          {/* {Books.map((post, index) => (
            <div
              className="rounded-xl shadow-md bg-black mb-8 flex items-center p-5"
              key={index}
            >
              <img src={post.image} className=" rounded-md w-12 h-20" />
              <div className="ml-5">
                <h3 className="font-medium">{post.name}</h3>
                <h3 className="font-medium">{post.author}</h3>
                <h1 className="font-bold text-xl">{post.title}</h1>
              </div>
            </div>
          ))} */}
        </InfiniteScroll>
      </div>
    </div>
  );
}

export default CallApiBook;
