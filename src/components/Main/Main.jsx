import React from "react";

import MyBooks from "../../components/MyBooks/MyBooks";
import BestAuthor from "../../components/BestAuthor/BestAuthor";
import Popular from "../../components/PopularWeek/Popular";

const Main = () => {
  return (
    <>
      <div id="main">
        <div className="preference">
          <MyBooks />
        </div>
        <div className="bestAuthor">
          <BestAuthor />
        </div>
        <div className="popularWeek">
          <Popular />
        </div>
      </div>
    </>
  );
};

export default Main;
