import axios from "axios";

export const apiAuthor = axios.create({
  baseURL:
    "https://my-json-server.typicode.com/Akatsuki-Naruto/dbHedwigAuthors/",
});

export const apiMyBooks = axios.create({
  baseURL:
    "https://my-json-server.typicode.com/Akatsuki-Naruto/dbHedwigMyBooks",
});

export const apiBooks = axios.create({
  baseURL:
    "https://my-json-server.typicode.com/Akatsuki-Naruto/dbHedwig",
});
