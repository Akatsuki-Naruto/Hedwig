import { useState, useEffect } from "react";
import axios from "axios";

import ApiIndex from "./ApiIndex";

function CallAPI() {
  const [Authors, setAuthors] = useState([]);

  // Functions
  const client = axios.create({
    baseURL:
      "https://my-json-server.typicode.com/Akatsuki-Naruto/dbHedwig/Authors",
  });

  const fetchAuthors = async () => {
    const response = await client.get("?_limit=8");
    setAuthors(response.data);
  };

  useEffect(() => {
    fetchAuthors();
  }, []);

  return (
    <>

        {Authors.map((Author) => (
          <ApiIndex
            key={Author.id}
            id={Author.id}
            author={Author.author}
          />
        ))}

    </>
  );
}

export default CallAPI;