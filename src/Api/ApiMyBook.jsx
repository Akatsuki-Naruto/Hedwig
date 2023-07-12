import React from "react";
import { PlayIcon } from "../assets/svg/svg";

export default function ApiMyBook(Book) {
  return (
    <>
      <div>
        <img src={Book.picture} alt="" />
      </div>
      <div>{Book.name}</div>
      <div>{Book.author}</div>
      <button onClick={() => Book.getBooks(Book.id)}><PlayIcon/></button>
    </>
  );
}
