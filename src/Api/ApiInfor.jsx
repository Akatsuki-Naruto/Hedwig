import clsx from "clsx";
import { useState } from "react";

export default function ApiInfor(Book) {
  const showdiv = clsx(
    "fixed text-black w-[28%] h-full flex flex-col top-12 right-0 bottom-0 z-40 bg-primary-155 px-5 items-center "
  );
  // const hidediv = clsx("flex hidden");
  // const inforBook = clsx("");
  // const [isActive, setIsActive] = useState(true);

  // const handleClick = () => {
  //   setIsActive((current) => !current);
  // };

  return (
    <>
      {/* <button
        onClick={handleClick}
        className={clsx(
          "text-white w-7 h-7 justify-center p-0 flex items-center"
        )}
      >
        X
      </button> */}
      <div className={showdiv /*`${isActive ? showdiv : hidediv} `*/}>
        <div className="nameInforBook">{Book.name}</div>

        <div>
          <img className={clsx("flex w-40 h-70")} src={Book.image} alt="" />
        </div>
        <div className="authorInforBook">{Book.author}</div>
        <div className="descriptionBook">{Book.description}</div>
        <div className="priceInforBook">{Book.price}</div>
      </div>
    </>
  );
}
